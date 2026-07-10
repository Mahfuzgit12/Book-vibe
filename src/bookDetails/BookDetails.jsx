import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { BookContext } from "../context/BookContext";

const BookDetails = () => {
  const { bookParamsId } = useParams();
  const books = useLoaderData();
  const { handleMarkAsRead } = useContext(BookContext);

  const selectedBook = books.find(
    (book) => String(book.bookId) === String(bookParamsId)
  );

  if (!selectedBook) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="rounded-2xl border border-base-300 bg-base-100 px-8 py-6 text-center shadow-sm">
          <h2 className="text-2xl font-semibold">Book not found</h2>
          <p className="mt-2 text-base-content/70">
            The requested book could not be loaded.
          </p>
        </div>
      </div>
    );
  }

  const {
    bookId,
    bookName,
    image,
    author,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = selectedBook;

  return (
    <div className="min-h-screen bg-base-200 px-4 py-8 md:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-base-100 shadow-xl">
        <div className="grid gap-8 p-4 md:p-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <figure className="flex items-center justify-center rounded-2xl bg-base-200 p-4">
            <img
              src={image}
              alt={bookName}
              className="h-96 w-full max-w-65 rounded-2xl object-contain shadow-md"
            />
          </figure>

          <div className="flex flex-col gap-5">
            <div className="space-y-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="badge badge-primary">{category}</span>
                <span className="badge badge-outline">#{bookId}</span>
              </div>
              <h2 className="text-3xl font-semibold text-base-content">
                {bookName}
              </h2>
              <p className="text-lg text-base-content/70">by {author}</p>
              <div className="flex items-center gap-2 text-sm text-base-content/80">
                <span className="text-warning">★</span>
                <span>{Number(rating).toFixed(1)} / 5</span>
              </div>
            </div>

            <div className="rounded-2xl border border-base-300 bg-base-50 p-4">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-base-content/70">
                Overview
              </h3>
              <p className="mt-2 text-sm leading-7 text-base-content/80">
                {review}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <span
                  key={`${tag}-${index}`}
                  className="badge border-primary/30 bg-primary/5 text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="grid gap-4 rounded-2xl border border-base-300 bg-base-50 p-4 md:grid-cols-3">
              <div>
                <p className="text-xs uppercase tracking-wide text-base-content/60">
                  Pages
                </p>
                <p className="mt-1 font-semibold">{totalPages}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-base-content/60">
                  Publisher
                </p>
                <p className="mt-1 font-semibold">{publisher}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-base-content/60">
                  Published
                </p>
                <p className="mt-1 font-semibold">{yearOfPublishing}</p>
              </div>
            </div>

            <div className="mt-auto flex flex-wrap items-center justify-center-safe gap-4 border-t border-dashed border-base-300 pt-4">
              {/* <p className="text-sm text-base-content/70">
                A rich literary experience designed to inspire your next read.
              </p> */}
              <button className="btn hover-3d" onClick={()=> handleMarkAsRead(selectedBook)}> Mark as Read</button>
              <button className="btn btn-primary hover-3d">Add to Wishlist</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
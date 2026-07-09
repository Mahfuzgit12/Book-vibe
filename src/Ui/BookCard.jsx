
import { CiStar } from 'react-icons/ci';
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <Link to={`/bookDetails/${book.bookId}`} className="w-full">
      <div className="card h-full w-full max-w-96 overflow-hidden rounded-[1.5rem] border border-base-300/70 bg-white shadow-[0_12px_30px_-18px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_-16px_rgba(15,23,42,0.35)]">
        <figure className="relative h-72 overflow-hidden bg-base-200">
          <img
            src={book.image}
            alt={book.bookName}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent" />
        </figure>
        <div className="card-body gap-3 p-5">
          <h2 className="card-title min-h-14 text-lg font-semibold text-slate-800">
            {book.bookName}
          </h2>

          <div className="flex flex-wrap gap-2">
            {book.tags.map((tag, index) => (
              <div key={index} className="badge border-primary/30 bg-primary/5 text-primary">
                {tag}
              </div>
            ))}
          </div>

          <p className="text-sm font-medium text-slate-500">{book.author}</p>

          <div className="card-actions mt-1 flex items-center justify-between border-t border-dashed border-base-300 pt-3 text-sm font-semibold">
            <div className="badge badge-outline">{book.category}</div>
            <div className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-amber-600">
              {book.rating}
              <span className="text-base font-bold">
                <CiStar />
              </span>
            </div>
          </div>
        </div>
      </div>
    </ Link>
  );
};

export default BookCard;
import { use } from "react";
import BookCard from './../../Ui/BookCard';


const booksPromise = fetch('/public/data/booksData.json').then(res => res.json())
const AllBooks = () => {
   const books = use(booksPromise);
   console.log(books, "Books");
  return (
    <div className=" grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-12 conatiner mx-auto p-6 space-y-3">
  
     {
      books.map((book,index) => {
        return <BookCard  key={index} book={book} />
      })
     }
    </div>
  );
};

export default AllBooks;
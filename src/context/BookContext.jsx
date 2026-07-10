import { createContext, useState } from "react";

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  const [storedBooks, setStoredBooks] = useState([]);

  const handleMarkAsRead = (currentBook) => {
    const isExistBook = storedBooks.some((book) => book.bookId === currentBook.bookId);
    if (isExistBook) {
      alert("The book is already in the list");
      return;
    }

    setStoredBooks((prevBooks) => [...prevBooks, currentBook]);
    alert(`${currentBook.bookName} has been added to the list`);
  };

  const data = {
    storedBooks,
    setStoredBooks,
    handleMarkAsRead,
  };

  return (
    <BookContext.Provider value={data}>
      {children}
    </BookContext.Provider>
  );
};

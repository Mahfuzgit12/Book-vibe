import { useContext } from "react";
import { BookContext } from "../../context/BookContext";

const Books = () => {
  const { storedBooks } = useContext(BookContext);
  console.log(storedBooks, "storedBooks");
  return (
    <div>
      Listed Books
    </div>
  );
};

export default Books;

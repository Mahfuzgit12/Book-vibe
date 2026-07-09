 
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../Pages/homepage/Homepage';
import Books from '../Pages/books/Books';
import MainLayOut from './../layout/MainLayOut';
import ErrorPage from '../Pages/errorPage/ErrorPage';
import BookDetails from '../bookDetails/BookDetails';

 export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut />,
    children: [
      {
        index:true,
        element: <Homepage/>
      },
      {
        path:"/books",
        element: <Books/>
      },
      {
        path: "/bookDetails/:bookParamsId",
        Component: BookDetails,
        loader: async () => {
          const response = await fetch("/data/booksData.json");

          if (!response.ok) {
            throw new Error("Failed to load book data");
          }

          return response.json();
        },
      }
    ],
    errorElement: <ErrorPage/>

  },

]);
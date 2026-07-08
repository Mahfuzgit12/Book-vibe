 
import { createBrowserRouter } from 'react-router-dom';
import Homepage from '../Pages/homepage/Homepage';
import Books from '../Pages/books/Books';
import MainLayOut from './../layout/MainLayOut';
import ErrorPage from '../Pages/errorPage/ErrorPage';

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
    ],
    errorElement: <ErrorPage/>

  },

]);
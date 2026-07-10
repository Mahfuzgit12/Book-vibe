import './App.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes/Routes'
import { BookProvider } from './context/BookContext'

function App() {
  return  <BookProvider>
    <RouterProvider router={router} />
  </BookProvider>
}

export default App

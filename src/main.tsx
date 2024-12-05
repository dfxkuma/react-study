import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App.tsx'
import ViewNote from "./viewNote.tsx";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/hobin',
    element: <>
      <h1>hobin is sexking</h1>
    </>
  },
  {
    path: '/note/:noteId/view',
    element: <ViewNote />
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)

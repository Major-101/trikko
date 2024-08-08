import React from 'react'
import { BrowserRouter, createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

import Home from './pages/Home'
import Account from './pages/Account'
import Cart from './pages/Cart'
import ErrorPage from './pages/ErrorPage'
import Products from './pages/Products'
import SingleProduct from './pages/SingleProduct'

import Header from './components/Header'
import Footer from './components/Footer'
import { Toaster } from 'react-hot-toast'

export default function App() {

  const PageLayout = () => {
    return (
      <>
      <Header />
      <Outlet />
      <Footer />
      </>
    )
  }

  const pageRoutes = createBrowserRouter([
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          path: '/',
          element: <Home />
        },
        {
          path: "/prodcuts",
          element: <Products />
        },
        {
          path: "/cart",
          element: <Cart />
        },
        {
          path: "/product/:id", // This is how to manage dynamic routes (:id)
          element: <SingleProduct />
        },
        {
          path: "/account",
          element: <Account />
        },

      ],
      errorElement: <ErrorPage />
    }
  ])

  return (
    <main className="bg-backdrop">
      <Toaster/>
      <RouterProvider router={pageRoutes}></RouterProvider>
    </main>
  )
}

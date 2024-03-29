import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import JobsDetails from './components/JobsDetails.jsx'
import ApplyPage from './components/ApplyPage.jsx';
import {JobsProvider} from "./context/JobsContext.jsx";

const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
    },
    {
      path: "/jobs/:id",
      element: <JobsDetails />,
    },
    {
      path: "/applypage/:id",
      element: <ApplyPage />,
    },
  ]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <JobsProvider>
    <RouterProvider router={router} />
    </JobsProvider>
)

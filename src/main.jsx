
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import Routes from './Router/Routes';
import AuthProvider from './AuthProvider/AuthProvider';
import { Toaster } from 'react-hot-toast';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import React from 'react';





const queryClient = new QueryClient()




ReactDOM.createRoot(document.getElementById('root')).render(
<React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <RouterProvider router={Routes} />
          <Toaster />
        </AuthProvider>
      </QueryClientProvider>
      </React.StrictMode>

)

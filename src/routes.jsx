import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { MainMenu } from './components/MainMenu.jsx'
import { Staff } from './components/Menu/Staff/Staff.jsx'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  },
  {
    path: '/menu',
    element: <MainMenu />,
    children: [
      {
        path: 'staff',
        element: <Staff />
      }
    ]
  }
])

import App from './App.jsx'
import { createBrowserRouter } from 'react-router-dom'
import { MainMenu } from './components/MainMenu.jsx'
import { Staff } from './components/Menu/Staff/Staff.jsx'
import { NewStaff } from './components/Menu/Staff/NewStaff.jsx'

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
      },
    ]
  },
  {
    path: "new-staff",
    element: <NewStaff />
  }
])

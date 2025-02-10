
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Layout from "../src/latout/Layout"
import Men from '../src/pages/Men'
import Women from "./pages/Women"
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Tasting from "./component/Testing/Tasting"
function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element :<Layout/>,
      children:[
        {
          path:"",
          element:<Home/>
        },
        {
          path:"men",
          element:<Men/>
        },
        {
          path:"women",
          element:<Women/>
        },
        {
          path:"contact",
          element:<Contact/>
        },
        {
          path:"about",
          element:<About/>
        },
        {
          path:"testing",
          element:<Tasting/>
        }

      ]
    }
  ])

  return (
   <RouterProvider router={router} />
  )
}

export default App

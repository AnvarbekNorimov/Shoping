import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import { useState } from "react"
function App() {
  const [count , setcount ]= useState(" ")
  const plus =(event) => {
    setcount (prev =>prev+event.currentTarget.textContent )
  }
  const Routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home count={count} plus={plus}/>}/>
      </Route>
    )
  )



  return (
    <>
    <Header/>
    <div>
      <RouterProvider router={Routes}/>
    </div>
    </>
  )
}

export default App

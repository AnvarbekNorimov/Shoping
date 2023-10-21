import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import { useState } from "react"
import SIngleCard from "./components/SIngleCard"
import Footer from "./components/Footer"
function App() {
  const [count , setCount ]= useState([])
const plus = (event) => {
  const newValue = [...count, event.currentTarget.textContent];
  setCount(newValue);
};

  const Routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
      <Route  path="/" element={<Home count={count} plus={plus}/>}/>
        <Route path="/SingleCard" element={<SIngleCard/>}>
      </Route>
      </Route>
    )
  )



  return (
    <>
    <Header/>
    <div>
      <RouterProvider router={Routes}/>
    </div>
    <Footer/>
    </>
  )
}

export default App

import{
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route
} from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
function App() {
  const Routes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Home/>}/>
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

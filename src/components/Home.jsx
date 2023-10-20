import About from "./About"
import Footer from "./Footer"
import Article from "./article"

const Home = () => {
  return (
    <div>
      <div className="Home">
     <div className="container Home-comp ">
       <Article/>
      <About/>
     </div>
    </div>
    <div className="container">
      <Footer/>
    </div>
    </div>
  )
}

export default Home
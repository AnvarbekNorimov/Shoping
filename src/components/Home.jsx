/* eslint-disable react/prop-types */
import About from "./About"
import Footer from "./Footer"
import Article from "./article"

const Home = ({plus,count,handleClick}) => {
  return (
    <div>
      <div className="Home">
     <div className="container Home-comp ">
       <Article handleClick={handleClick} plus={plus}/>
      <About count={count}/>
     </div>
    </div>
    <div className="container">
      <Footer/>
    </div>
    </div>
  )
}

export default Home
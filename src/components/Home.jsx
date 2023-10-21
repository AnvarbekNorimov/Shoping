/* eslint-disable react/prop-types */
import About from "./About"
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
    </div>
    </div>
  )
}

export default Home
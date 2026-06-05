import Header from "./header"
import SideBar from "./sidebar"
const Home = () => {
  return (
    <div className="home-page">
      <Header></Header>
      <div className="main-content">
        <SideBar></SideBar>

      </div>
    </div>  
  )
}

export default Home

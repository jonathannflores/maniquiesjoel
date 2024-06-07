import CategoryCardContainer from "../components/CategoryCardContainer"
import ImageSlider from "../components/ImageSlider"
import Navbar from "../components/Navbar"

function Home(){
    return <>
    <Navbar/>
    <ImageSlider />
        <CategoryCardContainer />
    </>
}

export default Home
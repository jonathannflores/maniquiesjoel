import CategoryCardContainer from "../components/CategoryCardContainer"
import Footer from "../components/Footer"
import ImageSlider from "../components/ImageSlider"
import Navbar from "../components/Navbar"

function Home(){
    return <>
    <Navbar/>
    <ImageSlider />
        <CategoryCardContainer />
    <Footer />
    </>
}

export default Home
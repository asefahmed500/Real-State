import { useLoaderData } from "react-router-dom";
import Estates from "../Pages/Estates/Estates";
import Footer from "../Pages/Footer/Footer";
import Slider from "../Pages/Slider/Slider";
import Header from "../Shared/Header";
import NavBar from "../Shared/NavBar";


const Home = () => {

    const estates = useLoaderData()
    console.log(estates)

    return (

        <div >
            <Header></Header>
            <NavBar></NavBar>

            <div className="space-y-6">
                <Slider></Slider>
                <div className="flex gap-3">
                    {
                        estates.map(estate => <Estates

                            key={estate.id}
                            estates={estate}

                        >

                        </Estates>)

                    }
                </div>
                <Footer></Footer>

            </div>

        </div>
    );
};

export default Home;
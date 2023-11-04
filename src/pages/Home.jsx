import Footer from "../shared/Footer/Footer";
import Banner from "./Banner";
import Faq from "./FAQ";
import Feature from "./Features";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Feature></Feature>
           <Faq></Faq>
           <Footer></Footer>
        </div>
    );
};

export default Home;
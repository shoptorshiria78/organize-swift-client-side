import Banner from "../../Component/Banner";
import Footer from "../../Component/Footer";
import NavBar from "../../Component/Navbar";
import Users from "../../Component/Users";


const HomePage = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <Users></Users>
            <Footer></Footer>
        </div>
    );
};

export default HomePage;
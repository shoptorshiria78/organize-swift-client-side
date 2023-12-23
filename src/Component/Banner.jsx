import { Link } from "react-router-dom";


const Banner = () => {
    return (
        <div className="hero min-h-screen max-w-[1300px] mx-auto" style={{ backgroundImage: 'url(https://i.ibb.co/PcQBCtj/taskmanagementbanner.jpg)' }}>
           <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md mt-20">
                    <h1 className="mb-5 text-5xl text-cyan-400 font-bold">Streamline Your Success</h1>
                    <p className="mb-5 text-lg text-cyan-200">Organize swift is your all-in-one solution for efficient task management.  Boost productivity, meet deadlines, and achieve your goals effortlessly. Experience the power of streamlined task management with Organize swift.</p>
                    <Link to='/login'><button className="btn btn-primary bg-cyan-600 text-white">Get Started</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;
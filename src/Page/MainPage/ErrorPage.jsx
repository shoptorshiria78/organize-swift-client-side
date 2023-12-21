import Lottie from 'lottie-react';
import Animation404 from '../../assets/Animation-404-not-Found.json'

const ErrorPage = () => {
    return (
        <div>
            <Lottie className='w-[1200px] mx-auto h-screen' animationData={Animation404}></Lottie>
        </div>
    );
};

export default ErrorPage;
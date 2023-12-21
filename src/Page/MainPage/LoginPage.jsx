import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import {  BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { AuthContext } from "../../AuthProvider/AuthProvider";


const LoginPage = () => {

    const { signIn,  googleLogIn } = useContext(AuthContext);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();


    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        signIn(email, password)
            .then((result) => {
                console.log(result.user)
                swal("Congratulation", "User logged in", "success")
                e.target.reset()
                navigate(location?.state ? location.state :'/');
            })
            .catch(error => {
                console.error(error)
                swal(`${ error}`)
                e.target.reset()
            })

    }
    const handleGoogleLogIn = () => {

        googleLogIn()
            .then()
            .catch()
            navigate(location?.state ? location.state :'/');         
    }

   
    

    return (
        <div className= "bg-fuchsia-100 py-5">
            
          
            <div className="hero min-h-screen mt-10 mb-10 ">
                <div >
                    <div className=" w-[400px] bg-gradient-to-r from-fuchsia-200 to-violet-100">
                        <form onSubmit={handleLogin} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered bg-violet-100 " required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <div className="relative">
                                    <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full bg-violet-100 " required />
                                    <span className="absolute top-4 left-[310px] " onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ?<FaEye></FaEye> : <FaEyeSlash></FaEyeSlash> 
                                                
                                        } </span>
                                </div>
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="w-full px-4 py-3 rounded-xl text-white bg-fuchsia-500">Log In</button>
                            </div>
                        </form>

                        <p className=" text-center py-8 mb-8">Do not have any Account ? <Link className="text-fuchsia-600 underline" to='/registration'>Register</Link></p>
                    </div>

                    <div className="mx-auto my-10 flex flex-col  w-[400px]">
                        <button onClick={handleGoogleLogIn} className=" flex bg-fuchsia-500 text-white items-center w-full p-2 mt-3 rounded-full border-fuchsia-600 border-2 "><BsGoogle></BsGoogle> <span className="ml-24">Continue with google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
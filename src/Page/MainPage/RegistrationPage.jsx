import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { updateProfile } from "firebase/auth";
import { BsGoogle } from "react-icons/bs";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../AxiosInterfaces/useAxiosPublic";


const RegistrationPage = () => {
    const { register, googleLogIn, logOut } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [showPassword, setShowPassword] = useState(false);

    const handleRegister = e => {
        console.log('clicked')
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;
        const name = e.target.name.value;
        const image = e.target.image.value;
        if (!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)) {
            return swal('Error,Please Input a valid email, error')
        }

        if (!(/^(?=.*[A-Z])(?=.*[\W_]).{6,}$/).test(password)) {
            return swal('Error', 'Your password should have at least 1 upper case letter, 1 special character and 6 character long', 'error')
        }


        register(email, password)
            .then((result) => {
                console.log(result.user)
                swal("Congratulation", "User has been created Successfully", "success")
                e.target.reset()
                updateProfile(result.user, {
                    displayName: name,
                    photoURL: image
                })
                    .then( () => {
                        console.log('User profile Updated')
                        Swal.fire({
                          position: "top-end",
                          icon: "success",
                          title: "User updated successfully",
                          showConfirmButton: false,
                          timer: 1500
                        });
                        logOut()
                        .then()
                        .catch()
                        navigate('/login')
                      })
                    .catch()

        
                const userInfo = {
                    email: email,
                    password: password,
                    role: "user"
                };

                axiosPublic.post('/user', userInfo)
                    .then(res => {
                        console.log(res.data);
                        if (res.data.insertedId) {
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'Your information has been saved',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                        e.target.reset();
                    })
            })
            .catch(error => {
                console.error(error)
                swal("Error", `${error.Firebase}`, "error")
            })

    }

    const handleGoogleLogIn = () => {

        googleLogIn()
            .then(result=>{
                console.log(result.user)
                const userInfo  = {
                    email:result?.user?.email,
                    name:result?.user?.displayName,
                }
                axiosPublic.post('/user', userInfo)
                .then(res=>{
                    console.log(res.data);
                    navigate('/')
                })
            })
            .catch()

        navigate('/')
    }

    

    return (
        <div className=" bg-fuchsia-100 py-5" >

           
            <div className="hero min-h-screen mt-10 mb-10 ">
                <div >
                    <div className=" w-[400px] bg-gradient-to-r from-fuchsia-200 to-violet-100">
                        <form onSubmit={handleRegister} className="card-body ">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' required placeholder="Name" className="input input-bordered bg-violet-100 " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Image</span>
                                </label>
                                <input required name='image' type="text" placeholder="Image URL" className="input input-bordered bg-violet-100 " />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered bg-violet-100 " required />
                            </div>
                            <div className="relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered w-full bg-violet-100 " required />
                                <span className="absolute top-[54px] left-[310px] " onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>

                                    } </span>
                            </div>
                            <div className="form-control mt-6">
                                <button className="w-full px-4 py-3 rounded-xl text-white bg-fuchsia-500">Register</button>
                            </div>
                        </form>

                        <p className=" text-center py-8 mb-8">Already Have an Account ? <Link className="text-fuchsia-600 underline" to='/login'>Login</Link></p>
                    </div>
                    <div className="mx-auto my-10 flex flex-col  w-[400px]">
                        <button onClick={handleGoogleLogIn} className=" flex bg-fuchsia-500 text-white items-center w-full p-2 mt-3 rounded-full border-fuchsia-600 border-2 "><BsGoogle></BsGoogle> <span className="ml-24">Continue with google</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RegistrationPage;
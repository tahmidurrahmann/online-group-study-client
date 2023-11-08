import { Link, useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import toast from "react-hot-toast";
import { useState } from "react";
import { FcGoogle } from 'react-icons/fc';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {

    const { signIn, googleSignIn } = useAuth();
    const [loginError, setLoginError] = useState(null);
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    
    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        setLoginError('');
        signIn(email, password)
            .then(() => {
                toast.success('Log in Successful');
                navigate('/')
            })
            .catch(error => {
                const message = error.message;
                setLoginError(message);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(() => {
                toast.success('Google signIn Successful')
                navigate('/')
            })
            .catch(error => {
                const message = error.message;
                toast.error(message)
            })
    }

    return (
        <div className="min-h-screen background relative">
            <div className="shadow-2xl rounded-xl lg:w-1/3 w-full mx-auto backdrop-blur-md backdrop-sepia-0 absolute lg:top-1/4 top-10 md:left-1/5 lg:left-1/3">
                <form onSubmit={handleLogin} className="flex flex-col justify-center rounded p-8 md:p-16">
                    <h1 className="font-bold text-white text-2xl my-8">Login your account</h1>
                    <input className="w-full p-4 mb-4 border rounded-md bg-gradient-to-r from-white to-gray-400" type="email" name="email" placeholder="Your Email" required id="3" /> <br />
                    <div className="relative">
                        <input className="w-full border p-4 mb-4 rounded-md bg-gradient-to-r from-white to-gray-400"
                            type={showPassword ? "text" : "password"}
                            name="password" placeholder="Your Password" required id="2" /> <span className="absolute top-5 right-3" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}</span>
                    </div> <br />
                    <div>
                        {loginError && <p className="text-red-500 my-4">{loginError}</p>}
                    </div>
                    <input className="w-full text-white font-medium py-3.5 rounded bg-gradient-to-r from-[#DD2955] to-orange-800" type="submit" value="Login" />
                    <p className="text-center text-white mt-10">Do not have any account? <Link to='/register' className="text-[#DD2955] font-bold">Register</Link></p>
                </form>
                <button onClick={handleGoogleSignIn} className="btn btn-outline btn-error flex justify-center items-center gap-16 mb-4 border rounded-full mx-auto py-4">
                    <FcGoogle></FcGoogle>
                    <p>Continue with Google</p>
                </button>
            </div>
        </div>
    );
};

export default Login;
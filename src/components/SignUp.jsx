import React from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../firebaseConfig';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Register() {
    const navigate = useNavigate();
    let registerAuth = (event) => {
        const auth = getAuth(app);
        createUserWithEmailAndPassword(auth, event.target.email.value, event.target.password.value)
            .then((userCredential) => {
                // Signed up 
                // const user = userCredential.user;
                navigate("/");
                toast.success("Register Successfully")
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                // const errorMessage = error.message;
                // ..
                toast.success(error)

            });
        event.preventDefault();
    }
    return (
        <div>
            <Header />
            <div className="bg-gray-200 font-sans text-gray-700">
                <div className="container mx-auto p-8 flex">
                    <div className="max-w-md w-full mx-auto">
                        <h1 className="text-4xl text-center mb-12 font-thin">Register</h1>

                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                            <div className="p-8">
                                <form onSubmit={registerAuth}>
                                    <div className="mb-5">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>

                                        <input type="text" name="email" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                                    </div>

                                    <div className="mb-5">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>

                                        <input type="text" name="password" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                                    </div>

                                    <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Register</button>
                                </form>
                            </div>

                            <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                                <Link to={'/'} className="font-medium text-indigo-500">Login</Link>

                                <div className="text-gray-600">Forgot password?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  </div>
    )
}

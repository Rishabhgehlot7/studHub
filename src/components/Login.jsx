import React, { useContext } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebaseConfig';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { LoginDetails } from '../context/LoginContext';
import { FacebookAuthProvider } from "firebase/auth";

export default function Login() {
    const providerFaceBook = new FacebookAuthProvider();
    let { setToken } = useContext(LoginDetails)
    const provider = new GoogleAuthProvider();
    const navigate = useNavigate();
    let loginAuth = (event) => {
        const auth = getAuth(app);
        signInWithEmailAndPassword(auth, event.target.email.value, event.target.password.value)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                toast.success("success full Logined")
                navigate("/");
                // ...
            })
            .catch((error) => {
                // const errorCode = error.code;
                const errorMessage = error.message;
                toast.error(errorMessage)
            });
        event.preventDefault();
    }

    let loginAuthWithGoogle = (event) => {
        const auth = getAuth(app);
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                toast.success("Login successfully")
                navigate("/");
                setToken(token);
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                toast.error(errorMessage)
                // ...
            });

        event.preventDefault();
    }
    let loginAuthWithFaceBook = (event) => {
        const auth = getAuth(app);
        signInWithPopup(auth, providerFaceBook)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                toast.success("Login successfully")
                navigate("/");
                setToken(accessToken);

                // IdP data available using getAdditionalUserInfo(result)
                // ...
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);

                // ...
            });

        event.preventDefault();
    }

    return (
        <div>
            <Header />
            <div className="bg-gray-200 font-sans text-gray-700">
                <div className="container mx-auto p-8 flex">
                    <div className="max-w-md w-full mx-auto">
                        <h1 className="text-4xl text-center mb-12 font-thin">Login</h1>

                        <div className="bg-white rounded-lg overflow-hidden shadow-2xl">
                            <div className="p-8">
                                <form onSubmit={loginAuth}>
                                    <div className="mb-5">
                                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-600">Email</label>

                                        <input type="text" name="email" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                                    </div>

                                    <div className="mb-5">
                                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-600">Password</label>

                                        <input type="text" name="password" className="block w-full p-3 rounded bg-gray-200 border border-transparent focus:outline-none" />
                                    </div>

                                    <button className="w-full p-3 mt-4 bg-indigo-600 text-white rounded shadow">Login</button>
                                </form>
                                <div className=' w-full flex justify-center p-5'>
                                    <button onClick={loginAuthWithGoogle} className=' p-7 m-2 bg-red-700 w-4 h-5 rounded-full flex justify-center items-center text-3xl text-white'>G</button>
                                    <button onClick={loginAuthWithFaceBook} className=' p-7 m-2 bg-blue-700 w-4 h-5 rounded-full flex justify-center items-center text-3xl text-white'>f</button>
                                </div>
                            </div>

                            <div className="flex justify-between p-8 text-sm border-t border-gray-300 bg-gray-100">
                                <Link to={'/Register'} className="font-medium text-indigo-500">Create account</Link>

                                <div className="text-gray-600">Forgot password?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    )
}

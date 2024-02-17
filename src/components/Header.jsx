'use client';

import { Button, Navbar } from 'flowbite-react';

import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom';
import { getAuth, signOut } from "firebase/auth";
import { app } from '../firebaseConfig';
import { useNavigate } from "react-router-dom";
import { LoginDetails } from '../context/LoginContext';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function Header() {

    let { token, setToken } = useContext(LoginDetails);
    const navigate = useNavigate();
    let addQuizData = (event) => {
        const auth = getAuth(app);
        signOut(auth).then(() => {
            // Sign-out successful.
            toast.success("success")
            navigate("/");
        }).catch((error) => {
            // An error happened.
            toast.error(error)
        });
        setToken('');

        event.preventDefault();
    }

    return (
        <Navbar fluid rounded className=' bg-black'>
            <Navbar.Collapse href="https://flowbite-react.com">
                {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
                <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white text-white">StudBud</span>
            </Navbar.Collapse>
            <div className="flex md:order-2">

                {(token === undefined || token === "") ?
                    <>
                        <Link to={'/Register'} className=' text-white px-2'>SignUp</Link>
                        <Link to={'/Login'} className=' text-white px-2'>Login</Link>
                    </>
                    :
                    <Link onClick={addQuizData} className=' text-white px-2'>Logout</Link>

                }
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Link href="#" to={'/'} className=' text-white'>
                    Home
                </Link>
                <Link href="#" to={'/Coureses'} className=' text-white'>Courses</Link>
                <Link href="#" to={'/'} className=' text-white'>Test</Link>
                <Link href="#" to={'/'} className=' text-white'>Collab</Link>
                <Link href="#" to={'/'} className=' text-white'>Notes</Link>
                <Link href="#" to={'/'} className=' text-white'>Friends</Link>
            </Navbar.Collapse>
        </Navbar>
    );
}




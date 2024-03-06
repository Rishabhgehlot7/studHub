'use client';

import { Button, Navbar } from 'flowbite-react';

import React, { useContext, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom';
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
                <NavLink to={'/'} className={(isActive) => `${isActive ? 'text-white' : 'text-white'}`}>Home</NavLink>
                <NavLink to={'/Coureses'} className={(isActive) => `${isActive ? 'text-white' : 'text-white'}`}>Courses</NavLink>
                <NavLink to={'/Test'} className={(isActive) => `${isActive ? 'text-white' : 'text-white'}`}>Test</NavLink>
                <NavLink to={'/Collab'} className={(isActive) => `${isActive ? 'text-white' : 'text-white'}`}>Collab</NavLink>
                <NavLink to={'/Notes'} className={(isActive) => `${isActive ? 'text-white' : 'text-white'}`}>Notes</NavLink>
                <NavLink to={'/users'} className={(isActive) => `${isActive ? 'text-white' : 'text-white'}`}>Friends</NavLink>
            </Navbar.Collapse>
        </Navbar>
    );
}




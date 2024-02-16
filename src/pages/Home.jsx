import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FooterComponent from '../components/Footer'
import CarouselComponent from '../components/Carousel'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { LoginDetails } from '../context/LoginContext';
import AI from '../components/AI'

export default function Home() {
    let navigate = useNavigate();
    let { token } = useContext(LoginDetails)

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [token])

    return (
        <div>
            <Header />
            <CarouselComponent />
            <FooterComponent />
            <AI />
        </div>
    )
}

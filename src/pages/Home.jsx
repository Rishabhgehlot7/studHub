import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FooterComponent from '../components/Footer'
import CarouselComponent from '../components/Carousel'
import { useNavigate } from 'react-router-dom'
import { useContext, useEffect } from 'react'
import { LoginDetails } from '../context/LoginContext';
import AI from '../components/AI'
import Image1 from '../images/001.jpg'
import Image2 from '../images/002.jpg'
import Image3 from '../images/003.jpg'
import Image4 from '../images/004.jpg'
import Image5 from '../images/005.jpg'

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
            {/* <CarouselComponent /> */}
            <div className=' w-screen m-auto flex justify-center flex-col'>
                <img src={Image1} alt="" className=' w-fullt'/>
                <img src={Image2} alt="" className=' w-fullt'/>
                <img src={Image3} alt="" className=' w-fullt'/>
                <img src={Image4} alt="" className=' w-fullt'/>
                <img src={Image5} alt="" className=' w-fullt'/>
            </div>
            <FooterComponent />
            <AI />
        </div>
    )
}

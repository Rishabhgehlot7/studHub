import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import {Test} from '../api/Test.Api'
import TestCard from '../components/TestCard'

export default function TestPage() {
    return (
        <div>
            <Header />
            <main className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5 p-4'>

                {
                    Test.map((v)=><TestCard title={v.title} img_add={v.img_add}/>)
                }
            </main>
            <Footer />
        </div>
    )
}



import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Card from '../components/Card'
import {links} from '../api/Api.courses'

export default function Coureses() {
    return (
        <div>
            <Header />
            <main className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 m-5 p-4'>

                {
                    links.map((v)=><Card link={v.link} title={v.title}/>)
                }
            </main>
            <Footer />
        </div>
    )
}


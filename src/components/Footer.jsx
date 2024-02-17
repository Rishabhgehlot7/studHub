import React from 'react'

import { Footer } from 'flowbite-react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from 'react-icons/bs';


export default function FooterComponent() {
    return (
        <Footer container className='bg-black'>
            <div className="w-full ">
                <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
                    <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
                        <div>
                            <Footer.Title title="about" className=' text-white' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className=' text-white'>Studhub</Footer.Link>
                                <Footer.Link href="#" className=' text-white'>Tailwind CSS</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Follow us" className=' text-white' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className=' text-white'>Github</Footer.Link>
                                <Footer.Link href="#" className=' text-white'>Discord</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                        <div>
                            <Footer.Title title="Legal" className=' text-white' />
                            <Footer.LinkGroup col>
                                <Footer.Link href="#" className=' text-white'>Privacy Policy</Footer.Link>
                                <Footer.Link href="#" className=' text-white'>Terms &amp; Conditions</Footer.Link>
                            </Footer.LinkGroup>
                        </div>
                    </div>
                </div>
                <Footer.Divider />
                <div className="w-full sm:flex sm:items-center sm:justify-between">
                    <Footer.Copyright href="#" by="Flowbite™" year={2022} className=' text-white' />
                    <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
                        <Footer.Icon href="#" className=' text-white' icon={BsFacebook} />
                        <Footer.Icon href="#" className=' text-white' icon={BsInstagram} />
                        <Footer.Icon href="#" className=' text-white' icon={BsTwitter} />
                        <Footer.Icon href="#" className=' text-white' icon={BsGithub} />
                        <Footer.Icon href="#" className=' text-white' icon={BsDribbble} />
                    </div>
                </div>
            </div>
        </Footer>
    )
}

import React from 'react'
import Link from 'next/link'
import Image from 'next/image' 
import { useRouter } from 'next/router'

// icon
import { GrLinkedin } from 'react-icons/gr'
import { FaFacebook  } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { AiOutlineWhatsApp } from 'react-icons/ai'

import logo from '../../images/icon.png'

import { main_link } from '../../route'


const styles = {
    logo: 'cursor-pointer object-contain',
    text: 'hover:opacity-50 hover:border-b',
    logoContainer: 'flex items-center flex-start',
    wrapper: 'flex justify-center gap-10 p-5 bg-[#0e2b19]',
    content: 'max-w-7xl flex flex-1 justify-between gap-10',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
    bannerNav: 'flex cursor-pointer items-center space-x-5 text-[#F2F3F2] font-mediumSerif',
    postHeaderContainer: `flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer: `flex gap-[1rem]`,
    authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
    authorProfileImage: `object-cover`,
    column: `flex flex-col flex-1 justify-center`,
    postDetails: `flex gap-[.2rem] text-[#787878] font-mediumSerif`,
    listenButton: `flex items-center gap-[.2rem] text-[#1A8917]`,
    socials: `flex gap-[1rem] text-[#787878] text-lg cursor-pointer`,
    space: `w-[.5rem]`,
    articleMainContainer: `flex flex-col gap-[1rem]`,
    bannerContainer: `h-[28rem] w-full grid center overflow-hidden mb-[2rem]`,
    bannerImage: `object-cover h-auto w-full flex flex-1 `,  
    title: `font-bold text-3xl font-mediumSerif`,
    subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929] font-mediumSerif`,
    article: `font-mediumSerif text-[#292929] text-[1.4rem]`,
}

export default function Footer() {
    const router = useRouter()
    
    return (
        <footer className="p-4 bg-[#0e2b19] border-y sm:p-6 sm:pb-4 mt-10 md:mt-0">
            <div className="md:flex md:justify-between">
                <div className={styles.logoContainer}>
                    <Link href="https://flowbite.com/" className="flex items-center">
                        <Image
                            src={logo.src}
                            className={styles.logo}
                            alt="Denyigba Media logo"
                            height={40}
                            width={200}
                        />
                    </Link>
                </div>
                <div>
                <h2 className="mb-4 font-semibold text-[1rem] md:text-[1.4rem] lg:text-2xl uppercase text-[#F2F3F2] font-mediumSerif ">
                    Teƒe veviawo
                    <span className='border-b border-[#F2F3F2] mt-1 border-2 flex w-10'></span>
                </h2>

                <div className="grid grid-cols-3 gap-8 sm:gap-8 sm:grid-cols-3">
                    <div>
                        <ul className="text-[#F2F3F2] space-y-4 font-mediumSerif">
                            {main_link.slice(0, 3).map((link, index) => (
                                <li key={index}>
                                    <Link
                                        href={link.route}
                                        className={`${router.pathname === link.route ? 'bg-[#F2F3F2] text-[#0e2b19]' : 'text-[#F2F3F2] hover:bg-[#F2F3F2] hover:text-[#0e2b19]'} px-3 py-2 rounded-md text-sm font-medium font-mediumSerif`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {/* <h2 className="mb-7 text-sm font-semibold text-[#0e2b19] uppercase">d</h2> */}
                        <ul className="text-[#F2F3F2] space-y-4 font-mediumSerif">
                            {main_link.slice(3, 5).map((link, index) => (
                                <li key={index}>
                                    <Link href={link.route}
                                        className={`${router.pathname === link.route ? 'bg-[#F2F3F2] text-[#0e2b19]' : 'text-[#F2F3F2] hover:bg-[#F2F3F2] hover:text-[#0e2b19]'} px-3 py-2 rounded-md text-sm font-medium font-mediumSerif`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div>
                        {/* <h2 className="mb-7 text-sm font-semibold text-[#0e2b19] uppercase">u</h2> */}
                        <ul className="text-[#F2F3F2] space-y-4 font-mediumSerif">
                            {main_link.slice(5, 7).map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.route} 
                                        className={`${router.pathname === link.route ? 'bg-[#F2F3F2] text-[#0e2b19]' : 'text-[#F2F3F2] hover:bg-[#F2F3F2] hover:text-[#0e2b19]'} px-3 py-2 rounded-md text-sm font-medium font-mediumSerif`}
                                    >
                                        {link.title}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                </div>
            </div>
            <hr className="my-8 border-[#F2F3F2] sm:mx-auto lg:my-4" />
            <div className="flex flex-1 items-center font-mediumSerif">
                <span className="text-xs text-center text-[#F2F3F2]">
                    ©  {new Date().getFullYear()}. All Right Reserved & Powered by MotherTongue® Media Consult.
                </span>
            </div>
        </footer>
        
    )
}

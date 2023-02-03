import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { main_link } from '../../route'
import Logo from '../../images/logo1.png'

const styles = {
    logo: 'cursor-pointer object-contain',
    text: 'hover:opacity-50 hover:border-b',
    logoContainer: 'flex items-center flex-start',
    wrapper: 'flex justify-center gap-10 p-5 bg-[#0e2b19]',
    content: 'max-w-7xl flex flex-1 justify-between gap-10',
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full',
    bannerNav: 'flex cursor-pointer items-center space-x-5 text-[#F2F3F2] font-mediumSerif',
}

export default function Header() {
    const router = useRouter()
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.logoContainer}>
                    <Link href="/">
                        <Image 
                            alt="logo"
                            src={Logo}
                            height={40}
                            width={200}
                            className={styles.logo}
                        />
                    </Link>
                </div>
                <div className={styles.bannerNav}>
                    {main_link.map((link, index) => (
                        <Link key={index} href={link.route}>
                            <div className={`${styles.text} ${router.pathname == link.route ? 'opacity-50 border-b' : ''}`}>{link.title}</div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}
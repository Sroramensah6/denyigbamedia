import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import banner from '../../images/icon.png'

const styles = {
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full text-sm font-poppins',
    content: 'max-w-7xl flex-1 flex items-center justify-between mb-10',
    wrapper: 'h-max-[10rem] flex items-center justify-center bg-[#0e2b19] border-y border-black opacity-95',
}

export default function Banner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className='space-y-5 px-6 lg:px-10 flex-[3]'>
                    <h1 className='font-poppins leading-[75px] max-w-xl text-[2.5rem] md:text-[3.5rem] lg:text-[4rem] text-[#F2F3F2]'>Míaƒe Taɖodzinu.</h1>
                    <h3 className='text-base lg:text-lg text-[#F2F3F2] font-poppins'>
                        Gbegbɔgblɔ ye na wodea dzesi amewo henyaa woƒe dekɔnuwo.
                        Míaƒe kɔnu kple dekɔnuwo nye dzeside tɔxɛ na dukɔ bliboa eye
                        mía degbewo wɔa akpa vevi aɖe le go sia me.
                    </h3>
                    <button className={styles.accentedButton}>
                        <Link href={'/miafe-tadodzinu-ewe'}>Xlēe</Link>
                    </button>
                </div>
                <Image 
                    width={500}
                    alt='Banner'
                    height={400}
                    src={banner.src}
                    className='hidden h-52 w-60 lg:w-64 lg:h-auto sm:inline-flex object-contain flex-1 '
                />
            </div>
        </div>
    )
}

import React from 'react'
import Image from 'next/image'

import banner from '../../images/icon.png'

const styles = {
    accentedButton: 'bg-black text-white py-2 px-4 rounded-full font-mediumSerif',
    content: 'max-w-7xl flex-1 flex items-center justify-between mb-10',
    wrapper: 'h-max-[10rem] flex items-center justify-center bg-[#0e2b19] border-y border-black opacity-95',
}

export default function Banner() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className='space-y-5 px-6 lg:px-10 flex-[3]'>
                    <h1 className='max-w-xl text-[3.5rem] md:text-[3.5rem] lg:text-[5rem] font-mediumSerif text-[#F2F3F2]'>Míaƒe Taɖodzinu.</h1>
                    <h3 className='text-2xl text-[#F2F3F2]'>
                        Gbegbɔgblɔ ye na wodea dzesi amewo henyaa woƒe dekɔnuwo.
                        Míaƒe kɔnu kple dekɔnuwo nye dzeside tɔxɛ na dukɔ bliboa eye
                        mía degbewo wɔa akpa vevi aɖe le go sia me.
                    </h3>
                    <button className={styles.accentedButton}>Start Reading</button>
                </div>
                <Image 
                    width={500}
                    alt='Banner'
                    height={400}
                    src={banner.src}
                    className='hidden h-72 lg:h-auto sm:inline-flex object-contain flex-1 '
                />
            </div>
        </div>
    )
}

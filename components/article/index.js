import React from 'react'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

// icon
import { GrLinkedin } from 'react-icons/gr'
import { FaFacebook  } from 'react-icons/fa'
import { IoLogoTwitter } from 'react-icons/io'
import { AiFillPlayCircle, AiOutlineWhatsApp } from 'react-icons/ai'
import { FacebookMessengerShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from 'next-share'
import Link from 'next/link'


const styles = {
    wrapper: `flex items-center justify-center flex-[3] border-l border-r`,
    content: `h-screen overflow-scroll p-[2rem] w-full pt-0`,
    postHeaderContainer: `block md:flex justify-between items-center mt-[2.2rem] mb-[1.2rem]`,
    authorContainer: `flex gap-[1rem]`,
    authorProfileImageContainer: `h-[3rem] w-[3rem] grid center rounded-full overflow-hidden`,
    authorProfileImage: `object-cover`,
    column: `flex flex-col flex-1 justify-center`,
    postDetails: `block md:flex gap-[.2rem] text-[#787878] font-mediumSerif space-y-3 md:space-y-0 capitalize`,
    listenButton: `flex items-center gap-[.2rem] text-[#1A8917] cursor-pointer`,
    socials: `flex gap-[1rem] text-[#787878] cursor-pointer md:py-0 py-3`,
    space: `w-[.5rem]`,
    articleMainContainer: `flex flex-col gap-[1rem]`,
    bannerContainer: `h-[28rem] w-full grid center overflow-hidden mb-[2rem]`,
    bannerImage: `object-cover h-auto w-full flex flex-1 `,  
    title: `font-bold text-3xl font-mediumSerif`,
    subtitle: `font-mediumSerifItalic text-[1.4rem] text-[#292929] font-mediumSerif`,
    article: `font-mediumSerif text-[#292929] text-[1.4rem]`,
}

export default function Article({ data, origin }) {
    dayjs.extend(relativeTime)
    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <div className={styles.postHeaderContainer}>
                    <div className={styles.authorContainer}>
                        <div className={styles.column}>
                            <div className={styles.postDetails}>
                                <span>{dayjs(data.createdAt).format('MMMM DD YYYY')} • {data.reading_time} {data.source && <>• <span>Etsoƒe: <span className='underline text-[#0e2b19]'>{data.source}</span></span> </>} • </span> {data.text && <><span className='underline text-[#0e2b19]'><Link href={data.route}>{data.text}</Link></span> •</>} <span className={styles.listenButton}><AiFillPlayCircle /> Ðo To </span>
                            </div>
                        </div>
                    </div>
                    <div className={styles.socials}>
                        <div className='hover:text-[#1DA1F2] hover:opacity-60'>
                            <TwitterShareButton url={origin} title={data.title}>
                                <IoLogoTwitter />
                            </TwitterShareButton>
                        </div>
                        <div className='hover:text-[#4267B2]'>
                            <FacebookMessengerShareButton url={origin} title={data.title}>
                                <FaFacebook />
                            </FacebookMessengerShareButton>
                        </div>
                        <div className='hover:text-[#0e76a8]'>
                            <LinkedinShareButton url={origin} title={data.title} separator=":: ">
                                <GrLinkedin />
                            </LinkedinShareButton>
                        </div>
                        <div className='hover:text-[#25D366]'>
                            <WhatsappShareButton url={origin} title={data.title}>
                                <AiOutlineWhatsApp />
                            </WhatsappShareButton>
                        </div>
                    </div>
                </div>
                <div className={styles.articleMainContainer}>
                    <h1 className={styles.title}>{data.title}</h1>
                    <article className={`${styles.article} prose prose-img:rounded-t-xl prose-img:mb-0 prose-img:mt-0 prose-img:w-full prose-em:text[.1rem] prose-headings:underline prose-a:text-blue-600`} dangerouslySetInnerHTML={{ __html: data.body }} />
                </div>
            </div>
        </div>
    )
}

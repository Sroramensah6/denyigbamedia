import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const styles = {
    authorName: `font-semibold`,
    authorImage: `object-cover`,
    bookmarkContainer: `cursor-pointer`,
    authorContainer: `flex items-center`,
    category: `bg-[#F2F3F2] rounded-full`,
    postDetails: `flex-[2.5] flex flex-col`,
    thumbnailContainer: `flex flex-[2] sm:flex-[1.5]`,
    articleDetails: `my-2 text-[.6rem] md:text-[.8rem]`,
    detailsContainer: `flex items-center justify-between text-[#787878]`,
    title: `font-bold text-xs sm:text-base md:text-2xl lg:text-lg capitalize`,
    briefing: `text-[#787878] font-italic h-[4rem] text-ellipsis overflow-hidden`,
    wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer p-4`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
}

export default function PostCard ({ post }) {
    dayjs.extend(relativeTime)
    return (
        <Link href={`/post/${post.id}`}>
            <div className={styles.wrapper}>
                <div className={styles.postDetails}>
                    <h1 className={styles.title}>{post.title}</h1>
                    <div className={styles.detailsContainer}>
                        <span className={styles.articleDetails}>{dayjs(post.createdAt).format('MMMM DD YYYY')} • {post.reading_time} • <span className={styles.category}>{post.category}</span></span>
                    </div>
                </div>
                <div className={styles.thumbnailContainer}>
                    <Image
                        width={200}
                        height={200}
                        alt="thumbnail"
                        src={post.headerImage}
                        className={'object-cover overflow-hidden h-[9rem]'}
                    />
                </div>
            </div>
        </Link>
    )
}

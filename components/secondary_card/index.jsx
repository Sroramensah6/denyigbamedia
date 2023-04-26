import Link from 'next/link'
import Image from 'next/image'
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

const styles = {
    wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer p-4` ,
    authorContainer: `flex items-center`,
    authorImage: `object-cover`,
    authorName: `font-semibold`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    postDetails: `flex-[2.5] flex flex-col`,
    detailsContainer: `flex items-center justify-between text-[#787878]`,
    articleDetails: `my-2 text-[.6rem] md:text-[.8rem] font-mediumSerif`,
    title: `font-bold text-xs sm:text-base md:text-2xl lg:text-lg capitalize font-mediumSerif`,
    briefing: `text-[#787878] font-italic h-[4rem] text-ellipsis overflow-hidden`,
    category: `bg-[#F2F3F2] rounded-full font-mediumSerif`,
    bookmarkContainer: `cursor-pointer`,
    thumbnailContainer: `flex flex-[2] sm:flex-[1.5]`
}

export default function SecondaryCard ({ post }) {
    dayjs.extend(relativeTime)
    return (
        <div className="mb-2">
            <Link href={`/post/${post.id}`}>
                <div className="h-40 bg-cover text-center overflow-hidden" style={{ backgroundImage: `url(${post.headerImage})` }} title="Woman holding a mug" />
            </Link>
            <Link href={`/post/${post.id}`}className="text-gray-900 inline-block font-semibold text-md my-2 hover:text-[#0e2b19] transition duration-500 ease-in-out">{post.title}</Link>
            <div className="text-sm">
                <p className="text-gray-700 line-clamp-2">{post.body_summary}</p>
                <div className={styles.detailsContainer}>
                    <span className={styles.articleDetails}>{dayjs(post.createdAt).format('MMMM DD YYYY')} • {post.reading_time} • <span className={styles.category}>{post.category}</span></span>
                </div>
            </div>
        </div>
    )
}
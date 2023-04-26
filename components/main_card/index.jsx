
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
export default function MainCard ({ post }) {
    dayjs.extend(relativeTime)
    return (
        <div className="sm:col-span-8 lg:col-span-9">
            <a href="#">
                <div className="bg-cover text-center overflow-hidden" style={{ minHeight: '500px', backgroundImage: `url(${post.headerImage})` }} title="Woman holding a mug" />
            </a>
            <div className="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
                <div className="">
                    <a href="#" className="block text-gray-900 font-bold text-2xl mb-2 hover:text-[#0e2b19] transition duration-500 ease-in-out">{post.title}</a>
                    <div className="text-base">
                        <p className="text-gray-700 line-clamp-3">{post.body_summary}</p>
                        <div className={styles.detailsContainer}>
                            <span className={styles.articleDetails}>{dayjs(post.createdAt).format('MMMM DD YYYY')} • {post.reading_time} • <span className={styles.category}>{post.category}</span></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
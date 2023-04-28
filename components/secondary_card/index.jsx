import dayjs from 'dayjs'
import Link from 'next/link'
import relativeTime from 'dayjs/plugin/relativeTime'

const styles = {
    authorImage: `object-cover`,
    authorName: `font-semibold`,
    articleDetails: `my-3 text-xs`,
    bookmarkContainer: `cursor-pointer`,
    authorContainer: `flex items-center`,
    category: `bg-[#F2F3F2] rounded-full`,
    postDetails: `flex-[2.5] flex flex-col`,
    thumbnailContainer: `flex flex-[2] sm:flex-[1.5]`,
    detailsContainer: `flex items-center justify-between text-[#787878]`,
    title: `font-bold text-xs sm:text-base md:text-2xl lg:text-lg capitalize`,
    briefing: `text-[#787878] font-italic h-[4rem] text-ellipsis overflow-hidden`,
    wrapper: `flex max-w-[46rem] h-[10rem] items-center gap-[1rem] cursor-pointer p-4`,
    authorImageContainer: `grid place-items-center rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
}

export default function SecondaryCard ({ post }) {
    dayjs.extend(relativeTime)
    return (
        <Link href={`/post/${post.id}`}>
            <div className="mb-2">
                <div className="h-40 bg-cover text-center overflow-hidden" style={{ backgroundImage: `url(${post.headerImage})` }} title={post.title} />
                <p className="text-gray-900 line-clamp-2 inline-block font-medium text-md my-2 hover:text-[#0e2b19] transition duration-500 ease-in-out font-poppins">{post.title}</p>
                <div className="text-sm">
                    <p className="text-gray-700 line-clamp-2 font-poppins">{post.body_summary}</p>
                    <div className={styles.detailsContainer}>
                        <span className={styles.articleDetails}>{dayjs(post.createdAt).format('MMMM DD YYYY')} • {post.reading_time} • <span className={styles.category}>{post.category}</span></span>
                    </div>
                </div>
            </div>
        </Link>
    )
}
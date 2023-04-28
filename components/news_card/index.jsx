
import dayjs from 'dayjs'
import Link from 'next/link'
import relativeTime from 'dayjs/plugin/relativeTime'

const styles = {
    category: `bg-[#F2F3F2] rounded-full`,
    articleDetails: `my-3 text-xs`,
    detailsContainer: `flex items-center justify-between text-[#787878]`,
    title: "block line-clamp-2 font-poppins text-gray-900 font-medium mb-2 hover:text-[#0e2b19] transition duration-500 ease-in-out text-md",
}

export default function NewsCard ({ post, p }) {
    p = p ?? true
    dayjs.extend(relativeTime)
    return (
        <Link href={`/post/${post.id}`}>
            <div className={`flex flex-col justify-between border-b pb-5 ${p ? 'p-4' : 'p-2'}`}>
                <p className={styles.title}>{post.title}</p>
                <div className="flex items-start justify-between mt-3">
                    <div className="text-sm w-2/3">
                        <p className="text-gray-700 line-clamp-2 font-poppins text-sm">{post.body_summary}</p>
                        <div className={styles.detailsContainer}>
                            <span className={styles.articleDetails}>{dayjs(post.createdAt).format('MMMM DD YYYY')} • {post.reading_time} • <span className={styles.category}>{post.category}</span></span>
                        </div>
                    </div>
                    <div className="inline-block ml-2">
                        <div className="w-20 h-20 bg-cover bg-center" style={{ backgroundImage: `url(${post.headerImage})` }} />
                    </div>
                </div>
            </div>
        </Link>
    )
}

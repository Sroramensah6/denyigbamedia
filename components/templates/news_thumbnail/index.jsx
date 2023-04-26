import Link from 'next/link'

import NewsCard from '../../news_card'

const styles = {
    wrapper: `mx-auto`,
    main: `flex justify-center`,
    container:`flex-1 max-w-7xl mt-[2rem]`,
    categoryContainer: `w-1 pl-4  mb-4`,
    category_border: `border-b border-[#0e2b19] mt-2 border-2 flex w-8`,
    category: `text-base lg:text-[2rem] font-mediumSerif hover:text-[#0e2b19]`,
    postsList : 'grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 items-start'
}

export default function NewsThumbnail ({ title, posts, href }) {
    return (
        <div className={styles.space}>
            <div className={styles.categoryContainer}>
                <Link href={href}>
                    <h1 className={styles.category}>{title}</h1>
                    <span className={styles.category_border} />
                </Link>
            </div>
            <div className={styles.postsList}>
                {posts.filter((post) => (post.category === `${title}`)).slice(0, 4).map(post => <NewsCard key={post.id} post={post} />)}
            </div>
        </div>
    )
}

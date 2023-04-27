import Link from 'next/link'

import NewsCard from '../../news_card'

const styles = {
    wrapper: `mx-auto`,
    main: `flex justify-center`,
    categoryContainer: `w-80 pl-4  mb-6`,
    container:`flex-1 max-w-7xl mt-[2rem]`,
    postsList : 'grid sm:grid-cols-2 lg:grid-cols-3 gap-10',
    category_border: `border-b border-[#0e2b19] border-2 flex w-8`,
    category: `text-[2.6rem] lg:text-[2.6rem] font-mediumSerif hover:text-[#0e2b19]`,
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

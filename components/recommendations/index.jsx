import dayjs from 'dayjs'
import Link from 'next/link'
import Image from 'next/image'
import relativeTime from 'dayjs/plugin/relativeTime'

// icons
import { AiOutlineSearch } from 'react-icons/ai'

const styles = {
    wrapper: 'hidden lg:block h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] overflow-scroll w-full',
    accentedButton: 'flex bg-black text-white text-sm my-[2rem] py-[.6rem] rounded-full items-center justify-center',
    searchBar: 'flex items-center gap-[.6rem] h-[2.6rem] border px-[1rem] rounded-full justify-center',
    searchInput: 'border-none outline-none bg-none flex-grow w-full h-10 px-2',
    authorContainer: `my-[2rem]`,
    authorProfileImageContainer: `h-[5rem] w-[5rem] rounded-full overflow-hidden`,
    authorName: `font-semibold mb-[.2rem] mt-[1rem]`,
    authorFollowers: `text-[#787878]`,
    authorActions: `flex gap-[.6rem] my-[1rem]`,
    actionButton: `bg-[#1A8917] text-white rounded-full px-[.6rem] py-[.4rem] text-sm`,
    recommendationAuthorProfileImageContainer: `rounded-full overflow-hidden h-[1.4rem] w-[1.4rem]`,
    recommendationsContainer: `mt-0`,
    articlesContainer: `my-[2rem]`,
    articlesContentWrapper: `flex items-center justify-between cursor-pointer my-[1rem]`,
    articlesContent: `flex-[4] md:flex-[2]`,
    recommendationAuthorContainer: `flex items-center gap-[.6rem]`,
    recommendationAuthorName: `text-sm`,
    recommendationTitle: `font-bold text-base`,
    titleContainer: ``,
    title: `text-[2rem] font-mediumSerif text-[#0e2b19]`,
    recommendationThumbnailContainer: `flex flex-1 items-center justify-center h-[6rem] w-[6rem]`,
    recommendationThumbnail: `object-cover w-[6rem]`,
    detailsContainer: `hidden xl:flex items-center justify-between text-[#787878]`,
    category: `bg-[#F2F3F2] rounded-full font-mediumSerif`,
    articleDetails: `my-2 text-[.8rem] font-mediumSerif`,
}

export default function Recommendations ({ data }) {
    dayjs.extend(relativeTime)
    return (
        <div className={styles.wrapper}>
            {/* <div className={styles.searchBar}>
                <AiOutlineSearch />
                <input className={styles.searchInput} type="text" placeholder="Search" />
            </div> */}
            <div className={styles.recommendationsContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Nya Bubuwo</div>
                    <span className='border-b border-[#0e2b19] mt-1 border-2 flex w-10'></span>
                </div>
                <div className={styles.articlesContainer}>
                    {data?.map((article) => (
                        <Link key={article.id} href={`/post/${article.id}`}>
                            <div key={article.id} className={styles.articlesContentWrapper}>
                                <div className={styles.articlesContent}>
                                    <div className={styles.recommendationTitle}>{article.title}</div>
                                    <div className={styles.detailsContainer}>
                                        <span className={styles.articleDetails}>{dayjs(article.createdAt).format('MMMM DD YYYY')} • {article.reading_time} • <span className={styles.category}>{article.category}</span></span>
                                    </div>
                                </div>
                                <div className={styles.recommendationThumbnailContainer}>
                                    <Image
                                        width={500}
                                        height={400} 
                                        alt={article.title}
                                        src={article.headerImage}
                                        // className={styles.recommendationThumbnail}
                                    />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

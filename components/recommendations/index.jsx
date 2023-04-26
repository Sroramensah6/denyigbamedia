import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

import NewsCard from '../news_card'

const styles = {
    titleContainer: ``,
    articlesContainer: `my-[2rem]`,
    recommendationsContainer: `mt-0`,
    title: `text-[2rem] font-mediumSerif text-[#0e2b19]`,
    wrapper: 'hidden lg:block h-screen min-w-[10rem] max-w-[30rem] flex-[1.2] p-[2rem] overflow-scroll w-full',
}

export default function Recommendations ({ data, id }) {
    dayjs.extend(relativeTime)
    return (
        <div className={styles.wrapper}>
            <div className={styles.recommendationsContainer}>
                <div className={styles.titleContainer}>
                    <div className={styles.title}>Nya Bubuwo</div>
                    <span className='border-b border-[#0e2b19] mt-1 border-2 flex w-10'></span>
                </div>
                <div className={styles.articlesContainer}>
                    {data?.map((article) => <NewsCard p={false} key={article.id} post={article} />)}
                </div>
            </div>
        </div>
    )
}

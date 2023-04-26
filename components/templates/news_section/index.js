// component 
import Layout from "../../layout"
import Divider from "../../divider"
import NewsCard from "../../news_card"

// LOGO
import logo from '../../../images/icon1.png'


const styles = {
    wrapper: `mx-auto`,
    main: `flex justify-center`,
    categoryContainer: `w-20 mb-10 pl-5 `,
    container:`flex-1 max-w-7xl mt-[2rem]`,
    category: `text-[2rem] font-mediumSerif mb-4 text-[#0e2b19] border-b border-[#0e2b19]`,
    postsList : 'grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 items-start'
}
  
export default function Post_Template({ allPostsData, siteTitle, title }) {
    return (
        <Layout siteTitle={siteTitle} image={logo }>
            <div className={styles.main}>
                <div className={styles.container}>
                    <div className={styles.categoryContainer}>
                        <h1 className={styles.category}>{title}</h1>
                    </div>
                    <div className={styles.postsList}>
                        {allPostsData.map(post => <NewsCard key={post.id} post={post} />)}
                    </div>
                </div>
            </div>
            <Divider />
        </Layout>
    )
}

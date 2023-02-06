import Layout from '../../components/layout'
import { Article, Recommendations } from '../../components'
import { getAllPostIds, getCategoryRecommendationPostsData, getPostData } from '../../lib/posts'

const styles = {
    content: `flex`
}

export default function Post({ postData, Category }) {
    const origin = typeof document !== 'undefined' && document.location.href ? document.location.href : ''

    return (
        <Layout siteTitle={postData.title} description={postData.body_summary} image={postData.headerImage} >
            <div className={styles.content}>
                <Article data={postData} origin={origin} />
                <Recommendations data={Category.slice(0, 5)} />
            </div>
        </Layout>
    )
}

// export async function getStaticPaths() {
//     const paths = await getAllPostIds()
//     return {
//         paths,
//         fallback: false,
//     }
// }

export async function getServerSideProps({ params }) {
    const postData = await getPostData(params.id)
    const Category = await getCategoryRecommendationPostsData(postData.category)
    return {
        props: {
            postData,
            Category
        },
    };
}
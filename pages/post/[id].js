import Layout from '../../components/layout'
import { Article, Recommendations } from '../../components'
import { getAllPostIds, getCategoryRecommendationPostsData, getPostData } from '../../lib/posts'

const styles = {
    content: `flex`
}

export default function Post({ postData, Category }) {
    return (
        <Layout siteTitle={postData.title} description={postData.body_summary} image={postData.headerImage} >
            <div className={styles.content}>
                <Article data={postData} />
                <Recommendations data={Category} />
            </div>
        </Layout>
    )
}

export async function getStaticPaths() {
    const paths = await getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const Category = await getCategoryRecommendationPostsData(postData.category)
    return {
        props: {
            postData,
            Category
        },
    };
}
import _ from 'lodash'

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
                <Recommendations data={Category.slice(0, 5)} id={postData.id} />
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
    let Category = await getCategoryRecommendationPostsData(postData.category)

    const contains = ({ id }, query) => {
        if (id?.includes(query)) return false
        return true
    }
    Category = _.filter(Category, data => contains(data, postData.id))
    return {
        props: {
            postData,
            Category
        },
    };
}
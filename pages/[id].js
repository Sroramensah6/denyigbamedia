import React from 'react'
import { Article, Recommendations } from '../components'

import Layout from '../components/layout'

import { getSortedPostsData } from '../lib/posts'
import { getAllPostIds, getPostData } from '../lib/miafetadodzinu'

const styles = {
    content: `flex`
}

export async function getStaticPaths() {
    const paths = getAllPostIds()
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id)
    const allPostsData = await getSortedPostsData()
    return {
        props: {
            postData,
            allPostsData,
        },
    };
}

export default function MiafeTadodzinu({  postData, allPostsData }) {
    const origin = typeof document !== 'undefined' && document.location.href ? document.location.href : '';

    return (
        <Layout siteTitle={'Miafe Tadodzinu'}>
            <div className={styles.content}>
                <Article data={postData} origin={origin} />
                <Recommendations data={allPostsData.slice(0, 5)} />
            </div>
        </Layout>
    )
}

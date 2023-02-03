import React from 'react'

import Layout from '../../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/miafetadodzinu'

export async function getStaticPaths() {
    const paths = getAllPostIds();
    console.log('paths', paths)
    return {
        paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    console.log("postData", postData);
    return {
      props: {
        postData,
      },
    };
}

export default function MiafeTadodzinu({  postData }) {
    
    return (
        <Layout siteTitle={'Miafe Tadodzinu'}>
            <h1>websaet yi botaee</h1>
        </Layout>
    )
}

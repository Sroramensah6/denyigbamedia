// component 
import { Post_Template } from '../../components'

// get data
import { getCategoryPostsData } from '../../lib/posts'

export default function Kamedefefe({ allPostsData }) {
    return <Post_Template siteTitle={'Denyigba Media - Kamedefefe'} allPostsData={allPostsData} title={'Kamedefefe'} />
}

export async function getStaticProps() {
    const allPostsData = await  getCategoryPostsData('Kamedefefe')
    return {
      props: {
        allPostsData,
      }
    }
}

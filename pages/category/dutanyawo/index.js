// component 
import { Post_Template } from '../../../components'

// get data
import { getCategoryPostsData } from '../../../lib/posts'

export default function Dutanyawo({ allPostsData }) {
    return <Post_Template siteTitle={'Denyigba Media - Dutanyawo'} allPostsData={allPostsData} title={'Dutanyawo'} />
}

export async function getStaticProps() {
    const allPostsData = await  getCategoryPostsData('Dutanyawo')
    return {
      props: {
        allPostsData,
      }
    }
}

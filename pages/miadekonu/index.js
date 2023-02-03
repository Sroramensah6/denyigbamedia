// component 
import { Post_Template } from '../../components'

// get data
import { getCategoryPostsData } from '../../lib/posts'
  
export default function Miadekonu({ allPostsData }) {
    return <Post_Template siteTitle={'Denyigba Media - Míadekɔnu'} allPostsData={allPostsData} title={'Míadekɔnu'} />
}

export async function getStaticProps() {
    const allPostsData = await  getCategoryPostsData('Míadekɔnu')
    return {
      props: {
        allPostsData,
      }
    }
}

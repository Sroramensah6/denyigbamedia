// component 
import { Post_Template } from '../../../components'

// get data
import { getCategoryPostsData } from '../../../lib/posts'
  
export default function Asitsanyawo({ allPostsData }) {
    return <Post_Template siteTitle={'Denyigba Media - Asitsanyawo'} allPostsData={allPostsData} title={'Asitsanyawo'} />
}
 
export async function getStaticProps() {
    const allPostsData = await  getCategoryPostsData('Asitsanyawo')
    return {
      props: {
        allPostsData,
      }
    }
}
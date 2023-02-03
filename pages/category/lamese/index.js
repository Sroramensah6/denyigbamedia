// component 
import { Post_Template } from '../../../components'

// get data
import { getCategoryPostsData } from '../../../lib/posts'

export default function Lamese({ allPostsData }) {
    return <Post_Template siteTitle={'Denyigba Media - Lãmesẽ'} allPostsData={allPostsData} title={'Lãmesẽ'} />
}

export async function getStaticProps() {
    const allPostsData = await  getCategoryPostsData('Lãmesẽ')
    return {
      props: {
        allPostsData,
      }
    }
}

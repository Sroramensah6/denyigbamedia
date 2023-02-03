// Components
import { Post_Template } from '../../components'

// get data
import { getCategoryPostsData } from '../../lib/posts'

  
export default function Nyadzɔdzɔwo({ allPostsData }) {
    return <Post_Template siteTitle={'Denyigba Media - Nyadzɔdzɔwo'} allPostsData={allPostsData} title={'Nyadzɔdzɔwo'} />
}

export async function getStaticProps() {
    const allPostsData = await  getCategoryPostsData('Nyadzɔdzɔwo')
    return {
      props: {
        allPostsData,
      }
    }
}

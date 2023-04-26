// components
import Layout from '../components/layout'
import { Banner, Divider, MainCard, NewsCard, NewsThumbnail, SecondaryCard } from '../components'

// get data
import { getSortedPostsData } from '../lib/posts'

// logo
import logo from '../images/icon.png'

const styles = {
  wrapper: `mx-auto`,
  main: `flex justify-center`,
  container:`flex-1 max-w-7xl mt-[2rem]`,
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home siteTitle={'Denyigba Media - Gɔmedzeƒe'} image={logo} description={'Read local news in the Ghanaian Ewe vernacular'}>
      <div className={styles.wrapper}>
        <Banner />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className="relative mb-8 pl-3 pr-3">
              <div className="grid grid-cols-1 sm:grid-cols-12 lg:grid-cols-12 gap-10 sm:gap-5">
                {allPostsData.slice(0, 1).map(post => <MainCard post={post} />)}
                <div className="sm:col-span-4 lg:col-span-3">
                  {allPostsData.slice(1, 3).map(post => <SecondaryCard post={post} />)}
                </div>
              </div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
              {allPostsData
                .filter((post) => {
                  return (
                    post.category === 'Nyadzɔdzɔwo' ||
                    post.category === 'Asitsanyawo' ||
                    post.category === 'Lãmesẽ' ||
                    post.category === 'Míadekɔnu' ||
                    post.category === 'Dutanyawo'
                  )
                }).slice(3, 9).map(post => <NewsCard key={post.id} post={post} />)
              }
            </div>
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Nyadzɔdzɔwo'} href={'/nyadzodzowo'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Lãmesẽ'} href={'/lamese'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Asitsanyawo'} href={'/asitsanyawo'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Míadekɔnu'} href={'/miadekonu'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Dutanyawo'} href={'/dutanyawo'} />
            <Divider />
            <NewsThumbnail posts={allPostsData} title={'Kamedefefe'} href={'/kamedefefe'} />
            <Divider />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const allPostsData = await getSortedPostsData()
  return {
    props: {
      allPostsData,
    }
  }
}

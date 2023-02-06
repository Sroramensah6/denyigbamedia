import Link from 'next/link'

// components
import Layout from '../components/layout'
import { Banner,  PostCard } from '../components'

// get data
import { getSortedPostsData } from '../lib/posts'

// logo
import logo from '../images/icon.png'

const styles = {
  wrapper: `mx-auto`,
  main: `flex justify-center`,
  container:`flex-1 max-w-7xl mt-[2rem]`,
  categoryContainer: `w-1 pl-4  mb-4`,
  divider: 'h-1 flex-1 flex w-full bg-[#F2F3F2] lg:my-16 my-10',
  category_border: `border-b border-[#0e2b19] mt-4 border-2 flex w-10`,
  category: `text-3xl lg:text-[3rem] font-mediumSerif hover:text-[#0e2b19]`,
  postsList : 'grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-5 items-start'
}

export default function Home ({ allPostsData }) {
  return (
    <Layout home siteTitle={'Denyigba Media - Gɔmedzeƒe'} image={logo} description={''}>
      <div className={styles.wrapper}>
        <Banner />
        <div className={styles.main}>
          <div className={styles.container}>
            <div className={styles.postsList}>
              {allPostsData
                .filter((post) => {
                  return (
                    post.category === 'Nyadzɔdzɔwo' ||
                    post.category === 'Asitsanyawo' ||
                    post.category === 'Lãmesẽ' ||
                    post.category === 'Míadekɔnu' ||
                    post.category === 'Dutanyawo'
                  )
                }).slice(0, 6).map(post => <PostCard key={post.id} post={post} />)
              }
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/nyadzodzowo'}>
                  <h1 className={styles.category}>Nyadzɔdzɔwo</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Nyadzɔdzɔwo')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/lamese'}>
                  <h1 className={styles.category}>Lãmesẽ</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Lãmesẽ')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/asitsanyawo'}>
                  <h1 className={styles.category}>Asitsanyawo</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Asitsanyawo')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/miadekonu'}>
                  <h1 className={styles.category}>Míadekɔnu</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Míadekɔnu')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/dutanyawo'}>
                  <h1 className={styles.category}>Dutanyawo</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Dutanyawo')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
            <span className={styles.divider}></span>
            <div className={styles.space}>
              <div className={styles.categoryContainer}>
                <Link href={'/kamedefefe'}>
                  <h1 className={styles.category}>Kamedefefe</h1>
                  <span className={styles.category_border} />
                </Link>
              </div>
              <div className={styles.postsList}>
                {allPostsData
                  .filter((post) => post.category === 'Kamedefefe')
                  .slice(0, 4)
                  .map(post => <PostCard key={post.id} post={post} />)
                }
              </div>
            </div>
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

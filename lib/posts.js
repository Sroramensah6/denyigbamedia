import axios from "axios"
import html from 'remark-html'
import { remark } from 'remark'
import readingTime from "reading-time"

export async function getCategoryPostsData(category) {
    const res = await axios.get('/posts')
    const posts = await res.data
    return posts?.filter((post) => post.category === category)?.slice(0, 30)?.map(post => {
        const reading_time = readingTime(post.body)
        return {
            id: post.postId,
            headerImage: post.headerImage,
            title: post.title,
            category: post.category,
            createdAt: post.createdAt,
            reading_time: reading_time.text
        }
    })
}

export async function getCategoryRecommendationPostsData(category) {
    const res = await axios.get('/posts')
    const posts = await res.data
    return posts?.filter((post) => post.category === category)?.map(post => {
        const reading_time = readingTime(post.body)
        return {
            id: post.postId,
            headerImage: post.headerImage,
            title: post.title,
            category: post.category,
            createdAt: post.createdAt,
            reading_time: reading_time.text
        }
    })
}

export async function getSortedPostsData() {
    const res = await axios.get('/posts')
    const posts = await res.data
    return posts?.map(post => {
        const reading_time = readingTime(post.body)
        return {
            id: post.postId,
            headerImage: post.headerImage,
            title: post.title,
            category: post.category,
            createdAt: post.createdAt,
            reading_time: reading_time.text
        }
    })
}

export async function getAllPostIds() {
    const res = await axios.get('/posts')
    const posts = await res.data
    return posts?.map(post => {
        return {
            params: {
                id: post.postId
            }
        }
    })
}
  
export async function getPostData(id) {
    const res = await axios.get(`/post/${id}`)
    const post = await res.data
    // Use remark to convert markdown into HTML string
    const processedContent = await remark().use(html).process(post.body)
    const contentHtml = processedContent.toString()
    const reading_time = readingTime(post.body)
    return {
        id: post.postId,
        headerImage: post.headerImage,
        audioURL: post.audioURL,
        body: contentHtml,
        title: post.title,
        category: post.category,
        createdAt: post.createdAt,
        body_summary: post.body_summary,
        source: post.source,
        reading_time: reading_time.text
    }
}

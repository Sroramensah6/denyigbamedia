import axios from "axios"
import { collection, getDocs } from "firebase/firestore"
import { createContext, useEffect, useState } from "react"
import { db } from "../config/firebase"

const DataContext = createContext()

const DataProvider = ({ children }) => {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    // useEffect(() => {
    //     const getUsers = async () => { 
    //         const querySnapshot = await getDocs(collection(db, 'users'))
    //         setUsers(querySnapshot.docs?.map(doc => {
    //             return {
    //                 id: doc.id,
    //                 data: {
    //                     ...doc.data()
    //                 }
    //             }
    //         }))
    //     }
    //     getUsers()
    // }, [])

    // useEffect(() => {
    //     async function getUsers() { 
    //         const querySnapshot = await getDocs(collection(db, 'posts'))
    //         setPosts(querySnapshot.docs.map(doc => {
    //             return {
    //                 id: doc.id,
    //                 data: {
    //                     body: doc.data().body,
    //                     title: doc.data().title,
    //                     source: doc.data().source,
    //                     author: doc.data().author,
    //                     audioURL: doc.data().audioURL,
    //                     category: doc.data().category,
    //                     createdAt: doc.data().createdAt,
    //                     likeCount: doc.data().likeCount,
    //                     userImage: doc.data().userImage,
    //                     userHandle: doc.data().userHandle,
    //                     headerImage: doc.data().headerImage,
    //                     commentCount: doc.data().commentCount,
    //                     body_summary: doc.data().body_summary,
    //                 }
    //             }
    //         }))
    //     }
    //     getUsers()
    // }, [])

    useEffect(() => {
        async function getUsers() { 
            axios
                .get('/posts')
                .then((res) => {
                    setPosts(res.data)
                })
                .catch((err) => console.error)
        }
        getUsers()
    }, [])
    
    return (
        <DataContext.Provider value={{users, posts, comments}}>
            {children}
        </DataContext.Provider>
    )
}


export { DataContext,  DataProvider}
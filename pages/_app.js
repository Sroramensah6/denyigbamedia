import axios from 'axios'
import { useEffect } from "react"
import { useRouter } from "next/router"
import { Analytics } from '@vercel/analytics/react'

import { Progress } from "../components"
import { DataProvider } from "../context"
import { useProgressStore } from "../store"

import '../styles/globals.css'

axios.defaults.baseURL = 'https://us-central1-denyigba-news.cloudfunctions.net/api'
export default function App ({ Component, pageProps }) {
    const setIsAnimating = useProgressStore((state) => state.setIsAnimating)
    const isAnimating = useProgressStore((state) => state.isAnimating)
    const router = useRouter()
    useEffect(() => {
        const handleStart = () => {
            setIsAnimating(true)
        }

        const handleStop = () => {
            setIsAnimating(false)
        }

        router.events.on('routeChangeStart', handleStart)
        router.events.on('routeChangeComplete', handleStop)
        router.events.on('routeChangeError', handleStop)

        return () => {
            router.events.off('routeChangeStart', handleStart)
            router.events.off('routeChangeComplete', handleStop)
            router.events.off('routeChangeError', handleStop)
        }
    }, [router])
    return (
        <DataProvider>
            <Progress  isAnimating={isAnimating} />
            <Component {...pageProps} />
            <Analytics />
        </DataProvider>
    )
}
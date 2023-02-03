import Head from "next/head"
import Layout from "../components/layout"

export default function Custom404() {
    return (
        <Layout siteTitle={'404 - Page Not Found'}>
            <div className="justify-center items-center flex flex-1">
                <h1>404 - Page Not Found</h1>
            </div>
        </Layout>
    )
}

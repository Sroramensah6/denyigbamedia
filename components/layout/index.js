import Head from 'next/head'
import Footer from '../footer'

import Header from '../header'
import Example from '../nav'
// import Example from '../nav'

export default function Layout({ children, home, siteTitle, description, image }) {
    return (
        <div>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:image" content={image?.src || image} />

                <meta name="robots" content="follow, index" />
                {description && <meta name="description" content={description} />}
                {siteTitle && <meta property="og:site_name" content={siteTitle} />}
                {description && <meta property="og:description" content={description} />}
                {siteTitle && <meta property="og:title" content={siteTitle} />}
                {image && <meta property="og:image" content={image?.src || image} />}

                <meta name="twitter:creator" content={``} />
                {siteTitle && <meta name="twitter:title" content={siteTitle} />}
                {description && <meta name="twitter:description" content={description} />}
                {image && <meta name="twitter:image" content={image?.src || image} />}
                <meta name="twitter:card" content="summary_large_image" />

                <title>{siteTitle}</title>
            </Head>
            {/* <Header /> */}
            <Example />
            <main>{children}</main>
            <Footer />
        </div>
    )
}

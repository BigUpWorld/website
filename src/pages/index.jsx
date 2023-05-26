import Head from 'next/head'
import {Faqs} from '@/components/Faqs'
import {Footer} from '@/components/Footer'
import {Header} from '@/components/Header'
import {Hero} from '@/components/Hero'

export default function Home() {
    return (
        <>
            <Head>
                <title>Big Up - coming soon!</title>
                <meta
                    name="description"
                    content="Big Up is a positivity-first social networking app coming soon."
                />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
                <link rel="manifest" href="/site.webmanifest"/>
            </Head>
            <Header/>
            <main>
                <Hero/>
                {/*<PrimaryFeatures />*/}
                {/*<SecondaryFeatures />*/}
                {/*<CallToAction />*/}
                {/*<Reviews />*/}
                {/*<Pricing />*/}
                <Faqs/>
            </main>
            <Footer/>
        </>
    )
}

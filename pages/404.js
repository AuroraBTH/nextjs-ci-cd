import Head from 'next/head';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';

export default function Custom404() {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle} - 404</title>
            </Head>
            <h2 className='text-3xl'>404 - Page Not Found</h2>
            <div className='py-4 text-blue-500'>
                <Link href="/">
                    <a>← Back to home</a>
                </Link>
            </div>
        </Layout>
    );
}

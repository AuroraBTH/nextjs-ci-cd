import Head from 'next/head';
import Link from 'next/link';

const name = 'Niklas Andersson';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
    return (
        <div className='flex flex-col max-w-3xl m-auto'>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta
                    name="description"
                    content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={`https://og-image.vercel.app/${encodeURI(
                        siteTitle
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <header className='p-4 mx-4'>
                <div className='pt-4'>
                    <Link href="/">
                        <a className='text-4xl'>{name}</a>
                    </Link>
                </div>
            </header>
            <main className='p-4 mx-4 border-2 border-gray-200 rounded-md'>{children}</main>
            {!home && (
                <div className='p-4 mx-4 text-blue-500'>
                    <Link href="/">
                        <a>← Back to home</a>
                    </Link>
                </div>
            )}
        </div>
    );
}

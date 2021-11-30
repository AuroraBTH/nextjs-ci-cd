import Head from 'next/head';
import Link from 'next/link';
import Date from '../components/date';
import Layout, { siteTitle } from '../components/layout';
import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
    const allPostsData = getSortedPostsData();
    return {
        props: {
            allPostsData
        }
    };
}

export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className='py-2'>
                <p>
                    <a href='https://github.com/AuroraBTH/' className='text-blue-400' target='_blank' rel='noreferrer'>Niklas Andersson</a> works as a frontend developer at KnowIt Malmö where he currently develops for the IKEA Sofa Planner. His spare time is spent gaming with his co-founded community called Sockertoppar. He also keeps himself up-to-date within the tech world, with a large focus being Apple.
                </p>
            </section>
            <section className='py-2'>
                <h2 className='text-2xl'>Blog</h2>
                <ul className='mt-4'>
                    {allPostsData.map(({ id, date, title }) => (
                        <li className='p-2 border-t-2 border-gray-100' key={id}>
                            <Link href={`/posts/${id}`}>
                                <a className='hover:underline'>{title}</a>
                            </Link>
                            <br />
                            <small className='text-gray-500'>
                                <Date dateString={date} />
                            </small>
                        </li>
                    ))}
                </ul>
            </section>
        </Layout>
    );
}

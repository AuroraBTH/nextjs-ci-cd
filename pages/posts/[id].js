import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';

export async function getStaticProps({ params }) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    };
}

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    };
}

export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className='text-3xl pb-2 border-b-2 border-gray-100'>{postData.title}</h1>
                <div className='py-2 markdown' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
                <div className='pt-2 text-gray-500 text-right'>
                    <Date dateString={postData.date} />
                </div>
            </article>
        </Layout>
    );
};

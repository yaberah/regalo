import React from 'react';
import NextLink from 'next/link';
import Layout from '../../components/Layout';
import Subpage from '../../components/Subpage';
import { microcmsAPI } from '../../lib/microcms';
import { getAllPostIds, getPostData } from '../../lib/microcms';
import css from 'styled-jsx/css';

const Post = ({ postData }) => {
  if ( !postData ) {
    return (
      <p>投稿がありません</p>
    )
  } else {
    const date = new Date(postData.updatedAt);
    return(
      <div>
        <Layout>
          <Subpage title={postData.title}>
            <div className="post-date">{date.toLocaleDateString()}</div>
            <section className="sub">
              <div className="post-contents" dangerouslySetInnerHTML={createMarkup(postData)} ></div>
            </section>
          </Subpage>
        </Layout>
        <style jsx>{styles}</style>
      </div>
    )
  }
}

const createMarkup = (postData) => {
  return { __html: postData.contents };
}

export const getStaticPaths = async () => {
  const paths = await getAllPostIds() || '';
   return {
     paths,
     fallback: true
   }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id) || '';
  return{
    props: {
      postData
    }
  }
}

const styles = css`
`

export default Post;

import React from 'react';
import Link from 'next/Link';
import Layout from '../../components/Layout';
import Subpage from '../../components/Subpage';
import { microcmsAPI } from '../../lib/microcms';
import { getAllPostIds, getPostData } from '../../lib/microcms';

const Post = ({ postData }) => {
  return(
    <div>
      <Layout>
        <Subpage title={postData.title}>
          <div>{postData.createdAt}</div>
          <section className="sub">
            <div dangerouslySetInnerHTML={createMarkup(postData)} ></div>
          </section>
        </Subpage>
      </Layout>
    </div>
  )
}

const createMarkup = (postData) => {
  return { __html: postData.contents };
}

export const getStaticPaths = async () => {
  const paths = await getAllPostIds();
   return {
     paths,
     fallback: true
   }
}

export const getStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id);
  return{
    props: {
      postData
    }
  }
}

export default Post;

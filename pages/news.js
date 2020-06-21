import React from 'react';
import Link from 'next/Link';
import Layout from '../components/Layout';
import Subpage from '../components/Subpage';
import Button from '../components/Button';
import NewsItem from '../components/NewsItem';
import css from 'styled-jsx/css';
import fetch from 'node-fetch';
import { microcmsAPI } from '../lib/microcms';

const news = ({allPosts}) => {
  return(
    <div>
      <Layout>
        <Subpage title="お知らせ" enTitle="NEWS">
          <section className="sub">

          {/*
            <div>
              <ul className="year">
                <li><Link href="#"><a>2020</a></Link></li>
                <li><Link href="#"><a>2019</a></Link></li>
                <li><Link href="#"><a>2018</a></Link></li>
              </ul>
            </div>
          */}

            <div>{/*article list*/}
              <ul className="article-list">
                {allPosts.contents.map( (post) => {
                  const date = new Date(post.updatedAt);
                  return(
                    <NewsItem
                      date={date.toLocaleDateString()}
                      title={post.title}
                    />
                  )
                }
                )}
              </ul>
            </div>

            {/*
            <div className="pager">
              <ul>
                <li><Link href=""><a>1</a></Link></li>
                <li><Link href=""><a>2</a></Link></li>
                <li><Link href=""><a>3</a></Link></li>
                <li>…</li>
                <li><Link href=""><a>13</a></Link></li>
              </ul>
            </div>
            */}

          </section>
        </Subpage>
      </Layout>
      <style jsx>{styles}</style>
    </div>
  )
}

export const getStaticProps = async () => {
  const allPosts = await microcmsAPI() || [];
  return { props : { allPosts } }
}

const styles = css`
.year {
  display:flex;
  font-size: 20px;
  padding-bottom:40px;
}
.year li::after {
  content: "/";
  display: inline-block;
  color: #42B4D1;
  padding: 0 24px;
}
.year li:last-child::after{
  content: none;
}
.article-list{
  margin-bottom:72px;
}
.pager{
  margin-bottom:200px;
  font-size: 20px;
}
.pager ul{
  display:flex;
  justify-content :center;
}
.pager ul li{
  width: 20px;
  margin-right:20px;
}
`

export default news;

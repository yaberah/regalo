import React from 'react';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Access from '../components/Access';
import NewsItem from '../components/NewsItem';
import SimpleSwiper from '../components/Swiper';
import fetch from "isomorphic-unfetch";
import { instagramAPI } from '../lib/instagram';
import { googlemapsAPI } from '../lib/googlemapsAPI';
import { microcmsAPI } from '../lib/microcms';

const top = ({ instagramPosts, mapData, allPosts }) => {

  const recentNews = allPosts.contents[0];
  const date = new Date(recentNews.updatedAt);
  return(
    <div id="wrapper">
      <Layout>
        <div className="fv_wrapper">
          <section className="fv">
            <div className="fv_left">
              <h2>Make you smile.</h2>
              <h1>笑顔を届ける<br />スポーツ整体サロン</h1>
              <p>Regalo（レガーロ）は、お客様に笑顔を届ける横浜にあるスポーツ整体サロンです。体の悩みを持つお客様1人ひとりと協力させていただき、オーダーメイドのメニューで人生を変えるお手伝い致します。</p>
              <Button href="#contact" type="primary">ご予約・お問い合わせ</Button>
              <Button href="/about" type="secondary">REGALOについて</Button>
            </div>
            <div className="fv_right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 700 530">
                <path d="M369.953-10C560.539-10,706.1,108.058,697.707,260.1S513.439,520,322.854,520-19.429,410.164-.321,260.1,179.368-10,369.953-10Z" transform="translate(1.948 10)" transform="translate(30,30)" fill="#CDE9F0"/>
                <image className="mv" href="../static/mv_image01.jpg" width="130%" height="130%" x="-200" y="-70" />
                <clipPath id="mask">
                  <path d="M369.953-10C560.539-10,706.1,108.058,697.707,260.1S513.439,520,322.854,520-19.429,410.164-.321,260.1,179.368-10,369.953-10Z" transform="translate(1.948 10)" />
                </clipPath>
              </svg>
            </div>
          </section>
        </div>

        <section className="news">
          <h2>NEWS</h2>
          <NewsItem
            date={date.toLocaleDateString()}
            title={recentNews.title}
            id={recentNews.id}
          />
        </section>

        <section className="about">
          <div className="about_inner">
            <div className="about_left">
              <h2>体の健康は、<br />心の健康。</h2>
              <p>お体の悩みや結果を出すことを諦めていませんか？<br/><br/>体の悩みは、簡単には根本的に解決できるものではありません。しかし、悩みが解決でき、スポーツや趣味で取り組んでいるものに結果が出せたら人生が変わります。Regaloでは、お客様のお体の悩みを解決し、
                結果を出すことで、人生を変えるサポートを致します。<br/><br/>ぜひ、お体の悩みのある方、結果が出ずに悩んでる方は、一度お越しください</p>
            </div>
            <div className="about_right">
              <ul>
                <li><figure><img src="../static/injury.svg" alt="怪我しやすい"/></figure><span>怪我しやすい</span></li>
                <li><figure><img src="../static/lose.svg" alt="結果が出ない"/></figure><span>結果が出ない</span></li>
                <li><figure><img src="../static/shoulder_pain.svg" alt="肩痛"/></figure><span>肩痛</span></li>
                <li><figure><img src="../static/waist_pain.svg" alt="腰痛"/></figure><span>腰痛</span></li>
                <li><figure><img src="../static/knee_pain.svg" alt="膝痛"/></figure><span>膝痛</span></li>
              </ul>
            </div>
          </div>
          <div className="about_button">
            <Button type="primary" href="/menu">メニュー・料金</Button>
          </div>
        </section>

        <section className="voice">
          <h2>お客様の声</h2>
          <div className="voice_card_wrapper">
            <SimpleSwiper />
          </div>
        </section>

        <Access
          type="top"
          apiKey={mapData.key}
          lat={mapData.lat}
          lng={mapData.lng}
          defaultZoom={mapData.defaultZoom}
          />
        {/* <section className="instagram">
          <h2>INSTAGRAM</h2>
          <div className="instagram_wrapper">
            {instagramPosts.data.slice(0,8).map( (instagramPost) => {
              return (
                <div className="instagram_item"><img src={instagramPost.media_url} alt=""/></div>
              )
            })}
          </div>
        </section> */}


      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const instagramPosts = await instagramAPI() || [];
  const mapData = await googlemapsAPI() || [];
  const allPosts = await microcmsAPI() || [];
  return { props : { instagramPosts, mapData, allPosts } }
}

export default top;

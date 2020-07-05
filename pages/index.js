import React from 'react';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import Button from '../components/Button';
import Access from '../components/Access';
import fetch from "isomorphic-unfetch";
import { instagramAPI } from '../lib/instagram';
import { googlemapsAPI } from '../lib/googlemapsAPI';

const top = ({ instagramPosts, mapData }) => {
  return(
    <div className="wrapper">
      <Layout>

        <section className="fv">
          <div className="fv_left">
            <h2>Make you smile.</h2>
            <h1>笑顔を届ける<br />美容整体サロン</h1>
            <p>REGALO(レガ-ロ)は患者の皆様に笑顔を届ける、横浜にある美容整体サロンです。体のお悩みを持つ患者ひとりひとりに寄り添い、健やかで気持ちのよい暮らしをお手伝い致します。</p>
            <Button>ご予約・お問い合わせ</Button>
            <Button>REGALOについて</Button>
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

        <section className="news">
          <h2>NEWS</h2>
          <span>2020.5.1</span>
          <NextLink href="#">
            <a className="data">5月の休診日のお知らせ</a>
          </NextLink>
          <NextLink href="news">
            <a className="more">もっと見る<img src="../static/Icon_arrow.svg" alt="arrow"/></a>
          </NextLink>
        </section>

        <section className="about">
          <div className="about_left">
            <h2>体の健康は、<br />心の健康。</h2>
            <p>肩こり、腰痛、頭痛、関節痛、生理痛皆さんは体に不調はありませんか？<br/><br/>このような不調があると、体が辛いだけでなく、気分も落ち込んでしまいます。REGALO(レガ-ロ)では患者の皆さんの不調を改善できる背術を提供し、体だけでなく心も健康になれるようにサポート致します。<br/><br/>ぜひ体の不調をお持ちの方は、一度お越しください。</p>
            <Button>メニュー・料金</Button>
          </div>
          <div>
            <ul>
              <li><figure></figure>肩こり</li>
              <li><figure></figure>腰痛</li>
              <li><figure></figure>頭痛</li>
              <li><figure></figure>関節痛</li>
              <li><figure></figure>生理痛</li>
            </ul>
          </div>
        </section>

        <section className="voice">
          <h2>お客様の声</h2>
          <div className="voice_card_wrapper">
            <div className="voice_card">
              <figure></figure>
              <span>横浜市 29歳 女性</span>
              <p>ずっと腰痛に悩まされてきましたが、REGALOに通うことで、体が楽になり毎日を笑顔で過ごせるようになりました。本当に感謝しています。</p>
            </div>
            <div className="voice_card">
              <figure></figure>
              <span>横浜市 29歳 女性</span>
              <p>ずっと腰痛に悩まされてきましたが、REGALOに通うことで、体が楽になり毎日を笑顔で過ごせるようになりました。本当に感謝しています。</p>
            </div>
            <div className="voice_card">
              <figure></figure>
              <span>横浜市 29歳 女性</span>
              <p>ずっと腰痛に悩まされてきましたが、REGALOに通うことで、体が楽になり毎日を笑顔で過ごせるようになりました。本当に感謝しています。</p>
            </div>
          </div>
        </section>

        <Access
          type="top"
          apiKey={mapData.key}
          lat={mapData.lat}
          lng={mapData.lng}
          defaultZoom={mapData.defaultZoom}
          />

        <section className="instagram">
          <h2>INSTAGRAM</h2>
          <div className="instagram_wrapper">
            {instagramPosts.data.slice(0,8).map( (instagramPost) => {
              return (
                <div className="instagram_item"><img src={instagramPost.media_url} alt=""/></div>
              )
            })}
          </div>
        </section>

      </Layout>
    </div>
  )
}

export const getStaticProps = async () => {
  const instagramPosts = await instagramAPI() || [];
  const mapData = await googlemapsAPI() || [];
  return { props : { instagramPosts, mapData } }
}

export default top;

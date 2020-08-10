import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Line from '../components/Line';
import Reset from '../static/Reset';
import Style from '../static/Style';
import css from 'styled-jsx/css';

const Layout = ({children}) => {
  return(
    <div id="wrapper">
      <Head>
        <title>横浜のスポーツ整体サロン | Regalo</title>
        <script src="https://use.typekit.net/zzl2axt.js"></script>
        <script dangerouslySetInnerHTML={{ __html: 'try{Typekit.load({ async: false });}catch(e){}' }} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name = "description" content = "横浜（白楽駅徒歩7分）にあるスポーツ整体サロン。体の悩みを解決するオーダーメイドのメニューを提供。" />
        <meta name="twitter:card" content="summary"/>
        <meta property="og:site_name" name="og:site_name" content="Regalo" />
        <meta property="og:description" name="og:description" content="横浜（白楽駅徒歩7分）にあるスポーツ整体サロン。体の悩みを解決するオーダーメイドのメニューを提供。" />
        <meta property="og:title" name="og:title" content="横浜（白楽駅徒歩7分）にあるスポーツ整体サロン。体の悩みを解決するオーダーメイドのメニューを提供。" />
        <meta property="og:type" name="og:type" content="article" />
      </Head>
      {Reset}
      {Style}
      <style jsx>{styles}</style>
      <Header />
        <Line />
      {children}
      <Contact />
      <Footer />
    </div>
  )
}

const styles = css`
a {
}
`

export default Layout;

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
        <link rel="icon" href="../static/favicon.svg" type="image/svg+xml" />
        <script src="https://use.typekit.net/zzl2axt.js"></script>
        <script dangerouslySetInnerHTML={{ __html: 'try{Typekit.load({ async: false });}catch(e){}' }} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name = "description" content = "横浜（白楽駅徒歩7分）にあるスポーツ整体サロン。体の悩みを解決するオーダーメイドのメニューを提供いたします。" />
        <meta property="og:url" content="https://regalo-salon.work/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="横浜のスポーツ整体サロン Regalo" />
        <meta property="og:description" content="横浜（白楽駅徒歩7分）にあるスポーツ整体サロン。体の悩みを解決するオーダーメイドのメニューを提供いたします。" />
        <meta property="og:site_name" content="Regalo" />
        <meta property="og:image" content="../static/OGP.png" />
        <meta name="twitter:card" content="summary"/>
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

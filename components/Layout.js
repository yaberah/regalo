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
    <div className="wrapper">
      <Head>
        <title>横浜の美容整体サロン | Regalo</title>
        <script src="https://use.typekit.net/zzl2axt.js"></script>
        <script dangerouslySetInnerHTML={{ __html: 'try{Typekit.load({ async: false });}catch(e){}' }} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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

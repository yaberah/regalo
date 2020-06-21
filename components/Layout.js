import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Reset from '../static/Reset';
import Style from '../static/Style';
import css from 'styled-jsx/css';

const Layout = ({children}) => {
  return(
    <div className="wrapper">
      <Head>
        <title>横浜の美容整体サロン | Regalo</title>
      </Head>
      {Reset}
      {Style}
      <style jsx>{styles}</style>
      <Header />
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

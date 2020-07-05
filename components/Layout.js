import React from 'react';
import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import Contact from './Contact';
import Reset from '../static/Reset';
import Style from '../static/Style';
import css from 'styled-jsx/css';

const Layout = ({children}) => {

  // Adobe Fonts
  if (typeof window !== 'undefined') {
    // This is only client side.
    (function(d) {
      var config = {
        kitId: process.env.ADOBE_FONTS_KIT_ID,
        scriptTimeout: 3000,
        async: true
      },
      h = d.documentElement,
      t = setTimeout(function () {
          h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
      }, config.scriptTimeout),
      tk = d.createElement("script"),
      f = false,
      s = d.getElementsByTagName("script")[0],
      a;
      h.className += " wf-loading";
      tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
      tk.async = true;
      tk.onload = tk.onreadystatechange = function () {
          a = this.readyState;
          if (f || a && a != "complete" && a != "loaded")
              return;

          f = true;
          clearTimeout(t);
          try {
              Typekit.load(config)
          } catch (e) {}
      };
      s.parentNode.insertBefore(tk, s)})(document);
  }

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

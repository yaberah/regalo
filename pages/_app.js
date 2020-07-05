import App from 'next/app';
import React from 'react';

const MyApp = ({ Component, pageProps }) => {

  // // Adobe Fonts
  // if (typeof window !== 'undefined') {
  //   // This is only client side.
  //   (function(d) {
  //     var config = {
  //       kitId: process.env.ADOBE_FONTS_KIT_ID,
  //       scriptTimeout: 3000,
  //       async: true
  //     },
  //     h = d.documentElement,
  //     t = setTimeout(function () {
  //         h.className = h.className.replace(/\bwf-loading\b/g, "") + " wf-inactive";
  //     }, config.scriptTimeout),
  //     tk = d.createElement("script"),
  //     f = false,
  //     s = d.getElementsByTagName("script")[0],
  //     a;
  //     h.className += " wf-loading";
  //     tk.src = 'https://use.typekit.net/' + config.kitId + '.js';
  //     tk.async = true;
  //     tk.onload = tk.onreadystatechange = function () {
  //         a = this.readyState;
  //         if (f || a && a != "complete" && a != "loaded")
  //             return;
  //
  //         f = true;
  //         clearTimeout(t);
  //         try {
  //             Typekit.load(config)
  //         } catch (e) {}
  //     };
  //     console.log(tk);
  //     console.log(s);
  //     s.parentNode.insertBefore(tk, s)})(document);
  // }

  return <Component {...pageProps} />
}

export default MyApp;

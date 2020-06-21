import React from 'react';
import Link from 'next/Link';
import css from 'styled-jsx/css'

const Contact = () => {
  return(
    <section>
      <h2>ご予約・お問い合わせはこちらから</h2>
      <div>
        <address>
          <a href="tel:09061069510"><img src="../static/Icon_telephone_white.svg" alt="telephone"/>090-6106-9510</a>
          <p>受付時間 9:00-13:00 / 14:30-17:00<br/>(定休日 日曜日・祝日)</p>
        </address>
        <div className="line">
          <Link href="#">
            <a><img src="../static/Icon_line_white.svg" alt="line"/>LINEでのご予約</a>
          </Link>
        </div>
      </div>
      <style jsx>{styles}</style>
    </section>
  )
}

const styles = css`
section{
  margin-top:80px;
  height:250px;
  color:#fff;
  background-image:url("../static/contact_back.png");
  background-position:center;
  position:relative;
  margin-bottom:80px;
}
section:after{
  display:block;
  content:"";
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:0;
  background-color:rgba(104,185,206,0.8);
  backdrop-filter:blur(3px);
}
h2{
  width:100%;
  text-align: center;
  font-size: 24px;
  color:#fff;
  padding: 24px 0;
  position:relative;
  z-index:10;
}
section > div{
  width:100%;
  display: flex;
  position:relative;
  z-index:10;
}
address{
  width:50%;
  text-align:center;
  border-right:1px solid #fff;
  padding: 18px 0;
}
address a{
  display: flex;
  justify-content: center;
  margin-bottom:16px;
}
address > a{
  font-size: 45px;
  color:#fff;
}
address > p{
  font-size: 14px;
  font-family: "YuGothic";
  font-weight:100;
  line-height:1.5em;
}
.line{
  width:50%;
  text-align:center;
}
.line a{
  display:flex;
  margin: 0 auto;
  height:100%;
  color:#fff;
  width:300px;
  border: 1px solid #fff;
  border-radius: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.line img{
  margin-bottom:8px;
}
`

export default Contact;

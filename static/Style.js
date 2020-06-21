import css from 'styled-jsx/css';

const blue = "#68B9CE";
const gray = "#8A969A";

export default <style>{`
  body{
    margin: 0 auto;
    width: 1200px;
    font-family: fot-tsukuardgothic-std,sans-serif;
    font-weight: 700;
    font-style: normal;
    background-image: url("../static/background_circle.svg");
    background-repeat: no-repeat;
    background-color: #F7F7F7;
  }
  a{
    text-decoration: none;
    color:${blue};
  }
  .fv{
    padding-top:15vh;
    height:75vh;
    display: flex;
    align-items: center;
  }
  .fv_left{
    width:394px;
  }
  .fv h2{
    color: ${blue};
    font-size: 24px;
    letter-spacing: 0.2em;
  }
  .fv h1{
    color: ${blue};
    font-size: 3rem;
    letter-spacing: 0.15em;
    line-height:1.4em;
    margin-top:24px;
  }
  .fv p{
    color: ${gray};
    font-size: 15px;
    letter-spacing: 0.15em;
    line-height:2em;
    margin-top:32px;
    margin-bottom:32px;
  }
  .news{
    width: 100%;
    background-color: #fff;
    display:flex;
    height:10vh;
    align-items: center;
  }
  .news h2{
    color: ${blue};
    font-size:18px;
    padding: 0 32px;
    letter-spacing:0.15em;
    border-right: 1px #E3E3E3 solid;
  }
  .news span{
    color: ${blue};
    padding: 0 32px;
  }
  .news .data{
    color: ${gray};
    text-decoration: underline;
  }
  .news .more{
    font-size:14px;
    margin-left: auto;
    padding-right: 56px;
  }
  .news img{
    transform:rotate(270deg);
    margin-left:8px;
  }
  .about{
    background-color: #fff;
    padding: 100px 120px;
    display:flex;
  }
  .about_left{
    width:394px;
  }
  .about h2 {
    font-size: 54px;
    color: ${blue};
    letter-spacing: 0.2em;
    line-height:1.4em;
  }
  .about p {
    margin-top:64px;
    font-size: 16px;
    color: ${gray};
    letter-spacing: 0.15em;
    line-height:1.5em;
    margin-bottom:56px;
  }
  .voice{
    background-color:#fff;
    position:relative;
    padding-bottom:204px;
  }
  .voice::before{
    content : "";
    display: block;
    width:960px;
    height:300px;
    background-color:#F9FCFD;
    position:absolute;
    z-index:1;
    left: 50%;
    top: 30%;
    transform: translate(-50%);
  }
  .voice h2{
    font-size: 32px;
    color: ${blue};
    text-align: center;
    margin-bottom:32px;
    position: relative;
    z-index: 1
  }
  .voice_card{
    max-width:340px;
    height:296px;
    padding:32px 24px 48px;
    box-shadow: 0px 2px 10px 0 rgba(0,0,0,0.04);
    border-radius: 10px;
    box-sizing: border-box;
    margin-right:30px;
    background-color: #fff;
    position:relative;
    z-index:10;
  }
  .voice_card:last-child{
    margin-right:0px;
  }
  .voice_card figure{
    margin-bottom:12px;
    width:82px;
    height:82px;
    border-radius:100px;
    background-color:${blue};
    margin: 0 auto;
  }
  .voice_card span{
    display: inline-block;
    color: ${blue};
    font-size: 12px;
    width:100%;
    text-align:center;
    margin: 12px 0 24px;
  }
  .voice_card_wrapper{
    display:flex;
    justify-content: center;
  }
  .voice_card p{
    font-size: 14px;
    font-family: "Yu-Gothic";
    color: ${gray};
    font-weight: 100;
    line-height:1.8em;
    letter-spacing: 0.15em;
  }
  .instagram{
    padding:88px 0 120px;
    background-color:#fff;
  }
  .instagram h2{
    color:${blue};
    font-size: 32px;
    width: 100%;
    text-align:center;
  }
  .instagram_wrapper{
    margin:44px 120px;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    align-items:flex-start;
  }
  .instagram_item{
    background-color:#F7F7F7;
    width:22%;
    margin-top:24px;
    position: relative;
  }
  .instagram_item::before{
    content: "";
    display: block;
    padding-top : 100%;

  }
  .instagram_item img{
    width: 100%;
    height:100%;
    position: absolute;
    top: 0;
    object-fit: cover;
  }
  .fv_right{
    position:absolute;
    width:76vw;
    right:-9vw;
    z-index:-1;
  }
  .mv{
    clip-path: url(#mask);
  }
  .sub{
    background-color:#fff;
    padding:56px 120px;
    border-top: 1px solid #F7F7F7;
  }
  .sub h3{
    color:${blue};
    font-size:40px;
  }
  .sub p{
    color:${gray};
    margin-top:48px;
    font-size: 16px;
    line-height:1.8em;
  }
  .sub .name{
    color:${blue};
    font-size:20px;
    margin-top:0;
  }
  .sub .name span{
    font-size:16px;
    display:block;
  }
  .sub p dt {
    color:${blue};
    margin-top:16px;
  }
  .sub p dd {
    margin-bottom:16px;
  }
  .sub span{
    color:${blue};
  }
  `}</style>

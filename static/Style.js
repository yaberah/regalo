import css from 'styled-jsx/css';

const blue = "#68B9CE";
const gray = "#8A969A";
const bordergray = "#F7F7F7";

export default <style>{`
  html{
    font-family: fot-tsukuardgothic-std,sans-serif;
    scroll-behavior: smooth;
  }
  @media screen and (min-width: 415px) {
    .sp{
      display:none !important;
    }
    body{
      margin: 0 auto;
      font-weight: 700;
      font-style: normal;
      background-image: url("../static/background_circle.svg");
      background-repeat: no-repeat;
      background-color: #F7F7F7;
      overflow-x: hidden;
    }
    a{
      text-decoration: none;
      color:${blue};
    }
    #wrapper{
      width: 1200px;
      margin: 0 auto;
    }
    .fv{
      padding-top:15vh;
      height:75vh;
      display: flex;
      align-items: center;
    }
    .fv_left{
      width:500px;
      postion:absolute;
      top:160px;
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
      padding: 0px 120px;
    }
    .about_button{
      background-color: #fff;
      width:50%;
      height:160px;
    }
    .about_inner{
      background-color: #fff;
      padding: 100px 0px 0px;
      display:flex;
    }
    .greeting_inner{
      background-color: #fff;
      display:flex;
    }
    .about_left{
      width:44%;
    }
    .greeting_left{
      width:44%;
    }
    .greeting_right{
      width: 60%;
      position:absolute;
      right:-40px;
    }
    .about_right{
      width: 60%;
    }
    .about_right ul{
      display: flex;
      width: 100%;
      flex-wrap: wrap;
      justify-content: space-around;
      margin-top:56px;
    }
    .about_right li{
      width: 25%;
      margin-bottom: 40px;
    }
    .about_right li:nth-child(4){
      margin-left: 15%;
    }
    .about_right li:nth-child(5){
      margin-right: 15%;
    }
    .about_right span{
      text-align:center;
      display: inline-block;
      width: 100%;
      margin-top: 16px;
      color:#8A969A;
    }
    .about_right figure{
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
      display:flex;
      align-items:center;
      justify-content:center;
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
      margin-top:32px;
      padding-bottom: 12px;
      border-bottom: 1px solid ${bordergray};
    }
    .sub h4{
      color:${blue};
      font-size:22px;
      margin-top:24px;
    }
    .sub p{
      color:${gray};
      margin-top:16px;
      font-size: 16px;
      line-height:1.8em;
    }
    .sub .flow{
      margin-top:40px;
      width:100%;
      display: flex;
      justify-content:space-between ;
    }
    .sub .description{
      margin-right:32px;
      width:50%;
    }
    .sub .flow .photo{
      width:50%;
      height:300px;
      background-size:cover;
      background-repeat: no-repeat;
    }
    .sub .flow:nth-child(2) .photo {
      background-image: url("../static/flow_1.jpg");
    }
    .sub .flow:nth-child(3) .photo {
      background-image: url("../static/flow_2.jpg");
      background-position-y: center;
    }
    .sub .flow:nth-child(4) .photo {
      background-image: url("../static/flow_3.jpg");
    }
    .sub .flow:nth-child(5) .photo {
      background-image: url("../static/flow_4.jpg");
      background-position-y: center;
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
    .post-contents h1 {
      font-size: 28px;
      color: ${blue};
      margin: 24px 0;
    }
    .post-contents h2 {
      font-size: 22px;
      color: ${gray};
      margin: 16px 0;
    }
    .post-contents p{
      margin: 0;
    }
    .post-date{
      padding : 0px 120px 24px;
      background-color: #fff;
      color: ${gray};
    }
  }

  @media screen and (max-width: 415px) {
    .pc{
      display:none !important;
    }
    body{
      margin: 0 auto;
      font-weight: 700;
      font-style: normal;
      background-image: url("../static/background_circle.svg");
      background-repeat: no-repeat;
      background-color: #F7F7F7;
      background-size: 230%;
      position:relative;
      overflow-x: hidden;
    }
    .fv_wrapper{
      overflow-x: hidden;
      position: relative
    }
    .fv{
      width: 100%;
      backgrond-color:#F7F7F7;
    }
    .fv_left{
      padding: 120px 24px 0px 24px;
      position:relative;
    }
    .fv_left h2{
      font-size: 18px;
      color: #42B4D1;
    }
    .fv_left h1{
      margin-top:12px;
      font-size: 30px;
      color: #42B4D1;
      font-weight: bold;
      line-height:1.4em;
      letter-spacing: 0.2em;
    }
    .fv_left p{
      margin-top:16px;
      font-size: 14px;
      line-height:1.8em;
      letter-spacing: 0.2em;
      width: 210px;
      color: #5F6060;
      font-weight: bold;
      margin-bottom:120px;
    }
    .fv_right{
      position:absolute;
      width:140vw;
      right:-50vw;
      z-index:-1;
      top:25vh;
    }
    .mv{
      clip-path: url(#mask);
    }
    .news{
      width: 100%;
      background-color: #fff;
      padding: 32px 24px 40px 24px;
      box-sizing: border-box;
    }
    .news h2{
      color: ${blue};
    }
    .news span{
      color: ${blue};
    }
    .news .more{
      display :none;
    }
    .about{
      background-color: #fff;
      padding: 24px 24px 0px 24px;
      display:flex;
      flex-wrap: wrap;
    }
    .about h2 {
      font-size: 40px;
      color: ${blue};
      letter-spacing: 0.2em;
      line-height:1.4em;
    }
    .about p {
      margin-top:32px;
      font-size: 16px;
      color: ${gray};
      letter-spacing: 0.15em;
      line-height:1.5em;
      margin-bottom:56px;
    }
    .about_right{
      width:100%;
    }
    .about_right ul{
      display: flex;
      flex-wrap:wrap;
      justify-content:space-between;
      margin-top:40px;
    }
    .about_right ul li{
      width: 45%;
      font-size:12px;
      color:${gray};
      text-align:center;
      margin-bottom:24px;
    }
    .about_right ul li img{
      width: 100%;
    }
    .about_right ul li:nth-child(2){
      margin: 0px 10px;
    }
    .about_right ul li:nth-child(5){
      padding-left:20px;
    }
    .about_button{
      margin-top:24px;
      width:100%;
    }
    .voice{
      background-color: #fff;
      padding-top:56px;
    }
    .voice h2{
      color:${blue};
      font-size:24px;
      text-align:center;
    }
    .instagram{
      padding:80px 24px 120px;
      background-color:#fff;
    }
    .instagram h2{
      color:${blue};
      font-size: 24px;
      width: 100%;
      text-align:center;
    }
    .instagram_wrapper{
      display:flex;
      flex-wrap:wrap;
      justify-content:space-between;
      align-items:flex-start;
    }
    .instagram_item{
      background-color:#F7F7F7;
      width:47%;
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
    .sub{
      background-color:#fff;
      padding:24px 24px;
      border-top: 1px solid #F7F7F7;
    }
    .sub h3{
      color:${blue};
      font-size:24px;
      margin-top:24px;
    }
    .sub h4{
      color:${blue};
      font-size:18px;
      margin-top:16px;
    }
    .sub p{
      color:${gray};
      margin-top:16px;
      font-size: 16px;
      line-height:1.8em;
    }
    .sub .flow{
      margin-top:40px;
      width:100%;
    }
    .sub .description{
      margin-right:32px;
      width:100%;
    }
    .sub .flow .photo{
      width:100%;
      margin-top:24px;
      height:200px;
      background-size:cover;
      background-repeat: no-repeat;
    }
    .sub .flow:nth-child(2) .photo {
      background-image: url("../static/flow_1.jpg");
    }
    .sub .flow:nth-child(3) .photo {
      background-image: url("../static/flow_2.jpg");
      background-position-y: center;
    }
    .sub .flow:nth-child(4) .photo {
      background-image: url("../static/flow_3.jpg");
    }
    .sub .flow:nth-child(5) .photo {
      background-image: url("../static/flow_4.jpg");
      background-position-y: center;
    }
    .sub p{
      color:${gray};
      margin-top:16px;
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
    .post-contents h1 {
      font-size: 28px;
      color: ${blue};
      margin: 24px 0;
    }
    .post-contents h2 {
      font-size: 22px;
      color: ${gray};
      margin: 16px 0;
    }
    .post-contents p{
      margin: 0;
    }
    .post-date{
      padding : 0px 24px 24px;
      background-color: #fff;
      color: ${gray};
    }
    .greeting_right{
      position: absolute;
      top: 25vh;
      width: 87%;
      right: -35px;
    }
    .greeting_left{
      padding-top: 24vh;
    }
    html{
      overflow-x:hidden;
      scroll-behavior: smooth;
    }
  }

  `}</style>

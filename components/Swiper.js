import React from 'react';
import ReactDOM from 'react-dom';
import Swiper from 'react-id-swiper';
import css from 'styled-jsx/css';


class SimpleSwiper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      params: {
        pagination: {
          el: '.swiper-pagination',
          type: 'bullets',
          clickable: true
        },
        spaceBetween: 24,
        width: 303,
      }
    }
  }
  render() {
    return(
      <div className="swipe_wrapper">
        <Swiper {...this.state.params}>
          <div className="voice_card">
            <figure><img src="../static/Icon_girls.png" alt="女性"/></figure>
            <span>横浜市 29歳 女性</span>
            <p>ずっと腰痛に悩まされてきましたが、REGALOに通うことで、体が楽になり毎日を笑顔で過ごせるようになりました。本当に感謝しています。</p>
          </div>
          <div className="voice_card">
            <figure><img src="../static/Icon_girls.png" alt="女性"/></figure>
            <span>横浜市 29歳 女性</span>
            <p>ずっと腰痛に悩まされてきましたが、REGALOに通うことで、体が楽になり毎日を笑顔で過ごせるようになりました。本当に感謝しています。</p>
          </div>
          <div className="voice_card">
            <figure><img src="../static/Icon_girls.png" alt="女性"/></figure>
            <span>横浜市 29歳 女性</span>
            <p>ずっと腰痛に悩まされてきましたが、REGALOに通うことで、体が楽になり毎日を笑顔で過ごせるようになりました。本当に感謝しています。</p>
          </div>
        </Swiper>
        <style jsx>{styles}</style>
      </div>
    )
  };
}

const styles = css`
  .swipe_wrapper{
    background-color:#F9FCFD;
    padding:40px 0 64px 12px;
    margin-top:-24px;
  }
  .voice_card{
    width:261px;
    height:280px;
    box-shadow: 0px 2px 10px 0 rgba(0,0,0,0.08);
    border-radius: 10px;
    background-color:#fff;
    padding:24px;
    box-sizing: border-box;
    margin:12px;
  }
  .voice_card:last-child{
    margin-right:0px;
  }
  .voice_card figure{
    margin-bottom:12px;
    width:82px;
    height:82px;
    border-radius:100px;
    background-color:#68B9CE;
    margin: 0 auto;
    display:flex;
    align-items:center;
    justify-content:center;
  }
  .voice_card span{
    display: inline-block;
    color: #68B9CE;
    font-size: 12px;
    width:100%;
    text-align:center;
    margin: 12px 0 24px;
  }
  .voice_card p{
    font-size: 13px;
    font-family: "Yu-Gothic";
    color: #8A969A;
    font-weight: 100;
    line-height:1.8em;
    letter-spacing: 0.15em;
  }
`


export default SimpleSwiper;

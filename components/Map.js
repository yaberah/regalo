import React from 'react';
import css from 'styled-jsx/css';
import GoogleMapReact from 'google-map-react';

const Pin = (props) => {
  return(
    <div>
      <img src="../static/logo_v_white.svg" alt="Regaloの場所"/>
      <style jsx>{styles}</style>
    </div>
  )
}

const Map = () => {
  return(
    <GoogleMapReact
      bootstrapURLKeys={{
        key: process.env.GOOGLE_API_KEY,
      }}
      defaultCenter={{
        lat: 35.487099,
        lng: 139.625780
      }}
      defaultZoom={15}
    >
    <Pin
      lat={35.487099}
      lng={139.625780}
    >
    Regalo
    </Pin>
    </GoogleMapReact>
  )
}

const styles = css`
div{
  width:50px;
  height:50px;
  background-color:#68B9CE;
  text-align:center;
  line-height:50px;
  padding:10px;
  border-radius:100px;
  box-shadow: 0 2px 20px 0 rgba(0,0,0,0.2);
  position:absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -100%);
}
div::before{
  content:"";
  display:block;
  width:0;
  height:0;
  position:absolute;
  left: 50%;
  bottom: -18px;
  transform: translateX(-50%);
  border-top:14px solid #68B9CE;
  border-left:8px solid transparent;
  border-right:8px solid transparent;
  border-bottom:10px solid transparent;
}
div img{
  vertical-align: middle;
  width: 100%;
}
`

export default Map;

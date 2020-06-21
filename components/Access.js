import React from 'react';
import css from 'styled-jsx/css';
import Map from './Map';

const Access = (props) => {
  const map_style = props.type === 'top' ? 'top' : 'sub';
  return(
    <section className={map_style}>
      <div className="map_wrapper">
        <Map />
      </div>
      <address>
        <dl>
          <dt>所在地</dt>
          <dd>神奈川県横浜市神奈川区六角橋1丁目11-2ビルヌーヴ白楽403</dd>
          <dt>アクセス</dt>
          <dd>
            <p>電車でお越しの方<br/>・東急東横線 白楽駅西口より徒歩4分</p>
            <p>バスでお越しの方<br/>・横浜市営バス 「六角橋」停留所より徒歩2分</p>
          </dd>
          <dt>診療時間</dt>
          <dd>
            <p>9:00 - 13:00 / 14:30 - 17:00 </p>
            <p>定休日 日曜日・祝日</p>
            <table>
              <tbody>
                <tr>
                  <th>受付時間</th>
                  <th>月</th>
                  <th>火</th>
                  <th>水</th>
                  <th>木</th>
                  <th>金</th>
                  <th>土</th>
                  <th>日</th>
                </tr>
                <tr>
                  <td>9:00-13:00</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>×</td>
                </tr>
                <tr>
                  <td>14:30-17:00</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>○</td>
                  <td>×</td>
                </tr>
              </tbody>
            </table>
          </dd>
        </dl>
      </address>
      <style jsx>{styles}</style>
    </section>
  )
}

const styles = css`
section{
  background-color: #fff;
}
.top .map_wrapper{
  background-color:gray;
  width:100vw;
  position:relative;
  left: 50%;
  transform: translateX(-50%);
  height:500px;
}
.sub .map_wrapper{
  background-color:gray;
  width:100%;
  position:relative;
  left: 50%;
  transform: translateX(-50%);
  height:500px;
}
address{
  width:960px;
  margin: 0 auto;
  margin-top:48px;
  letter-spacing: 0.15em;
  line-height:1.5em;
}
dl{
  display: flex;
  flex-wrap:wrap;
}
dt{
  width:20%;
  color: #42B4D1;
  font-size:20px;
  border-bottom:1px solid #F7F7F7;
  padding: 32px 0;
}
dd{
  width:80%;
  color: #8A969A;
  font-size:16px;
  border-bottom:1px solid #F7F7F7;
  padding: 32px 0;
}
table{
  margin-top:32px;
  width:100%;
  background-color:red;
  text-align:center;
  border: 1px solid #F7F7F7;
}
th{
  background-color:#68B9CE;
  color:#fff;
  height:48px;
  line-height:48px;
  border: 1px solid #F7F7F7;
}
td{
  background-color:#fff;
  color:#AAAAAA;
  height:48px;
  line-height:48px;
  border: 1px solid #F7F7F7;
}
th:first-child,td:first-child{
  width:20%;
}
dt:last-of-type,dd:last-of-type{
  border: none;
}
`

export default Access;

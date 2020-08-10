import React from 'react';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import Subpage from '../components/Subpage';
import Button from '../components/Button';
import css from 'styled-jsx/css';

const about = () => {
  return(
    <div>
      <Layout>
        <Subpage title="はじめに" enTitle="ABOUT">
          <section className="sub">
            <div className="greeting_inner">
              <div className="greeting_left">
                <h3>ご挨拶</h3>
                <p>はじめまして。<br />笑顔を届けるスポーツ整体サロンRegalo院長の横田友滉と申します。日々の生活において「笑顔になること」が何よりも大切にしています。お体の悩みを一緒になって向き合い、解決していくことで、人生が充実し、幸せを感じる結果を出します。
                  <li>大会で結果を出したい</li>
                  <li>怪我に悩まない身体になりたい</li>
                  <li>痛みの多い身体を治したい</li>
                  <li>ボールを投げると肩が痛い</li>
                  <li>動いても座っていても腰が痛い</li>
                  <li>頭痛が起こりやすい</li>
                  このような悩みの方、一緒に問題解決して行きませんか？？あなたの人生をより充実し、より幸せに<br/><br/><span>Make you smile.</span><br/><br/>あなたの笑顔のために協力させていただきます。</p>
              <br/><br/>
              <p className="name"><span>REGALO 代表</span>横田 友滉</p>
            </div>
            <div className="greeting_right">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -50 700 790">
                <path d="M450.147-8.476C634.988,31.88,697.9,215.166,661.794,374.2S541.657,598.426,345.069,608.315,32.806,407.541,82.764,243.342,265.306-48.831,450.147-8.476Z" transform="translate(1.948 10)" transform="translate(30,30)" fill="#CDE9F0"/>
                <image className="mv" href="../static/mv_image01.jpg" width="170%" height="130%" x="-320" y="-220" />
                <clipPath id="mask">
                  <path d="M450.147-8.476C634.988,31.88,697.9,215.166,661.794,374.2S541.657,598.426,345.069,608.315,32.806,407.541,82.764,243.342,265.306-48.831,450.147-8.476Z" transform="translate(1.948 10)" />
                </clipPath>
              </svg>
            </div>
            </div>
          </section>
          <section className="sub">
            <h3>プロフィール</h3>
            <p>新潟県三条市出身
              <br/>
                高校では、野球部に所属して甲子園を目指して努力していました。しかし、腰の痛みが日常的にあり、椅子に座って勉強することすら辛かったです。そのため、部活を全力で行えず、精神的にも辛い競技人生でした。
              <span>「自分と同じように怪我で悩む人を救いたい」</span>、この想いから整体サロンを開業しております。
              <dl>
                <dt>横浜市内の整形外科クリニック（2015〜2018）</dt>
                <dd>①疼痛改善リハビリ（頚部痛、頭痛、肩痛、腰痛、股関節痛、膝痛など）<br/>
                ②整形外科分野のリハビリ（骨折・靭帯損傷・筋損傷など）<br/>
                ③スポーツリハビリ（スポーツ障害後から復帰まで、パフォーマンス向上など）<br/>
                ④スポーツトレーナー（2017年バスケットボールインターハイ帯同、フットサルチーム帯同、社会人野球チーム帯同）<br/>
                →述べ2,000人を超える方の施術に携わりました。<br/></dd>
                <dt>整体サロンRegalo〜レガーロ〜開業（2018〜現在）</dt>
                ・疼痛改善整体（腰痛、膝痛、肩痛、頭痛など<br/>
                ・スポーツパーソナルトレーナー（学生・アマチュア・プロスポーツ）<br/>
                ・スポーツチームトレーナー（社会人野球チーム帯同）<br/>
                <dd></dd>
              </dl>
            </p>
          </section>
        </Subpage>
      </Layout>
    </div>
  )
}


export default about;

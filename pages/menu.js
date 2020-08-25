import React from 'react';
import NextLink from 'next/link';
import Layout from '../components/Layout';
import Subpage from '../components/Subpage';
import Button from '../components/Button';
import css from 'styled-jsx/css'

const menu = () => {
  return(
    <div>
      <Layout>
        <Subpage title="メニュー" enTitle="Menu">
          <section className="sub">
            <p>REGALO(レガ-ロ)では患者の皆さんの不調を改善できる施術を提供し、体だけでなく心も健康になれるようにサポート致します。</p>
            <h3>初回限定メニュー</h3>
            <p>体験90分 ¥3,000円</p>
            <h3>２回目以降のメニュー</h3>
            <p>60分：¥6,000<br/>90分：¥8,000</p>
            <h3>回数券(1回90分)</h3>
            <p>5回数券 ¥30,000（¥6,000/回）<br/>10回回数券 ¥50,000（¥5,000/回）</p>
            <h3>長期コースメニュー</h3>
            <h4>ボディメンテナンスコース：6ヶ月 ¥200,000 （＝1ヶ月 約¥33,000）</h4>
            <p>例）怪我が再発しない身体づくりを行いたい方や、痛みのある競技生活から抜け出したい方など</p>
            <h4>スキルレベルアップコース：6ヶ月 ¥300,000 （＝1ヶ月 約¥50,000）</h4>
            <p>例）大会で結果が残せる身体づくりをしたい方や、現状よりも高みのステージへチャレンジしたい方など</p>
          </section>
          <section className="sub">
            <h3>施述の流れ</h3>
            <div className="flow">
              <div className="description">
                <h4>1.問診</h4>
                <p>お悩みや、ご希望、症状をお聞かせください。運動状況や生活状況の詳細を聞かせていただくこともあります。</p>
              </div>
              <div className="photo">
              </div>
            </div>
            <div className="flow">
              <div className="description">
                <h4>2.評価</h4>
                <p>お悩みに合わせて入念に治療前の評価をさせていただきます。</p>
                <p>例1.腰痛の方<br/>
                →立位前屈で柔軟性を数字でチェック。健康的な関節角度に対して現状チェック。</p>
              <p>例2.野球をしてボールを投げる時に肩が痛む<br/>
              →動作を実際に行ってもらったり、動画を見せていただき、負荷のかかっている場所やウィークポイントを見つけていきます。</p>
              </div>
              <div className="photo">
              </div>
            </div>
            <div className="flow">
              <div className="description">
                <h4>3.施術</h4>
                <p>お悩みに合わせた整体メニュー・トレーニングの施術を行います。</p>
              </div>
              <div className="photo">
              </div>
            </div>
            <div className="flow">
              <div className="description">
                <h4>4.再評価（効果判定）</h4>
                <p>2.の評価をもう一度行い、効果の判定を行います。</p>
              </div>
              <div className="photo">
              </div>
            </div>
            <div className="flow">
              <div className="description">
                <h4>5.アフターフォロー</h4>
                <p>これからの方針・スケジュールを決めて、お家で行えるメニューや、生活習慣についてアドバイスさせていただきます。</p>
              </div>
            </div>
          </section>
        </Subpage>
      </Layout>
      <style jsx>{styles}</style>
    </div>
  )
}

const styles = css`

`

export default menu;

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

            <h3>⭐️LINE友達追加特典⭐️</h3>
            <p>初回体験  ¥3,000 （約90分）<br />※定期チェックコースに準じた内容</p>

            <h3>月額コースメニュー</h3>
            <h4>オンラインコース</h4>
            <p>月1回　¥3,000 (学割 ¥2,000)<br />オンラインでのトレーニング提供（約60分/回）</p>
            <h4>定期チェックコース</h4>
            <p>月1回　¥5,000 (学割 ¥3,000)<br />身体評価、施術、自主トレ提供（約90分/回）</p>
            <h4>チャレンジコース⭐️オススメ</h4>
            <p>月2回　¥10,000 (学割 ¥6,000)<br />身体評価、施術、自主トレ提供（約120分/回）</p>
            <h4>コミットコース</h4>
            <p>月2回　¥20,000 (学割 ¥12,000)<br />カウセリング、ボディチェック、月2回施術、自主トレ提供、パーソナル動画提供、競技動作評価などなど（約120分/回）</p>

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

import tokikawaImg from '../assets/image/tokikawa.jpg'
import '../styles/Team.css'

export default function Team() {
  return (
    <section id="team" className="team-main">
      <div />{/* spacer for sidebar column */}

      <div className="team-content">
        <h1 className="team-heading">Team</h1>
        <div className="team-bar" />

        <p className="team-role">代表取締役 時川 鉄平</p>
        <h2 className="team-name">Teppei Tokikawa</h2>

        <div className="team-member">
          <div className="team-member-text">
            <div className="team-bio">
              <p>福岡県朝倉市出身。高校卒業後、福岡市内へ。<br />バンド活動に勤しむも挫折。</p>
              <p>バイト先のレンタルビデオ店で映画に溺れ、映像表現の魅力される。Adobeツールを手に、創作の世界へ没入。<br/>さらに、趣味のゲームを自ら制作したいと思いプログラマーへも転身。</p>
              <p>2011年に福岡市で創業、翌年にはフィリピンのセブ島でも開発拠点やITスクールを立ち上げる。デザイン・プログラミング・英語力を融合した国際的事業展開と人材育成モデルを確立する。</p>
              <p>デジタルからアナログへの回帰を見据え、世界に一斉に配信できるデジタルサイネージシステムを開発、世界展開を目指す。</p>
            </div>
          </div>

          <div className="team-member-photo">
            <img src={tokikawaImg} alt="Teppei Tokikawa" className="team-photo" />
          </div>
        </div>
      </div>
    </section>
  )
}

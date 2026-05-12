import dropImg from '../assets/image/drop.webp'
import '../styles/AboutUs.css'

export default function AboutUs() {
  return (
    <section id="about" className="au-main">
      <div />

      <div className="au-content">
        <div className="au-image-wrap">
          <img src={dropImg} alt="Water droplet" className="au-image" />
        </div>

        <div className="au-text">
          <h1 className="au-heading">About Us</h1>
          <div className="au-bar" />

          <p className="au-body">
            社名の語源は、水面に落ちた時の波紋＝Ripplesと＋Plusを日本語にして、リプタスです。伝え方（広がり、繋がり）を常に追求する」その理念の下、デジタルサイネージのご提案をさせて頂いています。
          </p>

          <p className="au-tagline">
            "伝わる" をデザインし、クリエイティブで豊かな社会をつくる。
          </p>

          <ul className="au-list">
            <li>誤解させない、正しく伝わる健全なコンテンツをつくる会社でありたい</li>
            <li>溢れる情報の中から最適に出逢えるようなコンテンツを作る会社でありたい</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

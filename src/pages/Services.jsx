import serviceImg from '../assets/image/riptus-service.jpg'
import '../styles/Services.css'

export default function Services() {
  return (
    <section id="services" className="sv-main">
      <div />{/* spacer for sidebar column */}

      <div className="sv-content">
        <h1 className="sv-heading">Service</h1>
        <div className="sv-bar" />

        <div className="sv-body">
          <div className="sv-items">
            <div className="sv-item">
              <h2 className="sv-item-title">デジタルサイネージの設置</h2>
              <p className="sv-item-text">
                店頭に広告を設置させていただく事で、店舗様の収益増加を担わせて頂きます。
              </p>
            </div>

            <div className="sv-item">
              <h2 className="sv-item-title">法人様からの広告代理</h2>
              <p className="sv-item-text">
                成果報酬制で広告を担わせて頂きます。動画広告制作や設置場所のご提案もさせていただきます。
              </p>
            </div>
          </div>

          <div className="sv-image-wrap">
            <img src={serviceImg} alt="Service" className="sv-image" />
          </div>
        </div>
      </div>
    </section>
  )
}

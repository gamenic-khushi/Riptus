import { useState } from 'react'
import '../styles/Contact.css'

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwU90swn3IWxXOh4pdxs7poC-E9E74NlVCr4IJff7s97eM5ouSsNO4BfCFQ8mf3YsmT/exec'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState(null)

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      setStatus('sent')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="ct-main">
      <div />{/* spacer for sidebar column */}

      <div className="ct-content">
        <h1 className="ct-heading">Contact</h1>
        <div className="ct-bar" />

        <div className="ct-address">
          <p>〒979-1308</p>
          <p>株式会社リプタス</p>
          <p>福島県双葉郡大熊町下野上清水２３０大熊インキュベーションセンター内</p>
        </div>

        <form className="ct-form" onSubmit={handleSubmit}>
          <div className="ct-field">
            <label className="ct-label">氏名</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="ct-input"
              required
            />
          </div>

          <div className="ct-field">
            <label className="ct-label">メールアドレス</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="ct-input"
              required
            />
          </div>

          <div className="ct-field">
            <label className="ct-label">題名</label>
            <input
              type="text"
              name="subject"
              value={form.subject}
              onChange={handleChange}
              className="ct-input"
              required
            />
          </div>

          <div className="ct-field">
            <label className="ct-label">メッセージ本文 (任意)</label>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              className="ct-textarea"
              rows={6}
            />
          </div>

          <button type="submit" className="ct-submit" disabled={status === 'sending'}>
            {status === 'sending' ? '送信中...' : '送信'}
          </button>

          {status === 'sent' && <p className="ct-success">送信しました！</p>}
          {status === 'error' && <p className="ct-error">エラーが発生しました。もう一度お試しください。</p>}
        </form>
      </div>
    </section>
  )
}

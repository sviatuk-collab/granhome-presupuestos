import './App.css'
import logo from './assets/logo.png'

function App() {
  return (
    <>
      {/* HERO */}
      <header className="hero">
        <img src={logo} alt="GranHome logo" className="logo" />

        <h1>GranHome</h1>
        <p className="subtitle">Construcción y Reformas en Madrid</p>

        <div className="actions">
          <a href="#presupuesto" className="btn primary">
            Solicitar presupuesto
          </a>
          <a href="https://wa.me/34602418334" className="btn secondary">
            WhatsApp
          </a>
        </div>
      </header>

      {/* SERVICIOS */}
      <section className="services">
        <h2>Servicios</h2>

        <div className="grid">
          <div>🏠 Reforma integral</div>
          <div>🚿 Fontanería</div>
          <div>⚡ Electricidad</div>
          <div>🧱 Albañilería</div>
          <div>🎨 Pintura</div>
          <div>🪟 Carpintería</div>
        </div>
      </section>

      {/* PRESUPUESTO */}
      <section id="presupuesto" className="form">
        <h2>Solicitar presupuesto</h2>

        <form>
          <input placeholder="Nombre" />
          <input placeholder="Teléfono" />
          <input placeholder="Dirección de la obra" />

          <select>
            <option>Reforma integral</option>
            <option>Fontanería</option>
            <option>Electricidad</option>
            <option>Otros</option>
          </select>

          <select>
            <option>IVA 10%</option>
            <option>IVA 21%</option>
          </select>

          <textarea placeholder="Describe el trabajo" />

          <button className="btn primary">Enviar</button>
        </form>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <p>GranHome · Construcción y Reformas</p>
        <p>Madrid · Tel: 602 418 334</p>
      </footer>
    </>
  )
}

export default App
import { useState } from "react"
import "./App.css"
import logo from "./assets/logo.png"
import { texts } from "./data/texts"
import { calculateTotal } from "./utils/calculate"
import { generatePDF } from "./utils/pdf"

function App() {
  const [lang, setLang] = useState("es")
  const t = texts[lang]

  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    work: "reforma",
    description: "",
    base: 0,
    iva: 10
  })

  const total = calculateTotal(Number(form.base), Number(form.iva))

  const sendWhatsApp = () => {
    const msg = `
GranHome Presupuesto
${t.name}: ${form.name}
${t.phone}: ${form.phone}
${t.address}: ${form.address}
${t.work}: ${t.trabajos[form.work]}
${t.iva}: ${form.iva}%
${t.total}: €${total}
`
    window.open(
      `https://wa.me/34602418334?text=${encodeURIComponent(msg)}`,
      "_blank"
    )
  }

  return (
    <>
      <header className="hero">
        <img src={logo} className="logo" />
        <h1>GranHome</h1>
        <p>{t.title}</p>

        <div className="lang">
          <button onClick={() => setLang("es")}>ES</button>
          <button onClick={() => setLang("ua")}>UA</button>
        </div>
      </header>

      <section className="form">
        <h2>{t.presupuesto}</h2>

        <input placeholder={t.name} onChange={e => setForm({...form, name: e.target.value})}/>
        <input placeholder={t.phone} onChange={e => setForm({...form, phone: e.target.value})}/>
        <input placeholder={t.address} onChange={e => setForm({...form, address: e.target.value})}/>

        <select onChange={e => setForm({...form, work: e.target.value})}>
          {Object.keys(t.trabajos).map(k => (
            <option key={k} value={k}>{t.trabajos[k]}</option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Base €"
          onChange={e => setForm({...form, base: e.target.value})}
        />

        <select onChange={e => setForm({...form, iva: Number(e.target.value)})}>
          <option value={10}>IVA 10%</option>
          <option value={21}>IVA 21%</option>
        </select>

        <textarea placeholder={t.description}
          onChange={e => setForm({...form, description: e.target.value})}
        />

        <p><strong>{t.total}: €{total}</strong></p>

        <button onClick={sendWhatsApp}>{t.send}</button>
        <button onClick={() => generatePDF({...form, total})}>
          PDF
        </button>
      </section>
    </>
  )
}

export default App

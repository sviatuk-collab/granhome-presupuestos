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

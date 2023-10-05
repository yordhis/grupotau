import { useState } from 'react'
import { FaBuffer, FaWhatsappSquare, FaWhatsapp } from 'react-icons/fa'

import logo from './assets/img/INVERTAU-LOGOTIPO-43.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const mensaje = "Saludos me gustaria conocer los servicio que ofrece su empresa."
  return (
    <>
    
      <div>
        <a href="#" target="_self">
          <img src={logo} className="logo" alt="Logo GrupoTau" />
        </a>
       
      </div> 
      <h1>Grupotau.net</h1>
      <h4>Próximamente - Sitio en construcción</h4>
      <div className="card">
        <a href="https://wa.me/581811469?text='Saludos, Quiero conocer sus servicios.'" className='icono-whatsapp'>
          <FaWhatsapp />
        </a>
        <p className='text-info'>
          Escríbenos por whatsapp y conoce nuestro servicios
        </p>

        <p className='footer'>
          Desarrollado por <a href="https://cyberstaffstore.com">
            Cyber Staff C.A
          </a>
        </p>
      </div>
    </>
  )
}

export default App

import React from 'react'
import { Link } from  "react-router-dom"

// El componente Cabera no tiene componentes hijos.
// ESTADO: Cabecera no tiene estado.
// MÉTODOS: Cabecera no tiene métodos.
// PROPS: Cabecera recibe de su padre la cantidad que va a mostrar dentro del span correpondiente
// Maqueta de Cabecera:
//    h1
//    p > span     (el span mostrará la cantidad recibida por props)

export default function Cabecera(props) {
  const{totalCompra}= props;
  
  return (
    <header>
        {/* maquetar Cabecera aquí */}
        
      <button><Link to={"/"}>Comprar</Link> </button>
      <button><Link to={"/aboutus"}>About Us</Link> </button>
      <h1>Carrito de compras</h1>
      <p>Cantidad de productos <span>{totalCompra}</span></p>
        
    </header>
  )
}

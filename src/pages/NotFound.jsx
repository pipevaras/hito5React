import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const NotFound = () => {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4">¡Vaya!</h1>
      <h2 className="text-muted">404 - Página no encontrada</h2>
      <p className="lead">
        La página que estás buscando no existe. Puede que haya sido movida o
        eliminada.
      </p>
      <img
        src="https://via.placeholder.com/400?text=404+Not+Found"
        alt="Página no encontrada"
        className="img-fluid my-4"
      />
      <a href="/" className="btn btn-primary">
        Volver al inicio
      </a>
    </div>
  )
}

export default NotFound

import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const Profile = ({ email, onLogout }) => {
  return (
    <div className="container mt-5">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Perfil de Usuario</h5>
          <p className="card-text">Email: cliente@mammamia.cl</p>
          {/*<p className="card-text">Email: {email}</p>*/}
          <button className="btn btn-danger" onClick={onLogout}>
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  )
}

export default Profile

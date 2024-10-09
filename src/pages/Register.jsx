import { useState } from 'react'
const Register = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [confirmPass, setConfirmPass] = useState('')
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [error3, setError3] = useState(false)
  const [success, setSuccess] = useState(false)

  const validarRegistro = (e) => {
    e.preventDefault()
    if (!email.trim() || !pass.trim() || !confirmPass.trim()) {
      setError1(true)
      setError2(false)
      setError3(false)
      setSuccess(false)
      return
    } else if (pass.length < 6) {
      setError1(false)
      setError2(true)
      setError3(false)
      setSuccess(false)
      return
    } else if (pass != confirmPass) {
      setError1(false)
      setError2(false)
      setError3(true)
      setSuccess(false)
      return
    }
    setError1(false)
    setError2(false)
    setError3(false)
    setSuccess(true)
  }

  return (
    <>
      <h2>Registro</h2>
      <form className="formulario" onSubmit={validarRegistro}>
        {error1 ? (
          <p className="error">Debes completar todos los campos</p>
        ) : null}
        {error2 ? (
          <p className="error">
            Tu contraseña debe tener al menos 6 caracteres
          </p>
        ) : null}
        {error3 ? (
          <p className="error">
            La contraseña y el confirmar Password deben ser iguales
          </p>
        ) : null}
        {success ? <p className="exito">¡Registro exitoso!</p> : null}
        <div className="form-group">
          <label>Email</label>
          <input
            type="text"
            name="email"
            className="form-control"
            placeholder="Ingresa tu email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="text"
            name="password"
            className="form-control"
            placeholder="Ingresa una contraseña de minimo 6 caracteres"
            onChange={(e) => setPass(e.target.value)}
            value={pass}
          />
        </div>
        <div className="form-group">
          <label>confirmar Password</label>
          <input
            type="text"
            name="confirmPass"
            className="form-control"
            placeholder="Repite la contraseña ingresada"
            onChange={(e) => setConfirmPass(e.target.value)}
            value={confirmPass}
          />
        </div>
        <button type="submit" className="btn btn-success">
          Registrar
        </button>
      </form>
    </>
  )
}
export default Register

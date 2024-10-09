import { useState } from 'react'
const Login = () => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [error1, setError1] = useState(false)
  const [error2, setError2] = useState(false)
  const [success, setSuccess] = useState(false)

  const validarLogin = (e) => {
    e.preventDefault()
    if (!email.trim() || !pass.trim()) {
      setError1(true)
      setError2(false)
      setSuccess(false)

      return
    } else if (pass.length < 6) {
      setError1(false)
      setError2(true)
      setSuccess(false)

      return
    }
    setError1(false)
    setError2(false)
    setSuccess(true)
  }

  return (
    <>
      <h2>Login</h2>
      <form className="formulario" onSubmit={validarLogin}>
        {error1 ? (
          <p className="error">Debes completar todos los campos</p>
        ) : null}
        {error2 ? (
          <p className="error">
            Tu contraseña debe tener al menos 6 caracteres
          </p>
        ) : null}
        {success ? <p className="exito">¡Ingreso exitoso!</p> : null}
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
        <button type="submit" className="btn btn-success">
          Login
        </button>
      </form>
    </>
  )
}
export default Login

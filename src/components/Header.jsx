import './Header.css'

const Header = () => {
  return (
    <>
      <div className="header-container">
        <img src="/src/assets/Header.jpg" alt="" className="header-image" />
        <div className="header-text">
          <p>¡Pizzería Mamma Mia!</p>
          <p style={{ fontSize: '10px' }}>
            Tenemos las mejores pizzas que podrás encontrar
          </p>
          <hr
            style={{
              border: 'none',
              bordertop: '2px solid white',
              margin: '20px 0',
              width: '1000px',
            }}
          ></hr>
        </div>
      </div>
    </>
  )
}
export default Header

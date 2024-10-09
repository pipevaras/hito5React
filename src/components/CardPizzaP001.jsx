import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import React from 'react'
import '/src/index.css'

const CardPizzaP001 = ({ name, price, ingredients = [], img, desc }) => {
  const formatNumber = (num) => new Intl.NumberFormat('es-ES').format(num)
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>
          Pizza {name}
          <p style={{ fontSize: '10px' }}>{desc}</p>
        </Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          <p>Ingredientes:</p>
          <ul>
            {ingredients.map((ingredient, index) => (
              <li key={index}>
                <img src="/src/assets/icons8-pizza-16.png" alt="" />
                {ingredient}
              </li>
            ))}
          </ul>
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <p className="price-pizza">
          <strong>Precio: ${formatNumber(price)}</strong>
        </p>
        {/*<Button variant="light">
          Ver Más
          <img
            style={{ width: '16px' }}
            src="src/assets/icons8-eyes-48.png"
            alt=""
          />
        </Button>*/}
        <Button variant="dark">
          <img
            style={{ width: '16px' }}
            src="src/assets/icons8-cart-48.png"
            alt=""
          />
          Añadir
        </Button>
      </Card.Body>
    </Card>
  )
}

export default CardPizzaP001

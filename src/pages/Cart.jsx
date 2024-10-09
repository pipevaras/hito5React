import { pizzaCart } from '../pizzas'
import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import Button from 'react-bootstrap/Button'
import React, { useState } from 'react'
import '/src/index.css'

const Cart = () => {
  const [listaPizzasCart, setListaPizzasCart] = useState(pizzaCart)
  const formatNumber = (num) => num.toLocaleString()
  const sumarCantidad = (id) => {
    setListaPizzasCart((prevLista) =>
      prevLista.map((pizza) =>
        pizza.id === id ? { ...pizza, count: pizza.count + 1 } : pizza,
      ),
    )
  }
  const restarCantidad = (id) => {
    setListaPizzasCart((prevLista) => {
      const nuevaLista = prevLista.map((pizza) =>
        pizza.id === id && pizza.count > 0
          ? { ...pizza, count: pizza.count - 1 }
          : pizza,
      )

      return nuevaLista.filter((pizza) => pizza.count > 0)
    })
  }

  return (
    <>
      {listaPizzasCart.map((pizza) => (
        <Card key={pizza.id} style={{ width: '18rem' }}>
          <Card.Img variant="top" src={pizza.img} />
          <Card.Body>
            <Card.Title>Pizza {pizza.name}</Card.Title>
          </Card.Body>
          <ListGroup className="list-group-flush"></ListGroup>
          <Card.Body>
            <p className="price-pizza">
              <strong>Precio: ${formatNumber(pizza.price)}</strong>
            </p>
            <Button variant="light" onClick={() => restarCantidad(pizza.id)}>
              -
            </Button>
            <p>{pizza.count}</p>

            <Button variant="dark" onClick={() => sumarCantidad(pizza.id)}>
              +
            </Button>
          </Card.Body>
        </Card>
      ))}
      <Button>Pagar</Button>
    </>
  )
}

export default Cart

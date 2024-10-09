import { useState, useEffect } from 'react'
import Header from '../components/Header'
import CardPizzaP001 from '../components/CardPizzaP001'

const Pizza = () => {
  const [pizzaP001, setPizzaP001] = useState([])

  useEffect(() => {
    apiPizza()
  }, [])

  const apiPizza = async () => {
    const url = 'http://localhost:5000/api/pizzas/p001'
    const response = await fetch(url)
    const data = await response.json()
    setPizzaP001(data)
  }
  console.log(pizzaP001)

  return (
    <>
      <Header />
      <div className="Cards-pizzas">
        <CardPizzaP001
          key={pizzaP001.id}
          name={pizzaP001.name}
          price={pizzaP001.price}
          ingredients={pizzaP001.ingredients}
          img={pizzaP001.img}
          desc={pizzaP001.desc}
        />
      </div>
    </>
  )
}

export default Pizza

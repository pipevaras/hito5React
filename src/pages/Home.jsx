import Header from '../components/Header'
import CardPizza from '../components/CardPizza'
import '../components/Home.css'
import { pizzas } from '../pizzas'
import { useState, useEffect } from 'react'

const Home = () => {
  const [listaPizzas, setListaPizzas] = useState([])

  useEffect(() => {
    apiPizzas()
  }, [])

  const apiPizzas = async () => {
    const url = 'http://localhost:5000/api/pizzas'
    const response = await fetch(url)
    const data = await response.json()
    setListaPizzas(data)
  }
  return (
    <>
      <Header />
      <div className="Cards-pizzas">
        {listaPizzas.map((pizza) => (
          <CardPizza
            key={pizza.id}
            name={pizza.name}
            price={pizza.price}
            ingredients={pizza.ingredients}
            img={pizza.img}
            desc={pizza.desc}
          />
        ))}
      </div>
    </>
  )
}
export default Home

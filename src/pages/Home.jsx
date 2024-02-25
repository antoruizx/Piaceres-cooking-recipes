import React from 'react'
import Carrousel from '../components/Carrousel';
import Cards from '../components/Cards';
import Card from '../components/Card';

const Home = () => {
  return (
    <div>
        <Carrousel />
        <Card 
        img="https://images.pexels.com/photos/2480807/pexels-photo-2480807.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="Nuggets veganos"
        description="Podemos hacer nuestros nuggets con restos de lo que tengamos en la nevera, como lentejas, coliflor, garbanzos o tofu."
        difficulty="Dificultad: media."
        />
    </div>
  )
}

export default Home;
import React from 'react';
import PizzaItem from '../../components/pizzaItem';
import Sort from '../../components/sort';
import Categories from '../../components/categories';
const Home = () => {
const [pizzas, setPizzas] = React.useState([]);
React.useEffect(() => {
  fetch("http://localhost:3000/db.json")
  .then(res => res.json())
  .then(({pizzas}) => setPizzas(pizzas))
  },[])
    return (
      <div className="wrapper">
        <div className='content'>
        <div className='container'>
          <div className='content__top'>
            <Categories items={['Все','Мясные', 'Вегетарианские', 'Гриль', 'Острый', 'Зеленые']}/>
            <Sort/>
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
           {pizzas.map(item => {
             return <PizzaItem {...item}/>
           })}
          </div>
        </div>
        </div>
        </div>
 
     
    )
}

export default Home;

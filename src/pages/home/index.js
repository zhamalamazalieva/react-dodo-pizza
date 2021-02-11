import React from 'react';
import PizzaItem from '../../components/pizzaItem';
import Item from '../../components/item';
import Sort from '../../components/sort';
import Categories from '../../components/categories';
import SearchBar from '../../components/search';

const Home = () => {
const [pizzas, setPizzas] = React.useState([]);
const [snacks, setSnacks] = React.useState([]);
const [desserts, setDesserts] = React.useState([]);
const [drinks, setDrinks] = React.useState([]);
const [searchValue, setSearchValue] = React.useState('');

React.useEffect(() => {
  fetch("http://localhost:3000/db.json")
  .then(res => res.json())
  .then(({pizzas, snacks,desserts , drinks}) => {
    setPizzas(pizzas);
    setSnacks(snacks);
    setDesserts(desserts);
    setDrinks(drinks);
    }
  
  )},[])
    return (
      <div className="wrapper">
        <div className='content'>
        <div className='container'>
          <div className="search__bar"><SearchBar setSearchValue={setSearchValue}/></div>
          <div className='content__top'>
            <Categories items={['Все','Мясные', 'Вегетарианские', 'Гриль', 'Острый', 'Зеленые']}/>
            <Sort/>
          </div>
          <h2 className='content__title'>Все пиццы</h2>
          <div className='content__items'>
           {pizzas.filter(item =>{
             if(searchValue === ''){
               return item
             }
             else if(item.name.toLowerCase().includes(searchValue.toLowerCase())){
               return item
             }
           })           
           .map(item => {
             return <PizzaItem key={item.id} {...item}/>
           })}
          </div>
          <h2 className='content__title'>Закуски</h2>
          <div className='content__items'>
           {snacks.map(item => {
             return <Item key={item.id} {...item}/>
           })}
          </div>
           <h2 className='content__title'>Десерты</h2>
          <div className='content__items'>
           {desserts.map(item => {
             return <Item key={item.id} {...item}/>
           })}
          </div>
           <h2 className='content__title'>Напитки</h2>
          <div className='content__items'>
           {drinks.map(item => {
             return <Item key={item.id} {...item}/>
           })}
          </div>
        </div>
        </div>
        </div>
 
     
    )
}

export default Home;

import React from 'react';

const Categories = ({items}) => {
  const [activeCategory, setActiveCatergory] = React.useState(0);
 
  console.log(items)
    return (
    <div className='categories'>
        <ul>         
           {items.map((item, index) => {
          return  (
            <li 
            onClick={() => {setActiveCatergory(index)}}
            className={`${activeCategory == index ? 'active' : ''}`}>{item}</li>
          )
          })}
         
        </ul>
    </div>
    )
}

export default Categories

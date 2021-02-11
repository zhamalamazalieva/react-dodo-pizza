import React from 'react';


const Sizes = ({sizes}) => {
    const [activeSize, setActiveSize] = React.useState(0);
    
    return (
        <ul>
            {sizes.map((item, index) => {
                return(
                    <li
                    key={item}
                    onClick={() => {setActiveSize(index)}} 
                    className={`${activeSize === index ? 'active' : ''}`}>{item}</li>
                )
            })}
      </ul>
    )
}

export default Sizes

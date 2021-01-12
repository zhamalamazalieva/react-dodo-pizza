import React from 'react';


const Sizes = ({sizes}) => {
    const [activeSize, setActiveSize] = React.useState(0);
    
    return (
        <ul>
            {sizes.map((item, index) => {
                return(
                    <li
                    onClick={() => {setActiveSize(index)}} 
                    className={`${activeSize === index ? 'active' : ''}`}>{item}</li>
                )
            })}
      </ul>
    )
}

export default Sizes

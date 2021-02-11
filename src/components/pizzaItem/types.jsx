import React from 'react';
import classNames from 'classnames';

const Types = ({types}) => {
    const typesNames = ['тонкое', 'традиционное'];
    const [activeType, setActiveType] = React.useState(0)
    return (
    <ul>
       {typesNames.map((item, index)=> {
           return(
               <li onClick={() => {setActiveType(index)}}
                   key={item}
                   className={classNames({
                        active:activeType === index,
                        disable:!types.includes(index)
                    })}
               >{item}</li>
           )
       })}
    </ul>
    )
}

export default Types

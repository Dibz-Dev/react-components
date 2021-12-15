import React from 'react';
import { useState } from 'react';
import { BsCalendar2Day, BsFilePerson, BsFileText, BsCheckAll } from "react-icons/bs";

const data = [
    {
        id: 1,
        heading: ' Find your Support',
        icon: <BsFilePerson className="list-icon"/>,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum natus architecto libero doloribus blanditiis illo, culpa distinctio accusantium sunt assumenda nulla minus, in voluptatum quaerat recusandae temporibus. Provident, sequi laudantium.'
    },
    {
        id: 2,
        heading: ' Book it',
        icon: <BsCalendar2Day className="list-icon" />,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum natus architecto libero doloribus blanditiis illo, culpa distinctio accusantium sunt assumenda nulla minus, in voluptatum quaerat recusandae temporibus. Provident, sequi laudantium.'
    },
    {
        id: 3,
        heading: ' Fill it out',
        icon: <BsFileText className="list-icon" />,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum natus architecto libero doloribus blanditiis illo, culpa distinctio accusantium sunt assumenda nulla minus, in voluptatum quaerat recusandae temporibus. Provident, sequi laudantium.'
    },
    {
        id: 4,
        heading: ' Good to go',
        icon: <BsCheckAll className="list-icon" />,
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum natus architecto libero doloribus blanditiis illo, culpa distinctio accusantium sunt assumenda nulla minus, in voluptatum quaerat recusandae temporibus. Provident, sequi laudantium.'
    }
]


const Tabs = () => {

    const [value,setValue] = useState(0)
    const [isvisible,setIsVisible] = useState(false)

    return ( 

        <section className='tabs-container'>
            <div className='list-container'>
                <ul className='list'>
                    {data.map((item,index) => {
                        return <li onClick={() => setValue(index)}>{item.id}. {item.icon}{item.heading}</li>
                    })}
                    
                </ul>
            </div>
            <div className='content-box'>
                {data.map(item => {
                  return  <div key={data.id} className={item.id === value + 1  ? 'content show' : 'content'}>
                            <h3>{item.heading}</h3>
                            <p>{item.info}</p>
                          </div>
                })}
            
            </div>
        </section>

     );
}
 
export default Tabs;
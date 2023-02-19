import React, { useState } from 'react'
import Data from './Data'
import '../components/page.css'

const Page = (props) => {

    const [name, setName] = useState("Use Template")

    const handleChange = () => {
        setName("wait...")
    }

    return (
        <>
            <div className='container'>
                <div className={`${props.background} card`}>
                    <div className='card-body'>
                        <h4 className='card-title'>{props.textt}</h4>
                        <p className='card-text'> {props.descriptionn} </p>
            
                            <img alt='' className='imge' src={props.photo} />
                        
                        <div className='btn'>
                        <button onClick={handleChange}>{name}</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Page

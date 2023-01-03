import React, { useState } from 'react'
import "./Project.css"

const Project = ({ img, title, content }) => {
    const [show, setshow] = useState(false)
    return (

        <div className='project' onMouseEnter={() => setshow(true)} onMouseLeave={() => setshow(false)}>
            {
                show ? (
                    <div className='title1'>
                        <h3 className='title'><u>{title}</u></h3>
                        <p className='content'>{content}</p>
                    </div>
                ) :
                    <img src={img} alt="there is no project"></img>
            }
        </div>

    )
}

export default Project
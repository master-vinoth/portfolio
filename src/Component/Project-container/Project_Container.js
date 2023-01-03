import React from 'react'
import { Element } from "react-scroll"
import Project from '../Project/Project';
import "./Project_Container.css"
import img1 from "../../../../portfolio/src/Component/Project-container/application.png"
import img2 from "../../../../portfolio/src/Component/Project-container/calculator.png"
import img3 from "../../../../portfolio/src/Component/Project-container/clock.png"
import img4 from "../../../../portfolio/src/Component/Project-container/slider.png"
import img5 from "../../../../portfolio/src/Component/Project-container/Quiz.png"
import img6 from "../../../../portfolio/src/Component/Project-container/website.png"

function Projectcontainer() {

    const myproject = [
        {
            img: `${img1}`,
            title: "Application",
            content: "This is My Very First Simple Application Form Project "

        },

        {
            img: `${img2}`,
            title: "Digital Calculator",
            content: "This Digital Calculator is My Second Simple Project"

        },

        {
            img: `${img3}`,
            title: "Digital Clock",
            content: "This Digital Clock is My Thirt  Project "

        },

        {
            img: `${img4}`,
            title: "Indian Cricket Team Slider",
            content: "This Slider is My Fourth  Project "

        },

        {
            img: `${img5}`,
            title: "Quiz Game",
            content: "This Quiz Game is My Fivth Project,And It Was Very Intersting Project For Me To Work "

        },

        {
            img: `${img6}`,
            title: "Real-Time-Website",
            content: "This is my First Real-Time Project ,And It was Fully Created By Me And My Co-Partner"

        },
    ];
    return (
        <Element className='project_container' id='projects'>
            <h1>My Projects</h1>
            <p>
                Here My Some Projects which fully Maded by Me..
            </p>
            <div className='projectcontainer_projects'>
                {
                    myproject.map((project, index) => {

                        return (
                            <Project key={index}
                                img={project.img}
                                title={project.title}
                                content={project.content} />
                        )
                    })
                }

            </div>
        </Element>
    )
}

export default Projectcontainer
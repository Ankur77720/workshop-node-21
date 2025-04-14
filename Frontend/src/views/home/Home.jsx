import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import './Home.css'


const Home = () => {

    const navigate = useNavigate()
    const [ projects, setProjects ] = useState([])


    useEffect(() => {

        axios.get('http://localhost:3000/projects/get-all')
            .then(response => {
                setProjects(response.data.data)
            })

    }, [])

    return (
        <main className='home'>
            <section className='home-section' >
                <button
                    onClick={() => {
                        navigate('/create-project')
                    }}
                >new project</button>

                {projects.length == 0 ? <div> <p>No projects created</p> </div> : <div className="projects">
                    {projects.map((project) => {
                        return (
                            <div className="project">
                                {project.name}
                            </div>
                        )
                    })
                    }
                </div>}
            </section>
        </main>
    )
}

export default Home
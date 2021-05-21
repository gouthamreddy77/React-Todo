import React from "react"
import { NavLink } from "react-router-dom"

const About = () => {
  return <div >

          <main className="container">
              <div className="bg-light p-5 rounded">
                <h3>Author</h3>
                <br/>
                <h1>GOUTHAM LYAGALA</h1>
                <br/>
                <br/>
                <p className="lead">
                    This App is Created Using React 
                </p>
                <NavLink to="/" className=" nav-link active btn btn-lg btn-primary" aria-current="page">Home</NavLink>
              </div>
            </main> 
  </div>
}
export default About
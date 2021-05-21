import React from 'react'
import { NavLink } from "react-router-dom"

const Navbar = () => {

    return (
        <>
            <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4 ">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                    <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                            <NavLink to="/" className=" nav-link active" aria-current="page">HOME</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" className="navitem nav-link">ABOUT</NavLink>
                        </li>
                    </ul>
                    </div>

                </div>
            </nav>
        </>
    )
}

export default Navbar

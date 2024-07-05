import React from 'react'

function Navbar({ setCategory }) {
    return (
        <div>
            <nav className="navbar bg-dark navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">
                        <span className='badge bg-light text-dark fs-4'>NewsMsg</span>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" style={{ cursor:"pointer" }} onClick={() => { setCategory('general') }}>Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ cursor:"pointer" }} onClick={() => { setCategory('technology') }}>Technology</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ cursor:"pointer" }} onClick={() => { setCategory('business') }}>Business</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ cursor:"pointer" }} onClick={() => { setCategory('health') }}>Health</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ cursor:"pointer" }} onClick={() => { setCategory('science') }}>Science</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" style={{ cursor:"pointer" }} onClick={() => { setCategory('sports') }}>Sports</a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider" /></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link disabled" aria-disabled="true">Disabled</a>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
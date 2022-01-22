import React from 'react'
import PropTypes from 'prop-types';

// import logo2 from '../../public/manifest.json';

export default function Navbar(props){
    return(
        <>
            <nav className={`navbar navbar-expand-lg navbar-dark bg-dark `}>
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">  {props.brand} </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">{props.homeMenu}</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="https://reactjs.org/">About React</a>
                        </li>
                    </ul>
                   
                    </div>
                    <div className={`color-pattern`}>
                        <button type="button" className={`btn btn-primary`} onClick={() => {props.colorModeFun('primary')}} >Primary</button>
                        <button type="button" className={`btn btn-danger`} onClick={() => {props.colorModeFun('danger')}} >Danger</button>
                        <button type="button" className={`btn btn-warning`} onClick={() => {props.colorModeFun('warning')}} >warning</button>
                    </div>
                    {/* <input className='aj-input' onClick={props.switchToggle} type="checkbox" id="switch" /> */}
                    <label className='aj-label' htmlFor="switch">Toggle</label>
                </div>
            </nav>
        </>
    )
} 


Navbar.propTypes = {
    brand: PropTypes.string.isRequired,
    homeMenu: PropTypes.string
}

Navbar.defaultProps = {
    homeMenu: 'Home'
}
// export default Navbar
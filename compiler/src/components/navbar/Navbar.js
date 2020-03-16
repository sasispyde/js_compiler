import React from 'react';
import { Link } from "react-router-dom";

function Navbar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a className="navbar-brand" href="#">Brand</a>
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item">
            <Link className="nav-link" to='/home'>Link1</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/home'>Link2</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/home'>Link3</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to='/home'>Link4</Link>
          </li>
        </ul>
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
    </>
  )
}

export default Navbar;
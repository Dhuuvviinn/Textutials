import React from 'react';
import { Link } from 'react-router-dom';

function Navbar(props) {
  return (
    <div>
      <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
        <div className="container-fluid">
          <Link
            className="navbar-brand"
            to="/textbox"
            style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
          >
            {props.title}
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-light">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
                  aria-current="page"
                  to="/textbox"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link"
                  to="/about"
                  style={{ color: props.mode === 'dark' ? 'white' : 'black' }}
                >
                  About
                </Link>
              </li>
            </ul>

            <div
              class={`form-check form-switch text-${
                props.mode === 'dark' ? 'light' : 'dark'
              }`}
            >
              <input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggle}
              />
              <label class="form-check-label" for="flexSwitchCheckDefault">
                {props.message}
              </label>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

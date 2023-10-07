import React, { useContext } from "react";
import { UserContext } from "../store/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";


const Navbar = () => {
    const { favorites, removeFavorite } = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Stars Wars Reading List</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto bg-primary rounded">

                        <li className="nav-item dropdown">
                            <div className="dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" id="favorites-dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                                    <FontAwesomeIcon icon={faHeart} className="me-1" />
                                    Favorites <span className="badge bg-dark text-white ms-1 rounded-pill">{favorites.length}</span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="favorites-dropdown">
                                    {favorites.length > 0 ? (
                                        favorites.map((favorite, index) => (
                                            <li key={index} className="d-flex justify-content-between">
                                                <a className="dropdown-item" href="#">{favorite.name}</a>
                                                <button
                                                    className="btn"
                                                    onClick={() => removeFavorite(favorite)}
                                                >
                                                    <FontAwesomeIcon icon={faTrash} />
                                                </button>
                                            </li>
                                        ))
                                    ) : (
                                        <li><a className="dropdown-item disabled" href="#">Sin favoritos</a></li>
                                    )}
                                </ul>
                            </div>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;

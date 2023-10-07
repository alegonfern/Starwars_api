import React, { useContext } from "react";
import { UserContext } from "../store/UserContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  const { favorites, removeFavorite, characterData, planetData } = useContext(UserContext);

  return (
    <section className="py-5">
      <h1> Favoritos: </h1>
      <div className="container px-4 px-lg-5 mt-5">
        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
          {favorites.map((favorite, index) => {
            const isCharacter = favorite.id.startsWith("C_");
            const id = favorite.id.substring(2);
            const data = isCharacter
              ? characterData.find(character => character.result.uid === id)
              : planetData.find(planet => planet.result.uid === id);

            if (!data) return null;

            return (
              <div className="col mb-5" key={index}>
                <div className="card h-100">
                  {/*Aca se decdido si renderizo la imagen según si es planeta o personaje*/}
                  <img
                    className="card-img-top"
                    src={
                      isCharacter
                        ? `https://starwars-visualguide.com/assets/img/characters/${data.result.uid}.jpg`
                        : `https://starwars-visualguide.com/assets/img/planets/${data.result.uid}.jpg`
                    }
                    alt="..."
                  />
                  <div className="card-body p-4">
                    <div className="text-center">
                      <h5 className="fw-bolder">{data.result.properties.name}</h5>
                      {isCharacter ? data.result.properties.gender : `Population: ${data.result.properties.population}`}
                    </div>
                  </div>
                  <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center">
                      <button className="btn btn-outline-secondary mt-auto" onClick={() => removeFavorite(favorite)}>
                        <FontAwesomeIcon icon={faTrash} className="me-1" />
                        Quitar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );

          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;

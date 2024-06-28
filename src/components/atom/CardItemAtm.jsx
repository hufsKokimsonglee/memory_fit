import React from 'react';
import ImgAtm from "./ImgAtm";
import { Link } from "react-router-dom";

const CardItemAtm = ({ srcProp1, altProp1, linkProp, titProp, txtProp, onClick }) => {
  return (
    <li className="list" onClick={onClick}>
      <ImgAtm srcProp={srcProp1} altProp={altProp1} />
      <div className="context">
        <Link to={`/detail/${linkProp}`}>
          <div className="explain d-flex flex-direction-column justify-content-center align-items-center">
            <h4>{titProp}</h4>
            <p>{txtProp}</p>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default CardItemAtm;

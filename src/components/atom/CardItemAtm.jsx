import ImgAtm from "./ImgAtm";
import { Link } from "react-router-dom";

const CardItemAtm = ({ srcProp1, altProp1, linkProp, titProp, txtProp }) => {
  return (
    <li className="list">
      <Link to={linkProp}>
        <ImgAtm srcProp={srcProp1} altProp={altProp1} />
      </Link>
      <div className="context">
        <Link to={linkProp}>
          <div className="explain d-flex flex-direction-column justify-content-center algin-items-center">
            <h4>{titProp}</h4>
            <p>{txtProp}</p>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default CardItemAtm;

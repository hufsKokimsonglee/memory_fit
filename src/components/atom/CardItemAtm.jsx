import ImgAtm from "./ImgAtm";
import { Link } from "react-router-dom";

const CardItemAtm = ({
  srcProp1,
  altProp1,
  linkProp,
  titProp,
  txtProp,
  onClick,
}) => {
  return (
    <li className="list" onClick={onClick} style={{ backgroundColor: "#fff" }}>
      <a href={linkProp}>
        <ImgAtm srcProp={srcProp1} altProp={altProp1} />
      </a>
      <div className="context">
        <a href={linkProp}>
          <div className="explain d-flex flex-direction-column justify-content-center">
            <h4>{titProp}</h4>
            <p>{txtProp}</p>
          </div>
        </a>
      </div>
    </li>
  );
};

export default CardItemAtm;

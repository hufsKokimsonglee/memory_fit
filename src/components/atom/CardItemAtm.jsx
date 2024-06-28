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
      <Link to={linkProp}>
        <ImgAtm srcProp={srcProp1} altProp={altProp1} />
      </Link>
      <div className="context">
        <Link to={`/detail/${linkProp}`}>
          <div className="explain d-flex flex-direction-column justify-content-center">
            <h4>{titProp}</h4>
            <p>{txtProp}</p>
          </div>
        </Link>
      </div>
    </li>
  );
};

export default CardItemAtm;

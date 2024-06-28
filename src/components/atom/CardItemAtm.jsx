// import ImgAtm from "./ImgAtm";

const CardItemAtm = ({ titProp, txtProp }) => {
  return (
    <li className="list">
      {/* <ImgAtm srcProp={srcProp1} altProp={altProp1} /> */}
      <div className="context">
        <div className="explain d-flex flex-direction-column justify-content-center algin-items-center">
          <h4>{titProp}</h4>
          <p>{txtProp}</p>
        </div>
      </div>
    </li>
  );
};

export default CardItemAtm;

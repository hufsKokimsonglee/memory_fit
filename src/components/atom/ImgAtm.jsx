const ImgAtm = ({ srcProp, altProp, ...props }) => {
  return <img {...props} src={srcProp} alt={altProp} />;
};

export default ImgAtm;

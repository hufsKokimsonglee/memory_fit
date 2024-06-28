import CardItemAtm from "./atom/CardItemAtm";

const MainAbout = () => {
  const menuLists = [
    ["1", "설명1"],
    ["2", "설명2"],
    ["3", "설명3"],
    ["4", "설명4"],
  ];
  return (
    <div className="content1 pt-20">
      <ul className="product-list d-flex flex-wrap">
        {menuLists.map((v, i) => (
          <CardItemAtm key={i} titProp={v[0]} txtProp={v[1]} />
        ))}
      </ul>
    </div>
  );
};

export default MainAbout;

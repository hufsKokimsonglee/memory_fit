import React from "react";
import CardItemAtm from "./atom/CardItemAtm";
import { useNavigate } from "react-router-dom";
import "../assets/scss/components/_main.scss";

import img1 from "../assets/images/class1.gif";
import img2 from "../assets/images/class2.gif";
import img3 from "../assets/images/class3.gif";

const MainAbout = () => {
  const navigate = useNavigate();
  const menuLists = [
    [
      img1,
      "http://127.0.0.1:5000/fist_open",
      "손 부채운동",
      "주먹을 쥐었다 피는 것을 반복하는 운동",
    ],
    [
      img2,
      "http://127.0.0.1:5051/apart_touch",
      "손끝 치기운동",
      "손끝을 서로 치는 운동",
    ],
    [img3, "http://memoryfit.store", "걷기운동", "다리를 들어올리며 걷는 운동"],
    ["", "", "", "Comming Soon"],
    ["", "", "", "Comming Soon"],
  ];

  const handleItemClick = (id) => {
    navigate(`/detail/${id}`);
  };
  return (
    <div className="content1 pt-20">
      <ul className="product-list d-flex flex-wrap">
        {menuLists.map((v, i) => (
          <CardItemAtm
            key={i}
            srcProp1={v[0]}
            altProp1={v[1]}
            linkProp={v[1]}
            titProp={v[2]}
            txtProp={v[3]}
            onClick={() => handleItemClick(v[1])}
          />
        ))}
      </ul>
    </div>
  );
};

export default MainAbout;

import React from 'react';
import CardItemAtm from "./atom/CardItemAtm";
import img1 from "../assets/images/class1.png";
import { useNavigate } from 'react-router-dom';
import '../assets/scss/components/_main.scss'; // SCSS 파일 경로

const MainAbout = () => {
  const navigate = useNavigate();
  const menuLists = [
    [img1, "1", "손 부채운동", "주먹을 쥐었다 피는 것을 반복하는 운동"],
    ["2", "2", "설명2", "설명2"],
    ["3", "3", "설명3", "설명3"],
    ["4", "4", "설명4", "설명4"],
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

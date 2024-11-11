// import React from 'react'
import styled from "styled-components";
import MOCK_DATA from "../components/mock_data";
import { useNavigate, useParams } from "react-router-dom";

const StDiv = styled.div`
  flex-wrap: wrap;
  margin-top: 50px;
  background-image: url("https://st2.depositphotos.com/8637214/49354/v/450/depositphotos_493548328-stock-illustration-colorful-simple-flat-pixel-art.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  padding: 150px 50px;
  border-radius: 18px;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;
  img {
    width: 150px;
    &:hover {
      transform: scale(1.5);
      transition: 0.5s;
    }
  }
  button {
    border: none;
    padding: 15px;
    font-size: 15px;
    margin-top: 30px;
    border-radius: 8px;
    background-color: #ff5555;
    font-weight: 600;
    color: white;
    &:hover {
      cursor: pointer;
      background-color: #fffa68;
    }
  }
`;

const Detail = () => {
  const navigate = useNavigate();

  const { id } = useParams();

  const poketmon = MOCK_DATA.find((data) => data.id === Number(id));

  if (!poketmon) {
    return (
      <div>
        <p>포켓몬을 찾을 수 없습니다.</p>
        <button onClick={() => navigate(-1)}>뒤로 가기</button>
      </div>
    );
  }
  return (
    <StDiv>
      <img src={poketmon.img_url} alt={poketmon.korean_name} />
      <h2>{poketmon.korean_name}</h2>
      <p>타입 : {poketmon.types.join(", ")}</p>
      <p>{poketmon.description}</p>
      <button onClick={() => navigate(-1)}>돌아가기</button>
    </StDiv>
  );
};

export default Detail;

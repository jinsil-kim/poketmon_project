import styled from "styled-components";
import PoketmonCard from "./PoketmonCard";
import { useContext } from "react";
import { PoketmonContext } from "../context/PoketmonContext";

const StDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #ffcf0e;
  border: 5px solid white;
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const StPoketballContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 10px;
  width: 100%;
  justify-items: center;
  align-items: center;
`;

const TitleImg = styled.img`
  width: 500px;
`;

const StPoketballBox = styled.div`
  border: 2px dashed #c7c7c7;
  border-radius: 15px;
  padding: 20px;
  margin-top: 50px;
  background-color: white;
`;

const StImg = styled.img`
  width: 100px;
`;

// const StTitle = styled.h1`
//   color: black;
// `;

const Dashboard = () => {

  const {data, deleteBtn} = useContext(PoketmonContext)


  return (
    <StDashboardContainer className="dashboard-container">
      <TitleImg
        src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"
        alt=""
      />
      {/* <StTitle></StTitle> */}
      <StPoketballContainer className="poketball-container">
        {Array(6)
          .fill()
          .map((_, index) =>
            data[index] ? (
              <PoketmonCard
                key={data[index].id}
                deleteBtn={deleteBtn}
                data={data[index]}
              />
            ) : (
              // <StPoketmonBox key={data[index].korean_name}>
              //   <img src={data[index].img_url} alt="" />
              //   <div>{data[index].korean_name}</div>
              //   <p>No. {data[index].id}</p>
              //   <StButton onClick={() => deleteBtn(data[index].id)}>
              //     삭제
              //   </StButton>
              // </StPoketmonBox>
              <StPoketballBox key={Math.random()} className="poketball-box">
                <StImg
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png"
                  alt=""
                />
              </StPoketballBox>
            )
          )}
      </StPoketballContainer>
    </StDashboardContainer>
  );
};

export default Dashboard;

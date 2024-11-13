import styled from "styled-components";
import PoketmonCard from "./PoketmonCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

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
  margin: 15px 0 30px 0;
  &:hover {
    cursor: pointer;
  }
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

const Dashboard = () => {
  const navigate = useNavigate();
  const selectedPokemon = useSelector((state) => state.pokemon);

  return (
    <StDashboardContainer className="dashboard-container">
      <TitleImg
        onClick={() => navigate("/")}
        src="https://cdn.worldvectorlogo.com/logos/pokemon-23.svg"
        alt="포켓몬 로고"
      />
      <StPoketballContainer className="poketball-container">
        {Array(6)
          .fill()
          .map((_, index) =>
            selectedPokemon[index] ? (
              <PoketmonCard
                key={selectedPokemon[index].id}
                id={selectedPokemon[index].id}
                korean_name={selectedPokemon[index].korean_name}
                img_url={selectedPokemon[index].img_url}
                onDashboard={true}
              />
            ) : (
              <StPoketballBox key={Math.random()} className="poketball-box">
                <StImg
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Pokebola-pokeball-png-0.png/220px-Pokebola-pokeball-png-0.png"
                  alt="포켓볼 이미지"
                />
              </StPoketballBox>
            )
          )}
      </StPoketballContainer>
    </StDashboardContainer>
  );
};

export default Dashboard;

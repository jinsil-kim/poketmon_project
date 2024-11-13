import styled from "styled-components";
import PoketmonCard from "./PoketmonCard";
import MOCK_DATA from "./mock_data";

const StPoketmonList = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 30px;
  background-color: #ffcf0e;
  border: 5px solid white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

const PoketmonList = () => {
  return (
    <StPoketmonList>
      {MOCK_DATA.map((poketmon) => (
        <PoketmonCard key={poketmon.id} onDashboard={false} id={poketmon.id} korean_name={poketmon.korean_name} img_url={poketmon.img_url} />
      ))}
    </StPoketmonList>
  );
};

export default PoketmonList;

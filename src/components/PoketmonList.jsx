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

const PoketmonList = ({ addPoketmon }) => {
  return (
    <StPoketmonList>
      {MOCK_DATA.map((poketmon) => (
        <PoketmonCard
          key={poketmon.id}
          addPoketmon={addPoketmon}
          data={poketmon}
        />
        // <StPoketmonBox key={poketmon.id}>
        //   <img src={poketmon.img_url} alt="" />
        //   <div>{poketmon.korean_name}</div>
        //   <p>No. {poketmon.id}</p>
        //   <StButton onClick={() => addPoketmon(poketmon)}>추가</StButton>
        // </StPoketmonBox>
      ))}
    </StPoketmonList>
  );
};

export default PoketmonList;

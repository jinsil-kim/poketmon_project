import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const StPoketmonBox = styled.div`
  background-color: white;
  border-radius: 10px;
  padding: 15px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: 0.3s;
  }
`;

const StButton = styled.button`
  background-color: red;
  border: none;
  color: white;
  border-radius: 5px;
  padding: 5px 15px;
  margin-top: 10px;
  &:hover {
    cursor: pointer;
    background-color: #ff6200;
  }
`;

const PoketmonCard = ({ data, addPoketmon, deleteBtn }) => {
  const navigate = useNavigate();

  return (
    <StPoketmonBox onClick={() => navigate(`/detail/${data.id}`)}>
      <img src={data.img_url} alt={data.korean_name} />
      <p>{data.korean_name}</p>
      <p>No. {data.id}</p>
      {addPoketmon ? (
        <StButton
          onClick={(e) => {
            e.stopPropagation();
            addPoketmon(data);
          }}
        >
          추가
        </StButton>
      ) : (
        <StButton
          onClick={(e) => {
            e.stopPropagation();
            deleteBtn(data.id);
          }}
        >
          삭제
        </StButton>
      )}
    </StPoketmonBox>
  );
};

export default PoketmonCard;

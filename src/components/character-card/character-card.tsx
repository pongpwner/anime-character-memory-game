//import "./character-card.styles.scss";

import { gender } from "../../data/characters";
import styled from "styled-components";
const width = "18rem";
const height = "21rem";
const femaleColor = "pink";
const maleColor = "lightblue";
const borderColor = "black";
const Li = styled("li")<{ gender: gender }>`
  width: ${width};
  height: ${height};
  border: 2px solid ${borderColor};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  //justify-content: center;
  align-items: center;

  transition: opacity 0.5s;
  opacity: 1;
  background-color: ${(props) =>
    props.gender === "male" ? maleColor : femaleColor};
`;
const Image = styled.img`
  width: calc(${width} - 20px);
  height: calc(${height} - 2.5rem);
  object-fit: cover;
  object-position: center 10px;
  //object-position: 0px 10px;
  border-radius: 10px;
`;
const Name = styled("span")`
  font-size: 1.6rem;
  margin: 0 auto;
  display: flex;
  justify-content: center;
`;
interface CharacterCardProps {
  name: string;
  imageURL: any;
  handleClick: Function;
  gender: gender;
}
const CharacterCard = ({
  name,
  imageURL,
  handleClick,
  gender,
}: CharacterCardProps) => {
  return (
    <Li gender={gender} onClick={() => handleClick()}>
      <Image src={imageURL} alt={name}></Image>
      <Name>{name}</Name>
    </Li>
  );
};

export default CharacterCard;

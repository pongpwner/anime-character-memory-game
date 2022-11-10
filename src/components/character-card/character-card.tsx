import "./character-card.styles.scss";
import { gender } from "../../data/characters";
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
    <li className={`character-card  ${gender}`} onClick={() => handleClick()}>
      <img className="waifu-image" src={imageURL} alt={name} />
      <span className="waifu-name">{name}</span>
    </li>
  );
};

export default CharacterCard;

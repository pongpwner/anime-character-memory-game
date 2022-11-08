import "./character-card.styles.scss";
const CharacterCard = ({ name, imageURL, handleClick, gender }) => {
  return (
    <li className={`character-card  ${gender}`} onClick={handleClick}>
      <img className="waifu-image" src={imageURL} alt={name} />
      <span className="waifu-name">{name}</span>
    </li>
  );
};

export default CharacterCard;

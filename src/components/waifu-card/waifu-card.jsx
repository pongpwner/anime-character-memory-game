import "./waifu-card.styles.scss";
const WaifuCard = ({ name, imageURL, handleClick, gender }) => {
  return (
    <li className={`waifu-card fade-in-image ${gender}`} onClick={handleClick}>
      <img className="waifu-image" src={imageURL} alt={name} />
      <span className="waifu-name">{name}</span>
    </li>
  );
};

export default WaifuCard;

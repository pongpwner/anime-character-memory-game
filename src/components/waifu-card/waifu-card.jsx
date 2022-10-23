import "./waifu-card.styles.scss";
const WaifuCard = ({ name, imageURL }) => {
  return (
    <div className="waifu-card">
      <img className="waifu-image" src={imageURL} alt={name} />
      <span className="waifu-name">{name}</span>
    </div>
  );
};

export default WaifuCard;

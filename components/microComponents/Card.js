const Card = ({ image, text }) => {
  return (
    <div className="card">
      <img src={image} alt="" />

      <h4 className="card-title">{text}</h4>
    </div>
  )
}

export default Card

function Card({ img, title, description }) {
    return (
      <div class="card">
        <img src={img} alt={title} />
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    );
  }
  
  export default Card;
  
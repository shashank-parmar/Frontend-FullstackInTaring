
export default function Card({ src, title,alt ,size}) { 
  return (
    <div className="card" style={{ width: "18rem", border: "2px solid red" }}>
      <img className="card-img-top" src={src} alt={alt} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <h5 className="card-title">{size}</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
}

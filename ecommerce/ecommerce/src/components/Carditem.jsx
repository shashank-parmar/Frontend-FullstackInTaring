import { useState } from "react";
import Card from "./Card";
import "./Carditem.css"

function Carditem() {
  const [size, setSize] = useState("");
  const cards = [
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 2",
      alt: "kkkk",
      size: "s",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
    {
      src: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHNoaXJ0fGVufDB8fDB8fHww",
      title: "Card Title 1",
      alt: "kkkk",
      size: "xs",
    },
  ];

  const filteredCards = cards.filter((card) => card.size === size);

  console.log(filteredCards);

  return (
    <>

<div className="container">
        <p>Sizes:</p>
        <div> 
          <button type="button" value="xs" onClick={() => setSize("xs")}>
            XS
          </button>
          <button type="button" value="s" onClick={() => setSize("s")}>
            S
          </button>
          <button type="button" value="m" onClick={() => setSize("m")}>
            M
          </button>
          <button type="button" value="l" onClick={() => setSize("l")}>
            L
          </button>
          <button type="button" value="xl" onClick={() => setSize("xl")}>
            XL
          </button>
          <button type="button" value="xxl" onClick={() => setSize("xxl")}>
            XXL
          </button>
        </div>
      </div>

      <div className="App2">
        <h1>Card Component Example</h1>
        <div className="card-container">
          {filteredCards.map((card, index) => (
            <Card
              key={index}
              src={card.src}
              title={card.title}
              alt={card.alt}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Carditem;

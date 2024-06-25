import React, { useState, useEffect } from "react";
import Card from "./Card";

export default function Carditem() {
  const [size, setSize] = useState("");
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    handlGetdatas(size);
  }, [size]);

  const handlGetdatas = async (selectedSize) => {
    try {
      const response = await fetch("http://localhost:3000/finditem", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ size: selectedSize }),
      });
      const datas = await response.json();
      setCardData(datas);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const filteredCards = size ? cardData.filter((card) => card.size === size) : cardData;

  return (
    <>
      <div className="flex">
        <div className="fixed border-2 w-60 h-[633px]">
          <div className="container">
            <p className="p-10 font-extrabold text-3xl">Sizes:</p>
            <div className="text-justify m-3">
              <button
                type="button"
                value="xs"
                onClick={() => setSize("xs")}
                className="border-2 bg-slate-400 justify-center p-3 rounded-md m-3 text-2xl transition duration-200 hover:bg-slate-200"
              >
                XS
              </button>
              <button
                type="button"
                value="s"
                onClick={() => setSize("s")}
                className="border-2 bg-slate-400 justify-center p-3 rounded-md m-3 text-2xl transition duration-200 hover:bg-slate-200"
              >
                S
              </button>
              <button
                type="button"
                value="m"
                onClick={() => setSize("m")}
                className="border-2 bg-slate-400 justify-center p-3 rounded-md m-3 text-2xl transition duration-200 hover:bg-slate-200"
              >
                M
              </button>
              <button
                type="button"
                value="l"
                onClick={() => setSize("l")}
                className="border-2 bg-slate-400 justify-center p-3 rounded-md m-3 text-2xl transition duration-200 hover:bg-slate-200"
              >
                L
              </button>
              <button
                type="button"
                value="xl"
                onClick={() => setSize("xl")}
                className="border-2 bg-slate-400 justify-center p-3 rounded-md m-3 text-2xl transition duration-200 hover:bg-slate-200"
              >
                XL
              </button>
              <button
                type="button"
                value="xxl"
                onClick={() => setSize("xxl")}
                className="border-2 bg-slate-400 justify-center p-3 rounded-md m-3 text-2xl transition duration-200 hover:bg-slate-200"
              >
                XXL
              </button>
            </div>
          </div>
        </div>

        <div className="flex w-full p-3 ml-60">
          <div className="flex flex-wrap w-full">
            {filteredCards.map((card, index) => (
              <div key={index} className="w-1/3 p-2">
                <Card src={card.src} title={card.title} alt={card.alt} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

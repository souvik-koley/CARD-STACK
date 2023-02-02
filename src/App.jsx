import React, { useState } from 'react';

const CardStack = () => {
  const [redCards, setRedCards] = useState([{ text: 'Red Card 1', color: 'red' }]);
  const [blueCards, setBlueCards] = useState([{ text: 'Blue Card 1', color: 'blue' }]);
  const [greenCards, setGreenCards] = useState([{ text: 'Green Card 1', color: 'Green' }]);
  const [blackCards, setBlackCards] = useState([{ text: 'Black Card 1', color: 'black' }]);

  const addRedCard = () => {
    if (redCards.length < 8) {
      setRedCards([...redCards, { text: `Red Card ${redCards.length + 1}`, color: 'red' }]);
    }
  };

  const addBlueCard = () => {
    if (blueCards.length < 8) {
      setBlueCards([...blueCards, { text: `Blue Card ${blueCards.length + 1}`, color: 'blue' }]);
    }
  };
  const addGreenCard = () => {
    if (greenCards.length < 8) {
      setGreenCards([...greenCards, { text: `Green Card ${greenCards.length + 1}`, color: 'green' }]);
    }
  };

  const addBlackCard = () => {
    if (blackCards.length < 8) {
      setBlackCards([...blackCards, { text: `Blue Card ${blackCards.length + 1}`, color: 'black' }]);
    }
  };

  const deleteRedCard = (index) => {
    const newRedCards = [...redCards];
    newRedCards.splice(index, 1);
    setRedCards(newRedCards);
  };

  const deleteBlueCard = (index) => {
    const newBlueCards = [...blueCards];
    newBlueCards.splice(index, 1);
    setBlueCards(newBlueCards);
  };
  const deleteGreenCard = (index) => {
    const newGreenCards = [...greenCards];
    newGreenCards.splice(index, 1);
    setGreenCards(newGreenCards);
  };

  const deleteBlackCard = (index) => {
    const newBlackCards = [...blackCards];
    newBlackCards.splice(index, 1);
    setBlackCards(newBlackCards);
  };

  const updateRedText = (index, text) => {
    const newRedCards = [...redCards];
    newRedCards[index].text = text;
    setRedCards(newRedCards);
  };

  const updateBlueText = (index, text) => {
    const newBlueCards = [...blueCards];
    newBlueCards[index].text = text;
    setBlueCards(newBlueCards);
  };
  const updateGreenText = (index, text) => {
    const newGreenCards = [...greenCards];
    newGreenCards[index].text = text;
    setGreenCards(newGreenCards);
  };

  const updateBlackText = (index, text) => {
    const newBlackCards = [...blackCards];
    newBlackCards[index].text = text;
    setBlackCards(newBlackCards);
  };

  return (
    <div>
      <div style={{ display: 'flex' }}>
        <div style={{ width: '500px', height: '300px' }}>
          <div style={{ margin: "0px 37px" }}>Red <button onClick={addRedCard}>Add card</button> </div>
          {redCards.map((card, index) => (
            <div key={index} style={{ color: card.color, padding: '10px', display: "flex"   }}>
              <textarea style={{ backgroundColor: "red" }}
                value={card.text}
                onChange={(e) => updateRedText(index, e.target.value)}
              />
              <button onClick={() => deleteRedCard(index)}>X</button>
            </div>
          ))}
        </div>


        <div style={{ width: '500px', height: '300px' }}>
          <div style={{ margin: "0px 37px" }}>Blue  <button onClick={addBlueCard}>Add card</button></div>
          {blueCards.map((card, index) => (
            <div key={index} style={{ color: card.color, padding: '10px', display: "flex" }}>
              <textarea style={{ backgroundColor: "blue" }}
                value={card.text}
                onChange={(e) => updateBlueText(index, e.target.value)}
              />
              <button onClick={() => deleteBlueCard(index)}>X</button>
            </div>
          ))}
        </div>

        <div style={{ width: '500px', height: '300px' }}>
          <div style={{ margin: "0px 37px" }}>Green <button onClick={addGreenCard}>Add card</button> </div>
          {greenCards.map((card, index) => (
            <div key={index} style={{ color: card.color, padding: '10px' , display: "flex"  }}>
              <textarea style={{ backgroundColor: "green" }}
                value={card.text}
                onChange={(e) => updateGreenText(index, e.target.value)}
              />
              <button onClick={() => deleteGreenCard(index)}>X</button>
            </div>
          ))}
        </div>

        <div style={{ width: '500px', height: '300px' }}>
          <div style={{ margin: "0px 37px" }}>Black  <button onClick={addBlackCard}>Add card</button></div>
          {blackCards.map((card, index) => (
            <div key={index} style={{ color: card.color, padding: '10px' , display: "flex" }}>
              <textarea style={{ backgroundColor: "#0000006e" }}
                value={card.text}
                onChange={(e) => updateBlackText(index, e.target.value)}
              />
              <button onClick={() => deleteBlackCard(index)}>X</button>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
export default CardStack;
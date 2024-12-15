import React, { useState } from "react";
import "./App.css";
import profilePic from "./assets/profile.png";
import card1 from "./assets/newcards.png";
import card2 from "./assets/newcards.png";
import card3 from "./assets/newcards.png";
import card4 from "./assets/newcards.png";
import angel from "./assets/angel.png";
import demon from "./assets/demon.png";
import wizard from "./assets/wizard.png";
//import passing_bear from "./assets/passing_bear.png";
import recallIcon from "./assets/recall-icon.png";

const App = () => {
  const [points, setPoints] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isCardRevealed, setIsCardRevealed] = useState(false);

  const cards = [
    { id: 1, image: card1 },
    { id: 2, image: card2 },
    { id: 3, image: card3 },
    { id: 4, image: card4 },
  ];

  const handleRecall = () => {
    alert("Navigate to Recall Page");
  };

  const handleCardClick = (card) => {
    setSelectedCard(card);
    setIsCardRevealed(false);
    alert(`Showing details of card ID: ${card.id}`);
  };

  const handleCardTypeClick = (type) => {
    alert(`You selected the ${type} card type.`);
  };

  const handleCardReveal = () => {
    setIsCardRevealed(!isCardRevealed);
  };

  return (
    <div className="container">
      {/* Header */}
      <header className="header">
        <div className="profile">
          <img src={profilePic} alt="Profile" className="profile-pic" />
          <span>Blablala</span>
        </div>
        <div className="points">E {points}</div>
      </header>

      {/* Cards Section */}
      <div className="card-section">
        <h2>All Memory Cards</h2>
        <div className="cards">
          {cards.map((card) => (
            <div key={card.id} className="card-wrapper" onClick={() => handleCardClick(card)}>
              <img src={card.image} alt="Memory Card" className="card" />
              {selectedCard?.id === card.id && (
                <div className="card-details">
                  <img
                    src={isCardRevealed ? passing_bear : card.image}
                    alt="Card Details"
                    className="card-details-image"
                  />
                  <div className="card-type-container">
                    <div className="card-type" onClick={(e) => {e.stopPropagation(); handleCardTypeClick("Angel")}}>
                      <img src={angel} alt="Angel" className="type-icon" />
                      <span>Angel</span>
                    </div>
                    <div className="card-type" onClick={(e) => {e.stopPropagation(); handleCardTypeClick("Demon")}}>
                      <img src={demon} alt="Demon" className="type-icon" />
                      <span>Demon</span>
                    </div>
                    <div className="card-type" onClick={(e) => {e.stopPropagation(); handleCardTypeClick("Wizard")}}>
                      <img src={wizard} alt="Wizard" className="type-icon" />
                      <span>Wizard</span>
                    </div>
                  </div>
                  <button className="reveal-btn" onClick={handleCardReveal}>
                    {isCardRevealed ? "Hide" : "Reveal"}
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Recall Button */}
      <button className="recall-btn" onClick={handleRecall}>
        RECALL
      </button>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <img src={recallIcon} alt="Recall" className="nav-icon" />
        <img src={recallIcon} alt="Marketplace" className="nav-icon" />
        <img src={recallIcon} alt="Potion Page" className="nav-icon" />
        <img src={recallIcon} alt="Tree Page" className="nav-icon" />
      </nav>
    </div>
  );
};

export default App;
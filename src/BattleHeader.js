import React from "react";
import "./BattleHeader.css";

function BattleHeader(props) {
  let encounterCr = props.battleField
    .map(elem => elem.challenge_rating)
    .reduce((a, b) => a + b, 0);

  return (
    <header className="battleHeader">
      <div className="headerSide">
        <img
          alt="battle logo"
          className="battlelogoImg"
          src="https://cdn.worldvectorlogo.com/logos/battlefield.svg"
        />
      </div>
      <h2>Your Party CR is {(props.partyLvl / 4) * props.partySize}</h2>
      <input
        onChange={e => props.crChangeHandler("partySize", e.target.value)}
        type="number"
        placeholder="Party Size"
      />
      <input
        onChange={e => props.crChangeHandler("partyLvl", e.target.value)}
        type="number"
        placeholder="Party Level"
      />
      <h2>Encounter CR: {encounterCr}</h2>
      <div className="headerSide" />
    </header>
  );
}

export default BattleHeader;

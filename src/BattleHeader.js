import React from "react";
import "./BattleHeader.css";

function BattleHeader(props) {
  return (
    <header className="battleHeader">
      <div className="headerSide">
        <img
          alt="battle logo"
          className="battlelogoImg"
          src="https://cdn.worldvectorlogo.com/logos/battlefield.svg"
        />
      </div>

      <input
        onChange={e =>
          props.changeHandler("minChallengeRating", e.target.value)
        }
        type="number"
        placeholder="Party Size"
      />
      <input
        onChange={e =>
          props.changeHandler("maxChallengeRating", e.target.value)
        }
        type="number"
        placeholder="Party Level"
      />
      <div className="headerSide" />
    </header>
  );
}

export default BattleHeader;

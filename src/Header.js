import React from "react";
import "./Header.css";
import Select from "./Select";

function Header(props) {
  return (
    <header className="header">
      <div className="headerSide">
        <img
          alt="dnd logo"
          className="logoImg"
          src="https://www.logolynx.com/images/logolynx/51/517dccbc6c88e146124619c16e335769.png"
        />
      </div>
      <Select
        changeHandler={props.changeHandler}
        toggleBattleField={props.toggleBattleField}
        battleFieldToggle={props.battleFieldtoggle}
      />
      <input
        onChange={e =>
          props.changeHandler("minChallengeRating", e.target.value)
        }
        type="number"
        placeholder="Min Challenge Rating"
      />
      <input
        onChange={e =>
          props.changeHandler("maxChallengeRating", e.target.value)
        }
        type="number"
        placeholder="Max Challenge Rating"
      />
      <input
        onChange={e => props.changeHandler("name", e.target.value)}
        placeholder="Monster Name"
      />
      <div className="headerSide">
        <button
          onClick={() => props.battleFieldToggle()}
          className="battleButton"
        >
          Battle
        </button>
      </div>
    </header>
  );
}

export default Header;

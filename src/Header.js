import React from "react";
import "./Header.css";

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
      <select
        defaultValue=""
        onChange={e => props.changeHandler("type", e.target.value)}
      >
        <option value="" disabled selected>
          Select Type
        </option>
        <option value="">All</option>
        <option value="aberration">Aberration</option>
        <option value="beast">Beast</option>
        <option value="construct">Construct</option>
        <option value="dragon">Dragon</option>
        <option value="elemental">Elemental</option>
        <option value="fey">Fey</option>
        <option value="giant">Giant</option>
        <option value="humanoid">Humanoid</option>
        <option value="ooze">Ooze</option>
        <option value="plant">Plant</option>
        <option value="undead">Undead</option>
      </select>
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

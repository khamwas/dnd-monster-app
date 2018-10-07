import React from "react";

function Select(props) {
  return (
    <div>
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
        <option value="celestial">Celestial</option>

        <option value="construct">Construct</option>
        <option value="dragon">Dragon</option>
        <option value="elemental">Elemental</option>
        <option value="fey">Fey</option>
        <option value="fiend">Fiend</option>

        <option value="giant">Giant</option>
        <option value="humanoid">Humanoid</option>
        <option value="monstrosity">Monstrosity</option>

        <option value="ooze">Ooze</option>
        <option value="plant">Plant</option>
        <option value="undead">Undead</option>
      </select>
    </div>
  );
}

export default Select;

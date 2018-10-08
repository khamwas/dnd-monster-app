import React, { Component } from "react";
import BattleHeader from "./BattleHeader";
import BattleInfo from "./BattleInfo";
import "./BattleField.css";

class BattleField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partySize: 0,
      partyLvl: 0,
      prompt: ["Click Card for More Info"]
    };
    this.crChangeHandler = this.crChangeHandler.bind(this);
  }

  crChangeHandler(key, val) {
    this.setState({ [key]: val });
  }

  render() {
    let battleInfo = <BattleInfo battleCard={this.props.battleCard} />;
    let noInfo = this.state.prompt.map(elem => (
      <div className="infoHeader">
        <h1>{elem}</h1>
      </div>
    ));
    let battleFieldDisplay = this.props.battleField.map(elem => (
      <div
        onClick={() => this.props.showBattleCard(elem.index)}
        className="card"
        key={elem.index}
      >
        <div className="cardHeader">
          <h4>
            Challenge Rating:
            {elem.challenge_rating}
          </h4>
          <h2>
            Name:
            {elem.name}
          </h2>
        </div>
        <h4>
          Type:
          {elem.type}
          <br />
          speed:
          {elem.speed}
          <br />
          Size:
          {elem.size}
          <br />
          Armor Class:
          {elem.armor_class}
          <br />
          Hit Points:
          <input
            type="number"
            placeholder={elem.hit_points}
            defaultValue={elem.hit_points}
          />
        </h4>
        {/* <h4>Special Abilities:</h4> */}
        {/* <p>{JSON.stringify(elem.special_abilities)}</p> */}
        {/* {elem.special_abilities
              ? elem.special_abilities.map((element, i) => (
                  <p>{Object.entries(element) + "    "}</p>
                ))
              : null} */}
        {/* <h4>Legendary Actions:</h4>
          {elem.legendary_actions
            ? elem.legendary_actions.map((element, i) => (
                <p>{Object.entries(element) + ": " + Object.entries(element)}</p>
              ))
            : null} */}
        <button
          value="elem.index"
          onClick={() => this.props.deleteBattleCard(elem.index)}
          className="cardButton"
        >
          Delete
        </button>
      </div>
    ));
    return (
      <div>
        <BattleHeader
          partySize={this.state.partySize}
          partyLvl={this.state.partyLvl}
          crChangeHandler={this.crChangeHandler}
          battleField={this.props.battleField}
        />
        <div className="monsterDisplay">
          <div className="battlefieldCardContainer" />
          <div className="cardAndInfo">
            <div className="cardContainer">{battleFieldDisplay} </div>
            <div className="moreInfo">
              {this.props.battleCard.length == 0 ? noInfo : battleInfo}
            </div>
          </div>
          ;
        </div>
      </div>
    );
  }
}

export default BattleField;

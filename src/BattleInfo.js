import React, { Component } from "react";

class BattleInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let moreInfo = this.props.battleCard.map(elem => (
      <div className="infoContainer">
        <div className="infoHeader">
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
          {elem.hit_points}
        </h4>
        <h4>Special Abilities:</h4>
        {/* <p>{JSON.stringify(elem.special_abilities)}</p> */}
        {elem.special_abilities
          ? elem.special_abilities.map((element, i) => (
              <p>{Object.entries(element) + "    "}</p>
            ))
          : null}
        <h4>Legendary Actions:</h4>
        {elem.legendary_actions
          ? elem.legendary_actions.map((element, i) => (
              <p>{Object.entries(element) + ": " + Object.entries(element)}</p>
            ))
          : null}
      </div>
    ));

    return <div>{moreInfo}</div>;
  }
}

export default BattleInfo;

import React, { Component } from "react";

class MoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    let moreInfo = this.props.currentCard.map(elem => (
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
        <div className="infoButtonContainer">
          <button
            onClick={() => this.props.statusChanger()}
            className="infoButton"
          >
            Edit
          </button>
          <button
            onClick={() => this.props.statusChanger()}
            className="infoButton"
          >
            Clone
          </button>
        </div>
      </div>
    ));

    let editInfo = this.props.currentCard.map(elem => (
      <div className="infoContainer">
        <div className="infoHeader">
          <h4>
            Challenge Rating:
            <input
              defaultValue={elem.challenge_rating}
              placeholder={elem.challenge_rating}
            />
          </h4>
          <h2>
            Name:
            <input defaultValue={elem.name} placeholder={elem.name} />
          </h2>
        </div>
        <h4>
          Type:
          <input placeholder={elem.type} defaultValue={elem.type} />
          <br />
          speed:
          <input placeholder={elem.speed} defaultValue={elem.speed} />
          <br />
          Size:
          <input placeholder={elem.size} defaultValue={elem.size} />
          <br />
          Armor Class:
          <input
            type="number"
            placeholder={elem.armor_class}
            defaultValue={elem.armor_class}
          />
          <br />
          Hit Points:
          <input
            type="number"
            placeholder={elem.hit_points}
            defaultValue={elem.hit_points}
          />
        </h4>
        <div className="infoButtonContainer">
          <button
            onClick={() => this.props.editMonster(elem.index)}
            className="infoButton"
          >
            Edit
          </button>
          <button
            onClick={() => this.props.cloneMonster(elem.index)}
            className="infoButton"
          >
            Clone
          </button>
        </div>
      </div>
    ));
    return <div>{this.props.changeStatus ? editInfo : moreInfo}</div>;
  }
}

export default MoreInfo;

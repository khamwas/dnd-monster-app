import React, { Component } from "react";

class MoreInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      challenge_rating: 0,
      name: "",
      type: "",
      speed: "",
      size: "",
      armor_class: 0,
      hit_points: 0,
      img: ""
    };
  }

  editHandler(key, val) {
    this.setState({ [key]: val });
    console.log(this.state);
  }

  setEdit(monster) {
    this.setState({
      challenge_rating: monster.challenge_rating,
      name: monster.name,
      type: monster.type,
      speed: monster.speed,
      size: monster.size,
      armor_class: monster.armor_class,
      hit_points: monster.hit_points
    });
    this.props.statusChanger();
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
          <button onClick={() => this.setEdit(elem)} className="infoButton">
            Edit
          </button>
          <button onClick={() => this.setEdit(elem)} className="infoButton">
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
              onChange={e =>
                this.editHandler("challenge_rating", e.target.value)
              }
              defaultValue={elem.challenge_rating}
              placeholder={elem.challenge_rating}
            />
          </h4>
          <h2>
            Name:
            <input
              onChange={e => this.editHandler("name", e.target.value)}
              defaultValue={elem.name}
              placeholder={elem.name}
            />
          </h2>
        </div>
        <h4>
          Type:
          <input
            onChange={e => this.editHandler("type", e.target.value)}
            placeholder={elem.type}
            defaultValue={elem.type}
          />
          <br />
          speed:
          <input
            onChange={e => this.editHandler("speed", e.target.value)}
            placeholder={elem.speed}
            defaultValue={elem.speed}
          />
          <br />
          Size:
          <input
            onChange={e => this.editHandler("size", e.target.value)}
            placeholder={elem.size}
            defaultValue={elem.size}
          />
          <br />
          Armor Class:
          <input
            type="number"
            onChange={e => this.editHandler("armor_class", e.target.value)}
            placeholder={elem.armor_class}
            defaultValue={elem.armor_class}
          />
          <br />
          Hit Points:
          <input
            type="number"
            onChange={e => this.editHandler("hit_points", e.target.value)}
            placeholder={elem.hit_points}
            defaultValue={elem.hit_points}
          />
          <br />
          <input
            type="text"
            placeholder="Image URL"
            onChange={e => this.editHandler("img", e.target.value)}
          />
        </h4>
        <div className="infoButtonContainer">
          <button
            onClick={() => this.props.dictEdit(elem.index, this.state)}
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

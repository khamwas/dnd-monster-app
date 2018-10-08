import React, { Component } from "react";
import "./Dictionary.css";
import MoreInfo from "./MoreInfo";

class Dictionary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      prompt: ["Click Card for More Info"]
    };
  }

  render() {
    let cardTotal = this.props.monsters
      .filter(elem =>
        elem.name.toUpperCase().includes(this.props.name.toUpperCase())
      )
      .filter(elem => elem.type.includes(this.props.type))
      .filter(elem => elem.challenge_rating >= this.props.minChallengeRating)
      .filter(elem => elem.challenge_rating <= this.props.maxChallengeRating)
      .length;

    let noInfo = this.state.prompt.map(elem => (
      <div className="infoHeader">
        <h1>{elem}</h1>
      </div>
    ));

    let moreInfo = (
      <MoreInfo
        dictClone={this.props.dictClone}
        dictEdit={this.props.dictEdit}
        statusChanger={this.props.statusChanger}
        changeStatus={this.props.changeStatus}
        cloneMonster={this.props.cloneMonster}
        editMonster={this.props.editMonster}
        currentCard={this.props.currentCard}
      />
    );

    let display = this.props.monsters
      .filter(elem =>
        elem.name.toUpperCase().includes(this.props.name.toUpperCase())
      )
      .filter(elem => elem.type.includes(this.props.type))
      .filter(elem => elem.challenge_rating >= this.props.minChallengeRating)
      .filter(elem => elem.challenge_rating <= this.props.maxChallengeRating)
      .slice(this.props.pageStart, this.props.pageEnd)
      .map(elem => (
        <div
          onClick={() => this.props.showMore(elem.index)}
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
            {elem.hit_points}
            <br />
            {elem.img ? <img className="cardImg" src={elem.img} /> : null}
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
          <div className="cardButtonContainer">
            <button
              onClick={() => this.props.addToBattleField(elem.index)}
              className="cardButton"
            >
              Add
            </button>
            <button
              value="elem.index"
              onClick={() => this.props.deleteCard(elem.index)}
              className="cardButton"
            >
              Delete
            </button>
          </div>
        </div>
      ));

    return (
      <div className="monsterDisplay">
        <div className="cardAndInfo">
          <div className="cardContainer">{display}</div>
          <div className="moreInfo">
            {this.props.currentCard.length == 0 ? noInfo : moreInfo}
          </div>
        </div>
        <div className="pageButtonContainer">
          <button
            onClick={() => this.props.changePage("down")}
            className="pageButton"
          >
            Previous
          </button>
          <button
            onClick={() => this.props.changePage("up")}
            className="pageButton"
          >
            Next
          </button>
          <p>
            Page {1 + this.props.pageStart / 8} of{" "}
            {cardTotal / 8 < 1 ? 1 : Math.ceil(cardTotal / 8)}
          </p>
        </div>
      </div>
    );
  }
}

export default Dictionary;

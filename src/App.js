import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import Header from "./Header";
import Dictionary from "./Dictionary";
import BattleField from "./BattleField";

class App extends Component {
  constructor() {
    super();
    this.state = {
      battleField: [],
      monsters: [],
      name: "",
      pageStart: 0,
      pageEnd: 8,
      minChallengeRating: 0.25,
      maxChallengeRating: 30,
      type: "",
      currentCard: [],
      toggleBattleField: false
    };
    this.changePage = this.changePage.bind(this);
    this.changeHandler = this.changeHandler.bind(this);
    this.resetPage = this.resetPage.bind(this);
    this.addToBattleField = this.addToBattleField.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
    this.showMore = this.showMore.bind(this);
    this.battleFieldtoggle = this.battleFieldtoggle.bind(this);
    // this.maxChallengeChecker = this.maxChallengeChecker.bind(this);
  }

  componentDidMount() {
    axios
      .get("http://localhost:3001/api/monsters/")
      .then(result => this.setState({ monsters: result.data }))
      .then(result => console.log(this.state.monsters.length));

    axios
      .get("http://localhost:3001/api/battlefield/")
      .then(result => this.setState({ battleField: result.data }))
      .then(result => console.log(this.state.battleField));
  }

  changePage(direction) {
    if (direction === "up") {
      this.setState({
        pageStart: this.state.pageStart + 8,
        pageEnd: this.state.pageEnd + 8
      });
    } else {
      this.setState({
        pageStart: this.state.pageStart - 8,
        pageEnd: this.state.pageEnd - 8
      });
    }
  }

  changeHandler(type, val) {
    if (type === "maxChallengeRating" && val < 1) {
      this.setState({ maxChallengeRating: 30 });
      this.resetPage();
    } else if (type === "minChallengeRating" || type === "maxChallengeRating") {
      this.setState({ [type]: +val });
      this.resetPage();
    } else {
      this.setState({ [type]: val });
      this.resetPage();
    }
  }

  resetPage() {
    this.setState({
      pageStart: 0,
      pageEnd: 6
    });
  }

  deleteCard(monsterIndex) {
    // console.log(monsterIndex);
    let deleteId = monsterIndex;
    let monsterId = this.state.monsters.findIndex(
      monster => monster.index === deleteId
    );
    let newMonsters = this.state.monsters.slice();
    newMonsters.splice(monsterId, 1);
    this.setState({ monsters: newMonsters });
    axios.delete(`http://localhost:3001/api/monsters/:${monsterIndex}`);
  }
  addToBattleField(monsterIndex) {
    let newBattleField = this.state.battleField.slice();
    let pushId = monsterIndex;
    let monsterId = this.state.monsters.findIndex(
      monster => monster.index === pushId
    );
    newBattleField.push(this.state.monsters[monsterId]);
    this.setState({ battleField: newBattleField });
    console.log(this.state.battleField);
    axios.post(`http://localhost:3001/api/battlefield/:${monsterIndex}`);
  }

  showMore(monsterIndex) {
    let newCurrentCard = [];
    let monsterId = this.state.monsters.findIndex(
      monster => monster.index === monsterIndex
    );
    newCurrentCard.push(this.state.monsters[monsterId]);
    this.setState({ currentCard: newCurrentCard });
  }

  battleFieldtoggle() {
    this.setState({ toggleBattleField: !this.state.toggleBattleField });
    console.log(this.state.toggleBattleField);
  }

  render() {
    let dictionaryDisplay = null;
    if (!this.state.toggleBattleField) {
      dictionaryDisplay = (
        <Dictionary
          toggleBattleField={this.state.toggleBattleField}
          pageStart={this.state.pageStart}
          pageEnd={this.state.pageEnd}
          resetPage={this.resetPage}
          changePage={this.changePage}
          deleteCard={this.deleteCard}
          addToBattleField={this.addToBattleField}
          monsters={this.state.monsters}
          name={this.state.name}
          type={this.state.type}
          minChallengeRating={this.state.minChallengeRating}
          maxChallengeRating={this.state.maxChallengeRating}
          monsters={this.state.monsters}
          currentCard={this.state.currentCard}
          showMore={this.showMore}
        />
      );
    }
    return (
      <div className="masterDisplay">
        <Header
          changeHandler={this.changeHandler}
          toggleBattleField={this.state.toggleBattleField}
          battleFieldToggle={this.battleFieldtoggle}
        />
        {dictionaryDisplay}
        <BattleField battleField={this.state.battleField} />
      </div>
    );
  }
}

export default App;

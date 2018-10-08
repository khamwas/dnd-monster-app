const axios = require("axios");

axios.get("http://dnd5eapi.co/api/monsters/").then(response => {
  for (let i = 0; i < response.data.results.length; i++) {
    axios.get(response.data.results[i].url).then(val => {
      monsters.push(val.data);
    });
  }
});
let battleField = [];
let monsters = [];
let id = 326;

module.exports = {
  getMonsters: (req, res, next) => {
    res.status(200).json(monsters);
  },

  postMonsters: (req, res, next) => {
    monsters.push(req.body);
    console.log(monsters[monsters.length - 1]);
    res.status(200).json(monsters);
  },
  putMonsters: (req, res, next) => {
    monsters.push(req.body);
    let editId = req.body.index;
    monsterId = monsters.findIndex(monster => monster.index == editId);

    monsters.splice(monsterId, 1);
    //edit code here
    console.log(req.body.index);
    res.status(200).json(monsters);
  },
  deleteMonsters: (req, res, next) => {
    // console.log(":" + monsters[0].index);
    let deleteId = req.params.id;
    monsterId = monsters.findIndex(monster => ":" + monster.index == deleteId);
    monsters.splice(monsterId, 1);
    res.status(200).json(monsters);
    console.log("delete successful", monsters.map(elem => elem.name));
  },

  getBattleField: (req, res, next) => {
    res.status(200).json(battleField);
  },
  postBattleField: (req, res, next) => {
    let pushId = req.params.id;
    monsterId = monsters.findIndex(monster => ":" + monster.index == pushId);
    battleField.push(monsters[monsterId]);
    res.status(200).json(battleField);
    console.log(battleField.map(elem => elem.name));
  },

  putBattleField: (req, res, next) => {
    battleField.push(req.body);
    let editId = req.body.index;
    monsterId = battleField.findIndex(monster => monster.index == editId);

    battleField.splice(monsterId, 1);
    //edit code here
    console.log(battleField);
    res.status(200).json(monsters);
  },

  deleteBattleField: (req, res, next) => {
    let deleteId = req.params.id;
    monsterId = battleField.findIndex(
      monster => ":" + monster.index == deleteId
    );
    battleField.splice(monsterId, 1);
    res.status(200).json(battleField);
    console.log(battleField.map(elem => elem.name));
  }
};

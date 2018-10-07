const express = require("express");
const cors = require("cors");
const { json } = require("body-parser");
const mc = require("../server/controllers/monster_controller");
const port = 3001;

const app = express();

app.use(json());
app.use(cors());

app.get("/api/monsters", mc.getMonsters);

app.post("/api/monsters", mc.postMonsters);

app.put("/api/monsters/:id", mc.putMonsters);

app.delete("/api/monsters/:id", mc.deleteMonsters);

app.get("/api/battlefield/", mc.getBattleField);

app.post("/api/battlefield/:id", mc.postBattleField);

app.delete("/api/battlefield/:id", mc.deleteBattleField);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

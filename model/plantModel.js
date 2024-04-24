const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../data/data.json');

function getAllPlants() {
  const data = fs.readFileSync(filePath);
  return JSON.parse(data);
}

function savePlants(plants) {
  fs.writeFileSync(filePath, JSON.stringify(plants, null, 2));
}

module.exports = {
  getAllPlants,
  savePlants
};
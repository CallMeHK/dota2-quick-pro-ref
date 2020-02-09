const fs = require('fs')

const rawdata = fs.readFileSync(__dirname + '/heroes.json')
const heroes = JSON.parse(rawdata)

const newHeroJson = Object.values(heroes).map(hero => ({
  id: hero.id,
  name: hero.localized_name,
}))

fs.writeFileSync(
  __dirname + '/filtered-heroes.json',
  JSON.stringify(newHeroJson),
)

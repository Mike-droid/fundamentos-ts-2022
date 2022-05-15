import _ from 'lodash'

const data = [
  {
    username: 'Mike',
    role: 'admin',
  },
  {
    username: 'Ximena',
    role: 'marketing',
  },
  {
    username: 'Oliver',
    role: 'player',
  },
  {
    username: 'Herbey',
    role: 'player',
  },
]
const rta = _.groupBy(data, (item) => item.role)
console.log(rta)

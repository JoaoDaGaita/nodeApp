const sqlConnection = require('../../sqlite')

const createUsers = require('./createUsers')

async function migrationsRun() {
  const schemas = [
    createUsers
  ].join('')

  sqlConnection()
  .then(db => db.exec(schemas))
  .catch(error => console.errorlog(error))
}

module.exports = migrationsRun
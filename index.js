const {subCommand, plugin} = parseCommandLine()
const api = require('api')

if (subCommand === 'add' && plugin === 'eslint') {
  const eslintPlugin = require('./plugins/eslint')

  eslList.transform(api)

  execute(api.actions)
}

const execute = async actions => {
  for (action of actions) {
    printAction(action)
    await executeActions()
  }
}

const printAction = action => {
  
}
const api = require('./api')

const eslintPlugin = require('./plugins/eslint')

eslintPlugin.transform(api)

const executeActions = async (actions) => {

}

const execute = async actions => {
  for (action of actions) {
    printAction(action)
  }
  await executeActions(actions)  
}

const printAction = action => {
  console.log(action)
}
execute(api.getActions())

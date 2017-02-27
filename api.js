'use strict'

options = { ignoreUserChanges, oneTimeOnly }
const actions = exports.actions = []

module.exports = {
  package: (package, version) => {
    actions.push({action: 'package', package, version})
  },
	packageQuery: (package) => 'version',

  file: (path, content) => {
    actions.push({action: 'file', path, content})
  },
	fileQuery: (path) => 'content',

  npmScript: (scriptType, command) => {
    actions.push({action: 'npmScript', scriptType, command})
  },
	npmScriptQuery: (scriptType, regExToFind) => ''
}

// test: mocha ./test/*.js

// test: mocha ./test/*.js && eslint .  (re-config)==>  // test: mocha ./test/*.jsx && eslint .
// testScripts = ['mocha', 'eslint']


// test: mocha ./test/*.js && eslint .
// (user-change)==>  // test: mocha --require myCustomFile.js ./test/*.js && eslint .
// (reconfig)==>  // test: mocha --require myCustomFile.js ./test/*.jsx && eslint .
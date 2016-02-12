'use strict'
/******************************************************************************
  STACK
******************************************************************************/
const db        = require('_db') // @TODO: -t findup-package-json
const router    = require('_router')
const engine    = require('_vcs2dom') // @TODO: fix vcs2dom
const auth      = require('_auth')


/******************************************************************************
  CUSTOM
******************************************************************************/
// const ud        = require('ud')
var urlRouting  = require('_urlRouting')
var dataRouting = require('_dataRouting')


/******************************************************************************
  MAIN
******************************************************************************/
// var ENGINE = ud.defonce(module, function (STATE, RENDER) { ... }, 'ENGINE')
// var STATE = ud.defonce(module, function initialize () { ... }, 'STATE')
// var ROUTES = ud.defobj(module, ROUTER(STATE))
/******************************************************************************
  MAIN
******************************************************************************/
var opts = { force: true, testKeys: undefined }
var data = [] //[{
//   type: 'put',
//   key: '!!esova-token',
//   value: '7f106319ef7edab0661767afd4e7f5cf3333bf42'
// },{
//   type: 'put',
//   key: '!!esova-promocode',
//   value: 'codingamigos'
// }]

db(data, opts, app)

function app (error, db) {
  if (error) throw error

  var globalStyles = { }
  globalStyles["html"] = "box-sizing: border-box;"
  globalStyles["*, *:before, *:after"] = "box-sizing: inherit;"
  globalStyles["body"] = `
    margin: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  `
  var engine$ = engine({
    target: 'body', // document.body
    globalStyles: globalStyles
  })

  // @TODO: create root component here!

  const router$ = router(db, urlRouting, dataRouting)
  router$.pipe(engine$)
}
/******************************************************************************
  HOT MODULE RELOADING
******************************************************************************/
// EXECUTED EVERY TIME WHEN router gets HOT RELOADED, but not on INITIALZATION
// var id = setTimeout(function () {ENGINE.update(STATE)},0)
// ENGINE(ROUTER) => ROUTER is a context dependent RENDER function
// var route = ROUTES.match("/posts/show/1.json")
// ROUTES$.pipe(engine$)
// route.fn.apply(null, '[req, res, route.params, route.splats]')

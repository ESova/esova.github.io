'use strict'
/******************************************************************************
  STACK
******************************************************************************/
const db        = require('_data') // @TODO: -t findup-package-json
const router    = require('_router')
const engine    = require('_vcs2dom') // @TODO: fix vcs2dom
const auth      = require('_auth')
db.reset()
/******************************************************************************
  CUSTOM
******************************************************************************/
const PAGE = {
  notFound  : require('_vcs/404'),
  esova     : require('_vcs/esova')
}
// const ud        = require('ud')
/******************************************************************************
  MAIN
******************************************************************************/
// var ENGINE = ud.defonce(module, function (STATE, RENDER) { ... }, 'ENGINE')
// var STATE = ud.defonce(module, function initialize () { ... }, 'STATE')
// var ROUTES = ud.defobj(module, ROUTER(STATE))
/******************************************************************************
  MAIN
******************************************************************************/
var globalStyles = { }
globalStyles["html"] = `
  box-sizing: border-box;
`
globalStyles["*, *:before, *:after"] =  `
  box-sizing: inherit;
`
globalStyles["body"] =  `
  display: flex;
  margin: 0;
  flex-direction: row;
  align-items: stretch;
  background-color: #526E96;
`

const dbAuth  = db // db.sublevel('auth')
const dbPage  = db // db.sublevel('page')
const dbError = db // db.sublevel('error')

start()

function start () {
  var engine$ = engine({
    target: 'body',
    globalStyles: globalStyles
  }) // engine(document.body)
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
/******************************************************************************
  HELPER - urlRouting
******************************************************************************/

function urlRouting (router) {
  // JSON.stringify(location) // for db.put('location.addressbar')
  // for db.put('location.gps') ???

  router.addRoute('/', PAGE.esova(dbPage))
  router.addRoute('*', PAGE.notFound(dbError))
}
/******************************************************************************
  HELPER - dataRouting
******************************************************************************/
function dataRouting (route) {
  return undefined
}

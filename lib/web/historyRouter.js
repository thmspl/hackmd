'use strict'

const Router = require('express').Router

const {urlencodedParser} = require('./utils')
const history = require('../history')
const fileSystem = require('../fileSystem')
const historyRouter = module.exports = Router()

// get history
historyRouter.get('/history', history.historyGet)
// post history
historyRouter.post('/history', urlencodedParser, history.historyPost)
// post history by note id
historyRouter.post('/history/:noteId', urlencodedParser, history.historyPost)
// delete history
historyRouter.delete('/history', history.historyDelete)
// delete history by note id
historyRouter.delete('/history/:noteId', history.historyDelete)

// TODO: Create a router for file things
historyRouter.get('/fileexists', fileSystem.fileExists)
historyRouter.get('/createfile', fileSystem.createFile)
import express from 'express'
import users from './users'
const router = express.Router()

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Sample Node App' })
})

router.use(users)
export default router

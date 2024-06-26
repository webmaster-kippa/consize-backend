import express, { Router } from 'express'
// import { validate } from '../../modules/validate'
import { auth } from '../../modules/auth'
import {
  courseControllers,
  // courseValidators 
} from "../../modules/courses"

const router: Router = express.Router()
router.use(auth())
router.put('/:quiz', courseControllers.updateQuiz)

export default router

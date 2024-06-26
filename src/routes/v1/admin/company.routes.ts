import express, { Router } from 'express'
import { validate } from '../../../modules/validate'
import { auth, companyControllers, companyValidators } from '../../../modules/admin'

const router: Router = express.Router()
router.use(auth())
router.route('/')
  .get(companyControllers.fetchCompanies)
router.post('/enroll', validate(companyValidators.enroll), companyControllers.enrollCompany)

router.route('/:teamId')
  .patch(companyControllers.resendOnboardEmail)
export default router

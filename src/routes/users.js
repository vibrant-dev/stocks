import express from 'express'
import authMiddleware from './../middlewares/authMiddleware'
import {
  signIn,
  signUp,
  userProfile,
} from './../controllers/userController'

import schemaValidator from './../middlewares/validations/schemaValidator'
import fileUploadMiddleware from './../middlewares/fileUploadMiddleware'
import customValidations from './../middlewares/customValidationsMiddleware'
const validateRequest = schemaValidator(true)

const router = express.Router()

router.post('/sign-in',
  [
    validateRequest
  ],
  signIn,
)

router.post('/sign-up',
  [
    validateRequest
  ],
  signUp,
)

router.get('/profile',
  [
    authMiddleware.checkAuthHeader,
    authMiddleware.validateAccessToken,
  ],
  userProfile,
)

export default router

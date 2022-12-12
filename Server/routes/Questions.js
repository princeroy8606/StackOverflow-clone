import express from 'express'

import {AskQuestion} from '../controllers/AskQuestion'


const router = express.Router()

router.post('/Ask',AskQuestion)

export default router;
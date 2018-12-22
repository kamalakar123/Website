import { Router } from 'express'

import students from './students'

const router = new Router()

router.use('/students', students)

export default router


// this is mail File 
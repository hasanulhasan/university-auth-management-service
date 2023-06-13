import express, { Application, Request, Response } from 'express'
import cors from 'cors'
const app: Application = express()
import usersService from './app/Modules/Users/users.service'
import userRouters from './app/Modules/Users/users.routes'

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users/', userRouters)

//testing
app.get('/', async (req: Request, res: Response) => {
  await usersService.createUser({
    id: '999',
    password: '1235',
    role: 'student',
  })
  res.send('working successfully ')
})

export default app

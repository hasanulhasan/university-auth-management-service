import cors from 'cors'
import express, { Application, Request, Response } from 'express'
import userRouters from './app/Modules/Users/users.routes'
import usersService from './app/Modules/Users/users.service'
const app: Application = express()

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

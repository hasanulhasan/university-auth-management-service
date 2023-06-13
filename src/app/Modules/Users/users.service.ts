import config from '../../../config'
import { IUser } from './users.interface'
import { User } from './users.model'
import { generatedUserId } from './users.utils'

const createUser = async (user: IUser): Promise<IUser | null> => {
  const id = await generatedUserId()
  user.id = id
  if (!user.password) {
    user.password = config.default_user_pass as string
  }

  //create user
  const createdUser = await User.create(user)
  if (!createdUser) {
    throw new Error('failled to create user!')
  }
  return createdUser
}

export default {
  createUser,
}

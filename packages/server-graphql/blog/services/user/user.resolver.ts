import { Resolver, Query, Arg,Mutation } from 'type-graphql'

import User from './user.type'
import loadUsers from './user.sample'

@Resolver()
export class UserResolver {
    private readonly items: User[] = loadUsers()

    @Query(() => User)
    async me(@Arg('id') id: string): Promise<User> {
        // as auth user. check from middleware.
        console.log(id, 'user_id')
        return await this.items[0]
    }

    @Mutation(() => User, { description: 'Update User' })
    async updateMe(@Arg('meInput') meInput: string): Promise<User> {
      console.log(meInput, 'meInput');
      return await this.items[0];
    }
}

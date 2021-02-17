import { ObjectType, Field, Int } from 'type-graphql'

@ObjectType()
export default class User {
    @Field((type) => Int)
    id: number

    @Field()
    name: string

    @Field()
    email: string
}

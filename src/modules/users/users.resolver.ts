import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { GetJWTInput } from './dto/get-jwt.input';

@Resolver('User')
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation('register')
  register(@Args('createUserInput') createUserInput: CreateUserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query('user')
  findOne(@Args('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Query('jwt')
  getJWT(@Args('getJWTInput') getJWTInput: GetJWTInput) {
    return this.usersService.getJWT(getJWTInput);
  }
}

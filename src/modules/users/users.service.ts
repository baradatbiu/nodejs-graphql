import { mapUserFields } from './../../utils/mapObjectFields';
import { UsersAPI } from './../../api/users';
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { GetJWTInput } from './dto/get-jwt.input';

@Injectable()
export class UsersService {
  constructor(private readonly usersAPI: UsersAPI) {}

  async create(createUserInput: CreateUserInput) {
    const user = await this.usersAPI.register(createUserInput);

    return mapUserFields({ ...user });
  }

  async findOne(id: string) {
    const user = await this.usersAPI.getById(id);

    return mapUserFields({ ...user });
  }

  async getJWT(getJWTInput: GetJWTInput) {
    return await this.usersAPI.getJWT(getJWTInput);
  }
}

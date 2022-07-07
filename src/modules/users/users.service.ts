import { BaseAPI } from './../../api/index';
import { mapUserFields } from './../../utils/mapObjectFields';
import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { GetJWTInput } from './dto/get-jwt.input';

@Injectable()
export class UsersService extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.USERS_API_URL;
  }

  async create(createUserInput: CreateUserInput) {
    try {
      const user = await this.post('register', createUserInput);

      return mapUserFields({ ...user });
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async findOne(id: string) {
    try {
      const user = await this.get(encodeURIComponent(id));

      return mapUserFields({ ...user });
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }

  async getJWT(getJWTInput: GetJWTInput) {
    try {
      return await this.post('login', getJWTInput);
    } catch (error) {
      console.log('API_ERROR', error);
    }
  }
}

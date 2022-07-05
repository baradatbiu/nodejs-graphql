import { BaseAPI } from './index';
import { CreateUserInput } from './../modules/users/dto/create-user.input';
import { GetJWTInput } from './../modules/users/dto/get-jwt.input';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersAPI extends BaseAPI {
  constructor() {
    super();
    this.baseURL = process.env.USERS_API_URL;
  }

  async register(createUserInput: CreateUserInput) {
    try {
      return await this.post('register', createUserInput);
    } catch (error) {
      console.log('API_ERROR', error.message);
    }
  }

  async getById(id: string) {
    try {
      return await this.get(encodeURIComponent(id));
    } catch (error) {
      console.log('API_ERROR', error.message);
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

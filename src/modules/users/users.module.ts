import { UsersAPI } from './../../api/users';
import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';

@Module({
  providers: [UsersResolver, UsersService, UsersAPI],
})
export class UsersModule {}

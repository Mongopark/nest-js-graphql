import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserResolver } from './UserResolver';
import { UserService } from './UserService';
import { User } from '../graphql/models/User';
import { UserSettingService } from './UserSettingService';
import { UserSetting } from '../graphql/models/UserSetting';
import { UserSettingsResolver } from '../graphql/resolvers/UserSettingsResolver';
import { Department } from '../graphql/models/Department';
import { DepartmentService } from './DepartmentService';
import { DepartmentResolver } from '../graphql/resolvers/DepartmentResolver';
import { AuthModule } from '../auth/auth.module'; // Import AuthModule


@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting, Department]),
  AuthModule, // Add AuthModule here
  ],
  providers: [
    UserResolver,
    UserService,
    UserSettingService,
    UserSettingsResolver,
    DepartmentService,
    DepartmentResolver,
  ],
})
export class UsersModule {}
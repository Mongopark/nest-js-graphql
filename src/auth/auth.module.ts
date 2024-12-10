import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthService } from './JwtAuthService';
import { AuthResolver } from './AuthResolver';

@Module({
  imports: [
    JwtModule.register({
      secret: 'secretKey', // Use an environment variable in production
      signOptions: { expiresIn: '1h' },
    }),
  ],
  providers: [JwtAuthService, AuthResolver],
  exports: [JwtAuthService],
})
export class AuthModule {}

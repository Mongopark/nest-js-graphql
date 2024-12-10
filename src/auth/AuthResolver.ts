import { Resolver, Mutation, Args } from '@nestjs/graphql';
import { JwtAuthService } from './JwtAuthService';

@Resolver()
export class AuthResolver {
  constructor(private authService: JwtAuthService) {}

  @Mutation(() => String)
  async login(
    @Args('username') username: string,
    @Args('password') password: string,
  ) {
    const user = await this.authService.validateUser(username, password);

    if (!user) {
      throw new Error('Invalid credentials');
    }

    const token = await this.authService.login(user);
    return token.access_token;
  }
}
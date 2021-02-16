import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { Role } from 'src/auth/role.decorator';
import { User } from './entities/user.entity';
import { UsersService } from './users.service';

@Resolver()
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService
  ){}

  @Query(returns => User)
  @Role(['Any'])
  me(
    @AuthUser() authUser: User
  ): User {
    return authUser;
  }

  
}

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from 'src/jwt/jwt.service';
import { MailService } from 'src/mail/mail.service';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';
import { Verification } from './entities/verification.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private readonly users: Repository<User>,
    @InjectRepository(Verification) private readonly verifications: Repository<Verification>,
    private readonly mailService: MailService,
    private readonly jwtService: JwtService
  ) {}

  async findById(id: number) {
    try {
      const user = await this.users.findOneOrFail({ id });
      return {
        ok: true,
        user
      };
    } catch (error) {
      return { 
        ok: false, 
        error: 'User Not Found' 
      };
    }
  }
}


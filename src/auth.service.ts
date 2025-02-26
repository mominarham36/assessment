// auth.service.ts
import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(private readonly jwtService: JwtService) {}

  async generateToken(payload: any) {
    return this.jwtService.sign(payload);
  }

  async validateToken(token: string) {
    return this.jwtService.verify(token);
  }
}

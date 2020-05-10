import { Injectable, CanActivate, ExecutionContext, SetMetadata } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { AuthRole } from './enum/auth-role.enum';
import { PayloadAuthDto } from './dto/payload-auth.dto';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const roles = this.reflector.get<string[]>('roles', context.getHandler());
    if (!roles) {
      return true;
    }
    const request = context.switchToHttp().getRequest();
    const user: PayloadAuthDto = request.user

    return roles.includes(user.role)

  }
}

export const AuthRoles = (roles: string[]) => SetMetadata("roles", roles);


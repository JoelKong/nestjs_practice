import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
type AuthInput = {
    username: string;
    password: string;
};
type SignInData = {
    userId: number;
    username: string;
};
type AuthResult = {
    accessToken: string;
    userId: number;
    username: string;
};
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    authenticate(input: AuthInput): Promise<AuthResult>;
    validateUser(input: AuthInput): Promise<SignInData | null>;
    signIn(user: SignInData): Promise<AuthResult>;
}
export {};

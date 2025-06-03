import { User } from './entities/users.entity';
import { Repository } from 'typeorm';
export declare class UsersService {
    private readonly usersRepository;
    constructor(usersRepository: Repository<User>);
    findUserByName(username: string): Promise<User | null>;
}

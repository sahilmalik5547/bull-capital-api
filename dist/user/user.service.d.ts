import { Model } from 'mongoose';
import { User } from './user.entity';
import { UserDto } from './user.dto';
export declare class UserService {
    private readonly userModel;
    constructor(userModel: Model<User>);
    create(userDto: UserDto): Promise<User>;
    findAll(): Promise<User[]>;
    findOne(username: string): Promise<User>;
    login(username: string, password: string): Promise<User | null>;
    update(username: string, userDto: UserDto): Promise<User>;
    delete(username: string): Promise<void>;
}

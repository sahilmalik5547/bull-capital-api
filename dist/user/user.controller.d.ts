import { UserDto } from './user.dto';
import { UserService } from './user.service';
export declare class UserController {
    private readonly userService;
    constructor(userService: UserService);
    create(userDto: UserDto): Promise<import("./user.entity").User>;
    findAll(): Promise<import("./user.entity").User[]>;
    findOne(username: string): Promise<import("./user.entity").User>;
    login(userDto: UserDto): Promise<import("./user.entity").User>;
    update(username: string, userDto: UserDto): Promise<import("./user.entity").User>;
    delete(username: string): Promise<void>;
}

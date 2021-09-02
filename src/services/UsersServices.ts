import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entity/User';
import { UserRepository } from '../repository/UserRepository';

type UserData = {
    username: string;
    email: string;
    password: string;
    active: boolean
}

class UsersServices {
    private usersRepositories: Repository<User>;

    constructor() {
      this.usersRepositories = getCustomRepository(UserRepository);
    }

    /*
    / Save an user and returns json
    */
    async store(userData: UserData) {
      const user = this.usersRepositories.create(userData);

      await this.usersRepositories.save(user);
      return user;
    }

    /*
    / List all users with filters
    */
    async get() {
      const user = this.usersRepositories.find();

      return user;
    }
}

export { UsersServices };

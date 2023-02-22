import { AppError } from "@shared/errors/AppError";
import { User } from "@users/entities/User";
import { IUsersRepository } from "@users/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

type ShowProfileParams = {
  userId: string
}

@injectable()
export class ShowProfileUseCase {
  constructor(
    @inject('UsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute({ userId }: ShowProfileParams): Promise<User> {
    const user = await this.usersRepository.findById(userId);
    if(!user) {
      throw new AppError('User not founds.', 404);
    }
    return user;
  }
}

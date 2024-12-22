import prisma from "@/lib/prisma";
import {
  CreateUserAbilityDTO,
  DeleteUserAbilityDTO,
  FindManyUserAbilitiesDTO,
} from "../dtos";
import UserAbilityRepository from "../userAbilityRepository";

export default class PrismaUserAbilityRepository
  implements UserAbilityRepository
{
  private include = { user: true, ability: true };

  async create(data: CreateUserAbilityDTO) {
    const {
      user: { password, ...user },
      ...ability
    } = await prisma.usersAbilities.create({
      data,
      include: this.include,
    });

    const sanitizedResult = {
      ...ability,
      user: {
        ...user,
      },
    };

    return sanitizedResult;
  }

  async findById(id: string) {
    const userAbility = await prisma.usersAbilities.findUnique({
      where: { id },
      include: this.include,
    });

    return userAbility;
  }

  async delete({ ids }: DeleteUserAbilityDTO) {
    await prisma.usersAbilities.deleteMany({
      where: { id: { in: ids.map((id) => id) } },
    });
  }

  async findMany({ page = 1, limit = 10 }: FindManyUserAbilitiesDTO) {
    const offset = (page - 1) * limit;

    const data = await prisma.usersAbilities.findMany({
      skip: offset,
      take: limit,
      include: this.include,
      orderBy: {
        created_at: "desc",
      },
    });

    const totalItems = await prisma.usersAbilities.count();
    const totalPages = Math.ceil(totalItems / limit);

    const sanitizedResult = data.map(
      ({ user: { password, ...user }, ...item }) => ({
        ...item,
        user: {
          ...user,
        },
      })
    );

    return {
      data: sanitizedResult,
      pagination: {
        page,
        limit,
        totalItems,
        totalPages,
      },
    };
  }
}

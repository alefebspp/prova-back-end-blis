import prisma from "@/lib/prisma";
import AbilitiesRepository from "../abilitiesRepository";
import { CreateAbilityDTO, UpdateAbilityDTO } from "../dtos";

export default class PrismaAbilitiesRepository implements AbilitiesRepository {
  async create(data: CreateAbilityDTO) {
    const ability = await prisma.abilities.create({ data });

    return ability;
  }
  async update({ id, data }: UpdateAbilityDTO) {
    const ability = await prisma.abilities.update({ where: { id }, data });

    return ability;
  }

  async findById(id: string) {
    const ability = await prisma.abilities.findUnique({ where: { id } });

    return ability;
  }
}

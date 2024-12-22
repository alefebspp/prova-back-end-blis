import User from "../User";
import UserRepository from "../userRepository";
import prisma from "@/lib/prisma";

export default class PrismaUserRepository implements UserRepository {
  async create(data: Omit<User, "id" | "created_at" | "updated_at">) {
    const user = await prisma.user.create({ data });

    return user;
  }

  async findById(id: string) {
    const user = await prisma.user.findUnique({ where: { id } });

    return user;
  }

  async findByEmail(email: string) {
    const user = await prisma.user.findUnique({ where: { email } });

    return user;
  }
}

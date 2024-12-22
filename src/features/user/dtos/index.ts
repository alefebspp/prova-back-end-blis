import User from "../User";

export type CreateUserDTO = Omit<User, "id" | "created_at" | "updated_at">;

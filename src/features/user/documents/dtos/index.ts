import UserDocument from "../UserDocument";

export type CreateUserDocumentDTO = Pick<
  UserDocument,
  "name" | "user_id" | "url"
>;

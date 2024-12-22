import UserDocument from "./UserDocument";
import { CreateUserDocumentDTO } from "./dtos";

export default interface UserDocumentsRepository {
  create: (data: CreateUserDocumentDTO) => Promise<UserDocument>;
  findById: (id: string) => Promise<UserDocument | null>;
}

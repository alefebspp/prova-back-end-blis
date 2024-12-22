import { ConvertPdfToTextDTO } from "./dtos";

export default interface ProcessDocumentService {
  convertPdfToText: (data: ConvertPdfToTextDTO) => Promise<{ url: string }>;
}

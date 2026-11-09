import { AmbienteFiscal } from '../../entities/NotaServico';

export interface ValidadorXmlDps {
  validar(xml: string, ambienteFiscal?: AmbienteFiscal): Promise<void>;
}
import { Usuario } from './usuario';
import { Divisao } from './divisao';
import { TipoDenuncia } from './tipoDenuncia';
export class Denuncia{
   
     id: string;
     tipodenuncia: TipoDenuncia;
     divisao: Divisao;
     nomeDenunciante: string;
    cpfDenunciante: string;
    cepDenunciantee: string;
    logradouroDenunciante: string;
    numeroDenunciante : string;
    complementoDenunciante: string;
     bairroDenunciante: string;
    cidadeDenunciante : string;
    estadoDenunciante: string;
    telefoneDenunciante: string;
    nomeDenunciado: string;
    cpfDenunciado: string;
    cepDenunciado: string;
    logradouroDenunciado: string;
    numeroDenunciado: string;
    complementoDenunciado: string;
     bairroDenunciado: string;
    tipoDenuncia: string;
    descricaoDenuncia: string;
	dataCadastro: Date;
    tempoVerificacao: number;
    dataVencimento: Date;
    usuarioCadastrou: Usuario
    status: string;
    quematribuiu: Number ;
    fiscalAtribuido:Number ;
    dataAtribuicao: Date;
    respostaDenuncia: string ;
    dataAResposta: Date;
    documentoVinculado: Number ;
     vincularNotificacao: string ;
     dataAEncerramento:Date;
     fiscalEncerrou: Number ;
     descricaoEncerramento: string;
}
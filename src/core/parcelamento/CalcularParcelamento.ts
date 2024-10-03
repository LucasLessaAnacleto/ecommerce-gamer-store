import Parcelamento from "./Parcelamento";
import { QTDE_MAX_PARCELAS, TAXA_JUROS_MENSAL } from "../constants";

export default class CalcularParcelamento{
    executar(
        valor: number,
        qtdeParcelas: number = QTDE_MAX_PARCELAS,
        taxaJuros: number = TAXA_JUROS_MENSAL
    ): Parcelamento {
        if( qtdeParcelas > QTDE_MAX_PARCELAS || qtdeParcelas < 2 ){
            throw new Error(`Quantidade de parcelas deve ser igual ou menor que ${QTDE_MAX_PARCELAS}`);
        }

        const totalComJuros = this.calcularJurosCompostos(
            valor, 
            taxaJuros, 
            qtdeParcelas
        );

        return {
            valorTotal: this.comDuasCasaDecimais(totalComJuros),
            valorParcela: this.comDuasCasaDecimais(totalComJuros / qtdeParcelas),
            qtdeParcelas,
            taxaJuros
        }
    }

    private calcularJurosCompostos(valorTotal: number, taxaMensal: number, qtdeParcelas: number) {
        return valorTotal * Math.pow(1 + taxaMensal, qtdeParcelas);
    }

    private comDuasCasaDecimais(valor: number){
        return +valor.toFixed(2)
    }
}
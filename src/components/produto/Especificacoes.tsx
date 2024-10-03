
import type { Especificacoes } from "@/core";
import Tag from "../shared/Tag";
import { IconTag } from "@tabler/icons-react";

interface EspecificacoesProps{
    especificacoesProduto: Especificacoes
}

export default function Especificacoes(props: EspecificacoesProps) {
    const { especificacoesProduto } = props;
    return (
        <div className="flex-1 flex flex-col gap-1">
            <div className="flex mb-2.5">
                <Tag label={especificacoesProduto.destaque} icone={IconTag} outlined/>
            </div>
            {
                Object.keys(especificacoesProduto)
                .filter(e => e !== "destaque")
                .map((chave, i) => (
                    <div key={i} className="flex gap-1">
                        <span className="p-2 w-1/3 bg-white/5 rounded h-full">{chave}</span>
                        <span className="p-2 w-2/3 bg-white/5 rounded h-full">
                            {especificacoesProduto[chave]}
                        </span>
                    </div>
                ))
              }
        </div>
    )
}
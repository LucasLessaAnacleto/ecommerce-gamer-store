import { Produto } from "@/core"

interface TituloProdutoProps{
    nomeProduto: string,
    descricaoProduto: string
}

export default function TituloProduto(props: TituloProdutoProps) {
    const { nomeProduto, descricaoProduto } = props;
    return (
        <div className="flex flex-col">
            <div className="text-2xl">{nomeProduto}</div>
            <div className="font-light text-zinc-400">{descricaoProduto}</div>
        </div>
    )
}
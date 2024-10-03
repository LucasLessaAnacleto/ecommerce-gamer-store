import { Produto } from "@/core";
import Image from "next/image";
import Especificacoes from "./Especificacoes";

interface InformacoesProdutoProps{
    produto: Produto
}

export default function InformacoesProduto(props: InformacoesProdutoProps) {
    const { produto } = props;
    return (
        <div className="flex items-center bg-violet-dark rounded-xl p-5">
            <div className="flex-1 relative flex justify-center h-96">
                <Image 
                    src={produto.imagem} 
                    alt="Image Produto" 
                    className="object-cover p-7"
                    fill
                />
            </div>
            <Especificacoes 
                especificacoesProduto={produto.especificacoes} 
            />
        </div>
    )
}
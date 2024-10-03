"use client"

import { Moeda, Produto } from "@/core"
import { IconShoppingCartPlus } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import NotaReview from "../shared/NotaReview";

interface ProdutoItemProps {
    produto: Produto
}

export default function ProdutoItem(props: ProdutoItemProps) {
    const { produto } = props;
    return (
        <Link href={`/produto/${produto.id}`} 
        className="flex flex-col bg-violet-dark border border-white/10 rounded-xl relative max-w-[350px]">
            <div className="absolute flex justify-end right-2.5 top-2.5 z-10">
                <NotaReview nota={produto.nota} />
            </div>
            <div className="w-full h-48 relative">
                <Image 
                    src={produto.imagem} 
                    alt={"imagem do produto"} 
                    fill 
                    className="object-contain"    
                />
            </div>
            <div className="flex-1 flex flex-col gap-3 p-5 border-t border-white/10">
                <span className="text-lg font-semibold">{produto.nome}</span>
                <div className="self-start text-sm border-b border-dashed">
                    {produto.especificacoes.destaque}
                </div>
                <div className="flex flex-col mt-auto">
                    <span className="text-sm text-gray-400 line-through">
                        de { Moeda.formatar(produto.precoBase) }
                    </span>
                    <span className="text-xl font-semibold text-emerald-400"> 
                        por { Moeda.formatar(produto.precoPromocional) }
                    </span>
                    <span className="text-zinc-400 text-xs">
                        até { "12" }x de R$ { "120.24" }
                    </span>
                </div>
                <button
                    className="flex justify-center items-center gap-2 h-8
                    bg-violet-700 hover:border-2 border-emerald-500 rounded-lg"
                    onClick={(e: any) => {
                        e.preventDefault();
                        alert(`adicionar item ${produto.id}`)                       
                    }}
                >
                    <IconShoppingCartPlus size={20}/>
                    <span>Adicionar</span>
                </button>
            </div>
        </Link>
    )
}
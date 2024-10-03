import BannerCompra from "@/components/produto/BannerCompra";
import InformacoesProduto from "@/components/produto/InformacoesProduto";
import ProdutoNaoEncontrado from "@/components/produto/ProdutoNaoEncontrado";
import TituloProduto from "@/components/produto/TituloProduto";
import { produtos } from "@/core";

interface PaginaProdutoItemProps{
    params: { 
        id: string 
    }
}

export default function PaginaProdutoItem(props: PaginaProdutoItemProps ) {
    const id = +props.params.id;
    const produto = produtos.find(produto => produto.id === id);

    return produto ? (
        <div className="flex flex-col gap-20 container py-10">
            <div className="flex flex-col gap-10">
                <TituloProduto 
                    nomeProduto={produto.nome}  
                    descricaoProduto={produto.descricao}
                />
                <InformacoesProduto produto={produto} />
                <BannerCompra produto={produto} />
            </div>
        </div>
    ) : (
        <ProdutoNaoEncontrado />
    )
}
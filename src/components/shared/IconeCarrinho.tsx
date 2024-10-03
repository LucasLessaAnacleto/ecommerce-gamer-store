import { IconShoppingCart } from "@tabler/icons-react"

interface IconeCarrinhoProps{
    qtdeItens?: number
}

export default function IconeCarrinho(props: IconeCarrinhoProps) {
    return (
        <div className="flex justify-center items-center w-14 h-14 rounded-full bg-violet-dark relative">
            <IconShoppingCart size={30} stroke={1.3} />
            <div className="absolute top-2 right-2 flex justify-center items-center bg-pink-500 text-white text-xs font-semibold rounded-full w-5 h-5">
                { props.qtdeItens ?? 0 }
            </div>
        </div>
    )
}
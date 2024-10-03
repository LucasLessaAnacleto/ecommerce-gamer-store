import { IconDevicesPcOff } from "@tabler/icons-react";
import Link from "next/link";

export default function ProdutoNaoEncontrado(props: { semBotaoVoltar?: boolean }) {
    return (
        <div className="flex flex-col justify-center items-center text-violet-300 flex-1">
            
                <IconDevicesPcOff size={180} stroke={0.5} />
                <span className="text-violet-300 font-light">
                    Produto não encontrado
                </span>
                {!props.semBotaoVoltar && (
                    <Link href="/" className="button bg-violet-700 text-white mt-5">
                        Voltar
                    </Link>
                )}
            
        </div>
    )
}
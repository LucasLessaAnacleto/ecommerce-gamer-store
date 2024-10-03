import Image from "next/image";
import Link from "next/link";

export default function Logo() {
    return (
        <Link href="/" className="flex items-center gap-3">
            <Image src="/logo2.png" alt="imagem logo" height={60} width={60}/>
            <Image src="/logo-texto.png" alt="texto da logo" width={230} height={0}/>
        </Link>
    )
}
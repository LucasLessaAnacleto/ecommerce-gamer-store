interface TagProps{
    label: string,
    icone: React.ElementType,
    outlined?: boolean
}

export default function Tag(props: TagProps) {
    return (
        <div className={`
            flex items-center gap-2 self-start py-1.5 px-4
            rounded-full text-xs uppercase
            ${ 
                props.outlined 
                ? 'border border-violet-500 text-white'
                : 'bg-gradient-to-r from-violet-600 to-violet-800'  
            }
        `}>
            <props.icone size={15} />
            <span>{props.label}</span>
        </div>
    )
}
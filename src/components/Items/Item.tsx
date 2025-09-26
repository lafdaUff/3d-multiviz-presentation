
interface ItemProps{
    selected: boolean
    item:{image: string}
    onClick: () => void
    onMouseEnter: (event: React.MouseEvent<HTMLLIElement>) => void
    onMouseLeave: (event: React.MouseEvent<HTMLLIElement>) => void
    ref: (el: HTMLLIElement | null) => void
}

export default function Item({selected, item, ref, onClick, onMouseEnter, onMouseLeave}: ItemProps){
    
    const classNames = `selectable-item ${selected ? "selectedItem" : ""}`

    return(
        <li ref={ref} className={classNames} style={{backgroundImage: `url(thumbs/${item.image}.png)` }} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            
        </li>
    )
}
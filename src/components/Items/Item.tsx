
interface ItemProps{
    selected: boolean
    item:{image: string}
    onClick: () => void
    onMouseEnter: (event: React.MouseEvent<HTMLLIElement>) => void
    onMouseLeave: (event: React.MouseEvent<HTMLLIElement>) => void
}

export default function Item({selected, item, onClick, onMouseEnter, onMouseLeave}: ItemProps){
    
    const classNames = `selectable-item ${selected ? "selected" : ""}`

    return(
        <li className={classNames} style={{backgroundImage: `url(thumbs/${item.image}.png)` }} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            
        </li>
    )
}
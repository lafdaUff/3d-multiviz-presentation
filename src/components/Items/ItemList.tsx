
import Item from './Item'
import {  useContext, useState, useRef } from 'react'
import ObjectsContext from '../../ObjectsContext'
import { type ModelData } from '../viewport/Experience'
import Tooltip from './Tooltip'
import { type TooltipProps } from './Tooltip'

export default function ItemList({list} : {list: ModelData[]}){

    const { currentObjects, setCurrentObjects } = useContext(ObjectsContext)

    const [tooltipContent, setTooltipContent] = useState<TooltipProps>()

    const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map())
    const listaRef = useRef<HTMLDivElement>(null)
    
    const isMobile = window.innerWidth <= 768

    function handleItemClick(item: ModelData) {
        setCurrentObjects((prevSelected) => {
        let newSelection;
        if (prevSelected.includes(item)) {
            newSelection = prevSelected.filter((link) => link != item);
        } else {
            newSelection = [...prevSelected, item];
        }

        const el = itemRefs.current.get(item.link);
        if (el) {
            el.scrollIntoView({
            behavior: "smooth",
            inline: "center", 
            block: "nearest",
            });
        }

        return newSelection;
        });
    }
    function handleItemEnter(event : React.MouseEvent<HTMLLIElement>, item: ModelData){
        const rect = event.currentTarget.getBoundingClientRect()
        const listaRect = listaRef.current?.getBoundingClientRect()
        if(isMobile && listaRect){
            setTooltipContent({location: {x: listaRect.left + listaRect.width / 3, y: listaRect.top - 50}, content: {title: item.nome, desc: item.descricao}})
            return
        }
        setTooltipContent({location: {x: rect.right + 10, y: rect.top}, content: {title: item.nome, desc: item.descricao}})
    }

    return(
        <>
            <div className="lista" ref={listaRef}>
                <div className="gradient"></div>
                <ul id="objetos" className="objetos">
                    { list.length > 0 ? list.map(item => (
                        <Item
                        ref={(el: HTMLLIElement | null) => {
                        if (el) itemRefs.current.set(item.link, el);
                        }}
                        selected={currentObjects.includes(item)}
                        item={{image: item.thumb}}
                        key={item.link}
                        onMouseEnter={(event) => handleItemEnter(event, item)}
                        onMouseLeave={() => setTooltipContent(undefined)}
                        onClick = {() => handleItemClick(item)}/>
                        
                    )) : <p>Nenhum item encontrado</p>}
                </ul>
            </div>
            {tooltipContent && <Tooltip {...tooltipContent}/>}
        </>
        
    )
}
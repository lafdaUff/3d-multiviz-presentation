
import Item from './Item'
import {  useContext, useState, useRef, useEffect } from 'react'
import ObjectsContext from '../../ObjectsContext'
import { type ModelData } from '../viewport/Experience'
import Tooltip from './Tooltip'
import { type TooltipProps } from './Tooltip'
import {Swiper, SwiperSlide} from 'swiper/react'
import { A11y } from 'swiper/modules';
import type { Swiper as SwiperType } from 'swiper';


export default function ItemList({list} : {list: ModelData[]}){

    const { currentObjects, setCurrentObjects } = useContext(ObjectsContext)

    const [tooltipContent, setTooltipContent] = useState<TooltipProps>()

    const itemRefs = useRef<Map<string, HTMLLIElement>>(new Map())
    const listaRef = useRef<HTMLDivElement>(null)
    
    const isMobile = window.innerWidth <= 768

    // Show tooltip for initial slide on mobile
    useEffect(() => {
        if (isMobile && list.length > 0) {
            const listaRect = listaRef.current?.getBoundingClientRect()
            if (listaRect) {
                const item = list[0] // Initial slide is at index 0
                setTooltipContent({
                    location: {x: listaRect.left + listaRect.width / 2, y: listaRect.top - 50}, 
                    content: {title: item.nome, desc: item.descricao}
                })
            }
        }
    }, [isMobile, list])

    function handleItemClick(item: ModelData) {
        setCurrentObjects((prevSelected) => {
        let newSelection;
        if (prevSelected.includes(item)) {
            newSelection = prevSelected.filter((link) => link != item);
        } else {
            newSelection = [...prevSelected, item];
        }

        

        return newSelection;
        });
    }

    function handleItemEnter(event : React.MouseEvent<HTMLLIElement>, item: ModelData){
        const rect = event.currentTarget.getBoundingClientRect()
        setTooltipContent({location: {x: rect.right + 10, y: rect.top}, content: {title: item.nome, desc: item.descricao}})
    }

    function handleSlideChange(swiper: SwiperType) {
        const currentIndex = swiper.activeIndex
        
        if (list[currentIndex] && isMobile) {
            const listaRect = listaRef.current?.getBoundingClientRect()
            if (listaRect) {
                const item = list[currentIndex]
                setTooltipContent({
                    location: {x: listaRect.left + listaRect.width / 2, y: listaRect.top - 30}, 
                    content: {title: item.nome},
                    origin: 'center'
                })
            }
        }
    }

    return(
        <>
            <div className="lista" ref={listaRef}>
                <div className="gradient"></div>
                {
                    isMobile ? 
                    <Swiper
                        modules={[ A11y]} 
                        spaceBetween={15}
                        slidesPerView={3}
                        scrollbar={{ draggable: true }}
                        initialSlide={0}
                        centeredSlides={true}
                        onSlideChange={handleSlideChange}
                    >
                    { list.length > 0 ? list.map(item => (
                        <SwiperSlide key={item.link}>
                            <Item
                                ref={(el: HTMLLIElement | null) => {
                                    if (el) itemRefs.current.set(item.link, el);
                                }}
                                selected={currentObjects.includes(item)}
                                item={{image: item.thumb}}
                                onMouseEnter={() => {}} // No mouse enter for mobile swiper
                                onMouseLeave={() => {}} // No mouse leave for mobile swiper
                                onClick = {() => handleItemClick(item)}/>
                        </SwiperSlide>
                    )) : <p>Nenhum item encontrado</p>}
                    
                    </Swiper> : 
                    
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
                }
                
            </div>
            {tooltipContent && <Tooltip {...tooltipContent}/>}
        </>
        
    )
}
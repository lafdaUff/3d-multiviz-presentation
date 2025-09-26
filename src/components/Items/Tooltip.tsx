import { useEffect, useRef, useState } from 'react'
export interface TooltipProps {
    location: {
        x: number
        y: number
    }
    content: {
        title: string
        desc?: string
        img?: string
    }
    timeout?: number // Optional timeout in milliseconds
}

export default function Tooltip({location = {x: 1, y: 2}, content, timeout = 3000} : TooltipProps ){
    const [isVisible, setIsVisible] = useState(true)
    const timeoutRef = useRef<number | null>(null)

    useEffect(() => {
        // Check if device is mobile
        const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window

        setIsVisible(true)
        if (isMobile && timeout > 0) {
            timeoutRef.current = setTimeout(() => {
                setIsVisible(false)
            }, timeout)
        }

        return () => {
            if (timeoutRef.current) {
                clearTimeout(timeoutRef.current)
            }
        }
    }, [timeout, content])

    if (!isVisible) {
        return null
    }

    return(
        <div className="tooltip" id="global-tooltip" style={{top: location.y, left: location.x}}>
            <div className="tooltip-content">
                {content.img && <img src={content.img} alt={content.title} />}
                <p className="bold">{content.title}</p>
                <p>{content.desc}</p>
            </div>
        </div>
    )
}
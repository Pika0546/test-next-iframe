import React, { useCallback, useEffect, useRef, useState } from 'react'
import styles from "../styles/Scale.module.css";
const ScalePage = () => {
    const containerRef = useRef();
    const childrenRef = useRef();

    const [scale, setScale] = useState(1);

    const firstSizeRef = useRef({
        width: 0,
        height: 0,
    })
    const round = (n) => {
        return Math.round(n * 100) / 100

    }

    const handleResize = useCallback(()=>{
        if(containerRef.current && childrenRef.current){
            const result = (()=>{
                const containerW = containerRef.current.offsetWidth;
                const childrenW = firstSizeRef.current.offsetWidth;
                const scale = Math.min(1, containerW/childrenW);
                return scale;
            })()
            setScale(result)
            childrenRef.current.style.transform = `translate(-50%, -50%) scale(${result})`
        }
    },[])

    useEffect(()=>{
        firstSizeRef.current = {
            offsetWidth:containerRef.current.offsetWidth,
            offsetHeight: containerRef.current.offsetHeight
        }
        window.addEventListener("resize", handleResize)
        return () => {
            window.removeEventListener("resize", handleResize)
        }
    },[])

    return (
        <div className={styles.wrapper}>
            <div className={styles.container} ref={containerRef}>
                <div className={styles.children} ref={childrenRef}>
                    <h1>A very long header {round(scale)}</h1>
                    <p>Lorem Ipsum is simply dummy text
                        of the printing and typesetting industry.
                        Lorem Ipsum has been the industry&apos;s standard
                        dummy text ever since the 1500s, when an u
                        nknown printer took a galley of type and scrambled it to make a type specimen
                        book. It has survived not only five centuries,
                        but also the leap into electronic typesetting, r
                        emaining essentially unchanged. It was popularised in the 1960s
                        with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Ald
                        us PageMaker including versions of Lorem Ipsum.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ScalePage
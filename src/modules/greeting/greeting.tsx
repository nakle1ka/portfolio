'use client';

import { useEffect } from 'react';
import { useMouse } from './hooks/useMouse';

import { Layer } from './components/layer/layer';
import { Button } from '@/components/ui/button';

import styles from './greeting.module.css';

type Props = {

}


// TODO добавить анимации
export const Greeting: React.FC<Props> = () => {
    const { x, y } = useMouse();

    useEffect(() => {
        Object.assign(document.documentElement, {
            style: `
                --move-x: ${(x - window.innerHeight / 2) * -(10 / window.innerWidth)}deg;
                --move-y: ${(y - window.innerHeight / 2) * (11 / window.innerHeight)}deg;
            `
        })
    }, [x, y]);

    return (
        <section className={styles.greeting}>
            <div className={styles.layers} >
                <div className={styles.layersContainer}>

                    {/* General */}
                    <Layer layerCount={1}>

                        <div className={styles.textContainer}>
                            <div className={styles.text}>
                                <h2 className={styles.title}><span>Hello!</span> My name is <br /> Artem</h2>
                                <p className={styles.desc}>I am a <span>frontend developer</span></p>

                                <Button asChild className={styles.button}>
                                    <a href="#">My GitHub</a>
                                </Button>
                            </div>
                        </div>

                        <div className={styles.fullSize}>
                            <div className={styles.canvas} id={styles.contentCanvas}>
                                <img src="/icons/greeting/laptop.svg" alt="" className={`${styles.laptop}`} />
                            </div>
                        </div>
                    </Layer>

                    {/* Details */}
                    <Layer layerCount={2}>
                        <div className={styles.fullSize}>
                            <div className={styles.canvas} >
                                <img src="/icons/greeting/message.svg" alt="" className={`${styles.img} ${styles.message} `} />
                                <img src="/icons/greeting/contact.svg" alt="" className={`${styles.img} ${styles.contact}`} />
                                <img src="/icons/greeting/graph.svg" alt="" className={`${styles.img} ${styles.graph}`} />
                                <img src="/icons/greeting/picture.svg" alt="" className={`${styles.img} ${styles.picture}`} />
                            </div>
                        </div>
                    </Layer>

                    {/* Particles */}
                    <Layer layerCount={3}>
                        <div className={styles.fullSize}>
                            <div className={styles.canvas} >
                                <img src="/icons/greeting/bluePolygon.svg" alt="" className={`${styles.img} ${styles.polygon}`} id={styles.bluePolygon} />
                                <img src="/icons/greeting/redPolygon.svg" alt="" className={`${styles.img} ${styles.polygon}`} id={styles.redPolygon1} />
                                <img src="/icons/greeting/redPolygon.svg" alt="" className={`${styles.img} ${styles.polygon}`} id={styles.redPolygon2} />
                            </div>
                        </div>
                    </Layer>
                </div>
            </div>
        </section>
    );
}
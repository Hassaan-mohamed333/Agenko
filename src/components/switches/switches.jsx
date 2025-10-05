import React, { useEffect, useState } from 'react'
import styles from './Switches.module.css'

export default function Switches() {
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        // كود الـ useEffect هنا
        console.log('المكون تم تحميله')
    }, [])

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Switches</h1>
            <p className={styles.counter}>القيمة: {counter}</p>
            <button className={styles.button} onClick={increaseCounter}>
                زيادة
            </button>
        </div>
    )
}
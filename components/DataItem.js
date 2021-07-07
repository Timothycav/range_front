import Link from 'next/link'
//import Image from 'next/image'
import styles from '@/styles/PostItem.module.css'

export default function DataItem({ dv }) {
    return (
        <div>


            <div className={styles.dataviewsItem}>
                <h3>{dv.title}</h3>
                <h3>{dv.text}</h3>

            </div>


        </div>
    )
}
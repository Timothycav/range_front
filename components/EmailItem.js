import Link from 'next/link'
//import Image from 'next/image'
import styles from '@/styles/PostItem.module.css'

export default function EmailItem({ em }) {
    return (
        <div>


            <div className={styles.postsItem}>
                <h3>{em.name}</h3>


            </div>


        </div>
    )
}
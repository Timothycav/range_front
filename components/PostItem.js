import Link from 'next/link'
//import Image from 'next/image'
import styles from '@/styles/PostItem.module.css'

export default function PostItem({ ps }) {
    return (
        <div>


            <div className={styles.postsItem}>
                <h3>{ps.Title}</h3>
                <h3>{ps.post}</h3>

            </div>


        </div>
    )
}
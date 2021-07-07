import Link from 'next/link'
//import Image from 'next/image'
import styles from '@/styles/PostItem.module.css'

export default function SafetyItem({ st }) {
    return (
        <div>


            <div className={styles.postsItem}>
                <h3>{st.title}</h3>
                <h3>{st.text}</h3>

            </div>


        </div>
    )
}
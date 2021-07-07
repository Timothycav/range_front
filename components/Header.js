
import Link from 'next/link'
import Image from 'next/image'
import styles from '@/styles/Header.module.css'

export default function Header() {


    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Image src="/images/site/rangeimage.png" alt="image of range logo" width={160} height={165} />
            </div>



            <nav>
                <ul>
                    <li className={styles.list_dash}>
                        <Link href='account/dashboard'>
                            <a>Dashboard</a>
                        </Link>
                    </li>

                </ul>
            </nav>
        </header>
    )
}
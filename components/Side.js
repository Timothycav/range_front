import { FaSignOutAlt } from 'react-icons/fa'
import { useContext } from 'react'
import styles from '@/styles/Side.module.css'

import AuthContext from '@/context/AuthContext'
import Link from 'next/link'

export default function SidePage() {
    const { user, logout } = useContext(AuthContext)
    return (



        <div className={styles.dash_cont2}>
            <div className={styles.side}>
                <h2>RCS Internal Site</h2>
                <h3>My Programs</h3>
                <h4>Take me to . . .</h4>
                <Link href="#"><a>  <h2>SIS Portal</h2> </a></Link>
                <Link href="#"><a>  <h2>WebMail</h2> </a></Link>
                <Link href="#"><a>  <h2>LMS Portal</h2> </a></Link>
                <button
                    onClick={() => logout()}
                    className={styles.signOut}

                >
                    <FaSignOutAlt /> Logout
                </button>

            </div>







        </div>


    )
}

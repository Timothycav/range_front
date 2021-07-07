import Link from 'next/link'
//import Layout from '@/components/Layout'
import SafetyItem from '@/components/SafetyItem'
import styles from '../../styles/Home.module.css'
import { API_URL } from '@/config/index'

export default function SafetiesPage({ safeties }) {
    return (
        <div>
            <Link href="account/dashboard"><a>  <h2>Dashboard</h2> </a></Link>
            <div className={styles.container}>

                <h1>Safety</h1>
                {safeties.length === 0 && <h3>No posts to show</h3>}

                {safeties.map((st) => (
                    <SafetyItem key={st.id} st={st} />
                ))}

            </div>
        </div>
    )
}

export async function getServerSideProps() {


    // Fetch events
    const safeRes = await fetch(
        `${API_URL}/safeties?`
    )
    const safeties = await safeRes.json()


    console.log(safeties)


    return {
        props: { safeties }

    }
}
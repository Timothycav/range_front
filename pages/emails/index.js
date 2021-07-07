import Link from 'next/link'
//import Layout from '@/components/Layout'
import EmailItem from '@/components/EmailItem'
import styles from '../../styles/Home.module.css'
import { API_URL } from '@/config/index'

export default function EmailsPage({ emails }) {
    return (
        <div>
            <Link href="account/dashboard"><a>  <h2>Dashboard</h2> </a></Link>
            <div className={styles.container}>

                <h1>Emails</h1>
                {emails.length === 0 && <h3>No emails to show</h3>}

                {emails.map((em) => (
                    <EmailItem key={em.id} em={em} />
                ))}

            </div>
        </div>
    )
}

export async function getServerSideProps() {


    // Fetch emails
    const emailRes = await fetch(
        `${API_URL}/emails?`
    )
    const emails = await emailRes.json()


    //console.log(emails)


    return {
        props: { emails }

    }
}
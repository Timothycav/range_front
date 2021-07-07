import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { API_URL } from '@/config/index'

import { FaSignOutAlt, FaRegCommentDots, FaAmbulance, FaWifi, FaCheck, FaSchool, FaChalkboardTeacher, FaLock } from 'react-icons/fa'
import { useContext } from 'react'
import styles from '@/styles/Dash.module.css'
import Image from 'next/image'
import AuthContext from '@/context/AuthContext'
import Link from 'next/link'
import { useRouter } from 'next/router'
import router from 'next/router'
import EmailItem from '@/components/EmailItem'

export default function DashboardPage({ emails }) {
    const { user, logout } = useContext(AuthContext)
    const handleData = (e) => {
        e.preventDefault()

        {
            emails.map((em) => (

                console.log(em)


            ))


        }


        if (user.email == 'bob@gmail.com') {

            router.push('/dataviews')

        } else {
            toast.error('Only Auth users allowed access ')


        }
    }



    return (
        <div>
            <div className={styles.header}>
                <Image src="/images/site/rangeimage.png" alt="image of range logo" width={160} height={165} />
                <h1 className={styles.rangehead}>RANGE</h1>
                <h1 className={styles.myprograms}>My Programs</h1>
            </div>
            <ToastContainer />
            {user ? (
                // If logged in
                <>
                    <div className={styles.dash_cont}>

                        <div className={styles.side}>
                            <h2>RCS Internal Site</h2>
                            <h3>My Programs</h3>
                            <h3 className={styles.takeme2}>Take me to . . .</h3>
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

                        <div className={styles.programs}>
                            <div className={styles.box}>
                                < FaRegCommentDots size={56} />
                                <Link href="/posts"><a>  <h3>Help</h3> </a></Link>

                            </div>
                            <div className={styles.box}>
                                < FaAmbulance size={56} />
                                <Link href="/safeties"><a>  <h2>Safety</h2> </a></Link>
                            </div>
                            <div className={styles.box}>
                                < FaWifi size={56} />
                                <Link href="/techs"><a>  <h2>Technology</h2> </a></Link>
                            </div>
                            <div className={styles.box}>
                                < FaCheck size={56} />
                                <Link href="/evals"><a>  <h2>Evaluations</h2> </a></Link>
                            </div>
                            <div className={styles.box}>
                                < FaSchool size={56} />
                                <Link href="/currs"><a>  <h2>Curriculm</h2> </a></Link>
                            </div>
                            <div className={styles.box}>
                                < FaChalkboardTeacher size={56} />
                                <Link href="/trainings"><a>  <h2>Tranings</h2> </a></Link>
                            </div>
                            <div >
                                <button className={styles.big_box} onClick={handleData}>
                                    < FaLock size={28} />
                                    <h3>RCS Data View</h3>
                                </button>

                                <Link href="/dataviews"><a> </a></Link>


                            </div>
                        </div>
                    </div>
                </>

            ) : (
                // If logged out
                <>
                    <div><p>
                        You must be logged in to view this page.</p></div>

                </>

            )}
        </div>









    )
}

export async function getServerSideProps() {


    // Fetch emails
    const emailRes = await fetch(
        `${API_URL}/emails?`
    )
    const emails = await emailRes.json()

    // console.log("this is:" + emails)
    //console.log(emails)


    return {
        props: { emails }

    }
}
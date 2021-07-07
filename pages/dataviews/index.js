import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import Link from 'next/link'
import Header from '@/components/Header'
import Side from '@/components/Side'
import { useContext, useState } from 'react'

import DataItem from '@/components/DataItem'
import AuthContext from '@/context/AuthContext'
import styles from '../../styles/Home.module.css'
import { API_URL } from '@/config/index'
import router from 'next/router'
import { useRouter } from 'next/router'

export default function DataviewsPage({ dataviews }) {




    return (
        <div>
            <Header />


            <div className={styles.container}>
                <Side />
                <div className={styles.help_cont}>
                    <h1>Data Views</h1>
                    {dataviews.length === 0 && <h3>No data to show</h3>}

                    {dataviews.map((dv) => (
                        <DataItem key={dv.id} dv={dv} />
                    ))}

                </div>

            </div>
        </div>


    )
}





export async function getServerSideProps() {




    // Fetch events
    const dataRes = await fetch(
        `${API_URL}/dataviews?`
    )
    const dataviews = await dataRes.json()


    console.log(dataviews)
    return {
        props: { dataviews }

    }
}
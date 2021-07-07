import Link from 'next/link'
import { parseCookies } from '@/helpers/index'
import { ToastContainer, toast } from 'react-toastify'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
import Side from '@/components/Side'
import PostItem from '@/components/PostItem'
import styles from '../../styles/Home.module.css'
import { API_URL } from '@/config/index'

export default function PostsPage({ posts, token }) {


    return (
        <div>
            <Header />

            <ToastContainer />
            <div className={styles.container}>
                <Side />
                <div className={styles.help_cont}>
                    <h1>Help</h1>
                    {posts.length === 0 && <h3>No help to show</h3>}

                    {posts.map((ps) => (
                        <PostItem key={ps.id} ps={ps} />
                    ))}

                </div>

            </div>
        </div>
    )
}

export async function getServerSideProps() {

    /*const { token } = parseCookies(req)

    const postRes = await fetch(`${API_URL}/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        }

    })
    if (!postRes.ok) {

        if (postRes.status === 403 || postRes.status === 401) {
            toast.error('No token included')
            console.log("no token")

            return
        }
        toast.error('Something Went Wrong')

    }*/


    // Fetch events
    const postRes = await fetch(
        `${API_URL}/posts?`
    )

    const posts = await postRes.json()

    // console.log(posts)

    return {

        props: { posts }

    }

}
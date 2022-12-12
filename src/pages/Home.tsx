import style from './Home.module.css'
import { Header, Featured, Footer, Email, Social, LoaderLogo, Intro, AboutMe, Experience, Projects } from '../components'
import { useEffect, useState } from 'react'


export default function Home() {
    const [ loading, setLoading ] = useState(false)

        
    useEffect(() => {
        setLoading(true)
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    }, []);
    
    return (
        <div className={style.container}>
            { loading ? (
                <LoaderLogo></LoaderLogo>
    ) : (
        <div>
            <Header></Header>
            <div className={style.fullContainer}>
                <Intro></Intro>
                <div className={style.scrollPoints} id="aboutMe"></div><AboutMe></AboutMe>
                <div className={style.scrollPoints} id="jobs"></div><Featured></Featured>
                <div className={style.scrollPoints} id="experience"></div><Experience></Experience>
                <div className={style.scrollPoints} id="projects"></div><Projects></Projects>
                <Footer></Footer>
                <Email></Email>
                <Social></Social>
            </div>
            </div>
            )}
           
            
        </div>

        
    )
}

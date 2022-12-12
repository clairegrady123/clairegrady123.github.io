
import { useNavigate } from 'react-router-dom'
import style from './Header.module.css'
export default function Header() {
  const navigate = useNavigate()


  const scroll = (id: string) => {
   const s = document.getElementById(id)
   if (s !== null){
    s.scrollIntoView()
   }
   
  }
  const getActions = () => {
      return <>
       <div className={style.name}>CLAIRE GRADY</div>
       
       <button className={style.numbers} onClick={() => scroll('aboutMe')}>01.  </button>
       <button className={style.pages} onClick={() => scroll('aboutMe')}>About</button>
       <button className={style.numbers} onClick={() => scroll('jobs')}>02.</button>
       <button className={style.pages} onClick={() => scroll('jobs')}>Projects</button>
       <button className={style.numbers} onClick={() => scroll('experience')}>03.</button>
       <button className={style.pages} onClick={() => scroll('experience')}>Experience</button>
       <button className={style.numbers} onClick={() => scroll('projects')}>04.</button>
       <button className={style.pages} onClick={() => scroll('projects')}>Contact</button>
       <button className={style.button} onClick={() => scroll('projects')}><div className={style.buttonText}>Resume</div></button>
      </>
  }

  return (
    <header className={style.header}>
        <div className={style.actions}>
          { getActions() }
        </div>
      
    </header>
  )
}

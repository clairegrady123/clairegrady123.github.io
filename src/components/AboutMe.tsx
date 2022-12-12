import style from './AboutMe.module.css'

export default function AboutMe() {
     return(
        <>
        <div className={style.horizontalTextContainer}>
               <div className={style.numbers}>01.</div>
               <div className={style.pages}>About Me</div>
            </div>
                <div className={style.verticalTextContainer}>
                <div className={style.textDarkGreySmall}>
                    <p>I am a semester away from finishing my Masters of Computer Science through the <a href = "https://www.une.edu.au/">  University of New England</a>.</p>

                    <p>Currently working as a Software Developer at Amdocs and as a Freelance Content Writer for Pepper Content.</p>

                    <p>Outside work, I occasionally blog on Medium. Off-screen, I sketch my thoughts here!</p><p></p><p><p></p></p></div>
            </div>
            
            </>
     )
}
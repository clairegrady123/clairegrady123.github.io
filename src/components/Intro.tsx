import style from './Intro.module.css'

export default function Intro() {
    return (
        <>
        <div className={style.typeWriter}>
                <div className={style.textGreen}>H e l l o  &nbsp; &nbsp; W o r l d ! &nbsp;&nbsp; M y &nbsp;&nbsp; n a m e &nbsp;&nbsp; i s &nbsp;&nbsp; . . .</div></div>
                <div className={style.textLightGreyLarge}>Claire Grady.</div>
                <div className={style.textDarkGreyLarge}>I love exploring new things!</div>
                <div className={style.verticalTextContainer}>
                <div className={style.textDarkGreySmall}>
                    <p>I am a software developer based on the Sunshine Coast with a goal-driven creative mindset and passion for learning and innovating.</p>

                    <p>Currently working as a Software Developer at Amdocs and as a Freelance Content Writer for Pepper Content.</p>

                    <p>Outside work, I occasionally blog on Medium. Off-screen, I sketch my thoughts here!</p></div>
                <button className={style.button}>Contact Me</button>
            </div>
            </>
    )
}
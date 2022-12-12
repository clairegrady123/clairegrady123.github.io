import style from './LoaderLogo.module.css'

export default function LoaderLogo() {
    return (
        <div className={style.loaderContainer}>
            <div className={style.cont}>
            <svg viewBox="-10 -10 210 110" xmlns="http://www.w3.org/2000/svg" fill = "none" strokeWidth="3" stroke="rgb(100, 255, 218)" height="300" width = "300">
            {/* this is the same as the indivudal points below <polygon points="39,0 0,22 0,67 39,90 78, 68 78, 23" /> */}
            <polygon points="39,0 0,22"/>
            <polygon points="0, 22 0, 67"/>
            <polygon points="0, 67 39, 90"/>
            <polygon points="39,90 78, 68"/>
            <polygon points="78, 68 78, 23"/>
            <polygon points ="78, 23 39,0"/>
            <text x = "39" y="60" text-anchor="middle" font-family= "Consolas">CG</text>
            </svg></div>
        </div>
    )
}
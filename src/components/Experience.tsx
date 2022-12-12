import style from './Experience.module.css'
import { useState } from 'react'

export default function Experience() {


    var triangle = '\u{25B9}'
    var jobOne: Array<string> = [" Creating Tech Content as a freelancer for the content giant Pepper Content", " Submitted tech blogs on various popular topics for American Technology Consulting in 2500 words with a rating of 4.5/5.0.", " Submitted a White Paper for Nous Infosystems in 1500 words with a rating of 5.0/5.0.", "View all my submitted articles and blogs here."]
    var jobTwo: Array<string> = [" Responsible for code development, UAT support, automation of Bell Canada NM1-RTB customisation project as part of Digital Delivery scrum team.", " Part of Walk-the-Tech Go team of 10 developers building a microservice in Go language. Tech stack includes Couchbase, Go echo framework, REST APIs implementation, JMeter and Postman for testing purposes.", " Selected as one of the 15 Amdocs India Innovation Agents with the least industry experience in years.", " Responsible for code development as a developer of Amdocs Technology BSS-B2B Billing & RTB scrum team.", " Certified in Agile, DevOps, and MS360 architecture."]
    var display:string[] = jobOne
    console.log(display)
    const [ currentJobDescription, setCurrentJobDescription ] = useState<string[]>(jobOne)
    const [ currentJobTitle, setCurrentJobTitle ] = useState<string>("Freelance Content Writer ")
    const [ currentJobDates, setCurrentJobDates ] = useState<string>("July 2021 - Present")
    const [ currentJobCompany, setCurrentJobCompany ] = useState<string>(" Pepper")

    const clickJobOne = (elem: any) => {
        
        switch(elem) {
            case 0:
                display = jobOne
            setCurrentJobDescription(jobOne)
            setCurrentJobTitle("Freelance Content Writer ")
            setCurrentJobDates("July 2021 - Present")
            setCurrentJobCompany(" Pepper")
            break
            case 1:
                display = jobTwo
            setCurrentJobDescription(display)
            setCurrentJobTitle("Software Developer ")
            setCurrentJobDates("July 2020 - June 2021")
            setCurrentJobCompany(" Amdocs")
            break
            case 2:
                display = ["JOB THREE", "2nd line", "3rd line"]
            setCurrentJobDescription(display)
            setCurrentJobTitle("Full Stack Engineer ")
            setCurrentJobDates("July 2019 - July 2020")
            setCurrentJobCompany(" Unknown")
            break
            default:
                display = jobOne
            setCurrentJobDescription(jobOne)
            setCurrentJobTitle("Freelance Content Writer ")
            setCurrentJobDates("July 2021 - Present")
            break
        }
    }

    return (
        <>
        <div className={style.horizontalTextContainer}>
        <div className={style.numbers}>03.</div>
        <div className={style.pagesWorked}>Where I've Worked</div>
        </div>
         <div className={style.horizontalProjectContainer}>
            
         <ul role="tablist" aria-label="Job tabs">
         {/* <div className={style.selector}><div role="button" className={style.selectorLine}  tabIndex={-1}></div><button className={style.selectorLine}  ></button><div className={style.selectorLine} role="button" tabIndex={0}></div></div> */}
             <li>
                 <button id = "tab-0" role="tab" aria-selected="true" aria-controls="panel-0" onClick={()=>clickJobOne(0)}>
                     <span role="button" tabIndex={0}>Pepper</span>
                 </button>
             </li>
             <li>
                 <button id = "tab-1" onClick={() => clickJobOne(1)}>
                     <span role="button" tabIndex={0}>Amdocs</span>
                 </button>
             </li>
             <li>
                 <button id = "tab-2" onClick={() => clickJobOne(2)}>
                     <span role="button" tabIndex={0}>Three!</span>
                 </button>
             </li>
         </ul>
         <div className={style.wTextContainer}> <div className={style.title}>{currentJobTitle}<a href = "https://www.une.edu.au/"> @ {currentJobCompany}</a><p></p><div className={style.dates}>{currentJobDates}</div><p></p></div><p><div className={style.triangle}>{triangle}&nbsp;&nbsp;&nbsp;&nbsp;</div>{currentJobDescription[0]}</p>
         <p><div className={style.triangle}>{triangle}&nbsp;&nbsp;&nbsp;&nbsp;</div>{currentJobDescription[1]}</p><p><div className={style.triangle}>{triangle}&nbsp;&nbsp;&nbsp;&nbsp;</div>{currentJobDescription[2]}</p><p><div className={style.triangle}>{triangle}&nbsp;&nbsp;&nbsp;&nbsp;</div>{currentJobDescription[3]}</p></div>
         <div id="panel-0" role="tabpanel" aria-labelledby="tab-0">
         </div>
         </div>

     </>
    )
}
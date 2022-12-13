import style from './Experience.module.css'
import { useState } from 'react'

export default function Experience() {


    var triangle = '\u{25B9}'
    var jobOne: Array<string> = [` Facilitated robotics workshops to over 10,000 students across Australia`, " Ran professional development courses for primary, middle and high school educators", " Utilised Design Thinking to develop robotic solutions to solve community issues"]
    var jobTwo: Array<string> = [" Co-creator of a unique service learning project that involved primary school students printing and assembling prosthetic devices for physically disabled people in Hanoi ('Unlimbited Possibilities' pages 34-37)", " Co-creator of UNIS' first Maker Day ('Maker Day Makes its Mark' pages 12-13)"]
    var jobThree: Array<string> = [" Member of ASB's R&D team", " Designed and piloted Google's 20% time project which focused on developing student's information fluency skills"]
    var jobFour: Array<string> = [" Managed the school's LMS", " Facilitated whole school professional development program on website development"]
    var display:string[] = jobOne
    const [ currentJobDescription, setCurrentJobDescription ] = useState<string[]>(jobOne)
    const [ currentJobTitle, setCurrentJobTitle ] = useState<string>("Director of a Robotics Education Business ")
    const [ currentJobDates, setCurrentJobDates ] = useState<string>("Jan 2018 - Aug 2021")
    const [ currentJobCompany, setCurrentJobCompany ] = useState<string>(" Robokids")

    const clickJobOne = (elem: any) => {
        
        switch(elem) {
            case 0:
                display = jobOne
            setCurrentJobDescription(jobOne)
            setCurrentJobTitle("Director of a Robotics Education Business ")
            setCurrentJobDates("Jan 2018 - Aug 2021")
            setCurrentJobCompany(" Robokids")
            break
            case 1:
                display = jobTwo
            setCurrentJobDescription(display)
            setCurrentJobTitle("Teacher / Extension & Enrichment Think Tank Member ")
            setCurrentJobDates("Aug 2015 - June 2017")
            setCurrentJobCompany(" United Nations International School")
            break
            case 2:
                display = jobThree
            setCurrentJobDescription(display)
            setCurrentJobTitle("Teacher / R&D Team Member ")
            setCurrentJobDates("Aug 2012 - June 2015")
            setCurrentJobCompany(" American School of Bombay")
            break
            case 3:
                display = jobFour
            setCurrentJobDescription(display)
            setCurrentJobTitle("Teacher / E-Learning Leader ")
            setCurrentJobDates("Jan 2010 - July 2012")
            setCurrentJobCompany(" Newport Lakes Primary School")
            break
            default:
                display = jobOne
            setCurrentJobDescription(jobOne)
            setCurrentJobTitle("Director of a Robotics Education Business ")
            setCurrentJobDates("Jan 2018 - Aug 2021")
            setCurrentJobCompany(" Robokids")
            break
        }
    }
    if (currentJobCompany === " Robokids"){
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
                     <span role="button" tabIndex={0}>Robokids</span>
                 </button>
             </li>
             <li>
                 <button id = "tab-1" onClick={() => clickJobOne(1)}>
                     <span role="button" tabIndex={0}>UNIS</span>
                 </button>
             </li>
             <li>
                 <button id = "tab-2" onClick={() => clickJobOne(2)}>
                     <span role="button" tabIndex={0}>ASB</span>
                 </button>
             </li>
             <li>
                 <button id = "tab-3" onClick={() => clickJobOne(3)}>
                     <span role="button" tabIndex={0}>NLPS</span>
                 </button>
             </li>
         </ul>
         <div className={style.wTextContainer}> <div className={style.title}>{currentJobTitle}<a href = "https://www.une.edu.au/"> @ {currentJobCompany}</a><p></p><div className={style.dates}>{currentJobDates}</div><p></p></div><p><div className={style.triangle}>{triangle}&nbsp;&nbsp;&nbsp;&nbsp;</div><div className={style.triangleText}>{currentJobDescription[0]}</div></p>
         <p><div className={style.triangle}>{triangle}&nbsp;&nbsp;&nbsp;&nbsp;</div><div className={style.triangleText}>{currentJobDescription[1]}</div></p><p><div className={style.triangle}>{triangle}&nbsp;&nbsp;&nbsp;&nbsp;</div><div className={style.triangleText}>{currentJobDescription[2]}</div></p></div>
         <div id="panel-0" role="tabpanel" aria-labelledby="tab-0">
         </div>
         </div>

     </>
    )
    }
    else{
        return(
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
                     <span role="button" tabIndex={0}>Robokids</span>
                 </button>
             </li>
             <li>
                 <button id = "tab-1" onClick={() => clickJobOne(1)}>
                     <span role="button" tabIndex={0}>UNIS</span>
                 </button>
             </li>
             <li>
                 <button id = "tab-2" onClick={() => clickJobOne(2)}>
                     <span role="button" tabIndex={0}>ASB</span>
                 </button>
             </li>
             <li>
                 <button id = "tab-3" onClick={() => clickJobOne(3)}>
                     <span role="button" tabIndex={0}>NLPS</span>
                 </button>
             </li>
         </ul>
         <div className={style.wTextContainer}> <div className={style.title}>{currentJobTitle}<a href = "https://www.une.edu.au/"> @ {currentJobCompany}</a><p></p><div className={style.dates}>{currentJobDates}</div><p></p></div><p><div className={style.triangle}>{triangle}&nbsp;&nbsp;&nbsp;&nbsp;</div><div className={style.triangleText}>{currentJobDescription[0]}</div></p>
         <p><div className={style.triangle}>{triangle}&nbsp;&nbsp;&nbsp;&nbsp;</div><div className={style.triangleText}>{currentJobDescription[1]}</div></p></div>
         <div id="panel-0" role="tabpanel" aria-labelledby="tab-0">
         </div>
         </div>

     </>
        )
    }
}
import style from './Featured.module.css'
import Mandelbrot from './mandelbrot.png'
import Sudoku from './BothSudoku.png'
import Gomoku from './Gomoku.png'


export default function Jobs() {
return (
    <>
    <div className={style.horizontalTextContainer}>
               <div className={style.numbers}>02.</div>
               <div className={style.pages}>Projects</div>
            </div>
            
            <div className={style.fullContainer}>
            <div className={style.horizontalProjectContainer}>
            <a href="https://github.com/clairegrady123/Gomoku_Full_Stack">
                <div className={style['image-holder']}>
                <img src={Gomoku} alt="mandelbrot" width="480" height = "270"/>
                </div></a>
                <div className={style.jobContainer}>
                <div className={style.featuredProjectContainer}></div>
                <div className={style.featuredProjectContainer}><h4 className={style.h4}>Featured Project</h4></div>
                <div className={style.projectNameContainer}><h3 className={style.h3}>Gomoku Full Stack Web App</h3></div>
                <div className={style.descriptionContainer}><h5 className={style.h5}>A full stack web application that allows you to play Gomoku, a Japanese board game. Made using React, Express and MongoDB, written in Typscript</h5></div>
                <div className={style.languageContainer}><h4 className={style.h4}>React &nbsp; Typescript &nbsp; Express &nbsp; NodeJs &nbsp; MongoDB </h4></div>
                <div className={style.linkContainer}>
                <a href="https://github.com/clairegrady123/Gomoku_Full_Stack">
                <svg xmlns = "http://www.w3.org/2000/svg" className={style['bi-socialGrey']}
                viewBox="0 0 438.549 438.549">
                <path d = "M 409.132 114.573 c -19.608 -33.596 -46.205 -60.194 -79.798 -79.8 C 295.736 15.166 259.057 5.365 219.271 5.365 c -39.781 0 -76.472 9.804 -110.063 29.408 c -33.596 19.605 -60.192 46.204 -79.8 79.8 C 9.803 148.168 0 184.854 0 224.63 c 0 47.78 13.94 90.745 41.827 128.906 c 27.884 38.164 63.906 64.572 108.063 79.227 c 5.14 0.954 8.945 0.283 11.419 -1.996 c 2.475 -2.282 3.711 -5.14 3.711 -8.562 c 0 -0.571 -0.049 -5.708 -0.144 -15.417 c -0.098 -9.709 -0.144 -18.179 -0.144 -25.406 l -6.567 1.136 c -4.187 0.767 -9.469 1.092 -15.846 1 c -6.374 -0.089 -12.991 -0.757 -19.842 -1.999 c -6.854 -1.231 -13.229 -4.086 -19.13 -8.559 c -5.898 -4.473 -10.085 -10.328 -12.56 -17.556 l -2.855 -6.57 c -1.903 -4.374 -4.899 -9.233 -8.992 -14.559 c -4.093 -5.331 -8.232 -8.945 -12.419 -10.848 l -1.999 -1.431 c -1.332 -0.951 -2.568 -2.098 -3.711 -3.429 c -1.142 -1.331 -1.997 -2.663 -2.568 -3.997 c -0.572 -1.335 -0.098 -2.43 1.427 -3.289 c 1.525 -0.859 4.281 -1.276 8.28 -1.276 l 5.708 0.853 c 3.807 0.763 8.516 3.042 14.133 6.851 c 5.614 3.806 10.229 8.754 13.846 14.842 c 4.38 7.806 9.657 13.754 15.846 17.847 c 6.184 4.093 12.419 6.136 18.699 6.136 c 6.28 0 11.704 -0.476 16.274 -1.423 c 4.565 -0.952 8.848 -2.383 12.847 -4.285 c 1.713 -12.758 6.377 -22.559 13.988 -29.41 c -10.848 -1.14 -20.601 -2.857 -29.264 -5.14 c -8.658 -2.286 -17.605 -5.996 -26.835 -11.14 c -9.235 -5.137 -16.896 -11.516 -22.985 -19.126 c -6.09 -7.614 -11.088 -17.61 -14.987 -29.979 c -3.901 -12.374 -5.852 -26.648 -5.852 -42.826 c 0 -23.035 7.52 -42.637 22.557 -58.817 c -7.044 -17.318 -6.379 -36.732 1.997 -58.24 c 5.52 -1.715 13.706 -0.428 24.554 3.853 c 10.85 4.283 18.794 7.952 23.84 10.994 c 5.046 3.041 9.089 5.618 12.135 7.708 c 17.705 -4.947 35.976 -7.421 54.818 -7.421 s 37.117 2.474 54.823 7.421 l 10.849 -6.849 c 7.419 -4.57 16.18 -8.758 26.262 -12.565 c 10.088 -3.805 17.802 -4.853 23.134 -3.138 c 8.562 21.509 9.325 40.922 2.279 58.24 c 15.036 16.18 22.559 35.787 22.559 58.817 c 0 16.178 -1.958 30.497 -5.853 42.966 c -3.9 12.471 -8.941 22.457 -15.125 29.979 c -6.191 7.521 -13.901 13.85 -23.131 18.986 c -9.232 5.14 -18.182 8.85 -26.84 11.136 c -8.662 2.286 -18.415 4.004 -29.263 5.146 c 9.894 8.562 14.842 22.077 14.842 40.539 v 60.237 c 0 3.422 1.19 6.279 3.572 8.562 c 2.379 2.279 6.136 2.95 11.276 1.995 c 44.163 -14.653 80.185 -41.062 108.068 -79.226 c 27.88 -38.161 41.825 -81.126 41.825 -128.906 C 438.536 184.851 428.728 148.168 409.132 114.573 Z"/>
                </svg>
                </a>
                </div>
                <div className={style.linkContainer}></div>
            </div>
            </div>
            {/* Project 2 */}
            <div className={style.horizontalProjectContainer}>
           
                <div className={style.jobContainerL}>
                <div className={style.featuredProjectContainerL}></div>
                <div className={style.featuredProjectContainerL}><h4 className={style.h4L}>Featured Project</h4></div>
                <div className={style.projectNameContainerL}><h3 className={style.h3L}>CUDA Mandelbrot Fractal</h3></div>
                <div className={style.descriptionContainerL}><h5 className={style.h5L}>Program that demonstrates the use of Nvidia CUDA to compute the mandelbrot set in parallel and produces a bitmap image of a size selected by the user</h5></div>
                <div className={style.languageContainerL}><h4 className={style.h4L}>CUDA   &nbsp; C</h4></div>
                <div className={style.linkContainerL}>
                <a href="https://github.com/clairegrady123/CUDA_Mandelbrot">
                <svg xmlns = "http://www.w3.org/2000/svg" className={style['bi-socialGreyL']}
                viewBox="0 0 438.549 438.549">
                <path d = "M 409.132 114.573 c -19.608 -33.596 -46.205 -60.194 -79.798 -79.8 C 295.736 15.166 259.057 5.365 219.271 5.365 c -39.781 0 -76.472 9.804 -110.063 29.408 c -33.596 19.605 -60.192 46.204 -79.8 79.8 C 9.803 148.168 0 184.854 0 224.63 c 0 47.78 13.94 90.745 41.827 128.906 c 27.884 38.164 63.906 64.572 108.063 79.227 c 5.14 0.954 8.945 0.283 11.419 -1.996 c 2.475 -2.282 3.711 -5.14 3.711 -8.562 c 0 -0.571 -0.049 -5.708 -0.144 -15.417 c -0.098 -9.709 -0.144 -18.179 -0.144 -25.406 l -6.567 1.136 c -4.187 0.767 -9.469 1.092 -15.846 1 c -6.374 -0.089 -12.991 -0.757 -19.842 -1.999 c -6.854 -1.231 -13.229 -4.086 -19.13 -8.559 c -5.898 -4.473 -10.085 -10.328 -12.56 -17.556 l -2.855 -6.57 c -1.903 -4.374 -4.899 -9.233 -8.992 -14.559 c -4.093 -5.331 -8.232 -8.945 -12.419 -10.848 l -1.999 -1.431 c -1.332 -0.951 -2.568 -2.098 -3.711 -3.429 c -1.142 -1.331 -1.997 -2.663 -2.568 -3.997 c -0.572 -1.335 -0.098 -2.43 1.427 -3.289 c 1.525 -0.859 4.281 -1.276 8.28 -1.276 l 5.708 0.853 c 3.807 0.763 8.516 3.042 14.133 6.851 c 5.614 3.806 10.229 8.754 13.846 14.842 c 4.38 7.806 9.657 13.754 15.846 17.847 c 6.184 4.093 12.419 6.136 18.699 6.136 c 6.28 0 11.704 -0.476 16.274 -1.423 c 4.565 -0.952 8.848 -2.383 12.847 -4.285 c 1.713 -12.758 6.377 -22.559 13.988 -29.41 c -10.848 -1.14 -20.601 -2.857 -29.264 -5.14 c -8.658 -2.286 -17.605 -5.996 -26.835 -11.14 c -9.235 -5.137 -16.896 -11.516 -22.985 -19.126 c -6.09 -7.614 -11.088 -17.61 -14.987 -29.979 c -3.901 -12.374 -5.852 -26.648 -5.852 -42.826 c 0 -23.035 7.52 -42.637 22.557 -58.817 c -7.044 -17.318 -6.379 -36.732 1.997 -58.24 c 5.52 -1.715 13.706 -0.428 24.554 3.853 c 10.85 4.283 18.794 7.952 23.84 10.994 c 5.046 3.041 9.089 5.618 12.135 7.708 c 17.705 -4.947 35.976 -7.421 54.818 -7.421 s 37.117 2.474 54.823 7.421 l 10.849 -6.849 c 7.419 -4.57 16.18 -8.758 26.262 -12.565 c 10.088 -3.805 17.802 -4.853 23.134 -3.138 c 8.562 21.509 9.325 40.922 2.279 58.24 c 15.036 16.18 22.559 35.787 22.559 58.817 c 0 16.178 -1.958 30.497 -5.853 42.966 c -3.9 12.471 -8.941 22.457 -15.125 29.979 c -6.191 7.521 -13.901 13.85 -23.131 18.986 c -9.232 5.14 -18.182 8.85 -26.84 11.136 c -8.662 2.286 -18.415 4.004 -29.263 5.146 c 9.894 8.562 14.842 22.077 14.842 40.539 v 60.237 c 0 3.422 1.19 6.279 3.572 8.562 c 2.379 2.279 6.136 2.95 11.276 1.995 c 44.163 -14.653 80.185 -41.062 108.068 -79.226 c 27.88 -38.161 41.825 -81.126 41.825 -128.906 C 438.536 184.851 428.728 148.168 409.132 114.573 Z"/>
                </svg>
                </a>
                </div>
                <div className={style.linkContainerL}></div>
            </div>
            <a href="https://github.com/clairegrady123/CUDA_Mandelbrot">
            <div className={style['image-holderL']}>
                <img src={Mandelbrot} alt="Mandelbrot" width="480" height = "270"/>
                </div></a>
            </div>
            {/* Project 3 */}
            <div className={style.horizontalProjectContainer}>
                <a href="https://github.com/clairegrady123/DFS_Sudoku_Solver">
                <div className={style['image-holder']}>
                <img src={Sudoku} alt="Sudoku" width="480" height = "270"/>
                </div></a>
                <div className={style.jobContainer}>
                <div className={style.featuredProjectContainer}></div>
                <div className={style.featuredProjectContainer}><h4 className={style.h4}>Featured Project</h4></div>
                <div className={style.projectNameContainer}><h3 className={style.h3}>DFS Sudoku Solver</h3></div>
                <div className={style.descriptionContainer}><h5 className={style.h5}>Program that uses a form of Depth-First Search to solve any Sudoku puzzle</h5></div>
                <div className={style.languageContainer}><h4 className={style.h4}>Python &nbsp;  NumPy  &nbsp; Tkinter</h4></div>
                <div className={style.linkContainer}>
                <a href="https://github.com/clairegrady123/DFS_Sudoku_Solver">
                <svg xmlns = "http://www.w3.org/2000/svg" className={style['bi-socialGrey']}
                viewBox="0 0 438.549 438.549">
                <path d = "M 409.132 114.573 c -19.608 -33.596 -46.205 -60.194 -79.798 -79.8 C 295.736 15.166 259.057 5.365 219.271 5.365 c -39.781 0 -76.472 9.804 -110.063 29.408 c -33.596 19.605 -60.192 46.204 -79.8 79.8 C 9.803 148.168 0 184.854 0 224.63 c 0 47.78 13.94 90.745 41.827 128.906 c 27.884 38.164 63.906 64.572 108.063 79.227 c 5.14 0.954 8.945 0.283 11.419 -1.996 c 2.475 -2.282 3.711 -5.14 3.711 -8.562 c 0 -0.571 -0.049 -5.708 -0.144 -15.417 c -0.098 -9.709 -0.144 -18.179 -0.144 -25.406 l -6.567 1.136 c -4.187 0.767 -9.469 1.092 -15.846 1 c -6.374 -0.089 -12.991 -0.757 -19.842 -1.999 c -6.854 -1.231 -13.229 -4.086 -19.13 -8.559 c -5.898 -4.473 -10.085 -10.328 -12.56 -17.556 l -2.855 -6.57 c -1.903 -4.374 -4.899 -9.233 -8.992 -14.559 c -4.093 -5.331 -8.232 -8.945 -12.419 -10.848 l -1.999 -1.431 c -1.332 -0.951 -2.568 -2.098 -3.711 -3.429 c -1.142 -1.331 -1.997 -2.663 -2.568 -3.997 c -0.572 -1.335 -0.098 -2.43 1.427 -3.289 c 1.525 -0.859 4.281 -1.276 8.28 -1.276 l 5.708 0.853 c 3.807 0.763 8.516 3.042 14.133 6.851 c 5.614 3.806 10.229 8.754 13.846 14.842 c 4.38 7.806 9.657 13.754 15.846 17.847 c 6.184 4.093 12.419 6.136 18.699 6.136 c 6.28 0 11.704 -0.476 16.274 -1.423 c 4.565 -0.952 8.848 -2.383 12.847 -4.285 c 1.713 -12.758 6.377 -22.559 13.988 -29.41 c -10.848 -1.14 -20.601 -2.857 -29.264 -5.14 c -8.658 -2.286 -17.605 -5.996 -26.835 -11.14 c -9.235 -5.137 -16.896 -11.516 -22.985 -19.126 c -6.09 -7.614 -11.088 -17.61 -14.987 -29.979 c -3.901 -12.374 -5.852 -26.648 -5.852 -42.826 c 0 -23.035 7.52 -42.637 22.557 -58.817 c -7.044 -17.318 -6.379 -36.732 1.997 -58.24 c 5.52 -1.715 13.706 -0.428 24.554 3.853 c 10.85 4.283 18.794 7.952 23.84 10.994 c 5.046 3.041 9.089 5.618 12.135 7.708 c 17.705 -4.947 35.976 -7.421 54.818 -7.421 s 37.117 2.474 54.823 7.421 l 10.849 -6.849 c 7.419 -4.57 16.18 -8.758 26.262 -12.565 c 10.088 -3.805 17.802 -4.853 23.134 -3.138 c 8.562 21.509 9.325 40.922 2.279 58.24 c 15.036 16.18 22.559 35.787 22.559 58.817 c 0 16.178 -1.958 30.497 -5.853 42.966 c -3.9 12.471 -8.941 22.457 -15.125 29.979 c -6.191 7.521 -13.901 13.85 -23.131 18.986 c -9.232 5.14 -18.182 8.85 -26.84 11.136 c -8.662 2.286 -18.415 4.004 -29.263 5.146 c 9.894 8.562 14.842 22.077 14.842 40.539 v 60.237 c 0 3.422 1.19 6.279 3.572 8.562 c 2.379 2.279 6.136 2.95 11.276 1.995 c 44.163 -14.653 80.185 -41.062 108.068 -79.226 c 27.88 -38.161 41.825 -81.126 41.825 -128.906 C 438.536 184.851 428.728 148.168 409.132 114.573 Z"/>
                </svg>
                </a>
                </div>
                <div className={style.linkContainer}></div>
            </div>
            </div>
            </div>
            </>
)}
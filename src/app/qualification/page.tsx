'use client'
import { pirateOne_regular } from '../../utilities/font';

export default function Qualification(){
    return(<>
    <style jsx>
        {
            `
            .main {
                width: 100%;
                height: auto;
                display: grid;
                place-items: center;
                background-color: rgb(245, 245, 245);
                padding: 50px 0;
            }
            .main .head {
                color: rgba(91, 14, 216, 0.767);
                position: relative;
                margin-bottom: 100px;
                font-weight: 500;
            }
            .main .head::after {
                content: " ";
                position: absolute;
                width: 50%;
                height: 3px;
                left: 50%;
                bottom: -5px;
                transform: translateX(-50%);
                background-image: linear-gradient(to right, rgba(91, 14, 216, 0.767), rgba(238, 12, 200, 0.747));
            }
            
            /* Container Css Start  */
            
            .container {
                width: 60%;
                height: auto;
                margin: auto 0;
                position: relative;
            }
            .container ul {
                list-style: none;
            }
            .container ul::after {
                content: " ";
                position: absolute;
                width: 2px;
                height: 100%;
                left: 50%;
                top: 0;
                transform: translateX(-50%);
                background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(91,99,183,1) 35%);
            }
            .container ul li {
                width: 50%;
                height: auto;
                padding: 15px 20px;
                background-color: #ddd;
                border-radius: 20px;
                box-shadow: 1px 1px 15px rgba(0, 0, 0, 0.218);
                position: relative;
                margin-bottom: 30px;
                z-index: 99;
            }
            .container ul li:nth-child(4) {
                margin-bottom: 0;
            }
            .container ul li .circle {
                position: absolute;
                width: 20px;
                height: 20px;
                border-radius: 50%;
                background-color: rgba(91,99,183,1);
                top: 0;
                display: grid;
                place-items: center;
            }
            .circle::after{
                content: ' ';
                width: 12px;
                height: 12px;
                background-color: rgba(91,99,183,1);
                border-radius: 50%;
            }
            ul li:nth-child(odd) .circle {
                transform: translate(50%, -50%);
                right: -30px;
            }
            ul li:nth-child(even) .circle {
                transform: translate(-50%, -50%);
                left: -30px;
            }
            ul li .date {
                position: absolute;
                padding: 10px;
                margoin-bottom: 2px;
                border-radius: 15px;
                top: -45px;
                display: grid;
                place-items: center;
                color: #fff;
                box-shadow: 1px 2px 12px rgba(0, 0, 0, 0.318);
            }

            ul li .work {
                background: linear-gradient(90deg, rgba(92,139,214,1) 60%, rgba(120,161,226,1) 80%, rgba(142,178,235,1) 100%);
            }

            ul li .edu {
                background: linear-gradient(to right, #4e54c8, #8f94fb);
            }


            .container ul li:nth-child(odd) {
                float: left;
                clear: right;
                text-align: right;
                transform: translateX(-30px);
            }
            ul li:nth-child(odd) .date {
                right: 20px;
            }
            .container ul li:nth-child(even) {
                float: right;
                clear: left;
                transform: translateX(30px);
            }
            ul li .heading {
                color: rgb(91, 14, 216);
            }
            ul li p {
                color: #666;
                margin: 6px 0 4px 0;
            }
            ul li a {
                font-size: 13px;
                text-decoration: none;
                color: rgb(18, 54, 214);
                transition: all 0.3s ease;
            }

            .qulatification_container{
                margin: 60px 0
            }

            @media only screen and (min-width:798px) and (max-width: 1100px) {
                .container{
                    width: 80%;
                }
            }
            
            @media only screen and (max-width: 798px) {
                .container{
                    width: 70%;
                    transform: translateX(20px);
                }
                .container ul::after{
                    left: -40px;
                }
                .container ul li {
                    width: 100%;
                    float: none;
                    clear: none;
                    margin-bottom: 80px;
                }
                .container ul li .circle{
                    left: -40px;
                    transform: translate(-50%, -50%);
                }
                .container ul li .date{
                    left: 20px;
                }
                .container ul li:nth-child(odd) {
                    transform: translateX(0px);
                    text-align: left;
                }
                .container ul li:nth-child(even) {
                    transform: translateX(0px);
                }

                ul li:nth-child(odd) .date {
                    right: unset;
                }
            }
            
            @media only screen and (max-width: 550px) {
                .container{
                    width: 80%;
                }
                .container ul::after{
                    left: -20px;
                }
                .container ul li .circle{
                    left: -20px;
                }

            }
            `
        }
    </style>
    <main className="flex grid min-h-screen flex-col items-center p-20 w-full max-sm:p-5">
    <p className={`max-xl:text-5xl text-7xl ${pirateOne_regular.className} text-center`}>Qualification</p>

    <div className="container justify-center w-full justify-self-center qulatification_container">
                <ul>
                    <li>
                        <p className="heading max-lg:text-base text-2xl">University College Dublin</p>
                        <p className="max-lg:text-sm text-xl">Masters in Computer Science</p>
                        <span className="date max-lg:text-sm edu">Education 09/22 - 12/23</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <p className="heading max-lg:text-base text-2xl">Travelxp Pvt Ltd</p>
                        <p className="max-lg:text-sm text-xl">Frontend Developer</p>
                        <span className="date max-lg:text-sm work">Work 08/21 - 03/22</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <p className="heading max-lg:text-base text-2xl">BREEUR SOLUTIONS</p>
                        <p className="max-lg:text-sm text-xl">Junior Technology Developer</p>
                        <span className="date max-lg:text-sm work">Work 01/21 - 03/21</span>
                        <span className="circle"></span>
                    </li>
                    <li>
                        <p className="heading max-lg:text-base text-2xl ">DJ SANGHVI COLLEGE OF ENGINEERING</p>
                        <p className="max-lg:text-sm text-xl">Bachelors in Electronics Engineering</p>
                        <a href="#"></a>
                        <span className="date max-lg:text-sm edu">Education 08/16 - 10/20</span>
                        <span className="circle"></span>
                    </li>
                </ul>
            </div>
    </main>

    </>)
}
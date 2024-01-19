'use client'
import React from 'react';
import Image from "next/image"
import { pirateOne_regular } from '../../utilities/font';
import Button from "../../components/button"
import { RefObject, useRef, useState } from "react"
import emailjs from '@emailjs/browser';
import EmailSentLottie from '@/components/emailSentLottie';

export default function Contact() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [mobile, setMobile] = useState('');
    const [message, setMessage] = useState('');

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [mobileError, setMobileError] = useState(false);
    const [messageError, setMessageError] = useState(false);
    const [emailSent, setEmailSent] = useState(false)

    const fillForm = (formtype: string, data: string)=>{
        if(formtype == 'name'){
            setName(data)
        }else if(formtype === 'email' ){
            setEmail(data)
        }else if(formtype === 'mobile'){
            setMobile(data)
        }else{
            setMessage(data)
        }
    }
    const form: RefObject<HTMLFormElement> = useRef(null);

    const sendMessage = (event: React.MouseEvent)=>{
        validateForm()
        event.preventDefault();
        if(!validateForm()){
        const serviceId : string | undefined = process.env.NEXT_PUBLIC_SERVICE_ID ?? 'SERVICE_ID';
        const templateId: string | undefined = process.env.NEXT_PUBLIC_TEMPLATE_ID ?? 'TEMPLATE_ID';
        const publicKey: string | undefined = process.env.NEXT_PUBLIC_YOUR_PUBLIC_KEY ?? 'YOUR_PUBLIC_KEY';

        if (form.current !== null) {
            emailjs.sendForm(serviceId, templateId, form.current, publicKey)
                .then((result) => {
                    setEmailSent(true)
                }, (error) => {
                    setEmailSent(true)
                });
        } else {
            console.error('Form is null.');
        }
        }
        
    }

    const validateForm = ()=>{
        const emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/;
        
        if(name == null || name == ''){
            setNameError(true)
            return true
        }else if(!emailRegex.test(email)){
            setEmailError(true)
            return true
        }else if (mobile == null || mobile == ''){
            console.log('In')
            setMobileError(true)
            return true
        }else if(message == null || message == ''){
            setMessageError(true)
            return true
        }else{
            return false
        }

        
    }
    return (
        <>
            <style jsx>
                {
                    `
                .contactBody{
                    height: 100vh;
                }
                input:focus ~ label, textarea:focus ~ label, input:valid ~ label, textarea:valid ~ label {
                    font-size: 0.75em;
                    color: #999;
                    top: -10px;
                    -webkit-transition: all 0.225s ease;
                    transition: all 0.225s ease;
                }
                
                .styled-input {
                    float: left;
                    width: 100%;
                    margin: 1rem 0;
                    position: relative;
                    border-radius: 4px;
                }
                
                @media only     screen and (max-width: 768px){
                    .styled-input {
                        width:100%;
                    }
                }
                
                .styled-input label {
                    color: #999;
                    padding: 1.3rem 30px 1rem 30px;
                    position: absolute;
                    top: 10px;
                    left: 0;
                    -webkit-transition: all 0.25s ease;
                    transition: all 0.25s ease;
                    pointer-events: none;
                }
                
                .styled-input.wide { 
                    width: 100%;
                    max-width: 100%;
                }
                
                input,
                textarea {
                    padding: 30px;
                    border: 0;
                    width: 100%;
                    font-size: 1rem;
                    background-color: #2d2d2d;
                    color: white;
                    border-radius: 4px;
                }
                
                input:focus,
                textarea:focus { outline: 0; }
                
                input:focus ~ span,
                textarea:focus ~ span {
                    width: 100%;
                    -webkit-transition: all 0.075s ease;
                    transition: all 0.075s ease;
                }
                
                textarea {
                    width: 100%;
                    min-height: 15em;
                }
                
                .input-container {
                    width: 50vw;
                    max-width: 100%;
                    margin: 20px auto 25px auto;
                }
                
                .phone_number{
                    margin-left: 3.5rem;
                }
                
                @media (max-width: 1280px) {
                    .phone_number{
                        margin-left: 0rem;
                    }
                }

                @media (max-width: 768px) {
                    .input-container{
                        width: 80vw;
                    }
                }
                
                input[type=checkbox] + label {
                  color: #ccc;
                  font-style: italic;
                } 
                
                input[type=checkbox]:checked + label {
                  color: #f00;
                  font-style: normal;
                }
                textarea {
                    resize: none;
                 }
                .errorBorder{
                    border: 2px solid red;
                }
                `
                }
            </style>
            <main className="flex grid min-h-screen flex-col items-center justify-center px-24 max-md:p-10 contactBody w-full">
                <div className="container w-full flex justify-center flex-col lg:grid-cols-12 justify-self-center">
                    <div className="row">
                        <p className={`text-7xl max-md:text-4xl lg:col-span-12 ${pirateOne_regular.className} text-center`}>Send me a message!</p>
                    </div>
                    <div className="text-center">
                        <h4>Got a question or proposal, or just want to say hello? Go ahead.</h4>
                    </div>
                    <form ref={form} >
                    <div className="row input-container">
                        {!emailSent ? <>
                        <div>
                            <div className={`styled-input wide ${nameError && 'errorBorder'}`}>
                                <input type="text" required onChange={(e)=>fillForm('name', e.target.value)} name='user_name'/>
                                <label>Name</label>
                            </div>
                        </div>
                        <div className='w-full flex max-lg:block'>
                            <div className={`styled-input w-1/2 max-md:w-full ${emailError && 'errorBorder'}`}>
                                <input type="email" required onChange={(e)=>fillForm('email', e.target.value)} name='user_email'/>
                                <label>Email</label>
                            </div>
                            <div className={`styled-input w-1/2 max-md:w-full phone_number ${mobileError && 'errorBorder'}`}>
                                <input type="text" required onChange={(e)=>fillForm('mobile', e.target.value)} name='user_phone'/>
                                <label>Phone Number</label>
                            </div>
                        </div>
                        <div>
                            <div className={`styled-input wide ${messageError && 'errorBorder'}`}>
                                <textarea required onChange={(e)=>fillForm('message', e.target.value)} name='user_message'></textarea>
                                <label>Message</label>
                            </div>
                        </div>
                        
                        </> : <>
                        
                        <p className={`text-4xl text-center p-3`}>Your Message Has Been Sent!</p>
                            <EmailSentLottie/>
                        </>}
                        <div style={{float: "right"}}>
                        <Button text="Shoot" onClickFunc={sendMessage} />
                        </div>
                    </div>
                    </form>
                </div>
                <footer className="flex flex-col p-20 justify-center max-md:p-5">
                    <div className="w-full flex flex-col">
                        <p className={`text-6xl lg:col-span-12 ${pirateOne_regular.className} text-center`}>Manish Salian</p>
                        <p className={`text-4xl lg:col-span-12 ${pirateOne_regular.className} text-center`}>Software Engineer</p>
                        <div className="flex w-full justify-center my-5">
                            <a href="https://github.com/manish17salian" target='_blank' rel="noopener noreferrer">
                            <Image src={'/github.svg'} alt="Github"
                                width={50}
                                height={24}
                                priority
                                style={{ marginRight: "10px" }}
                            />
                            </a>
                            <a href="https://www.linkedin.com/in/manish17salian/" target="_blank" rel="noopener noreferrer">
                            <Image src={'/linkedin.svg'} alt="LinkedIn"
                                width={50}
                                height={24}
                                priority />
                            </a>
                            
                        </div>
                    </div>
                    <div className="w-full flex">
                        <div className="flex w-full">
                            <p className={`text-3xl ${pirateOne_regular.className} text-center w-full`}>©All Rights Reserved.</p>
                        </div>
                    </div>
                </footer>
            </main>
        </>
    )
}
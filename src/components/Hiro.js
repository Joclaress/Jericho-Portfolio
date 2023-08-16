
import React, {useState} from 'react'
import profile from '../assets/profile1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faGithub, faFacebook, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import hr from '../assets/curve-hr.svg'

export default function Hiro () {

    const [loaded, setLoaded] = useState(true);

    return (
        <>
        {loaded ?
        <div
            className="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-white flex flex-col items-center justify-center"
        >Loading...</div>
            :
            null
        }
        <div id="home" className="flex w-full h-screen flex-col md:flex-row gap-5 items-center justify-center text-white relative">
            <div className='w-6/12 sm:w-4/13 px-3'>
                <img data-aos="flip-right" data-aos-duration="1500" data-aos-offset="200" class="shadow rounded max-w-full h-auto align-middle border-none"  src={profile} alt="profile" onLoad={() => setLoaded(false)} />
            </div>
            <div className='md:w-3/6' data-aos="fade-right" data-aos-duration="1000" data-aos-offset="100" >
                <div className="flex flex-col w-full mt-8">
                    <h1 className="text-2xl text-gray-400">Hi, I'm</h1>
                    <h1 className="text-3xl font-bold">Jericho Oclares</h1>
                    <p class="text-2xl font-bold text-gray-300">Java Developer / Mulesoft Developer and Android Developer</p>
                    <p className="text-md font-light text-gray-400 ">Hello! I am a Java back end Developer and Android developer from The Philippines. I have experience in developing efficient, scalable, and secure software applications using Java programming language. I specialize in building high-quality back end systems and mobile applications for Android devices. Thank you for visiting my portfolio.</p>
                </div>
                <ul className='flex mt-2 gap-4 items-center'>
                   <li>
                        <a href='https://github.com/Joclaress' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faGithub} /></a>
                   </li> 
                    <li>
                        <a href='https://www.facebook.com/Joclaress/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faFacebook} /></a>
                    </li>
                    <li>
                        <a href='https://www.linkedin.com/in/joclaress/' rel="noreferrer" target="_blank"><FontAwesomeIcon size='2xl' icon={faLinkedinIn} /></a>
                    </li>
                </ul>
            </div>
            <img src={hr} className="w-full md:h-2 absolute bottom-0" alt="hr" />
        </div>
        </>
    )
}

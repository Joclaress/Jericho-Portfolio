
import CertCard from "./CertCard.js"
import hr from "../assets/curve-hr.svg"

import adinnpusa from "../assets/certs/certificate.jpg"


// import 

export default function Certs(){
    return (
        <div id="certs" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Certifications</h1>
            <p className="font-light text-gray-400">Here are some of my Certifications</p>

            {/* <div className="flex flex-col md:flex-row flex-wrap mt-4 gap-5"> */}
            <div className="grid grid-cols-1 md:grid-cols-3 justify-center mt-4 gap-5">
                <CertCard name="Top 2 Best Capstone Project" img={adinnpusa} issued="University Of Nueva Caceres" date="june 2022" />
            </div>
            <img src={hr} className="w-full mt-8 md:h-2" alt="hr" />
        </div>
    )
}

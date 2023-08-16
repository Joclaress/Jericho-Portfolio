
import HonorCard from "./HonorCard.js"



export default function Honors(){
    return (
        <div id="honors" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Projects</h1>
            <p className="font-light text-gray-400">Here are some of my Projects</p>
            <div className="flex flex-row:flex-row mt-4 gap-5">
                <HonorCard name="LTO REVIEWER 2021" desc="Uploaded in my Google playstore"   />
            </div>
        </div>
    )

}

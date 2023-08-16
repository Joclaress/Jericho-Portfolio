
export default function HonorCard(props){
    return (
        <div data-aos="fade-up" data-aos-duration="500" data-aos-offset="100"  className="w-full md:w-2/6 bg-dark-100 rounded-md py-4 px-4">
            {/* <img src={props.img} className="w-20 max-h-20 mx-auto" alt={props.name}></img> */}
            <div className="mt-2">
                <h1 className="font-bold md:text-xl">{props.name}</h1>
                <p className="font-light md:text-lg">Issued by {props.issued}</p>
                <p className="font-light text-gray-400">{props.desc}</p>
                <a href="https://play.google.com/store/apps/details?id=com.tanxe.ltorerviewerexam&hl=en"> <img class="rounded-t-lg"src="https://play-lh.googleusercontent.com/J9GQofkTvJQ96vzdkwTwu-CACjzHSUbXDTkzPm94JHfCwtmvy746lcbioYLdCaPSjDE=w416-h235-rw"  alt="" /> {props.image}</a>
                <a href="https://play.google.com/store/apps/details?id=com.tanxe.ltorerviewerexam&hl=en" class="flex flex-col justify-center items-center mt-3 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Click Here</a>
            </div>
        </div>
    )
}

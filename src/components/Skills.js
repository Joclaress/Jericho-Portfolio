import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SkillCard from "./SkillCard.js"

import csharp from "../assets/skills/csharp.svg"
import android from "../assets/skills/android.svg"
import git from "../assets/skills/git.svg"
import react from "../assets/skills/react.svg"
import springboot from "../assets/skills/springboot.svg"
import gitlab from "../assets/skills/gitlab.svg"
import oracle from "../assets/skills/oraclesql.svg"
import mysql from "../assets/skills/mysql.svg"
import mssql from "../assets/skills/MSSQL.svg"
import photoshop from "../assets/skills/PS.svg"
import mulesoft from "../assets/skills/mulesoft.svg"
import hr from "../assets/curve-hr.svg"

export default function Skills() {
    const settings = {
        dots: false,
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1
      };

    return (
        <div id="skills" className="mt-4 text-white">
            <h1 className="text-2xl font-bold">Skills</h1>
            <p className="font-light text-gray-400">Here are some of my skills</p>

            <div className="mt-4">
                <Slider {...settings}>
                <SkillCard name="Android Kotlin or Java Android" experience="3 years" img={android} />
                <SkillCard name="springboot" experience="3 years" img={springboot} />
                <SkillCard name="React JS" experience="1 year" img={react} />
                <SkillCard name="C#" experience="1 year" img={csharp} />
                <SkillCard name="Mulesoft" experience="3 months" img={mulesoft} />
                <SkillCard name="GIT" experience="3 years" img={git} />
                <SkillCard name="GITLAB" experience="3 years" img={gitlab} />
                <SkillCard name="Oracle SQL" experience="2 years" img={oracle} />
                <SkillCard name="MYSQL" experience="3 years" img={mysql} />
                <SkillCard name="MSSQL" experience="3 years" img={mssql} />
                <SkillCard name="Photoshop" experience="2 years" img={photoshop} />
                </Slider>
            </div>
            <img src={hr} className="w-full mt-8 md:h-3" alt="hr" />
        </div>
    )
}
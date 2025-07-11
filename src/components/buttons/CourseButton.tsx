import { SquareArrowOutUpRight } from "lucide-react";

function CourseButton(){
    return(
        <button className="button flex gap-4 py-2 pl-5 pr-4 border-2 h-fit">
            <span className="uppercase font-semibold">Saiba Mais</span>
            <SquareArrowOutUpRight/>
        </button>
    )
}

export default CourseButton
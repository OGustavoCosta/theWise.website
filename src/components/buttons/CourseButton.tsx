import { SquareArrowOutUpRight } from "lucide-react";

function CourseButton(){
    return(
        <button className="button flex gap-4 py-2 pl-5 pr-4 border-2 h-fit relative overflow-hidden border-background-dark hover:text-background-light fill-animation-left-to-right before:bg-background-dark transition-all">
            <span className="uppercase font-semibold z-2">Saiba Mais</span>
            <SquareArrowOutUpRight className="fill-icon-animation"/>
        </button>
    )
}

export default CourseButton
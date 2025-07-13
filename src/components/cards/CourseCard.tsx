import { SquareArrowOutUpRight } from "lucide-react"
import { useEffect } from "react"

interface Course {
    id: number,
    banner: string,
    title: string,
    shortDescription: string,
}

interface CourseCardProps{
    course: Course,
    openModal: any,
    getId: any,
}

function CourseCard({ course, getId, openModal }: CourseCardProps){
    const {id, banner, title, shortDescription} = course

    useEffect(() => {
        getId(id)
    }, [openModal])

    return(
        <article className="card card--course min-h-[420px] bg-background-light text-dark grid py-8 px-5 rounded-2xl gap-5 scale-[0.98] hover:scale-[1] transition-all cursor-default">
            <header className="card__header grid justify-items-center gap-5">
                <img className="card__banner w-30" src={banner}/>
                <h3 className="card__title text-background-dark text-2xl font-semibold text-center">{title}</h3>
            </header>
            <div className="card__content">
                <p className="card__text font-semibold text-center">{shortDescription}</p>
            </div>
            <div className="card__button flex justify-center items-end">
                <button onClick={openModal} className="button flex gap-4 py-2 pl-5 pr-4 border-2 h-fit relative overflow-hidden border-background-dark hover:text-background-light fill-animation-left-to-right before:bg-background-dark transition-all cursor-pointer">
                    <span className="uppercase font-semibold z-2">Saiba Mais</span>
                    <SquareArrowOutUpRight className="fill-icon-animation"/>
                </button>
            </div>
        </article>
    )
}

export default CourseCard
import CourseButton from "../buttons/CourseButton"

function CourseCard(props: any){
    const { banner, title, shortDescription } = props

    return(
        <article className="card card--course min-h-[420px] bg-background-light text-dark grid py-8 px-5 rounded-2xl gap-5 scale-[0.98] hover:scale-[1] transition-all cursor-default">
            <header className="card__header grid justify-items-center gap-5">
                <img className="card__banner w-30" src={banner}/>
                <h3 className="card__title text-background-dark text-2xl font-black text-center">{title}</h3>
            </header>
            <div className="card__content">
                <p className="card__text font-semibold text-center">{shortDescription}</p>
            </div>
            <div className="card__button flex justify-center items-end">
                <CourseButton/>
            </div>
        </article>
    )
}

export default CourseCard
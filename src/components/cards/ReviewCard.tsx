function ReviewCard(props: any){
    const { title, message, author, authorDescription } = props.review

    return(
        <article className="card card--review min-h-[200px] bg-background-light text-dark grid p-5 px-10 rounded-2xl gap-2.5 scale-[0.98] hover:scale-[1] transition-all cursor-default">
            <h3 className="card__title text-background-dark text-lg font-semibold">{title}</h3>
            <div className="card__content">
                <p className="card__text ">{message}</p>
            </div>
            <h4 className="card__author text-background-dark font-semibold">{`${author}, ${authorDescription}`}</h4>
        </article>
    )
}

export default ReviewCard
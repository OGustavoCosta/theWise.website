interface IEvent{
    id: number,
    banner: string,
    title: string,
    shortDescription: string
}

function EventCard({event}: {event: IEvent}){
    const { banner, title, shortDescription } = event

    return(
        /* CSS externo para melhorias /assets/css/components/card.css */
        <article className="card card--event w-full h-[512px] relative overflow-hidden rounded-4xl">
            <img className="card__banner w-full h-full object-cover transition-all duration-1000" src={banner}/>
            <header className="card__header grid gap-2 z-1 absolute w-full p-10 bottom-0 bg-linear-to-t from-black text-light">
                <h3 className="card__title text-2xl font-semibold" data-swiper-parallax="-400">{title}</h3>
                <p className="card__text md:text-lg" data-swiper-parallax="-300">{shortDescription}</p>
            </header>
        </article>
    )
}

export default EventCard
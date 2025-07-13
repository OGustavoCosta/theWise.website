/* Icons */
import { ChevronRight } from "lucide-react"

function Details(props: any){
    const { title, text } = props.question

    return(
        <details className="details border-background-light bg-gray-200 w-full border-[2px] rounded-xl">
            <summary className="datails__header cursor-pointer text-background-dark bg-light grid grid-cols-[1fr_auto] items-center gap-3 py-4 px-6 rounded-xl">
                <h3 className="details__title md:text-lg">{title}</h3>
                <div className="details__icon transition-transform">
                    <ChevronRight/>
                </div>
            </summary>
            <p className="details__text p-5 text-dark">{text}</p>
        </details>
    )
}

export default Details
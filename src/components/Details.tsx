/* Icons */
import { ChevronRight } from "lucide-react"

function Details(props: any){
    const { title, text } = props.question

    return(
        <details className="details border-background-light bg-gray-200">
            <summary className="datails__header cursor-pointer text-background-dark bg-light">
                <h3 className="details__title text-lg">{title}</h3>
                <div className="details__icon transition-transform">
                    <ChevronRight/>
                </div>
            </summary>
            <p className="details__text p-5 text-dark">{text}</p>
        </details>
    )
}

export default Details
/* Components */
import { X } from "lucide-react"
import CTAButton from "./buttons/CTAButton"
import { useEffect, useState } from "react"

interface ICourse{
    banner: string,
    title: string,
    shortDescription: string,
    description: any,
}

interface IProps{
    close: any,
    course: ICourse,
}

function Modal({close, course}: IProps){
    const {banner, title, shortDescription, description} = course
    console.log(`Descrição: ${description}`)

    return(
        <div onClick={close} className="modal__background fixed top-0 left-0 w-full h-full px-[10vw] py-10 bg-[#00000090] flex justify-center items-center z-10">
            <section onClick={e => e.stopPropagation()} className="modal w-full max-w-lg h-full bg-light border-4 border-light text-dark rounded-2xl relative grid overflow-hidden xmd:py-3 py-3">
                <div className="modal__tracker overflow-auto xmd:px-10 px-5 xmd:py-7 py-5 [&::-webkit-scrollbar]:w-1 [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 grid gap-10 grid-rows-[auto_1fr_auto]">
                    <X onClick={close} className="text-gray-400 absolute top-2 right-3 cursor-pointer"/>
                    <header className="modal__header flex items-center  gap-5">
                        <img className="modal__banner w-15" src={banner}/>
                        <h3 className="modal__title text-background-dark text-2xl font-semibold">{title}</h3>
                    </header>
                    <div className="modal__content flex flex-col gap-1">
                        <p className="modal__text">{shortDescription}</p>
                        <h4 className="text-lg font-semibold mt-1">Resumo de Atividades</h4>
                        <ul className="modal__list list-disc ml-4 grid gap-1">
                            {
                                description.map((text: string) => (
                                    <li className="modal__item">{text}</li>
                                ))
                            }
                            {description[0]}
                        </ul>
                    </div>
                    <div className="modal__button flex justify-center items-end">
                        <CTAButton/>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Modal
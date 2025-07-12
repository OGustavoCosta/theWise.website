import { Menu, X } from "lucide-react"
import { useRef } from "react"

function Navigation(props: any){
    const { type } = props
    const navRef = useRef<HTMLDivElement>(null)
    
    const ToggleNavigation = () => {
        if(navRef.current){
            return navRef.current.classList.toggle('is-active')
        }
    }

    return(
        <header className={`header header--navigation ${'fixed' == type ? 'absolute' : ''} `}>
            <nav className={`nav w-full flex justify-between py-10`}>
                <img className="w-[15%] min-w-20 aspect-square hover:scale-[1.02] transition-all duration-500" src="images\logo\yellow-logo.png" alt="logo-The-Wise"/>
                <ul className="nav__list hidden gap-5 lg:flex items-center h-fit">
                    <li className="nav__item"><a href="#inicio" className="nav__link underline-animation">Início</a></li>
                    <li className="nav__item"><a href="#sobre" className="nav__link underline-animation">Sobre</a></li>
                    <li className="nav__item"><a href="#metodologia" className="nav__link underline-animation">Metodologia</a></li>
                    <li className="nav__item"><a href="#cursos" className="nav__link underline-animation">Cursos</a></li>
                    <li className="nav__item"><a href="#depoimentos" className="nav__link underline-animation">Depoimentos</a></li>
                    <li className="nav__item"><a href="#eventos" className="nav__link underline-animation">Eventos</a></li>
                    <li className="nav__item"><a href="#localizacao" className="nav__link underline-animation">Onde Estamos</a></li>
                    <li className="nav__item"><a href="#faq" className="nav__link underline-animation">FaQ</a></li>
                    <li className="nav__item "><a href="#" className="nav__link text-highlight-light py-2 px-4 border-[1px] border-highlight-light rounded-sm fill-animation-left-to-right before:bg-highlight-light hover:text-light hover:shadow-[0_0_20px]/100 shadow-highlight-light transition-all duration-500"><span className="z-2 relative">Entrar</span></a></li>
                </ul>
                <div className="nav__mobile-icon inline-block lg:hidden cursor-pointer" onClick={ToggleNavigation}>
                    <Menu size={25} strokeWidth={2} />
                </div>

                {/* Mobile */}
                <div ref={navRef} className="nav__mobile fixed top-0 left-0 w-[90vw] pl-[5%] pt-5 h-lvh z-10 bg-background-light text-dark flex-col gap-6 transition-all duration-500 -translate-x-[90vw] lg:hidden">
                    <div className="nav__mobile-icon inline-block cursor-pointer" onClick={ToggleNavigation}>
                        <X size={25} strokeWidth={2} />
                    </div>
                    <ul className="nav__list">
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#" className="nav__link text-highlight-light py-2 px-4 border-[1px] border-highlight-light rounded-sm fill-animation-left-to-right before:bg-highlight-light hover:text-light hover:shadow-[0_0_20px]/100 shadow-highlight-light transition-all duration-500"><span className="z-2 relative">Entrar</span></a></li>
                        <li className="nav__item"><a href="#inicio" className="nav__link" onClick={ToggleNavigation}>Início</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#sobre" className="nav__link">Sobre</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#metodologia" className="nav__link">Metodologia</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#cursos" className="nav__link">Cursos</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#depoimentos" className="nav__link">Depoimentos</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#eventos" className="nav__link">Eventos</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#localizacao" className="nav__link">Onde Estamos</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#faq" className="nav__link">FaQ</a></li>
                    </ul>
                    <p className="text-sm py-5 text-dark">Copyright © 2025. The Wise. Todos os direitos reservados.</p>
                </div>
            </nav>
        </header>
    )
}

export default Navigation
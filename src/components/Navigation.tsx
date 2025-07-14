import { Menu, X } from "lucide-react"
import { useEffect, useRef, useState } from "react"

interface INavigationProps{
    type: 'fixed' | '',
}

function Navigation({type}: INavigationProps){
    const navRef = useRef<HTMLDivElement>(null)
    
    const ToggleNavigation = () => {
        if(navRef.current){
            return navRef.current.classList.toggle('is-active')
        }
    }

    /* Scroll */
    const [scrollNav, setScrollNav] = useState(window.scrollY > 1)

    useEffect(() => {
        const handleScroll = () => {
            setScrollNav(window.scrollY > 1)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll);
    }, [])

    return(
        <header className={`header header--navigation ${'fixed' == type ? 'absolute' : 'fixed'} before:bg-white before:w-full before:absolute before:top-0 before:left-0 h-0 before:transition-all before:duration-200 before:border-gray-300 z-3 ${false == scrollNav ? '' : 'fixed before:h-[4.5rem] before:border-[1px]'}`}>

            <nav className={`nav w-full flex justify-between transition-all duration-200  ${false == scrollNav ? 'py-5 md:py-10' : 'py-2.5 text-dark'}`}>

                <img className={`aspect-square transition-all duration-500 z-1 ${false == scrollNav ? 'w-[15%] hover:scale-[1.02] min-w-20' : 'w-13'}`} src={`${scrollNav ? 'images/logo/yellow-logo-small.png' : 'images/logo/yellow-logo.png'}`} alt="logo-The-Wise"/>
                
                <ul className={`nav__list hidden gap-5 lg:flex items-center h-fit ${false == scrollNav ? '' : 'translate-y-[50%]'} transition-all duration-200`}>
                    <li className="nav__item"><a href="#inicio" className={`nav__link underline-animation ${false == scrollNav ? 'before:bg-light' : 'before:bg-dark'}`}>Início</a></li>
                    <li className="nav__item"><a href="#sobre" className={`nav__link underline-animation ${false == scrollNav ? 'before:bg-light' : 'before:bg-dark'}`}>Sobre</a></li>
                    <li className="nav__item"><a href="#metodologia" className={`nav__link underline-animation ${false == scrollNav ? 'before:bg-light' : 'before:bg-dark'}`}>Metodologia</a></li>
                    <li className="nav__item"><a href="#cursos" className={`nav__link underline-animation ${false == scrollNav ? 'before:bg-light' : 'before:bg-dark'}`}>Cursos</a></li>
                    <li className="nav__item"><a href="#depoimentos" className={`nav__link underline-animation ${false == scrollNav ? 'before:bg-light' : 'before:bg-dark'}`}>Depoimentos</a></li>
                    <li className="nav__item"><a href="#eventos" className={`nav__link underline-animation ${false == scrollNav ? 'before:bg-light' : 'before:bg-dark'}`}>Eventos</a></li>
                    <li className="nav__item"><a href="#localizacao" className={`nav__link underline-animation ${false == scrollNav ? 'before:bg-light' : 'before:bg-dark'}`}>Onde Estamos</a></li>
                    <li className="nav__item"><a href="#faq" className={`nav__link underline-animation ${false == scrollNav ? 'before:bg-light' : 'before:bg-dark'}`}>FaQ</a></li>
                    <li className="nav__item "><a href="#" className="nav__link text-highlight-light py-2 px-4 border-[1px] border-highlight-light rounded-sm fill-animation-left-to-right before:bg-highlight-light hover:text-light hover:shadow-[0_0_20px]/100 shadow-highlight-light transition-all duration-500"><span className="z-2 relative">Entrar</span></a></li>
                </ul>
                <div className={`nav__mobile-icon inline-block lg:hidden cursor-pointer ${false == scrollNav ? '' : 'translate-y-[25%]'}`} onClick={ToggleNavigation}>
                    <Menu size={25} strokeWidth={2} />
                </div>

                {/* Mobile */}
                <div ref={navRef} className={`nav__mobile fixed top-0 left-0 w-full px-[5%] pb-10 ${false == scrollNav ? 'pt-5' : 'pt-6'} h-auto z-10 bg-background-light text-dark flex-col gap-6 transition-all duration-500 -translate-y-[100vh] flex lg:hidden`}>
                    <div className="nav__mobile-icon inline-flex cursor-pointer w-full justify-end">
                        <X size={25} strokeWidth={2} onClick={ToggleNavigation}/>
                    </div>
                    <ul className="nav__list grid gap-2">
                        <li className="nav__item mb-5" onClick={ToggleNavigation}><a href="#" className="nav__link text-highlight-light py-2 px-4 border-[1px] border-highlight-light rounded-sm fill-animation-left-to-right before:bg-highlight-light hover:text-light hover:shadow-[0_0_20px]/100 shadow-highlight-light transition-all duration-500"><span className="z-2 relative">Entrar</span></a></li>
                        <li className="nav__item"><a href="#inicio" className="nav__link" onClick={ToggleNavigation}>Início</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#sobre" className="nav__link">Sobre</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#metodologia" className="nav__link">Metodologia</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#cursos" className="nav__link">Cursos</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#depoimentos" className="nav__link">Depoimentos</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#eventos" className="nav__link">Eventos</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#localizacao" className="nav__link">Onde Estamos</a></li>
                        <li className="nav__item" onClick={ToggleNavigation}><a href="#faq" className="nav__link">FaQ</a></li>
                    </ul>
                    <p className="text-sm mt-5 text-gray-400">Copyright © 2025. The Wise. Todos os direitos reservados.</p>
                </div>
            </nav>
        </header>
    )
}

export default Navigation
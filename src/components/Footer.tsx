import { ChevronRight } from "lucide-react"

function Footer(){
    return(
        <footer className="footer">
            <div className="footer__background ">
                <section className="section flex flex-wrap gap-x-15 gap-y-8 py-10">
                    <div className="grid gap-5 w-full basis-[280px] grow">
                        <img src="/images/logo/logo-branca.png" alt="logo da the wise" />
                        <p>A The Wise é uma escola de robótica que prepara crianças e jovens para o futuro, unindo tecnologia, criatividade e aprendizado prático.</p>
                    </div>
                    <div className="flex flex-col gap-5 w-full basis-[280px] grow">
                        <h3 className="section__title uppercase font-semibold md:text-lg relative pb-2 before:content-[''] before:w-full before:h-[1px] before:absolute before:bottom-0 before:left-0 before:bg-background-light">Contato</h3>
                        <ul className="section__list grid gap-1">
                            <li className="section__item"><strong>Email:</strong> escola@thewise.com.br</li>
                            <li className="section__item"><strong>Telefone:</strong> <a href="https://wa.me/557798262758">(73) 99136-6576</a></li>
                            <li className="section__item"><strong>Localização:</strong> Av. Ipiranga, 170, Bairro Ipiranga - Guanambi-BA</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-5 w-full basis-[280px] grow">
                        <h3 className="section__title uppercase font-semibold md:text-lg relative pb-2 before:content-[''] before:w-full before:h-[1px] before:absolute before:bottom-0 before:left-0 before:bg-background-light">Links Rápidos</h3>
                        <ul className="section__list grid gap-1.5">
                            <li className="section__item flex items-center "><ChevronRight size={24} strokeWidth={1} /> <a href="#inicio" className="hover:text-gray-300 transition duration-300">Início</a></li>
                            <li className="section__item flex items-center"><ChevronRight size={24} strokeWidth={1} /><a href="#sobre" className="hover:text-gray-300 transition duration-300">Sobre a The Wise</a></li>
                            <li className="section__item flex items-center"><ChevronRight size={24} strokeWidth={1} /><a href="#cursos" className="hover:text-gray-300 transition duration-300">Cursos</a></li>
                            <li className="section__item flex items-center"><ChevronRight size={24} strokeWidth={1} /><a target="blank" href="https://wa.me/+5573991366576?text=Oi!%20Gostar%C3%ADamos%20de%20agendar%20uma%20visita%20para%20conhecer%20a%20The%20Wise%20com%20as%20crian%C3%A7as.%20Tem%20um%20hor%C3%A1rio%20dispon%C3%ADvel%20essa%20semana%3F" className="hover:text-gray-300 transition duration-300">Marcar Visita</a></li>
                        </ul>
                    </div>
                </section>
            </div>
            <div className="footer__background bg-[#230070] p-5">
                <p className="footer__text text-center">© 2025 <strong className="">The Wise - Robótica Educacional</strong>. Todos os direitos reservados.</p>
                <p className="footer__text text-center text-sm">Desenvolvido por <a href="https://www.linkedin.com/in/gustavosncosta/" className="text-highlight-light">Gustavo Costa</a></p>
            </div>
        </footer>
    )
}

export default Footer
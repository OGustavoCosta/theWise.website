/* Icons */
import { MapPin, MoveRight } from "lucide-react"

/* Components */
import CTAButton from "../../components/buttons/CTAButton"
import Navigation from "../../components/Navigation"

/* Pages */
import LandingCourses from "./LandingCourses"
import LandingReview from "./LandingReview"
import LandingEvent from "./LandingEvent"
import LandingFaQ from "./LandingFaQ"
import Footer from "../../components/Footer"

function LandingPage(){
    return(
        <div className="w-full min-h-[100lvh] font-mavenPro text-base text-light bg-background-dark">
            <Navigation type={''}/>
            <main className="main w-full overflow-hidden">
                {/* Hero */}
                <div id="inicio" className="main__background bg-[url(/images/background/pattern-purple.png)]">
                    <section className="section section--hero transition-all pb-15 flex flex-col-reverse md:grid md:grid-cols-2 md:items-end gap-10 h-dvh min-h-[650px] md:max-h-[700px]">
                        <article className="article grid gap-2">
                            <header className="article__header">
                                <h2 className="article__title text-4xl xmd:text-5xl text-highlight-light font-black">Explore, <br/> Crie e Inove</h2>
                            </header>
                            <div className="article__content max-w-sm">
                                <p className="m--article__text text-sm md:text-base">Da brincadeira ao aprendizado, a The Wise ensina robótica, tecnologia e inovação para crianças, adolescentes e jovens.</p>
                            </div>
                            <div className="article__button mt-2.5">
                                <CTAButton/>
                            </div>
                        </article>
                        <div className="flex justify-center">
                            <img className="w-full max-w-xl md:hidden hover:scale-[1.01] transition-all duration-500" src="/images\background\hero-image-mobile.png" alt="uma menina e um menino segurando um robô cada" />
                            <img className="w-full max-w-xl hidden md:block hover:scale-[1.01] transition-all duration-500" src="/images\background\hero-image-desktop.png" alt="uma menina e um menino segurando um robô cada" />
                        </div>
                    </section>
                </div>

                {/* Sobre */}
                <div id="sobre" className="main__background bg-[url(/images/background/Braç2.png)] bg-left bg-no-repeat bg-cover inset-shadow-[0px_0px_50px]/30 inset-shadow-black bg-fixed">
                    <section className="section flex justify-center md:justify-end pt-15 pb-20">
                        <article className="article grid gap-5 bg-light text-dark p-10 rounded-2xl max-w-lg neumorphism-dark transition-all scale-[0.99] hover:scale-[1] duration-500">
                            <header className="article__header">
                                <h2 className="article__title text-background-dark text-3xl font-bold">A The Wise prepara o seu filho pro futuro</h2>
                            </header>
                            <div className="article__content grid gap-10">
                                <p>No mundo de hoje, habilidades em robótica e programação são tão importantes quanto ler e escrever.</p>
                                <p>Segundo o Fórum Econômico Mundial, até 2025, <strong> mais de 75% das profissões emergentes exigirão conhecimentos em tecnologia e automação. </strong></p>
                                <p>Aprender desde cedo coloca seu filho à frente, desenvolvendo raciocínio lógico, criatividade e habilidades para solucionar problemas complexos.</p>
                            </div>
                        </article>
                    </section>
                </div>

                {/* Metodologia */}
                <div id="metodologia" className="main__background bg-background-light max-lg:bg-[url(/images/background/pattern-white.png)]">
                    <section className="section flex justify-center lg:justify-start pt-15 lg:pt-50 pb-20 relative ">
                        <div className="section__banner absolute bg-gray-400 w-[80%] h-[70%] z-1 top-15 right-0 overflow-hidden rounded-4xl hidden lg:block">
                            <img className="section__image w-full h-full object-cover hover:scale-[1.01] transition-all duration-1000 " src="\images\banners\chieald-and-robot.jpg" alt="um menino segurando um robô" />
                        </div>
                        
                        <article className="article grid gap-5 bg-light text-dark p-10 rounded-2xl max-w-lg neumorphism-light z-2 scale-[0.99] hover:scale-[1] duration-500">
                            <header className="article__header">
                                <h2 className="article__title text-background-dark text-3xl font-bold">Transformamos aprendizado em diversão</h2>
                            </header>
                            <div className="article__content grid gap-10">
                                <p>A The Wise utiliza a metodologia STREAM, integrando ciência, tecnologia, robótica, engenharia, artes e matemática para um aprendizado completo.</p>
                                <p>Com professores capacitados em robótica e pedagogia infantil, oferece uma infraestrutura moderna, incluindo kits de Arduino e brinquedos educativos, para um ensino prático e criativo. </p>
                                <p>O atendimento individualizado e o ambiente seguro garantem que cada criança desenvolva habilidades essenciais para o futuro de forma divertida e eficaz.</p>
                            </div>
                        </article>
                    </section>
                </div>
                
                {/* Cursos e Depoimentos */}
                <div id="cursos" className="main__background inset-shadow-[0px_0px_50px]/30 inset-shadow-black bg-gray-200 w-full grid gap-10">
                    {/* Cursos*/}
                    <section className="section flex flex-col items-center justify-center pt-15 gap-5">
                        <header className="section__header grid justify-items-center text-background-dark">
                            <h2 className="section__title  text-4xl text-center font-bold">Cursos Ministrados</h2>
                            <MoveRight />
                        </header>
                        <LandingCourses/>
                        
                    </section>

                    {/* Depoimentos */}
                    <section id="depoimentos" className="section scroll-my-24 flex flex-col md:justify-end pb-15 gap-5">
                        <header className="section__header">
                            <h2 className="section__title text-background-dark text-xl font-semibold">O que os pais tem a dizer sobre nós?</h2>
                        </header>
                        <LandingReview/>
                        <div className="section__button flex justify-center md:pt-10">
                            <CTAButton/>
                        </div>
                    </section>
                </div>

                {/* Eventos */}
                <div id="eventos" className="main__background bg-background-light">
                    <section className="section flex flex-col gap-5 pt-15 pb-15 relative">
                        <header className="section__header text-background-dark">
                            <h2 className="section__title  text-4xl font-bold">Eventos</h2>
                            <MoveRight />
                        </header>
                        <LandingEvent/>
                    </section>
                </div>

                {/* Onde Estamos */}
                <div id="localizacao" className="main__background bg-gradient-to-r bg-background-dark">
                    <section className="section flex justify-start flex-col md:flex-row-reverse gap-x-10 gap-y-5 py-10 relative rounded-r-4xl">
                        <article className="article w-full flex items-center justify-center flex-col gap-1">
                            <MapPin size={80} strokeWidth={2} />
                            <h2 className="article__title  text-4xl font-bold flex items-center gap-3"> Onde Estamos</h2>
                            <p className="article__text md:text-lg text-center">Av Ipiranga, 170, Bairro Ipiranga - Guanambi/BA</p>
                            <a target="blank" href="https://maps.app.goo.gl/JEFu6wFqNyHh516n9" className="border-2 py-2 px-6 md:inline-flex items-end gap-3 rounded-lg uppercase w-fit mt-5 hidden fill-animation-left-to-right before:bg-light border-light overflow-hidden hover:text-dark"> <span className="z-2">Acessar pelo Mapa</span> </a>
                        </article>
                        <div className="section__banner section__banner--location bg-gray-100 w-[100%] aspect-16/9 overflow-hidden rounded-2xl">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3867.676898000313!2d-42.80253612531534!3d-14.213687386023087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x75ac47dc00fca77%3A0x1b41afd6eda9cf5e!2sThe%20Wise!5e0!3m2!1spt-BR!2sbr!4v1752261990062!5m2!1spt-BR!2sbr" className="w-full h-full"  loading="lazy"></iframe>
                        </div>
                    </section>
                </div>

                {/* FaQ */}
                <div id="faq" className="main__background bg-background-light">
                    <LandingFaQ/>
                </div>
            </main>
            <Footer/>
        </div>
    )
}

export default LandingPage
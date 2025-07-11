/* Icons */
import { MoveRight } from "lucide-react"

/* Components */
import CTAButton from "../../components/buttons/CTAButton"
import Navigation from "../../components/Navigation"

/* Pages */
import LandingCourses from "./LandingCourses"
import LandingReview from "./LandingReview"

function LandingPage(){
    return(
        <div className="w-full min-h-[100lvh] font-mavenPro text-base text-light bg-background-dark">
            <Navigation type={'fixed'}/>
            <main className="main w-full overflow-hidden">
                {/* Hero */}
                <div id="inicio" className="main__background md:bg-[url(/images/background/pattern-3.png)] bg-right bg-no-repeat">
                    <section className="section section--hero transition-all pb-15 flex flex-col-reverse md:grid md:grid-cols-2 md:items-end gap-10 h-dvh min-h-[650px] md:max-h-[700px]">
                        <article className="article grid gap-2">
                            <header className="article__header">
                                <h2 className="article__title text-4xl xmd:text-5xl text-highlight-light font-black">Explore, <br/> Crie e Inove</h2>
                            </header>
                            <div className="article__content max-w-sm">
                                <p className="m--article__text">Da brincadeira ao aprendizado, a The Wise ensina robótica, tecnologia e inovação para crianças, adolescentes e jovens.</p>
                            </div>
                            <div className="article__button mt-2.5">
                                <CTAButton/>
                            </div>
                        </article>
                        <div className="flex justify-center">
                            <img className="w-full max-w-xl md:hidden" src="/images\background\hero-image-mobile.png" alt="uma menina e um menino segurando um robô cada" />
                            <img className="w-full max-w-xl hidden md:block" src="/images\background\hero-image-desktop.png" alt="uma menina e um menino segurando um robô cada" />
                        </div>
                    </section>
                </div>

                {/* Sobre */}
                <div className="main__background bg-[url(/images/background/Braç2.png)] bg-left bg-no-repeat bg-cover inset-shadow-[0px_0px_50px]/30 inset-shadow-black bg-fixed">
                    <section className="section flex justify-center md:justify-end pt-15 pb-20">
                        <article className="article grid gap-5 bg-light text-dark p-10 rounded-2xl max-w-lg neumorphism-dark">
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
                <div className="main__background bg-background-light">
                    <section className="section flex justify-center md:justify-start pt-15 lg:pt-50 pb-20 relative">
                        <img className="section__banner absolute bg-gray-400 w-[80%] h-[70%] z-1 top-15 right-0 overflow-hidden rounded-4xl hidden lg:block object-cover" src="\images\banners\chieald-and-robot.jpg" alt="um menino segurando um robô" />
                        <article className="article grid gap-5 bg-light text-dark p-10 rounded-2xl max-w-lg neumorphism-light z-2">
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

                
                <div className="main__background inset-shadow-[0px_0px_50px]/30 inset-shadow-black bg-gray-200 w-full grid gap-10">
                    {/* Cursos*/}
                    <section className="section flex flex-col items-center justify-center pt-15 gap-10">
                        <header className="section__header grid justify-items-center text-background-dark">
                            <h2 className="section__title  text-4xl text-center font-bold">Cursos Ministrados</h2>
                            <MoveRight />
                        </header>
                        <LandingCourses/>
                        
                    </section>

                    {/* Depoimentos */}
                    <section className="section flex flex-col md:justify-end pb-15 gap-5">
                        <header className="section__header">
                            <h2 className="section__title text-background-dark text-xl font-semibold">O que os pais tem a dizer sobre nós?</h2>
                        </header>
                        <LandingReview/>
                        <div className="section__button flex justify-center md:pt-10">
                            <CTAButton/>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default LandingPage
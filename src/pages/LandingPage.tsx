import CTAButton from "../components/buttons/CTAButton"
import Navigation from "../components/Navigation"

function LandingPage(){
    return(
        <div className="w-full min-h-[100lvh] poppins-regular text-base text-light bg-background-dark">
            <Navigation type={'fixed'}/>
            <main className="main">
                <div className="main__background">
                    <section className="section section--hero h-dvh max-h-[600px] pb-10 bg-blue-700 flex items-end">
                        <article className="article bg-blue-800">
                            <header className="article__header">
                                <h1 className="article__title">Explore, Crie e Inove</h1>
                            </header>
                            <div className="article__content">
                                <p className="m--article__text">Da brincadeira ao aprendizado, a The Wise ensina robótica, tecnologia e inovação para crianças, adolescentes e jovens.</p>
                            </div>
                            <div className="article__button ">
                                <CTAButton/>
                            </div>
                        </article>
                    </section>
                </div>
            </main>
        </div>
    )
}

export default LandingPage
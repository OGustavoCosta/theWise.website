import { useState } from "react"
import Details from "../../components/Details"

interface IQuestion{
    id: number,
    title: string,
    text: string,
}

function LandingFaQ(){
    const [questions] = useState<IQuestion[]>([
        {
            "id": 1,
            "title": "Qual é a faixa etária atendida pela The Wise?",
            "text": "Atendemos crianças e adolescentes de 6 a 18 anos, com turmas organizadas por faixa etária e nível de conhecimento. Isso permite que cada aluno aprenda no seu ritmo, com desafios adequados ao seu estágio de desenvolvimento."
        },
        {
            "id": 2,
            "title": "Quais habilidades meu filho pode desenvolver nas aulas?",
            "text": "Nas aulas de robótica educacional, os alunos desenvolvem habilidades como pensamento lógico, resolução de problemas, criatividade, trabalho em equipe e noções de programação, eletrônica e engenharia."
        },
        {
            "id": 3,
            "title": "Como funciona a metodologia STEAM na The Wise?",
            "text": "Nossa metodologia STEAM integra Ciência, Tecnologia, Engenharia, Artes e Matemática por meio de projetos práticos e interdisciplinares. Os alunos constroem robôs, desenvolvem algoritmos e exploram conceitos científicos de forma divertida e aplicada."
        },
        {
            "id": 4,
            "title": "Quais materiais e recursos são utilizados nas aulas?",
            "text": "Utilizamos kits de robótica educacional, como LEGO® Education, Arduinos e sensores eletrônicos. Também usamos plataformas digitais para programação, impressão 3D, além de softwares de simulação e prototipagem."
        },
        {
            "id": 5,
            "title": "Os professores têm qualificação específica para ensinar crianças?",
            "text": "Sim. Nossos educadores são formados em áreas como engenharia, tecnologia e pedagogia, além de receberem treinamento contínuo em didática infantil, robótica educacional e metodologias ativas de ensino."
        }
    ])

    return(
        <section className="section pt-10 pb-15 w-full grid gap-5">
            <header className="section__header text-background-dark">
                <h2 className="section__title  text-4xl font-bold">Perguntas Frequentes</h2>
            </header>
            <div className="section__details grid gap-3">
                {questions.map((question) => (
                    <Details question={question}/>
                ))}
            </div>
        </section>
    )
}

export default LandingFaQ
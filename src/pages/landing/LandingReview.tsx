// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, FreeMode } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import ReviewCard from '../../components/cards/ReviewCard';

const reviews = [
    {
      id: 1,
      title: "A evolução do Pedro foi incrível!",
      message: "Meu filho está encantado com as aulas! Ele não só aprendeu conceitos de robótica, mas também desenvolveu muito em raciocínio lógico e criatividade.",
      author: "Maria Silva",
      authorDescription: "mãe do Pedro (8 anos)"
    },
    {
      id: 2,
      title: "Meu filho espera ansiosamente pela aula!",
      message: "As aulas de robótica se tornaram o momento favorito da semana para o Lucas. Ele ama construir e programar seus próprios projetos!",
      author: "João Mendes",
      authorDescription: "pai do Lucas (9 anos)"
    },
    {
      id: 3,
      title: "Excelente metodologia!",
      message: "Fiquei impressionada com o quanto a metodologia é prática e divertida. A Júlia aprendeu brincando e hoje adora resolver problemas.",
      author: "Fernanda Costa",
      authorDescription: "mãe da Júlia (10 anos)"
    },
    {
      id: 4,
      title: "Ambiente acolhedor e inspirador",
      message: "O ambiente é super acolhedor. O Rafael fez amigos e está sempre motivado a aprender mais. Recomendo muito!",
      author: "Carlos Henrique",
      authorDescription: "pai do Rafael (8 anos)"
    },
    {
      id: 5,
      title: "Estímulo à criatividade",
      message: "A Robótica tem ajudado a Ana a desenvolver a criatividade e o pensamento lógico de forma natural. Excelente trabalho!",
      author: "Lívia Andrade",
      authorDescription: "mãe da Ana (7 anos)"
    },
    {
      id: 6,
      title: "Didática diferenciada!",
      message: "Os professores são muito bem preparados e usam uma didática que realmente envolve os alunos. O Matheus está adorando.",
      author: "Paulo Oliveira",
      authorDescription: "pai do Matheus (9 anos)"
    },
    {
      id: 7,
      title: "Superou nossas expectativas",
      message: "Inscrevi a Sofia por curiosidade e hoje ela quer ser engenheira. A evolução foi nítida em poucos meses.",
      author: "Tatiane Moraes",
      authorDescription: "mãe da Sofia (11 anos)"
    },
    {
      id: 8,
      title: "Aprendizado e diversão juntos!",
      message: "O Gabriel se diverte muito enquanto aprende. É ótimo ver ele empolgado com cada nova aula.",
      author: "Rodrigo Pires",
      authorDescription: "pai do Gabriel (8 anos)"
    },
    {
      id: 9,
      title: "Maior concentração em casa",
      message: "Depois que começou as aulas, percebi que a Laura está mais focada também nas tarefas da escola. Ótimo reflexo!",
      author: "Camila Rocha",
      authorDescription: "mãe da Laura (10 anos)"
    },
    {
      id: 10,
      title: "Tecnologia de forma lúdica",
      message: "As aulas apresentam tecnologia de forma lúdica e acessível. O Enzo adora montar robôs e mostrar em casa.",
      author: "Marcelo Dias",
      authorDescription: "pai do Enzo (7 anos)"
    },
    {
      id: 11,
      title: "Equipe nota 10",
      message: "A equipe é atenciosa, competente e sempre preocupada com o bem-estar dos alunos. Parabéns pelo trabalho!",
      author: "Renata Lima",
      authorDescription: "mãe da Helena (8 anos)"
    },
    {
      id: 12,
      title: "Conteúdo além da escola",
      message: "O conteúdo vai além do que se aprende na escola, com foco em lógica, programação e criatividade. Muito completo.",
      author: "Sandro Meireles",
      authorDescription: "pai do Tiago (9 anos)"
    },
    {
      id: 13,
      title: "Mudança no comportamento",
      message: "A Isabela se tornou mais comunicativa e confiante depois das aulas. A robótica realmente fez a diferença.",
      author: "Juliana Freitas",
      authorDescription: "mãe da Isabela (10 anos)"
    },
    {
      id: 14,
      title: "Educação do futuro",
      message: "É isso que queremos para nossos filhos: uma educação que prepara para o futuro com tecnologia e propósito.",
      author: "Eduardo Nascimento",
      authorDescription: "pai do Bruno (11 anos)"
    },
    {
      id: 15,
      title: "Vale cada centavo",
      message: "O investimento vale muito a pena. Meu filho aprende, se diverte e ainda faz amigos. Estamos muito satisfeitos!",
      author: "Vanessa Martins",
      authorDescription: "mãe do Davi (8 anos)"
    }
];


function LandingReview(){
    return(
        <div className="section__cards w-full">
            <Swiper
                className='ease-linear swiper-linear'
                modules={[Autoplay]}
                slidesPerView={'auto'}
                spaceBetween={10}

                /* breakpoints={{
                    650: { 
                        slidesPerView: 2,
                        spaceBetween: 10,

                    },   // sm
                    1000: {
                        slidesPerView: 3,
                        spaceBetween:20,
                    },  // lg
                    1325: { 
                        slidesPerView: 3,
                        spaceBetween:20,
                    },  // xl
                }} */
                loop={true}
                speed={8000}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: false,
                }}
                grabCursor={true}
                onSwiper={(swiper) => console.log(swiper)}
                onSlideChange={() => console.log('slide change')}
            >
                {reviews.map((review) =>(
                    <SwiperSlide className='max-w-xl'><ReviewCard review={review}/></SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default LandingReview
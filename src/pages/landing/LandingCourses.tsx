// import Swiper core and required modules
import { Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';

import CourseCard from '../../components/cards/CourseCard';
import Modal from '../../components/Modal';
import {useState } from 'react';

interface ICourse {
    id: number,
    banner: string,
    title: string,
    shortDescription: string,
    description: string[],
}

function LandingCourses(){
    const [courses] = useState<ICourse[]>([
        {
            id: 1,
            banner: '/icons/courses/acompanhamento-pedagogico.svg',
            title: 'Acompanhamento Pedagógico',
            shortDescription: 'Desenvolvimento cognitivo e habilidades básicas com tecnologia.',
            description: [
                'Desenvolvimento cognitivo, oralidade, leitura, escrita e raciocínio lógico matemático.',
                'Uso da arte, jogos e tecnologia como ferramentas de aprendizado.',
            ]
        },
        {
            id: 2,
            banner: '/icons/courses/Iniciacao-a-robotica.svg',
            title: 'Iniciação à Robótica',
            shortDescription: 'Primeiros passos na robótica com programação em bloco.',
            description: [
                'Pensamento computacional.',
                'Montagem de projetos interdisciplinares I e programação em bloco.',
            ]
        },
        {
            id: 3,
            banner: '/icons/courses/Robotica-I.svg',
            title: 'Robótica I',
            shortDescription: 'Robótica com Arduino, eletrônica básica e impressão 3D.',
            description: [
                'Montagem de projetos interdisciplinares II.',
                'Impressão 3D, introdução ao Arduino e eletrônica básica.',
            ]
        },
        {
            id: 4,
            banner: '/icons/courses/Robotica-I.svg',
            title: 'Robótica II',
            shortDescription: 'Aprofundamento em Arduino e integração com sensores e atuadores.',
            description: [
                'Programação avançada com Arduino.',
                'Integração de sensores (ultrassônico, infravermelho, etc.) e atuadores (motores, servos).',
                'Projetos práticos com foco em automação e lógica aplicada.',
            ]
        },
        {
            id: 5,
            banner: '/icons/courses/Robotica-I.svg',
            title: 'Robótica III',
            shortDescription: 'Projetos complexos com IoT, inteligência artificial e sistemas embarcados.',
            description: [
                'Introdução à Internet das Coisas (IoT).',
                'Integração de dispositivos com Wi-Fi e plataformas em nuvem.',
                'Desenvolvimento de projetos com conceitos básicos de inteligência artificial.',
                'Montagem de sistemas embarcados mais robustos e autônomos.',
            ]
        },
        {
            id: 6,
            banner: '/icons/courses/acompanhamento-pedagogico.svg',
            title: 'Aula de Matemática',
            shortDescription: 'Aprendizado prático e contextualizado da matemática com foco no raciocínio lógico.',
            description: [
                'Desenvolvimento do raciocínio lógico e habilidades matemáticas fundamentais.',
                'Uso de jogos, desafios e situações do cotidiano para tornar o aprendizado mais significativo.',
                'Reforço de conteúdos escolares com apoio individualizado.',
            ]
        }
    ])

    const [modal, setModal] = useState<boolean>(false)
    const [cardId, setCardId] = useState<number>()

    const getId = (id:number) => {
        setCardId(id)
    }

    console.log(`LandingCourse: ${modal}`)

    return(
        <div className="section__cards w-full">
            <Swiper
                className=''
                modules={[Autoplay]}
                breakpoints={{
                    0: { 
                        spaceBetween: 20,

                    },
                    650: { 
                        slidesPerView: 2,
                        spaceBetween: 10,

                    },   // sm
                    1000: {
                        slidesPerView: 3,
                        spaceBetween:20,
                    },  // lg
                    1325: { 
                        slidesPerView: 4,
                        spaceBetween:20,
                    },  // xl
                }}
                pagination={{
                    clickable: true,
                    dynamicBullets: true,
                }}
                loop={true}
                autoplay={{
                    delay: 5000 ,
                    pauseOnMouseEnter: true
                }}
                onSwiper={(swiper) => console.log(swiper)}
            >
                {courses.map((course) =>(
                    <SwiperSlide key={course.id} className=''>
                        <CourseCard course={course} openModal={() => setModal(true)} getId={getId}/>
                    </SwiperSlide>
                ))}
            </Swiper>

            {modal && cardId && (
                <Modal
                    close={() => setModal(false)}
                    course={courses.find((course) => course.id === cardId)!}
                    isActive={modal}
                />
            )}
            
        </div>
    )
}

export default LandingCourses
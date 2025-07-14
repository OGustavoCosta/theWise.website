// import Swiper core and required modules
import { Autoplay, Navigation, Pagination, Keyboard, Parallax, Virtual} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper-bundle.css';
import EventCard from '../../components/cards/EventCard';

/* Hooks */
import { useEffect, useState } from 'react';

interface IEvent{
    id: number,
    banner: string,
    altBanner: string,
    title: string,
    shortDescription: string
}

function LandingEvent(){
    const [events] = useState<IEvent[]>([
        {
            id: 1,
            banner: 'https://picsum.photos/id/10/1920/1080',
            altBanner: 'Imagem de Representação',
            title: 'Participação na II Tenda da Ciência',
            shortDescription: 'Evento científico de destaque em Guanambi. Participamos com exposições interativas dos nossos projetos, despertando a curiosidade científica das crianças e encantando o público em geral.',
        },
        {
            id: 2,
            banner: 'https://picsum.photos/id/11/1920/1080',
            altBanner: 'Imagem de Representação',
            title: 'IV Feira de Negócios Guanambiense',
            shortDescription: 'Evento que reuniu as principais empresas da região. Nossa equipe marcou presença apresentando inovações em robótica, encantando adultos e divertindo crianças com demonstrações práticas.',
        },
        {
            id: 3,
            banner: 'https://picsum.photos/id/12/1920/1080',
            altBanner: 'Imagem de Representação',
            title: 'Semana Nacional de Ciência e Tecnologia',
            shortDescription: 'Participamos com oficinas e exposições interativas, promovendo o ensino de robótica e eletrônica de forma lúdica e acessível a todos os públicos.',
        },
        {
            id: 4,
            banner: 'https://picsum.photos/id/13/1920/1080',
            altBanner: 'Imagem de Representação',
            title: 'Workshop de Programação e Robótica Educacional',
            shortDescription: 'Evento promovido por nossa equipe para estudantes e professores, com foco em ferramentas práticas de robótica aplicada à educação básica e técnica.',
        },
        {
            id: 5,
            banner: 'https://picsum.photos/id/14/1920/1080',
            altBanner: 'Imagem de Representação',
            title: 'Mostra de Tecnologia do IF Baiano',
            shortDescription: 'Exposição de projetos tecnológicos em parceria com o Instituto Federal. Apresentamos protótipos e realizamos demonstrações de automação com Arduino e sensores.',
        },
        {
            id: 6,
            banner: 'https://picsum.photos/id/15/1920/1080',
            altBanner: 'Imagem de Representação',
            title: 'Feira Jovem Empreendedor – Sebrae',
            shortDescription: 'Evento voltado para inovação e empreendedorismo jovem. Demonstramos como a robótica pode impulsionar soluções criativas e negócios sustentáveis.',
        },
        {
            id: 7,
            banner: 'https://picsum.photos/id/16/1920/1080',
            altBanner: 'Imagem de Representação',
            title: 'Robótica na Praça – Edição Especial Dia das Crianças',
            shortDescription: 'Ação social realizada em praça pública com atividades práticas de montagem de robôs, oficinas de lógica e diversão garantida para o público infantil.',
        },
        {
            id: 8,
            banner: 'https://picsum.photos/id/17/1920/1080',
            altBanner: 'Imagem de Representação',
            title: 'Hackathon de Inovação Tecnológica',
            shortDescription: 'Participação em maratona de desenvolvimento com foco em soluções de robótica para problemas reais da comunidade, envolvendo equipes multidisciplinares e mentorias técnicas.',
        }
    ])

    const [enableNav, setEnableNav] = useState(window.innerWidth>=768)

    useEffect(() => {
        const handleResize = () => {
            setEnableNav(window.innerWidth >= 768);
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    const swiperStyle: React.CSSProperties & Record<string, string> = {
        '--swiper-navigation-color': '#fff',
        '--swiper-navigation-size': '30px',
        '--swiper-navigation-top-offset': '45%',
        '--swiper-pagination-color': '#380982',
    };

    return(
        <div className="section__cards w-full">
            <Swiper
                modules={[Virtual ,Navigation, Pagination, Autoplay, Keyboard, Parallax]}
                slidesPerView={1}
                navigation={enableNav}
                pagination={{
                    clickable: true,
                }}
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
                }}
                keyboard={true}
                parallax={true}
                speed={1000}
                spaceBetween={30}
                virtual

                className="mySwiper"
                style={swiperStyle}
            >  
                {events.map((event, i) => (
                    <SwiperSlide className='pb-10' key={event.id} virtualIndex={i}><EventCard event={event}/></SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default LandingEvent
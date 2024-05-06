import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import * as S from "./carousel-styled";
import Sobrancelha from '../../assets/sobrancelha.jpg';
import Depilacao from '../../assets/depilacao.jpg';
import Unhas from '../../assets/unhas.jpg';

export const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        centerMode: true,
        centerPadding: '4px',
        autoplaySpeed: 2000,
        appendDots: (dots: React.ReactNode) => (
            <div style={{ textAlign: 'center', marginTop: '5px', margin: '0'}}>
                <ul style={{ paddingBottom:'15px', display: 'inline-block' }}>
                    {dots}
                </ul>
            </div>
        ),
        customPaging: (i: number) => (
      <button
        style={{
          width: '10px',
          height: '10px',
          borderRadius: '50%',
          border: 'none',
          background: i === 1 ? '#94bc87' : '#96C486',
          margin: '2px 5px',
          cursor: 'pointer',
          transition: 'background-color  0.8s ease',
          opacity: '0.',
        
        }}
      />
    ),
  }

  return (
    <S.Services>
    <Slider {...settings}>
      <div style={{ padding: '0 10px' }}>
        <img style={{ width: '90%', height: '150px' }}src={Sobrancelha} alt="Imagem 1" />
      </div>
      <div style={{ padding: '0 10px' }}>
        <img style={{ width: '90%', height: '150px' }} src={Depilacao} alt="Imagem 2" />
      </div>
      <div style={{ padding: '5px 10px' }}>
        <img  style={{ width: '90%', height: '150px' }}src={Unhas} alt="Imagem 2" />
      </div>
    </Slider>
    </S.Services>
  );
};
import React from 'react';
import * as S from './home-styled';
import { Carousel } from '../../components/Carousel/carousel';

const HomePage: React.FC = () => {
    return (
        <S.StyledPage>
            <S.StyledTitle>Bem-vindo à Página Home</S.StyledTitle>
                <Carousel />
        </S.StyledPage>
    );
}

export default HomePage;
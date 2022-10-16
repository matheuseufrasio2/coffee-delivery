import {
  Coffee, Package, ShoppingCart, Timer,
} from 'phosphor-react';
import { useTheme } from 'styled-components';
import { Benefit } from './components/Benefit';
import {
  Benefits,
  HomeContainer, Intro,
} from './styles';

import coffeeImg from '../../assets/hero-image.png';

export function Home() {
  const theme = useTheme();
  return (
    <HomeContainer>
      <Intro>
        <div>
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <h2>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</h2>
          <Benefits>
            <div>
              <Benefit iconContainerColor="orange" title="Compra simples e segura">
                <ShoppingCart weight="fill" size={16} color={theme.background} />
              </Benefit>
              <Benefit iconContainerColor="yellow" title="Entrega rápida e rastreada">
                <Timer weight="fill" size={16} color={theme.background} />
              </Benefit>
            </div>
            <div>
              <Benefit iconContainerColor="black" title="Embalagem mantém o café intacto">
                <Package weight="fill" size={16} color={theme.background} />
              </Benefit>
              <Benefit iconContainerColor="purple" title="O café chega fresquinho até você">
                <Coffee weight="fill" size={16} color={theme.background} />
              </Benefit>
            </div>
          </Benefits>
        </div>
        <img src={coffeeImg} alt="" />
      </Intro>
    </HomeContainer>
  );
}

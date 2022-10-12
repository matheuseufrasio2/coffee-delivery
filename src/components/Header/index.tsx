import { MapPin, ShoppingCart } from 'phosphor-react';
import { useTheme } from 'styled-components';
import {
  CartAmount,
  HeaderContainer, LocalInfo,
} from './styles';

import logo from '../../assets/logo.svg';

export function Header() {
  const theme = useTheme();
  return (
    <HeaderContainer>
      <img src={logo} alt="Logotipo" />
      <div>
        <LocalInfo>
          <MapPin weight="fill" color={theme.purple} size={22} />
          <p>Porto Alegre</p>
        </LocalInfo>
        <CartAmount>
          <ShoppingCart weight="fill" color={theme['yellow-dark']} size={22} />
        </CartAmount>
      </div>
    </HeaderContainer>
  );
}

import { ReactNode } from 'react';
import {
  BenefitContainer,
  IconContainer,
} from './styles';

interface BenefitProps {
  title: string;
  iconContainerColor: 'yellow' | 'black' | 'orange' | 'purple';
  children: ReactNode;
}

export function Benefit({ title, children, iconContainerColor }: BenefitProps) {
  return (
    <BenefitContainer>
      <IconContainer containerColor={iconContainerColor}>
        {children}
      </IconContainer>
      <span>{title}</span>
    </BenefitContainer>
  );
}

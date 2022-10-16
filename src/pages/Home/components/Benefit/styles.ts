import styled from 'styled-components';

export const BenefitContainer = styled.div`
  display: flex;
  align-items: center;

  & + div {
    margin-top: 20px;
  }
`;

interface IconContainerProps {
  containerColor: 'yellow' | 'black' | 'orange' | 'purple';
}

export const IconContainer = styled.div<IconContainerProps>`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  margin-right: 12px;
  display: flex;
  align-items: center;
  justify-content: center;

  background: ${({ theme }) => theme.background};
  background: ${({ containerColor, theme }) => containerColor === 'purple' && theme.purple};
  background: ${({ containerColor, theme }) => containerColor === 'yellow' && theme.yellow};
  background: ${({ containerColor, theme }) => containerColor === 'black' && theme['base-text']};
  background: ${({ containerColor, theme }) => containerColor === 'orange' && theme['yellow-dark']};
`;

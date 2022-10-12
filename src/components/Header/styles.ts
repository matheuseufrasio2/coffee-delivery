import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 0;

  > div {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const LocalInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  background: ${({ theme }) => theme['purple-light']};
  padding: 0.5rem;
  border-radius: 6px;

  p {
    line-height: 130%;
    color: ${({ theme }) => theme['purple-dark']};
    font-size: 0.875rem;
    margin-left: 4px;
  }
`;

export const CartAmount = styled.div`
  margin-left: 12px;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${({ theme }) => theme['yellow-light']};

  display: flex;
  align-items: center;
  justify-content: center;
`;

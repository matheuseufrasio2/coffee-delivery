import styled from 'styled-components';

export const HomeContainer = styled.div`
`;

export const Intro = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 5.875rem 0;

  background: url('../../assets/background.png');
  display: flex;
  align-items: flex-start;

  > div {
    max-width: 588px;
    display: flex;
    flex-direction: column;

    > h1 {
      font-family: 'Baloo 2';
      font-weight: 800;
      font-size: 48px;
      line-height: 130%;
      color: ${({ theme }) => theme['base-title']}
    }

    > h2 {
      font-family: 'Roboto';
      font-size: 20px;
      margin-top: 1rem;
      color: ${({ theme }) => theme['base-subtitle']}
    }

  }

  img {
    margin-left: auto;
  }
`;

export const Benefits = styled.div`
  margin-top: 4.125rem;

  display: flex;



  > div {
    & + div {
      margin-left: 40px;
    }
  }

  font-size: 1rem;
  color: ${({ theme }) => theme['base-text']}
`;

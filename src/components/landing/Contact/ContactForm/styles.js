import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0rem;
  margin-top: 2rem;
  color: var(--text);
  display: flex;
  width: 100%;
  align-items: center;
  flex-direction: column;
  transition: color 0.2s ease-out;
  @media ${({ theme }) => theme.mediaQueries.small} {
    margin-top: 6rem;
    padding: 4rem 0rem;
  }
  @media ${({ theme }) => theme.mediaQueries.smaller} {
    padding: 3rem 0rem;
  }
`;

export const Container = styled.div`
  max-width: 124rem;
  z-index: 2;
  padding: 0 4rem;
  margin: 0 auto;
  width: 100%;
  @media ${props => props.theme.mediaQueries.small} {
    padding: 0 3rem;
  }
  @media ${props => props.theme.mediaQueries.smaller} {
    padding: 0 2rem;
  }
`;

export const CopyRight = styled.p`
  font-weight: 700;
  margin: 0;
  font-size: 1rem;
  color: var(--text-highlight);
  text-transform: uppercase;
`;

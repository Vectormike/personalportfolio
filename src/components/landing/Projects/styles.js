import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 2rem 0rem;
  ${'' /* background-image: url(${overlayIllustration}); */}
  ${'' /* background-size: contain;
  background-position: right top;
  background-repeat: no-repeat; */}
`;

export const Title = styled.h2`
  color: #212121;
`;

export const Grid = styled.div`
  display: grid;
  width: 100%;
  align-items: center;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 8fr;
  gap: 1.2rem 3.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const Work = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1.2rem;
  align-items: center;
  ${({ side }) =>
    side &&
    `
			grid-template-columns: repeat(3, 1fr);
			grid-gap: 3rem;
			@media (max-width: 960px) {
				grid-template-columns: repeat(1, 1fr);
			}
	`}
  @media (max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 4rem;
  }
  ${({ github }) =>
    github &&
    `
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: repeat(1, 8fr);
	`};
`;

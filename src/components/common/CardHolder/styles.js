import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  width: 100%;
`;

export const StyledCard = styled.div`
  height: 100%;
  width: 100%;
  border-radius: 2px;
  background: #fff;
  box-shadow: 0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14),
    0px 3px 1px -2px rgba(0, 0, 0, 0.12);
  transition: 0.3s;
  &:hover {
    box-shadow: 0 8px 26px 0 rgba(0, 0, 0, 0.09);
    transition: 0.3s;
    .gatsby-image-wrapper {
      transform: scale(1.05);
      transition: 0.3s;
      box-shadow: 0 17px 46px -5px rgba(0, 0, 0, 0.2);
      border-radius: 5px;
      img {
        border-radius: 5px;
        transition: 0.3s;
      }
    }
  }
`;

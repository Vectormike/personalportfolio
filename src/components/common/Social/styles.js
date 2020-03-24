import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Email = styled.a`
  color: #089eca;
  font-size: 2rem;
  position: relative;
  font-weight: 600;
  text-decoration: none;
  margin-bottom: 4rem;
  transition: color 0.2s ease-out;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.8rem;
  }
  @media only screen and (max-width: 37.5em) {
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 25em) {
    font-size: 1.4rem;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5rem;
  @media only screen and (max-width: 56.25em) {
    margin-bottom: 8rem;
  }
  @media only screen and (max-width: 37.5em) {
    margin-bottom: 6rem;
  }
`;

export const StyledLink = styled.a`
  text-decoration: none;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1.2px solid #089eca;
  margin: 0 1.1rem;
  transition: all 0.2s ease-out;
  &:hover {
    background-color: #fff;
    border-color: #089eca;
  }
  @media only screen and (max-width: 56.25em) {
    width: 4rem;
    height: 4rem;
  }
  @media only screen and (max-width: 37.5em) {
    width: 3.5rem;
    height: 3.5rem;
    margin: 0 1rem;
    border: 1px solid #089eca;
  }
  @media only screen and (max-width: 25em) {
    width: 3rem;
    height: 3rem;
    margin: 0 0.8rem;
  }
`;

export const StyledIcon = styled(FontAwesomeIcon)`
  color: #333;
  font-size: 1.2rem;
  transition: color 0.2s ease-out;
  ${StyledLink}:hover & {
    color: #029eca;
  }
  @media only screen and (max-width: 56.25em) {
    font-size: 2rem;
  }
  @media only screen and (max-width: 37.5em) {
    font-size: 1.7rem;
  }
  @media only screen and (max-width: 25em) {
    font-size: 1.6rem;
  }
`;

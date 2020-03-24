import styled from 'styled-components';
import overlayIllustration from 'assets/illustrations/overlay.svg';
import { animated, config, useSpring } from 'react-spring';

export const Wrapper = styled.div`
  padding-bottom: 4rem;
  background-image: url(${overlayIllustration});
  background-size: contain;
  background-position: right top;
  background-repeat: no-repeat;
`;

export const SmallWrapper = styled.div`
  width: 90%;
  margin: 0 auto;
`;

export const IntroWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Title = styled(animated.h1)`
  font-weight: 100;
  margin: 0;
  margin-bottom: 2rem;
  line-height: 1.3;
  font-size: 2rem;
  color: #575757;
  transition: color 0.2s ease-out;
  @media only screen and (max-width: 56.25em) {
    font-size: 6rem;
  }
  @media only screen and (max-width: 37.5em) {
    font-size: 2.5rem;
  }
  @media only screen and (max-width: 31.25em) {
    font-size: 2rem;
  }
  & span {
    font-weight: 600;
    color: #089eca;
    transition: color 0.2s ease-out;
  }
`;

export const SubTitle = styled(animated.h2)`
  color: #575757;
  font-weight: 400;
  margin: 0;
  margin-bottom: 7rem;
  font-size: 1.8rem;
  transition: color 0.2s ease-out;
  @media only screen and (max-width: 56.25em) {
    font-size: 1.4rem;
  }
  @media only screen and (max-width: 25em) {
    font-size: 1rem;
  }
`;

// export const TitleSpring = useSpring({
//   config: config.wobbly,
//   delay: 200,
//   opacity: 1,
//   transform: 'translateX(0px)',
//   from: { opacity: 0, transform: 'translateX(40px)' },
// });

export const Details = styled.div`
  flex: 1;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 36pt;
    color: #212121;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h4 {
    margin-bottom: 2.5rem;
    font-size: 32pt;
    font-weight: normal;
    color: #707070;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Button = styled.a`
  color: #fff;
  text-decoration: none;
  padding: 0.9rem 1.4rem;
  background: #1599f5;
  border-radius: 0.3rem;
  box-shadow: #4dabba 0px 13px 19px -6px;
  transition: 0.5s;
  @media (max-width: 380px) {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  &:hover {
    box-shadow: 0px 0px 17px 0px #4dabba;
    transition: 0.5s;
  }
  &:first-child {
    margin-right: 1rem;
    background: #c29a6f;
    color: #fff;
    box-shadow: rgb(185, 185, 185) 0px 13px 19px -6px;
    &:hover {
      box-shadow: 0px 0px 17px 0px #b85851;
    }
    @media (max-width: 380px) {
      margin: 0 auto 1.5rem auto;
    }
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  img {
    width: 100%;
    height: 100%;
  }

  @media screen and (max-width: 425px) {
    width: 1000%;
    height: 20px;
  }
`;

export const Flex = styled.div`
  display: flex;
  padding-top: 8rem;
  align-items: center;
  @media (max-width: 380px) {
    flex-direction: column;
  }
`;

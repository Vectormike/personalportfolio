import styled from 'styled-components';

export const Wrapper = styled.div`
  a,
  a > span {
    position: relative;
    color: #1599f5;
    text-decoration: none;
    line-height: 34px;
  }
  a:before,
  a:after,
  a > span:before,
  a > span:after {
    content: '';
    position: absolute;
    transition: transform 0.5s ease;
  }

  .effect-1 {
    padding-top: 10px;
  }
  .effect-1:before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: #1599f5;
    transform: scaleX(0);
  }
  .effect-1:hover:before {
    transform: scaleX(1);
  }

  .effect-2 {
    padding: 10px;
  }
  .effect-2:before,
  .effect-2:after {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-color: #0883a4;
  }
  .effect-2:before {
    border-width: 2px 0 2px 0;
    transform: scaleX(0);
  }
  .effect-2:after {
    border-width: 0 2px 0 2px;
    transform: scaleY(0);
  }
  .effect-2:hover:before,
  .effect-2:hover:after {
    transform: scale(1, 1);
  }

  .effect-3 {
    padding-top: 10px;
    padding-bottom: 1px;
    overflow: hidden;
  }
  .effect-3:before {
    left: 0;
    bottom: 0;
    width: 100%;
    height: 2px;
    background: #0883a4;
    transform: translateX(-100%);
  }
  .effect-3:hover:before {
    transform: translateX(0);
  }

  .effect-4 {
    padding: 10px;
    display: inline-block;
    overflow: hidden;
  }
  .effect-4:before,
  .effect-4:after {
    left: 0;
    width: 100%;
    height: 2px;
    background: #0883a4;
  }
  .effect-4:before {
    bottom: 0;
    transform: translateX(-100%);
  }
  .effect-4:after {
    top: 0;
    transform: translateX(100%);
  }
  .effect-4:hover:before,
  .effect-4:hover:after {
    transform: translateX(0);
  }

  ${({ desktop }) =>
    desktop
      ? `
			@media (max-width: 960px) {
					display: none;
			}

			a {
					margin-right: 1rem;

					&:last-child {
							margin-right: unset;
					}
			}
		`
      : `
			padding: 3rem;
			display: flex;
			flex-direction: column;

			a {
					margin-bottom: 1rem;

					&:last-child {
							margin-bottom: unset;
					}
			}
	`}
`;

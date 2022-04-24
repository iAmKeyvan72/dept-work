import styled from 'styled-components';

export const StyledHeader = styled.header`
  background-color: ${(props) =>
    props.clicked ? 'transparent' : 'var(--background-main)'};
  color: ${(props) =>
    props.clicked ? 'var(--background-main)' : 'var(--text-900)'};
  position: absolute;
  left: 0;
  right: 0;
  z-index: 10;
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    background: transparent;
    padding-top: 1rem;
  }

  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em 0;

    @media (min-width: 768px) {
      border-bottom: 1px solid var(--secondary);
    }
  }
`;

export const StyledLogo = styled.a`
  display: flex;
  color: ${(props) =>
    props.clicked ? 'var(--background-main)' : 'var(--text-900)'};
  transition: all 0.3s ease-in-out;

  @media (min-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledMenuButton = styled.button`
  background: none;
  border: none;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0.1em 2em;
  font-family: Arial;
  color: ${(props) =>
    props.clicked ? 'var(--background-main)' : 'var(--text-900)'};

  &::before,
  &::after {
    content: '';
    background-color: ${(props) =>
      props.clicked ? 'var(--background-main)' : 'var(--secondary)'};
    height: 2px;
    width: 1rem;
    position: absolute;
    transition: all 0.3s ease;
    right: 0;
  }

  &&::before {
    top: ${(props) => (props.clicked ? '1.5' : '0.2rem')};
    transform: ${(props) =>
      props.clicked ? 'rotate(135deg)' : 'rotate(0deg)'};
  }

  &&::after {
    top: ${(props) => (props.clicked ? '1.2' : '0.8rem')};
    transform: ${(props) =>
      props.clicked ? 'rotate(-135deg)' : 'rotate(0deg)'};
  }

  @media (min-width: 768px) {
    font-family: Teko;
    font-weight: bold;
    font-size: 1.5rem;
    padding: 0rem 2rem;
    color: ${(props) =>
      props.clicked ? 'var(--background-main)' : 'var(--text-900)'};

    &&::before {
      top: ${(props) => (props.clicked ? '1.5' : '0.5rem')};
    }
    &&::after {
      top: ${(props) => (props.clicked ? '1.2' : '1.3rem')};
    }
  }
`;

import styled from 'styled-components';

/* eslint-disable-next-line */
export interface UiwebProps {}

const StyledUiweb = styled.div`
  color: pink;
`;

export function Uiweb(props: UiwebProps) {
  return (
    <StyledUiweb>
      <h1>Welcome to Uiweb!</h1>
    </StyledUiweb>
  );
}

export default Uiweb;

import styled from '@emotion/styled';

export const ImageList = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(420px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding-left: 24px;
  padding-right :24px;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

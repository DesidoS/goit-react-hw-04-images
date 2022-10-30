import styled from 'styled-components';

/*
 * Стили компонента ImageGallery
 */
export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 48px);
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  grid-gap: 16px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;

/*
 * Стили компонента ImageGalleryItem
 */
export const GalleryItem = styled.li`
  border-radius: 2px;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
     transition: transform 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
    transform: scale(1.03);
    cursor: zoom-in;
  object-fit: cover;

`;
export const GalleryItemPar = styled.p`
  display: flex;
  justify-content: center;
  padding: 10px;
  margin: 0px;
  background-color: #3f51b5;
  font-family: Raleway, sans-serif;
  font-size: 10px;
  line-height: 1.19;
`;

export const GalleryItemImg = styled.img`
  display: block;
  width: 100%;
  height: 260px;
  }
`;

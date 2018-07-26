import styles from 'styled-components';

// Grid
export const PhotoGridWrapper = styles.section`
    display: grid;
    grid-template-columns: repeat(4, 1fr); 
    grid-template-rows: repeat(2, 35vh);
    grid-gap: 15px 10px;
`;


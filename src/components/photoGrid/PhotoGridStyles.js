import styles from 'styled-components';

// Grid
export const PhotoGridWrapper = styles.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
`;

export const Photo = styles.img`
    object-fit: cover;
    width: 20em;
    height: 25em;
    padding: 2em;
`;

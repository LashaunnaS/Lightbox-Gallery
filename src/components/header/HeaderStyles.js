import styles from 'styled-components'; 

// Header
export const HeaderWrapper = styles.div`
    display: grid;
    grid-template-columns: 1fr; 
    grid-template-rows: 20vh;
`;

export const HeadTitle = styles.h1`
    grid-column: 1/2;
    grid-row: 1/2;
    align-self: center;
    justify-self: center;
`;

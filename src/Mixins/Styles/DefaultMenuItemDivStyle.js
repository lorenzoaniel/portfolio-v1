import { css } from 'styled-components';

const defaultMenuItemDivStyle = css`
    /* GENERAL */
    height: 100%;
    background-size: contain;
    border-radius: 1.25rem;
    box-shadow: 0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
                0rem -0.5rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
                0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset;

    /* GRID/FLEX */
    flex-basis: 30%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export default defaultMenuItemDivStyle;
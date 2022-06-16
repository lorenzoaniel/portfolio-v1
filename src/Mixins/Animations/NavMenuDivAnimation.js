import { css } from 'styled-components';
// import navMenuDivFloatAndPulseAnimation from '../Mixins/Animations/NavMenuDivFloatAndPulseAnimation';

const navMenuDivAnimation = (props) => css`
    /* .${props.classNames}-appear {}
    .${props.classNames}-active-appear {}
    .${props.classNames}-done-appear {} */
    &.navMenuDivAnimation-enter {
        opacity: 0;
        /* transform: translateX(-100%) scale(0); */
        /* box-shadow: 0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
                    0rem -0.5rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
                    0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset; */
    }
    &.navMenuDivAnimation-enter-active {
        opacity: 1;
        /* transform: translateX(0) scale(1); */
        /* box-shadow: 0rem 0.1rem 1.5rem 1rem rgba(54, 168, 239, 1),
                    0rem -0.1rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
                    0rem -0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset; */
    }
    /* .${props.classNames}-done-enter {} */
    &.navMenuDivAnimation-exit {
        opacity: 1;
    }
    &.navMenuDivAnimation-exit-active {
        opacity: 0;
    }
    /* .${props.classNames}-done-exit {} */
`;

export default navMenuDivAnimation;
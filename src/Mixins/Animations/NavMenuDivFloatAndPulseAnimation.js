import { keyframes } from 'styled-components';

const navMenuDivFloatAndPulseAnimation = () => keyframes`
    from{
        transform: translateY(0rem);
        box-shadow: 0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1),
                    0rem -0.5rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
                    0rem 0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset;
    }
    to{
        transform: translateY(1rem);
        box-shadow: 0rem 0.1rem 1.5rem 1rem rgba(54, 168, 239, 1),
                    0rem -0.1rem 1.5rem 0.4rem rgba(54, 168, 239, 1),
                    0rem -0.5rem 1.5rem 0.5rem rgba(54, 168, 239, 1) inset;
    }
`;

export default navMenuDivFloatAndPulseAnimation;
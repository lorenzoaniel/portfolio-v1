import { css } from 'styled-components';

const titleLetterWiggleAnimation = css`
    animation: titleLetterWiggleAnimation 0.3s linear infinite;
    animation-direction: alternate;
    animation-delay: ${props => `${props.delay/4}s`};
    animation-play-state: paused;

    @keyframes titleLetterWiggleAnimation{
        0%{
            transform: rotate(0deg) scale(1);
        }
        20%{
            transform: rotate(5deg) scale(1.05);
        }
        40%{
            transform: rotate(10deg) scale(1.1);
        }
        55%{
            transform: rotate(5deg) scale(1.15);
        }
        65%{
            transform: rotate(0deg) scale(1.2);
        }
        80%{
            transform: rotate(-5deg) scale(1.25);
        }
        100%{
            transform: rotate(-10deg) scale(1.35); 
        }
    }
`;

export default titleLetterWiggleAnimation;
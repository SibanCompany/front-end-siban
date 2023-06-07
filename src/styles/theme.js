import { css } from 'styled-components';

export const color = {
  white: '#fff',
  grey_1: '#E5E5E5',
  grey_2: '#C4C4C4',
  grey_3: '#A3A3A3',
  grey_4: '#828282',
  grey_5: '#626262',
  grey_6: '#414141',
  black: '#000',
  yellow: '#fdc81d',
};

export const flex = {
  center: (direction = 'row') => `
  display:flex;
  flex-direction:${direction}
  justify-content:center
  align-items:center
  `,

  optional: (direction = 'row', justify = 'center', align = 'center') => `
  display:flex;
  flex-direction:${direction};
  justify-content:${justify};
  align-items:${align}
  `,
};

export const positionAbsoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

import { css } from 'styled-components';

export const colors = {
  primary: {
    main: '#0D5836', // Verde escuro como cor principal
    light: '#158551',
    dark: '#073724',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#FF9800',  // Laranja para destacar ações e promoções
    light: '#FFB74D',
    dark: '#F57C00',
    contrastText: '#FFFFFF'
  },
  background: {
    default: '#F5F5F5',
    paper: '#FFFFFF',
    card: '#FFFFFF',
    green: '#0D5836', // Fundo verde para cards e seções
  },
  text: {
    primary: '#212121',
    secondary: '#757575',
    disabled: '#9E9E9E',
    hint: '#9E9E9E'
  },
  error: {
    main: '#D32F2F',
    light: '#EF5350',
    dark: '#C62828',
    contrastText: '#FFFFFF'
  },
  success: {
    main: '#43A047',
    light: '#66BB6A',
    dark: '#2E7D32',
    contrastText: '#FFFFFF'
  },
  divider: 'rgba(0, 0, 0, 0.12)'
};

export const typography = {
  fontFamily: `-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Segoe UI', 'Helvetica Neue', sans-serif`,
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2
  },
  h2: {
    fontSize: '2rem',
    fontWeight: 700,
    lineHeight: 1.2
  },
  h3: {
    fontSize: '1.75rem',
    fontWeight: 600,
    lineHeight: 1.2
  },
  h4: {
    fontSize: '1.5rem',
    fontWeight: 600,
    lineHeight: 1.2
  },
  h5: {
    fontSize: '1.25rem',
    fontWeight: 600,
    lineHeight: 1.2
  },
  h6: {
    fontSize: '1rem',
    fontWeight: 600,
    lineHeight: 1.2
  },
  body1: {
    fontSize: '1rem',
    fontWeight: 400,
    lineHeight: 1.5
  },
  body2: {
    fontSize: '0.875rem',
    fontWeight: 400,
    lineHeight: 1.5
  },
  button: {
    fontSize: '0.875rem',
    fontWeight: 500,
    lineHeight: 1.75,
    textTransform: 'uppercase'
  },
  caption: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 1.66
  },
  overline: {
    fontSize: '0.75rem',
    fontWeight: 400,
    lineHeight: 2.66,
    textTransform: 'uppercase'
  }
};

export const spacing = (multiplier = 1) => `${8 * multiplier}px`;

export const shapes = {
  borderRadius: {
    small: '4px',
    medium: '8px',
    large: '16px',
    circle: '50%'
  },
  shadows: {
    small: '0px 2px 4px rgba(0, 0, 0, 0.1)',
    medium: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    large: '0px 8px 16px rgba(0, 0, 0, 0.1)'
  }
};

export const mixins = {
  flexCenter: css`
    display: flex;
    align-items: center;
    justify-content: center;
  `,
  flexBetween: css`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `,
  flexColumn: css`
    display: flex;
    flex-direction: column;
  `,
  transition: (property = 'all', duration = 0.3) => css`
    transition: ${property} ${duration}s ease;
  `
};

// Breakpoints para design responsivo
export const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
};

// Media queries
export const media = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`
};
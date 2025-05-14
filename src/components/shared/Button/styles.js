import styled, { css } from 'styled-components';
import { colors, shapes, mixins, typography } from '../../../styles/designSystem';

// Variantes do botão
const BUTTON_VARIANTS = {
  primary: css`
    background-color: ${colors.primary.main};
    color: ${colors.primary.contrastText};
    border: none;
    
    &:hover {
      background-color: ${colors.primary.dark};
    }
    
    &:disabled {
      background-color: ${colors.text.disabled};
      cursor: not-allowed;
    }
  `,
  secondary: css`
    background-color: ${colors.secondary.main};
    color: ${colors.secondary.contrastText};
    border: none;
    
    &:hover {
      background-color: ${colors.secondary.dark};
    }
    
    &:disabled {
      background-color: ${colors.text.disabled};
      cursor: not-allowed;
    }
  `,
  outline: css`
    background-color: transparent;
    color: ${colors.primary.main};
    border: 1px solid ${colors.primary.main};
    
    &:hover {
      background-color: ${colors.primary.main}10;
    }
    
    &:disabled {
      border-color: ${colors.text.disabled};
      color: ${colors.text.disabled};
      cursor: not-allowed;
    }
  `,
  text: css`
    background-color: transparent;
    color: ${colors.primary.main};
    border: none;
    
    &:hover {
      background-color: ${colors.primary.main}10;
    }
    
    &:disabled {
      color: ${colors.text.disabled};
      cursor: not-allowed;
    }
  `
};

// Tamanhos do botão
const BUTTON_SIZES = {
  small: css`
    padding: 8px 12px;
    font-size: ${typography.caption.fontSize};
  `,
  medium: css`
    padding: 10px 16px;
    font-size: ${typography.body2.fontSize};
  `,
  large: css`
    padding: 12px 24px;
    font-size: ${typography.body1.fontSize};
  `
};

export const StyledButton = styled.button`
  ${({ variant = 'primary' }) => BUTTON_VARIANTS[variant]};
  ${({ size = 'medium' }) => BUTTON_SIZES[size]};
  border-radius: ${shapes.borderRadius.small};
  font-weight: 500;
  ${mixins.transition()};
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-transform: ${({ uppercase }) => uppercase ? 'uppercase' : 'none'};
  width: ${({ fullWidth }) => fullWidth ? '100%' : 'auto'};
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${shapes.shadows.small};
  }
  
  &:active {
    transform: translateY(0);
  }
  
  svg {
    font-size: 1.25em;
  }
`;
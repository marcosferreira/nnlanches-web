import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './styles';

/**
 * Componente Button reutilizável que segue o design system
 */
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  type = 'button',
  disabled = false,
  fullWidth = false,
  uppercase = false,
  startIcon,
  endIcon,
  onClick,
  ...props
}) => {
  return (
    <StyledButton
      type={type}
      variant={variant}
      size={size}
      disabled={disabled}
      fullWidth={fullWidth}
      uppercase={uppercase}
      onClick={onClick}
      {...props}
    >
      {startIcon && startIcon}
      {children}
      {endIcon && endIcon}
    </StyledButton>
  );
};

Button.propTypes = {
  /** Conteúdo do botão */
  children: PropTypes.node.isRequired,
  /** Variante visual do botão */
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline', 'text']),
  /** Tamanho do botão */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /** Tipo do botão HTML */
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  /** Se o botão está desabilitado */
  disabled: PropTypes.bool,
  /** Se o botão deve ocupar 100% da largura do container */
  fullWidth: PropTypes.bool,
  /** Se o texto deve ser em maiúsculas */
  uppercase: PropTypes.bool,
  /** Ícone a ser exibido no início do botão */
  startIcon: PropTypes.node,
  /** Ícone a ser exibido no final do botão */
  endIcon: PropTypes.node,
  /** Função a ser executada ao clicar no botão */
  onClick: PropTypes.func
};

export default Button;
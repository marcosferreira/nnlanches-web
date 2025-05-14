import styled from 'styled-components';
import { colors, shapes, typography, mixins } from "../../styles/designSystem";

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
`;

export const LoginCard = styled.div`
  width: 100%;
  max-width: 400px;
  padding: 32px;
  background-color: ${colors.background.paper};
  border-radius: ${shapes.borderRadius.medium};
  box-shadow: ${shapes.shadows.medium};
`;

export const LoginTitle = styled.h1`
  font-size: ${typography.h4.fontSize};
  color: ${colors.text.primary};
  margin-bottom: 24px;
  text-align: center;
  position: relative;
  padding-bottom: 16px;
  
  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background-color: ${colors.primary.main};
    border-radius: ${shapes.borderRadius.small};
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const Label = styled.label`
  font-size: ${typography.body2.fontSize};
  color: ${colors.text.secondary};
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 12px 16px;
  border: 1px solid ${colors.divider};
  border-radius: ${shapes.borderRadius.small};
  font-size: ${typography.body1.fontSize};
  ${mixins.transition()}
  
  &:focus {
    border-color: ${colors.primary.main};
    box-shadow: 0 0 0 2px ${colors.primary.light}40;
  }
`;

export const ForgotPassword = styled.a`
  font-size: ${typography.body2.fontSize};
  color: ${colors.primary.main};
  text-align: right;
  margin-top: -8px;
  text-decoration: none;
  ${mixins.transition()}
  
  &:hover {
    color: ${colors.primary.dark};
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  padding: 12px;
  background-color: ${colors.primary.main};
  color: ${colors.primary.contrastText};
  border: none;
  border-radius: ${shapes.borderRadius.small};
  font-weight: 600;
  font-size: ${typography.body1.fontSize};
  margin-top: 8px;
  ${mixins.transition()}
  
  &:hover {
    background-color: ${colors.primary.dark};
    transform: translateY(-2px);
    box-shadow: ${shapes.shadows.small};
  }
  
  &:active {
    transform: translateY(0);
  }
`;

export const Divider = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin: 24px 0;
  
  &:before, &:after {
    content: '';
    flex: 1;
    height: 1px;
    background-color: ${colors.divider};
  }
  
  span {
    font-size: ${typography.body2.fontSize};
    color: ${colors.text.secondary};
  }
`;

export const SocialLoginButton = styled.button`
  width: 100%;
  padding: 12px;
  border: 1px solid ${colors.divider};
  border-radius: ${shapes.borderRadius.small};
  background-color: transparent;
  ${mixins.flexCenter}
  gap: 8px;
  font-weight: 500;
  ${mixins.transition()}
  
  &:hover {
    background-color: ${colors.background.default};
  }
`;

export const RegisterLink = styled.div`
  text-align: center;
  margin-top: 24px;
  font-size: ${typography.body2.fontSize};
  color: ${colors.text.secondary};
  
  a {
    color: ${colors.primary.main};
    font-weight: 500;
    text-decoration: none;
    ${mixins.transition()}
    
    &:hover {
      text-decoration: underline;
      color: ${colors.primary.dark};
    }
  }
`;

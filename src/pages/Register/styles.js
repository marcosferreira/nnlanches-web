import styled from 'styled-components';
import { colors, shapes, typography, mixins } from "../../styles/designSystem";

export const RegisterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 16px;
`;

export const RegisterCard = styled.div`
  width: 100%;
  max-width: 500px;
  padding: 32px;
  background-color: ${colors.background.paper};
  border-radius: ${shapes.borderRadius.medium};
  box-shadow: ${shapes.shadows.medium};
`;

export const RegisterTitle = styled.h1`
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

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormRow = styled.div`
  display: flex;
  gap: 16px;
  
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
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

export const TermsCheck = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-top: 8px;
  
  input {
    margin-top: 4px;
  }
  
  label {
    font-size: ${typography.body2.fontSize};
    color: ${colors.text.secondary};
    
    a {
      color: ${colors.primary.main};
      text-decoration: none;
      
      &:hover {
        text-decoration: underline;
      }
    }
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

export const SocialRegisterButton = styled.button`
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

export const LoginLink = styled.div`
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

export const FormError = styled.span`
  font-size: ${typography.caption.fontSize};
  color: ${colors.error.main};
  margin-top: 4px;
`;

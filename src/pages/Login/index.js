import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

import Header from '../../components/Header';
import { Container } from '../../styles/GlobaStyles';
import {
  LoginContainer,
  LoginCard,
  LoginTitle,
  LoginForm,
  FormGroup,
  Label,
  Input,
  ForgotPassword,
  SubmitButton,
  Divider,
  SocialLoginButton,
  RegisterLink
} from './styles';

export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de login aqui
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <LoginContainer>
          <LoginCard>
            <LoginTitle>Entrar</LoginTitle>
            
            <LoginForm onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  type="email" 
                  id="email" 
                  placeholder="Seu e-mail" 
                  required 
                />
              </FormGroup>
              
              <FormGroup>
                <Label htmlFor="password">Senha</Label>
                <Input 
                  type="password" 
                  id="password" 
                  placeholder="Sua senha" 
                  required 
                />
              </FormGroup>
              
              <ForgotPassword href="#">Esqueceu sua senha?</ForgotPassword>
              
              <SubmitButton type="submit">Entrar</SubmitButton>
            </LoginForm>
            
            <Divider>
              <span>ou continue com</span>
            </Divider>
            
            <SocialLoginButton type="button">
              <FaGoogle size={18} />
              Google
            </SocialLoginButton>
            
            <SocialLoginButton type="button" style={{ marginTop: '12px' }}>
              <FaFacebook size={18} color="#1877F2" />
              Facebook
            </SocialLoginButton>
            
            <RegisterLink>
              Não tem uma conta? <Link to="/nnlanches-web/register">Cadastre-se</Link>
            </RegisterLink>
          </LoginCard>
        </LoginContainer>
      </Container>
    </Fragment>
  );
}

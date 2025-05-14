import { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaFacebook } from 'react-icons/fa';

import Header from '../../components/Header';
import { Container } from '../../styles/GlobaStyles';
import {
  RegisterContainer,
  RegisterCard,
  RegisterTitle,
  RegisterForm,
  FormRow,
  FormGroup,
  Label,
  Input,
  TermsCheck,
  SubmitButton,
  Divider,
  SocialRegisterButton,
  LoginLink,
  FormError
} from './styles';

export default function Register() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
  });
  
  const [errors, setErrors] = useState({});
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.firstName) newErrors.firstName = 'Nome é obrigatório';
    if (!formData.lastName) newErrors.lastName = 'Sobrenome é obrigatório';
    
    if (!formData.email) {
      newErrors.email = 'E-mail é obrigatório';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'E-mail inválido';
    }
    
    if (!formData.password) {
      newErrors.password = 'Senha é obrigatória';
    } else if (formData.password.length < 6) {
      newErrors.password = 'A senha deve ter pelo menos 6 caracteres';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'As senhas não coincidem';
    }
    
    if (!formData.acceptTerms) {
      newErrors.acceptTerms = 'Você deve aceitar os termos';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validate()) {
      // Implementar lógica de cadastro aqui
      console.log('Formulário válido:', formData);
    }
  };

  return (
    <Fragment>
      <Header />
      <Container>
        <RegisterContainer>
          <RegisterCard>
            <RegisterTitle>Criar sua conta</RegisterTitle>
            
            <RegisterForm onSubmit={handleSubmit}>
              <FormRow>
                <FormGroup>
                  <Label htmlFor="firstName">Nome</Label>
                  <Input 
                    type="text" 
                    id="firstName" 
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="Seu nome" 
                  />
                  {errors.firstName && <FormError>{errors.firstName}</FormError>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="lastName">Sobrenome</Label>
                  <Input 
                    type="text" 
                    id="lastName" 
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Seu sobrenome" 
                  />
                  {errors.lastName && <FormError>{errors.lastName}</FormError>}
                </FormGroup>
              </FormRow>
              
              <FormGroup>
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Seu e-mail" 
                />
                {errors.email && <FormError>{errors.email}</FormError>}
              </FormGroup>
              
              <FormRow>
                <FormGroup>
                  <Label htmlFor="password">Senha</Label>
                  <Input 
                    type="password" 
                    id="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Sua senha" 
                  />
                  {errors.password && <FormError>{errors.password}</FormError>}
                </FormGroup>
                
                <FormGroup>
                  <Label htmlFor="confirmPassword">Confirmar Senha</Label>
                  <Input 
                    type="password" 
                    id="confirmPassword" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="Confirme sua senha" 
                  />
                  {errors.confirmPassword && <FormError>{errors.confirmPassword}</FormError>}
                </FormGroup>
              </FormRow>
              
              <TermsCheck>
                <input 
                  type="checkbox" 
                  id="acceptTerms" 
                  name="acceptTerms"
                  checked={formData.acceptTerms}
                  onChange={handleChange}
                />
                <label htmlFor="acceptTerms">
                  Concordo com os <a href="#">Termos de Serviço</a> e <a href="#">Políticas de Privacidade</a>
                </label>
              </TermsCheck>
              {errors.acceptTerms && <FormError>{errors.acceptTerms}</FormError>}
              
              <SubmitButton type="submit">Criar Conta</SubmitButton>
            </RegisterForm>
            
            <Divider>
              <span>ou registre-se com</span>
            </Divider>
            
            <SocialRegisterButton type="button">
              <FaGoogle size={18} />
              Google
            </SocialRegisterButton>
            
            <SocialRegisterButton type="button" style={{ marginTop: '12px' }}>
              <FaFacebook size={18} color="#1877F2" />
              Facebook
            </SocialRegisterButton>
            
            <LoginLink>
              Já tem uma conta? <Link to="/nnlanches-web/login">Entrar</Link>
            </LoginLink>
          </RegisterCard>
        </RegisterContainer>
      </Container>
    </Fragment>
  );
}

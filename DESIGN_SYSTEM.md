# Design System NN Lanches

Este documento descreve o design system aplicado ao projeto NN Lanches Web, detalhando cores, tipografia, espaçamentos, componentes e outras diretrizes visuais para manter consistência visual em toda a aplicação.

## Índice

1. [Paleta de Cores](#paleta-de-cores)
2. [Tipografia](#tipografia)
3. [Espaçamentos](#espaçamentos)
4. [Formas e Sombras](#formas-e-sombras)
5. [Componentes](#componentes)
6. [Implementação](#implementação)
7. [Próximos Passos](#próximos-passos)

## Paleta de Cores

A paleta principal foi modificada, substituindo o verde original por azul para dar uma nova identidade à marca:

### Cores Primárias

| Nome             | Hex       | Uso                                       |
|------------------|-----------|-------------------------------------------|
| `primary.main`   | `#1976D2` | Cor principal (cabeçalhos, botões primários) |
| `primary.light`  | `#42A5F5` | Variante clara (hover, elementos secundários) |
| `primary.dark`   | `#0D47A1` | Variante escura (botões ativos) |
| `primary.contrastText` | `#FFFFFF` | Texto sobre fundo primário |

### Cores Secundárias

| Nome             | Hex       | Uso                                       |
|------------------|-----------|-------------------------------------------|
| `secondary.main` | `#FF5722` | Cor destaque (promoções, tags) |
| `secondary.light`| `#FF8A65` | Variante clara (preços) |
| `secondary.dark` | `#E64A19` | Variante escura (elementos ativos) |
| `secondary.contrastText` | `#FFFFFF` | Texto sobre fundo secundário |

### Outras Cores

| Nome             | Hex       | Uso                                       |
|------------------|-----------|-------------------------------------------|
| `background.default` | `#F5F5F5` | Fundo da página |
| `background.paper`   | `#FFFFFF` | Fundo de cartões e painéis |
| `text.primary`   | `#212121` | Texto principal |
| `text.secondary` | `#757575` | Texto secundário |
| `error.main`     | `#D32F2F` | Mensagens de erro |
| `success.main`   | `#43A047` | Mensagens de sucesso |

## Tipografia

A família tipográfica principal é Roboto, com as seguintes variantes:

| Estilo       | Tamanho      | Peso         | Uso                          |
|--------------|--------------|--------------|------------------------------|
| `h1`         | `2.5rem`     | `700`        | Títulos principais da página |
| `h2`         | `2rem`       | `700`        | Subtítulos de página |
| `h3`         | `1.75rem`    | `600`        | Títulos de seção |
| `h4`         | `1.5rem`     | `600`        | Subtítulos de seção |
| `h5`         | `1.25rem`    | `600`        | Títulos de cartões |
| `h6`         | `1rem`       | `600`        | Subtítulos menores |
| `body1`      | `1rem`       | `400`        | Texto de parágrafo principal |
| `body2`      | `0.875rem`   | `400`        | Texto secundário |
| `button`     | `0.875rem`   | `500`        | Texto em botões |
| `caption`    | `0.75rem`    | `400`        | Legendas |

## Espaçamentos

O sistema de espaçamento é baseado em múltiplos de 8px:

| Múltiplo     | Valor        | Uso                          |
|--------------|--------------|------------------------------|
| `1x`         | `8px`        | Espaçamento mínimo |
| `2x`         | `16px`       | Espaçamento padrão entre elementos |
| `3x`         | `24px`       | Espaçamento entre seções |
| `4x`         | `32px`       | Espaçamento grande |
| `5x`         | `40px`       | Espaçamento entre blocos maiores |

## Formas e Sombras

### Bordas Arredondadas

| Nome          | Valor        | Uso                          |
|---------------|--------------|------------------------------|
| `small`       | `4px`        | Pequenos elementos como tags |
| `medium`      | `8px`        | Cartões, botões |
| `large`       | `16px`       | Cartões em destaque |
| `circle`      | `50%`        | Elementos circulares |

### Sombras

| Nome          | Valor                             | Uso                          |
|---------------|-----------------------------------|------------------------------|
| `small`       | `0px 2px 4px rgba(0, 0, 0, 0.1)` | Cartões e elementos de UI |
| `medium`      | `0px 4px 8px rgba(0, 0, 0, 0.1)` | Elementos elevados |
| `large`       | `0px 8px 16px rgba(0, 0, 0, 0.1)`| Elementos em destaque |

## Componentes

### Botões

- **Botão Primário**: Utiliza a cor primária principal, com padding de 10px verticalmente e 16px horizontalmente, border-radius médio.
- **Botão Secundário**: Mesmo estilo do botão primário, mas com bordas e sem preenchimento.
- **Botão de Ícone**: Botão circular para ícones, geralmente com dimensões de 36px × 36px.

### Cartões

- **Cartão Padrão**: Background branco, sombra pequena, border-radius médio.
- **Cartão em Destaque**: Background branco, sombra média, border-radius grande, e efeito de hover que eleva o cartão.
- **Cartão de Produto**: Imagem com sobreposição de rodapé contendo informações do produto, preço e avaliação.

### Headers e Navegação

- **Header Principal**: Fundo na cor primária principal, altura de 140px, dividido em duas seções.
- **Navegação por Abas**: Botões de largura igual, cor de fundo primária, destacando a aba ativa.
- **Carousel**: Lista horizontal rolável com elementos de 70px × 70px com border-radius circular.

## Implementação

A implementação do design system será feita em etapas:

1. Criar arquivo `designSystem.js` na pasta `/src/styles`
2. Atualizar `GlobalStyles.js` para usar as novas definições
3. Atualizar componentes individuais para adotar as novas cores e estilos
4. Implementar estilos responsivos para diferentes tamanhos de tela

### Estrutura do arquivo designSystem.js

```javascript
import { css } from 'styled-components';

export const colors = {
  primary: {
    main: '#1976D2',
    light: '#42A5F5',
    dark: '#0D47A1',
    contrastText: '#FFFFFF'
  },
  secondary: {
    main: '#FF5722',
    light: '#FF8A65',
    dark: '#E64A19',
    contrastText: '#FFFFFF'
  },
  // ... outras cores
};

export const typography = {
  fontFamily: `-apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Segoe UI', 'Helvetica Neue', sans-serif`,
  h1: {
    fontSize: '2.5rem',
    fontWeight: 700,
    lineHeight: 1.2
  },
  // ... outros estilos de texto
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
  // ... outros mixins úteis
};

export const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px'
};

export const media = {
  xs: `@media (min-width: ${breakpoints.xs})`,
  sm: `@media (min-width: ${breakpoints.sm})`,
  md: `@media (min-width: ${breakpoints.md})`,
  lg: `@media (min-width: ${breakpoints.lg})`,
  xl: `@media (min-width: ${breakpoints.xl})`
};
```

## Próximos Passos

1. **Criação de Componentes Reutilizáveis**:
   - Botões padronizados
   - Cartões para diferentes contextos
   - Componentes de formulário

2. **Atualização de Páginas**:
   - Home
   - Login/Register
   - Páginas de produtos (Drink e Snack)

3. **Responsividade**:
   - Implementar media queries para adaptação a diferentes dispositivos
   - Testar em diferentes tamanhos de tela

4. **Testes de Acessibilidade**:
   - Verificar contraste de cores
   - Garantir leitura correta por leitores de tela

5. **Documentação de Componentes**:
   - Criar exemplos de uso para cada componente
   - Documentar props e variações

---

Este documento deve ser atualizado conforme o design system evolui. Todas as mudanças devem ser documentadas aqui para manter a consistência em todo o projeto.
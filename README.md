# Meme Generator 🎉

## Descrição
O **Meme Generator** é uma aplicação divertida construída com React.js que permite ao usuário criar seus próprios memes. A aplicação seleciona aleatoriamente uma imagem de uma coleção de memes e permite que o usuário personalize o texto na parte superior e inferior da imagem.

## Funcionalidades
- Seleção aleatória de uma imagem de meme ao clicar no botão "Get a new meme image 🖼".
- Personalização de texto na parte superior (top) e inferior (bottom) do meme.
- O meme gerado é exibido na tela com o texto personalizado inserido pelo usuário.

## Tecnologias Utilizadas
- **React.js**: Biblioteca JavaScript para construção de interfaces de usuário.
- **HTML5/CSS3**: Marcação e estilização da página.
- **JavaScript (ES6+)**: Linguagem de programação para adicionar interatividade.

## Conceitos do React Utilizados
- **useState Hook**: Utilizado para o gerenciamento de estado de dados, como os textos personalizados e a imagem selecionada.
- **useEffect Hook**: Utilizado para simular uma chamada a uma API que retorna dados de memes (utilizamos dados locais devido a problemas de CORS com a API real).
- **Forms Controlados**: Os campos de texto (input) para a personalização do meme são controlados via estado, garantindo que as mudanças sejam atualizadas em tempo real.
- **Manipulação de Eventos**: Funções de callback que são disparadas ao mudar os textos e ao clicar no botão para gerar uma nova imagem.

## Instalação e Uso
1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/meme-generator.git

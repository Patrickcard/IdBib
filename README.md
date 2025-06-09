# IdBib: Gerador de Carteirinhas Digitais para Biblioteca

---

## Sobre o Projeto

O IdBib é uma aplicação web leve e intuitiva desenvolvida para simplificar a criação de carteirinhas digitais de biblioteca. Sua principal função é **integrar informações de códigos de barras (gerados pelo Biblivre) com o design de uma carteirinha pré-definida**, no caso, a da Biblioteca Municipal de Salto de Pirapora.

O objetivo central é **otimizar recursos e promover a sustentabilidade**, eliminando a necessidade de impressão de carteirinhas físicas. As carteirinhas digitais, geradas em formato JPEG, podem ser enviadas diretamente aos usuários, oferecendo praticidade e agilidade no processo de registro e acesso aos serviços da biblioteca.

---

## Funcionalidades

* **Upload de Imagem de Fundo:** Carregue o design base da carteirinha (ex: a imagem da carteirinha da Biblioteca Municipal de Salto de Pirapora).
* **Upload de Imagem Principal:** Insira uma foto adicional (do usuário) que complemente a carteirinha.
* **Integração de Código de Barras (PDF):** Carregue um PDF contendo o código de barras gerado pelo sistema Biblivre. O IdBib extrai e posiciona este código de barras na carteirinha.
* **Campo de Texto Editável:** Adicione textos personalizados (como nome do usuário, número de matrícula, etc.) diretamente na carteirinha.
* **Posicionamento Dinâmico:** Arraste e posicione livremente todos os elementos (código de barras, imagem principal, texto) sobre a imagem de fundo para ajustar o layout.
* **Geração e Download:** Crie uma imagem final da carteirinha em formato JPEG, pronta para ser baixada e enviada ao usuário.

---

## Tecnologias Utilizadas

O IdBib é construído com tecnologias web padrão, garantindo acessibilidade e fácil manutenção:

* **HTML5:** Estrutura fundamental da página.
* **CSS3:** Estilização e design da interface.
* **JavaScript:** Lógica de manipulação de imagens, interatividade e integração com a biblioteca PDF.js.
* **PDF.js:** Biblioteca JavaScript para renderização de arquivos PDF no navegador, essencial para extrair o código de barras.

---

## Como Usar

1.  **Acesse a Aplicação:** Abra o arquivo `index.html` em seu navegador.
2.  **Carregue as Imagens:**
    * Utilize o campo "Imagem de Fundo" para carregar o modelo da carteirinha.
    * Utilize o campo "Imagem Principal" para uma foto adicional, se necessário.
    * Utilize o campo "PDF com Código de Barras" para fazer o upload do PDF gerado pelo Biblivre contendo o código de barras.
3.  **Insira o Texto:** Digite as informações desejadas no campo "Texto".
4.  **Ajuste os Elementos:** Arraste e solte o código de barras, a imagem principal e o texto diretamente no canvas para posicioná-los como desejar.
5.  **Gerar Imagem Final:** Clique no botão "Gerar Imagem Final".
6.  **Baixar:** A imagem final será exibida e um link "Baixar Imagem" aparecerá para download.

---

## Contribuição

Contribuições são bem-vindas! Se você tiver ideias para melhorias ou encontrar algum problema, sinta-se à vontade para abrir uma *issue* ou enviar um *pull request*.

---

## Licença

Livre.

---

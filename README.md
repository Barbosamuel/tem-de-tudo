# Tem de Tudo — site institucional

Site estático (HTML + CSS + JS, sem build) da loja de materiais de construção **Tem de Tudo**, em Três Ranchos-GO.

## Identidade visual

Conceito: **"bancada de obra"** — o site se parece com o balcão de uma ferragem.

| Elemento | Escolha | Por quê |
|---|---|---|
| Amarelo `#ffc20e` | Cor principal | Cor de sinalização de obra: chama atenção e comunica "construção" |
| Grafite `#17191b` | Texto, bordas, fundos escuros | Peso, solidez, contraste alto (leitura ao sol, no celular) |
| Papel `#f3efe6` | Fundo | Remete a lista de materiais / caderno de obra |
| Barlow Condensed | Títulos | Letra de placa industrial, compacta e legível de longe |
| Barlow | Texto | Neutra, boa leitura em telas pequenas |
| Fita métrica | Divisor do topo | Marca visual ligada ao ofício |
| Plaquinhas de corredor | Cards de categorias | Reforça o nome "Tem de Tudo": cada categoria é um corredor |
| Bordas grossas + sombra dura | Botões e cards | Estilo "etiqueta de prateleira", firme e sem frescura |

Decisões de UX para o segmento:
- **WhatsApp como conversão principal** (barra fixa no celular, botões em todas as seções).
- **Montador de lista**: o cliente escreve ou toca nos atalhos e a lista segue pronta no WhatsApp.
- Contraste alto, foco visível, `prefers-reduced-motion`, funciona sem JavaScript (exceto o envio da lista).
- Mobile-first, sem frameworks, carregamento leve.

## Estrutura

```
index.html
assets/
  css/style.css
  js/config.js     ← EDITE AQUI: WhatsApp, Instagram, horários
  js/main.js
  img/favicon.svg
  img/fachada.jpg  ← (opcional) coloque a foto da fachada com esse nome
.github/workflows/pages.yml
```

## ⚠️ Pendências antes de publicar

1. **WhatsApp**: preencher `whatsapp` em `assets/js/config.js` (formato `5564999999999`). Sem isso, os botões levam ao formulário e o envio da lista avisa que não está configurado.
2. **Horário de funcionamento**: preencher `horarios` em `config.js`.
3. **Instagram**: preencher `instagram` em `config.js` (o botão só aparece se houver link).
4. **Foto da fachada**: salvar como `assets/img/fachada.jpg`. Enquanto não existir, aparece um painel de marca no lugar.
5. **Número do endereço**: o site usa **nº 45** (conforme confirmado no projeto). O cadastro público do CNPJ lista **nº 47** — por isso, conferir o pino no mapa após publicar.
6. **Categorias**: "Base e estrutura" e "Hidráulica" correspondem à atividade registrada da empresa (materiais de construção em geral e hidráulicos). Elétrica, tintas, ferragens e reparos são sugestões de mercado — **confirmar com o lojista** e ajustar em `index.html`.
7. **Retirada na loja**: o passo 3 do orçamento fala em retirada. Se a loja entrega, alterar o texto.

## Publicar no GitHub Pages

```bash
git remote add origin https://github.com/<usuario>/tem-de-tudo.git
git push -u origin main
```

No GitHub: **Settings → Pages → Source: GitHub Actions**. O workflow em `.github/workflows/pages.yml` publica a cada push na `main`.

Teste local:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

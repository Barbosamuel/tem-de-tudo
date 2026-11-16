# Tem de Tudo Lago Azul — site institucional

Site estático (HTML + CSS + JS, sem build) da **Tem de Tudo Lago Azul**, agropecuária e ferragista em Três Ranchos-GO.

## Identidade visual

Conceito: **"bancada de obra"** — o site se parece com o balcão de uma ferragem.

| Elemento | Escolha | Por quê |
|---|---|---|
| Azul-índigo `#1f2a7a` | Cor de marca | Tirado da fachada da loja: cabeçalho, plaquinhas, seção de orçamento e rodapé |
| Amarelo `#ffc20e` | Cor de ação | Botões e destaques; contraste forte sobre o azul e sinalização de ferragem |
| Verde `#247a42` | Apoio pontual | Verde da placa, usado só no corredor de agropecuária |
| Grafite-azulado `#12142b` | Texto e bordas | Peso, solidez, contraste alto (leitura ao sol, no celular) |
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
```

## Dados já configurados

WhatsApp, Instagram (@temde_tudolagoazul), horários (seg–sex 7h–18h, sáb 7h–12h) e a informação de entrega (somente Três Ranchos-GO) vieram do cadastro da própria loja. Edite em `assets/js/config.js`.

## ⚠️ Pendências

1. **Mapa**: o cartão da seção "Onde estamos" abre o link oficial da loja (https://maps.app.goo.gl/Zq46HJdVCuTLz5pq8), então o pino é o correto. Para voltar a ter mapa incorporado, usar Compartilhar → Incorporar um mapa no Google Maps e colocar o `<iframe>` no lugar do cartão (`.map--card` em `index.html`).
2. **Detalhes dos corredores**: os seis corredores (Agropecuária, Ferragista, Materiais elétricos, Peças de moto, Óleo em geral, Produtos para piscina) vêm da placa da fachada. As etiquetas dentro de cada card são genéricas — **confirmar com o lojista** e trocar por produtos reais em `index.html`.
3. **Logo da loja**: o site usa uma marca própria (T-régua amarela). Se a loja quiser usar o logo da fachada, enviar o arquivo original.

## Tema alternativo (teste)

`/v2/` é uma segunda versão do visual ("pôr do sol no lago": cabeçalho em vidro, hero com gradiente de entardecer, ondas no lugar da régua, cards e botões arredondados). Usa os mesmos `config.js` e `main.js`, então os dados da loja valem para as duas. Para adotar, mover o conteúdo de `v2/` para a raiz e ajustar os caminhos `../assets/`.

## Tema v3 (com movimento)

`/v3/` é o v2 com motion design: sol que se põe ao carregar e afunda ao rolar, estrelas piscando e estrela cadente, ondas em loop, título que sobe palavra por palavra, foto da fachada flutuando, faixa de categorias em movimento, cards com inclinação 3D e ícones animados no hover, botão de WhatsApp com pulso, barra de progresso de leitura e pino do mapa quicando. Respeita `prefers-reduced-motion` (quem desativa animações no aparelho vê a página parada). Arquivos próprios: `v3/style.css` e `v3/motion.js`; usa os mesmos `config.js` e `main.js`.

## Publicar no GitHub Pages

No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.

O site fica em `https://<usuario>.github.io/tem-de-tudo/` e é atualizado a cada push na `main` (leva 1 a 2 minutos). O arquivo `.nojekyll` já está no projeto.

Teste local:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

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
```

## Dados já configurados

WhatsApp, Instagram (@temde_tudolagoazul), horários (seg–sex 7h–18h, sáb 7h–12h) e a informação de entrega (somente Três Ranchos-GO) vieram do cadastro da própria loja. Edite em `assets/js/config.js`.

## ⚠️ Pendências

1. **Foto da fachada**: salvar como `assets/img/fachada.jpg`. Enquanto não existir, aparece um painel de marca no lugar.
2. **Mapa incorporado**: usa o endereço (nº 45). O botão "Abrir no Google Maps" usa o link oficial da loja. Se o pino do mapa incorporado ficar errado, trocar o `src` do iframe pelo código "Incorporar" do Google Maps.
3. **Categorias**: "Base e estrutura" e "Hidráulica" correspondem à atividade registrada da empresa. Elétrica, tintas, ferragens e reparos são sugestões — **confirmar com o lojista** e ajustar em `index.html`.

## Publicar no GitHub Pages

No GitHub: **Settings → Pages → Build and deployment → Source: Deploy from a branch → Branch: `main` / `(root)` → Save**.

O site fica em `https://<usuario>.github.io/tem-de-tudo/` e é atualizado a cada push na `main` (leva 1 a 2 minutos). O arquivo `.nojekyll` já está no projeto.

Teste local:

```bash
python3 -m http.server 8000
# abrir http://localhost:8000
```

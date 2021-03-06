module.exports = {
    document: (node) => `<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <link href="./asciidoctor.css" rel="stylesheet">
  <link href="./slides.css" rel="stylesheet">
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/styles/github.min.css">
  <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/9.13.1/highlight.min.js"></script>
  <script>
  hljs.initHighlightingOnLoad();
  </script>
  </head>
  <body>
  <section class="slide" id="title-slide">
  <h1>${node.getDocumentTitle()}</h1>
  <h2><a href="https://compscicenter.ru">compscicenter.ru</a></h2>
  <h2>${node.getDocument().getAttribute('email')}</h2>
  </section>
  <section class="slide" id="title-slide">
      <h1>${node.getAttribute('lecture')}</h1>
  </section>
  ${node.getContent()}
  </body>`,

    section: (node) => `
  <section class="slide ${node.getRoles()} ${node.getTitle() == '!' ? 'no-title' : ''}">
    <h2>${node.getTitle()}</h2>
    <div class='slide-content'>
      ${node.getContent()}
    </div>
    <footer>
    <p class="small">${node.index + 1} / ${node.parent.blocks.length}</p>
    </footer>
  </section>`,

    paragraph: (node) => `<p class="${node.getRoles().join(" ")}">${node.getContent()}</p>`,

    image: (node) => `<img class="image ${node.getRoles()}" src="${node.getImageUri(node.getAttribute('target'))}"/>`
}

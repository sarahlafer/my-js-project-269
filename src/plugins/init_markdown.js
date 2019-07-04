import {markdown} from 'markdown';

const initMarkdown = () => {
  const textarea = document.querySelector("#editor");
  const preview = document.querySelector("#preview");
  textarea.addEventListener('keyup', (event) => {
    const html = markdown.toHTML(textarea.value);
    preview.innerHTML = html;
  });
};

export { initMarkdown };

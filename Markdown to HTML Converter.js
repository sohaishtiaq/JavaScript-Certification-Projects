const markdownInput = document.querySelector("#markdown-input");
const htmlOutput = document.querySelector("#html-output");
const preview = document.querySelector("#preview");

function convertMarkdown() {
  let markdown = markdownInput.value;

  markdown = markdown.replace(
    /^\s*### (.+)$/gm,
    "<h3>$1</h3>"
  );

  markdown = markdown.replace(
    /^\s*## (.+)$/gm,
    "<h2>$1</h2>"
  );

  markdown = markdown.replace(
    /^\s*# (.+)$/gm,
    "<h1>$1</h1>"
  );

  markdown = markdown.replace(
    /!\[([^\]]*)\]\(([^)]+)\)/g,
    '<img alt="$1" src="$2">'
  );

  markdown = markdown.replace(
    /\[([^\]]+)\]\(([^)]+)\)/g,
    '<a href="$2">$1</a>'
  );

  markdown = markdown.replace(
    /\*\*(.+?)\*\*|__(.+?)__/g,
    "<strong>$1$2</strong>"
  );

  markdown = markdown.replace(
    /\*(.+?)\*|_(.+?)_/g,
    "<em>$1$2</em>"
  );

  markdown = markdown.replace(
    /^\s*&gt; (.+)$|^\s*> (.+)$/gm,
    "<blockquote>$1$2</blockquote>"
  );

  return markdown;
}

markdownInput.addEventListener("input", () => {
  const html = convertMarkdown();

  htmlOutput.innerText = html;
  preview.innerHTML = html;
});

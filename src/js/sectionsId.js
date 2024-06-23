import { addNavItemHTML } from "./navigation";

const mainEl = document.querySelector("main");

for (const child of mainEl.children) {
  const id = child.classList[0];
  if (id !== "sidebar") {
    child.setAttribute("id", id);
    addNavItemHTML(id);
  }
}

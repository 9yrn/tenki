export function searchUI(onSearch) {
  const searchForm = document.createElement("form");
  searchForm.setAttribute("id", "searchForm");

  const input = document.createElement("input");
  input.type = "text";
  input.placeholder = "search location...";

  const button = document.createElement("button");
  button.type = "submit";
  button.textContent = "Search";

  searchForm.appendChild(input);
  searchForm.appendChild(button);

  searchForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const location = input.value.trim();

    if (!location) {
      return;
    }

    onSearch(location);
  });

  return searchForm;
}

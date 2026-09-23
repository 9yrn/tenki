import "./style.css";

import { searchUI } from "./ui/searchUI";

const searchContainer = document.getElementById("search-container");

function testSearch(location) {
  console.log("user entered: ", location);
}

const searchForm = searchUI(testSearch);

searchContainer.appendChild(searchForm);

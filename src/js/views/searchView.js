import View from './View.js';

class SearchView extends View {
  #parentElement = document.querySelector('.search');

  #clearInput() {
    this.#parentElement.querySelector('.search__field').value = '';
  }

  getSearchFieldQuery() {
    const query = this.#parentElement.querySelector('.search__field').value;
    this.#clearInput();
    return query;
  }

  addHandlerSearch(handler) {
    this.#parentElement.addEventListener('submit', function (e) {
      e.preventDefault();
      handler();
    });
  }
}

export default new SearchView();

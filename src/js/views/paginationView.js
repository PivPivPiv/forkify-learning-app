import View from './View.js';
import icons from 'url:../../img/icons.svg';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  _generateMarkup() {
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerPage
    );
    console.log(numPages);

    //1. Page 1 and there are other pages
    if (this._data.page === 1 && numPages > 1)
      return this.#generateMarkupNext();

    //1. Page 1 and there are NO other pages
    if (this._data.page === 1 && numPages === 1) return '';

    //1. Last page
    if (this._data.page === numPages && numPages > 1)
      return this.#generateMarkupPrew();

    //1. Other pages
    if (this._data.page < numPages)
      return ` ${this.#generateMarkupPrew()}
          ${this.#generateMarkupNext()}`;
  }

  #generateMarkupNext() {
    return `
    <button data-goto='${
      this._data.page + 1
    }' class="btn--inline pagination__btn--next">
        <span>Page ${this._data.page + 1} </span>
        <svg class="search__icon">
          <use href="${icons}#icon-arrow-right"></use>
        </svg>
    </button>`;
  }
  #generateMarkupPrew() {
    return ` <button  data-goto='${
      this._data.page - 1
    }' class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${this._data.page - 1}</span>
          </button>`;
  }

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');
      if (!btn) return;
      const goToPage = +btn.dataset.goto;

      handler(goToPage);
    });
  }
}

export default new PaginationView();

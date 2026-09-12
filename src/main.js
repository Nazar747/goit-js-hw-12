import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  clearGallery,
  createGallery,
  hideLoader,
  hideLoadMoreButton,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';

const form = document.querySelector('.form');
const loadMore = document.querySelector('.load-more');
const perPage = 15;
let query = '';
let page = 1;

form.addEventListener('submit', handlerSubmit);
loadMore.addEventListener('click', handlerLoadMore);

async function handlerSubmit(event) {
  event.preventDefault();
  page = 1;

  query = event.target.elements['search-text'].value.trim();
  if (query === '') {
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);
    if (hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        pauseOnHover: false,
      });
      return;
    }

    createGallery(hits);
    if (page * perPage < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
        pauseOnHover: false,
      });
    }
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
      pauseOnHover: false,
    });
  } finally {
    hideLoader();
    event.target.reset();
  }
}

async function handlerLoadMore() {
  page++;

  showLoader();
  hideLoadMoreButton();

  try {
    const { hits, totalHits } = await getImagesByQuery(query, page);
    createGallery(hits);
    if (page * perPage < totalHits) {
      showLoadMoreButton();
    } else {
      iziToast.info({
        message: `We're sorry, but you've reached the end of search results.`,
        position: 'topRight',
        pauseOnHover: false,
      });
    }

    let photoContainer = document.querySelector('.photo-container');
    let photoContainerHeight = photoContainer.getBoundingClientRect().height;
    window.scrollBy({
      left: 0,
      top: photoContainerHeight * 2,
      behavior: 'smooth',
    });
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: error.message,
      position: 'topRight',
      pauseOnHover: false,
    });
  } finally {
    hideLoader();
  }
}

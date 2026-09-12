import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const loadMore = document.querySelector('.load-more');

export function createGallery(images) {
  const photo = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<div class="photo-container">
            <a href="${largeImageURL}">
              <img src="${webformatURL}" alt="${tags}" class="photo"/>
            </a>
            <ul class="description-list">
              <li class="description">
                <h2 class="title">Likes</h2>
                <p>${likes}</p>
              </li>
              <li class="description">
                <h2 class="title">Views</h2>
                <p>${views}</p>
              </li>
              <li class="description">
                <h2 class="title">Comments</h2>
                <p>${comments}</p>
              </li>
              <li class="description">
                <h2 class="title">Downloads</h2>
                <p>${downloads}</p>
              </li>
            </ul>
          </div>`;
      }
    )
    .join('');

  gallery.insertAdjacentHTML('beforeend', photo);
  lightbox.refresh();
}

export function clearGallery() {
  gallery.innerHTML = '';
}

export function showLoader() {
  loader.classList.remove('hidden');
}

export function hideLoader() {
  loader.classList.add('hidden');
}

export function showLoadMoreButton() {
  loadMore.classList.remove('hidden');
}

export function hideLoadMoreButton() {
  loadMore.classList.add('hidden');
}

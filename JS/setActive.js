function setActive() {
    const characterInfo = cardElement.querySelector(
        '[data-js="character-infos"]'
      );
      const listButton = cardElement.querySelector('[data-js="listButton"]');
      const characterHeader = cardElement.querySelector(
        '[data-js="character"]'
      );
      const characterImage = cardElement.querySelector(
        '[data-js="character__image"]'
      );

      listButton.addEventListener('click', () => {
        listButton.classList.toggle('card__element--active');
        characterHeader.classList.toggle('cards__character--active');
        characterImage.classList.toggle('cards__image--active');
        characterImage.classList.toggle('cards__container-image');
        characterInfo.toggleAttribute('hidden');
      });
      const bookmark = cardElement.querySelector('[data-js="bookmark"]');
        bookmark.addEventListener('click', () => {
        character.isBookmarked = !character.isBookmarked;
        bookmark.classList.toggle('cards__bookmark-button--active');
      });

}

export default setActive;

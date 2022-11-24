export default function initMap() {
  const ymaps = window.ymaps;
  if (ymaps) {
    ymaps.ready(function () {
      const myMap = new ymaps.Map('map',
          {center: [59.968137, 30.316272], zoom: 17},
          {searchControlProvider: 'yandex#search'}
      );

      const myPlacemark = new ymaps.Placemark(
          myMap.getCenter(),
          {hintContent: 'Собственный значок метки', balloonContent: 'Санкт-Петербург, набережная реки Карповки, дом 5'},
          {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/svg/icon-pin.svg',
            // Размеры метки.
            iconImageSize: [38, 50],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [0, 0],
          }
      );

      myMap.geoObjects.add(myPlacemark);
    });
  }
}

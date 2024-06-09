const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  }
];




// Отримуємо батьківський елемент галереї
const gallery = document.querySelector('.gallery');

// Створюємо фрагмент для зберігання створених елементів
const fragment = document.createDocumentFragment();

// Проходимося по кожному об'єкту у масиві images
images.forEach(image => {
  // Створюємо елемент <li>
  const listItem = document.createElement('li');
  
  // Створюємо елемент <img>
  const img = document.createElement('img');
  img.src = image.url;
  img.alt = image.alt;
  img.style.width = '360px';
  img.style.height = '300px';
  img.style.margin = '16px';
  img.style.listStyle = 'none';
  // Додаємо <img> в <li>
  listItem.appendChild(img);
  
  // Додаємо <li> в фрагмент
  fragment.appendChild(listItem);
});

// Додаємо фрагмент з усіма <li> в галерею за одну операцію
gallery.appendChild(fragment);
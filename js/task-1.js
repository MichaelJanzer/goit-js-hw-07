// Отримуємо елемент ul#categories
const categoriesList = document.getElementById('categories');

// Отримуємо список всіх елементів li з класом "item"
const categoriesItems = categoriesList.querySelectorAll('.item');

// Виводимо кількість категорій в консоль
console.log('Number of categories:', categoriesItems.length);

// Проходимося по кожному елементу li.item
categoriesItems.forEach(item => {
  // Отримуємо заголовок (h2) кожної категорії
  const categoryTitle = item.querySelector('h2').textContent;
  // Отримуємо список всіх підкатегорій (li) у даній категорії
  const subcategories = item.querySelectorAll('ul li');
  // Виводимо текст заголовка і кількість підкатегорій у консоль
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${subcategories.length}`)
});



const categoriesList = document.getElementById('categories');


const categoriesItems = categoriesList.querySelectorAll('.item');


console.log('Number of categories:', categoriesItems.length);


categoriesItems.forEach(item => {
  
  const categoryTitle = item.querySelector('h2').textContent;
 
  const subcategories = item.querySelectorAll('ul li');
  
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${subcategories.length}`)
});


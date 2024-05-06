
//перевірка підключеного файлу скриптів
console.log('Перевірка підключеного файлу скрипту market.js')

//Отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items")

//Вивід знайдкного елементу
console.log(itemsDiv)

//Перевірка існування знайденого блоку
if (itemsDiv) {
    //Вивід знайденого елементу
    console.log(itemsDiv)

    //Вивід значення поля знайденого елементу
    // console.log('Поле classList:', itemsDiv.classList)
    // console.log('Поле id:', itemsDiv.id)
    // console.log('Поле clientWidth:', itemsDiv.clientWidth)
    // console.log('Поле innerHTML:', itemsDiv.innerHTML)

    //Додавання тексту в блок
    // itemsDiv.innerHTML = 'Перший Програмно доданий текст'
    // // itemsDiv.innerHTML = 'Другий Програмно доданий текст'
    // itemsDiv.innerHTML += 'Другий Програмно доданий текст'
    //Додавання відформатованого HTML коду в блок
    // itemsDiv.innerHTML = '<div  class = item></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    // itemsDiv.innerHTML += '<div  class = "item"></div>'
    for(let i = 0; i < 50; i++) {
        itemsDiv.innerHTML += '<div class="item"></div>'
        console.log('item')
    }

} else {
    //Вивід знайденого елементу
    console.log('Блок товарів не знайдено')
}
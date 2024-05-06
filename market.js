
//перевірка підключеного файлу скриптів
console.log('перевірка підключеного файлу скрипту market.js')

//отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById("items")

//вивід знайдкного елементу
console.log(itemsDiv)

//перевірка існування знайденого блоку
if (itemsDiv) {
    //вивід знайденого елементу
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
    for(let i = 0; i < 100; i++) {
        itemsDiv.innerHTML += '<div class="item"></div>'
        console.log('item')
    }

} else {
    //вивід знайденого елементу
    console.log('блок товарів не знайдено')
}
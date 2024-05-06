
// перевірка підключеного файлу скриптів
console.log('перевірка підключеногго файлу скриптів market.js')

//  отримання елементу з ідентифікатором items
let itemsDiv = document.getElementById('items');


//перевірка існування знайденого блоку
if (itemsDiv) {
    //вивід знайденого елементу
    console.log(itemsDiv)
    // // вивід значення поля знайденого елементу
    // console.log('поле classList:', itemsDiv.classList )
    // console.log('поле id:', itemsDiv.id)
    // console.log('поле clientWidth', itemsDiv.clientWidth)
    // console.log('поле innerHTML:', itemsDiv.innerHTML)

    // //додавання тексту в блок
    // itemsDiv.innerText = ' перший програмно доданий текст '
    // itemsDiv.innerText += ' другий програмно доданий текст '
    // додавання відформатованого HTML коду в блок
    // itemsDiv.innerHTML += '<div> class = "item"</div>'
    // itemsDiv.innerHTML += '<div> class = "item"</div>'
    // itemsDiv.innerHTML += '<div> class = "item"</div>'
    // itemsDiv.innerHTML += '<div> class = "item"</div>'
    for (let i = 0; i < 100; i++) {
        itemsDiv.innerHTML += '<di class = "items"></div>'
    }




} else {
    // вивід повідомлення про не знайдений блок
    console.log( 'блок товарів не знайдено')
}

let input = document.getElementById("input");
let container = document.getElementById("container");

let data = [
    { id: 1, name: "Salada Ravanello", desc: "Rabanetes, folhas verdes...", price: "49,97" },
    { id: 2, name: "Spaguetti Gambe", desc: "Massa fresca com camarões...", price: "79,97" },
    { id: 1, name: "Salada Ravanello", desc: "Rabanetes, folhas verdes e molho agridoce.", price: "49,97", img: "img/ravanello.png", category: "Refeições" },
  { id: 2, name: "Spaguetti Gambe", desc: "Massa fresca com camarões e pesto.", price: "79,97", img: "img/gambe.png", category: "Refeições" },
  { id: 3, name: "Torradas de Parma", desc: "Presunto de parma e rúcula em pão artesanal.", price: "25,97", img: "img/parma.png", category: "Refeições" },
  { id: 4, name: "Filet de Salmon", desc: "Salmão grelhado com legumes ao vapor.", price: "85,50", img: "img/salmon.png", category: "Refeições" },
  { id: 5, name: "Risotto de Cogumelos", desc: "Arroz arbóreo com mix de cogumelos frescos.", price: "64,00", img: "img/risotto.png", category: "Refeições" },
  { id: 6, name: "Lasagna Clássica", desc: "Massa artesanal com ragu de carne e queijo.", price: "55,90", img: "img/lasagna.png", category: "Refeições" },
  { id: 7, name: "Frango Assado", desc: "Frango marinado com ervas e batatas.", price: "42,00", img: "img/frango.png", category: "Refeições" },

  { id: 8, name: "Prugna Pie", desc: "Torta de ameixa com massa amanteigada.", price: "79,97", img: "img/prugna.png", category: "Sobremesas" },
  { id: 9, name: "Peachy Pastry", desc: "Delicioso folheado de pêssego com hortelã.", price: "32,97", img: "img/peachy.png", category: "Sobremesas" },
  { id: 10, name: "Macarons", desc: "Farinha de amêndoas, manteiga, claras e açúcar.", price: "79,97", img: "img/macarons.png", category: "Sobremesas" },
  { id: 11, name: "Bolo de Damasco", desc: "Damascos frescos com calda de mel e nozes.", price: "19,90", img: "img/damasco.png", category: "Sobremesas" },
  { id: 12, name: "Petit Gâteau", desc: "Bolinho de chocolate com sorvete de baunilha.", price: "28,00", img: "img/petit.png", category: "Sobremesas" },
  { id: 13, name: "Tiramisu", desc: "Clássica sobremesa italiana com café e cacau.", price: "35,00", img: "img/tiramisu.png", category: "Sobremesas" },
  { id: 14, name: "Cheesecake", desc: "Torta de queijo com calda de frutas vermelhas.", price: "30,50", img: "img/cheesecake.png", category: "Sobremesas" },

  { id: 15, name: "Espresso", desc: "Café cremoso feito na temperatura perfeita.", price: "15,97", img: "img/espresso.png", category: "Bebidas" },
  { id: 16, name: "Suco de Maracujá", desc: "Suco de maracujá gelado, cremoso e docinho.", price: "13,97", img: "img/maracuja.png", category: "Bebidas" },
  { id: 17, name: "Tè d'autunno", desc: "Chá de anis, canela e limão gelado.", price: "19,97", img: "img/tea.png", category: "Bebidas" },
  { id: 18, name: "Limonada Suíça", desc: "Limão siciliano batido com leite condensado.", price: "12,50", img: "img/limonada.png", category: "Bebidas" },
  { id: 19, name: "Vinho Tinto", desc: "Taça de vinho seco de uvas selecionadas.", price: "45,00", img: "img/vinho.png", category: "Bebidas" },
  { id: 20, name: "Água com Gás", desc: "Água mineral gaseificada com rodela de limão.", price: "06,00", img: "img/agua.png", category: "Bebidas" }
    

];


function render(foods){
    container.innerHTML = foods.map(food =>`
        <div class="card">
       <img src="https://picsum.photos/id/${food.id + 10}/200/200" alt="food">
       <h3>${food.name}</h3>
       <p>${food.desc}</p>
       <a href="#">${food.price}</a>
       <div class="stepper">
        <button class="btn-dec" data-id="${food.id}">-</button>
                <h1 id="count-${food.id}">0</h1>
                <button class="btn-inc" data-id="${food.id}">+</button>
                <button class="add-btn">bosing</button>
       </div>

</div>
        `).join("");
}

container.addEventListener("click",(у) =>{
    const id = e.target.getAttribute("data-id");
    if (!id) return

    const countElement = document.getElementById(`count-${id}`);
    let currentCount = perseInt(countElement.innerText);

    if (e.target.classList.contains("btn-inc")){
        currentCount++;

    }else if(e.target.classList.contains("btn-dec")){
        if (currentCount > 0) currentCount--;

        countElement.innerText = currentCount.toString().padStart(2 , "0");
    }
});

input.addEventListener("input",(e) =>{
    let text = e.target.value.toLowerCase();
    let filteredFoods = data.filter(food =>
        food.name.toLowerCase().includes(text) ||
        food.desc.toLowerCase().includes(text)
    );
    render(filteredFoods)
});
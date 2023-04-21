function createId() {
    // trả về một chuỗi ngẫu nhiên gồm 12 ký tự: 0-9a-zA-Z;
    const characters = [
        "A",
        "B",
        "C",
        "D",
        "E",
        "F",
        "G",
        "H",
        "I",
        "J",
        "K",
        "L",
        "M",
        "N",
        "O",
        "P",
        "Q",
        "R",
        "S",
        "T",
        "U",
        "V",
        "W",
        "X",
        "Y",
        "Z",
        "a",
        "b",
        "c",
        "d",
        "e",
        "f",
        "g",
        "h",
        "i",
        "j",
        "k",
        "l",
        "m",
        "n",
        "o",
        "p",
        "q",
        "r",
        "s",
        "t",
        "u",
        "v",
        "w",
        "x",
        "y",
        "z",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
    ];
    let length = 12;
    let charactersLength = characters.length;
    let result = "";
    for (let i = 0; i < length; i++) {
        let idx = Math.floor(Math.random() * charactersLength);
        result += characters[idx];
    }
    return result;
}

const products = [
    {
        id: 1,
        name: "Fushigidane",
        thumb: "img/Fushigidane.png",
        shortDesc: "Người ta thường thấy Fushigidane nằm ngủ dưới ánh nắng. Càng đắm mình trong nắng, hạt giống trên lưng chúng càng phát triển.",
        price: 12,
        priceInner: "12",
        quantity: 1,
        added: false,
    },
    {
        id: 2,
        name: "Hitokage",
        thumb: "img/Hitokage.png",
        shortDesc: "Tính cách ưa thích đồ nóng. Nghe nói khi trời mưa khói sẽ phụt ra từ đuôi của nó.",
        price: 15,
        priceInner: "15",
        quantity: 1,
        added: false,
    },
    {
        id: 3,
        name: "Zenigame",
        thumb: "img/Zenigame.png",
        shortDesc:
            "Chiếc mai của Zenigame không chỉ để tự vệ, mà còn làm giảm tối đa lực cản nước nhờ hình dáng tròn trịa cùng bề mặt nhiều rãnh, giúp chúng bơi nhanh hơn.",
        price: 25,
        priceInner: "25",
        quantity: 1,
        added: false,
    },
    {
        id: 4,
        name: "Pikachu",
        thumb: "img/Pikachu.png",
        shortDesc: "Những Pikachu có thể tạo ra dòng điện càng mạnh thì túi má càng mềm mại và lớn nhanh.",
        price: 32,
        priceInner: "32",
        quantity: 1,
        added: false,
    },
    {
        id: 5,
        name: "Purin",
        thumb: "img/Purin.png",
        shortDesc:
            "Những bản thu âm tuyển tập bài hát ru kì lạ của Purin được bán tại các cửa hàng tạp hóa. Rất nhiều người coi chúng là vật gối đầu giường.",
        price: 9,
        priceInner: "9",
        quantity: 1,
        added: false,
    },
];

let carts = [
    {
        id: "qhZ2wNwZZW63",
        productId: "hBuZdx1elR5a",
        quantity: 2,
    },
    {
        id: "gijYjCti3BvR",
        productId: "fDQWzrgq6gXX",
        quantity: 1,
    },
    {
        id: "RQpImf7zc8ao",
        productId: "aLjNSdeJi9Q2",
        quantity: 3,
    },
    {
        id: "LPobAEvux29H",
        productId: "rOYIHlZQlwdV",
        quantity: 6,
    },
    {
        id: "PpLjmYoKdRG1",
        productId: "zzC3HkWp9g4s",
        quantity: 1,
    },
];

// console.log(productForm);
const productForm = document.querySelector(".card-body");
function renderProduct(products) {
    productForm.innerHTML = "";
    // console.log(productForm);
    products.forEach((product) => {
        productForm.innerHTML += `
                <div class="row align-items-center">
                    <div class="col-6 col-md-4">
                        <img src="${product.thumb}" alt="" class="img-fluid" />
                    </div>
                    <div class="col-6 col-md-8">
                        <h6>${product.name}</h6>
                        <div class="form-group">
                            <div class="d-flex">
                                <button onclick="minus(${product.id})" class="btn btn-primary">-</button>
                                <input id="quantity-${product.id}" type="text" class="form-control mx-1" value="${product.quantity}" />
                                <button onclick="plus(${product.id},products)" class="btn btn-primary">+</button>
                            </div>
                            <button class="btn btn-danger btn-block mt-1 btn-add-to-cart " onclick="addProduct(${product.id})">
                                <span>$</span> <b id="price-${product.id}">${product.priceInner}</b>
                            </button>
                        </div>
                    </div>
                </div>
            `;
    });
}
const cardInner = document.querySelector(".cardiner");
const indexCountTotal = document.querySelector("#count");
function renderCart(products) {
    const cards = products.filter((card) => card.added == true);
    cardInner.innerHTML = "";
    let index = 0;
    cards.forEach((card) => {
        let number = ++index;
        cardInner.innerHTML += `<thead class="bg-light">
    <tbody id="cardProducts">
        <tr>
            <td>${number}</td>
            <td>${card.name}</td>
            <td>${card.price}</td>
            <td>
                <input id="number-${card.id}" type="number" class="form-control" value="${card.quantity}" />
            </td>
            <td><span class="fw-bold">$<b>${card.priceInner}</b></span></td>
            <td>
                <button type="button" class="btn btn-link btn-sm btn-rounded" onclick= "update(${card.id})">Update</button>
                <button type="button" class="btn btn-link btn-sm btn-rounded" onclick= "remove(${card.id})" >Delete</button>
            </td>
        </tr>
        <tr></tr>
    </tbody>
   `;
    });
}

function plus(id) {
    const product = products.find((p) => p.id === id);
    console.log(product);
    product.quantity++;
    product.priceInner = product.quantity * product.price;
    renderProduct(products);
}

function minus(id) {
    const product = products.find((p) => p.id === id);
    if (product.quantity > 1) {
        product.quantity--;
        product.priceInner = product.quantity * product.price;
        renderProduct(products);
    }
}

function addProduct(id) {
    const product = products.find((p) => p.id === id);
    product.added = true;
    renderCart(products);
    // renderProduct(products);
}
function update(id) {
    const product = products.find((p) => p.id === id);
    console.log(product);
    const quantityCard = document.querySelector(`#number-${product.id}`);
    product.priceInner = quantityCard.value * product.price;
    product.quantity = quantityCard.value;
    totalPrice();
    totalIndex();
    renderProduct(products);
    renderCart(products);
}
const total = document.querySelector("#toTal b");
function totalPrice() {
    const cartProducts = products.filter((product) => product.added);
    let totalPrice = cartProducts.reduce((total, product) => total + parseInt(product.priceInner), 0);
    total.innerHTML = totalPrice;
}

function totalIndex() {
    const cartProducts = products.filter((product) => product.added == true);
    indexCountTotal.innerHTML = cartProducts.length;
}
function remove(id) {
    const product = products.find((p) => p.id === id);
    console.log(product);
    product.added = false;
    totalPrice();
    totalIndex();

    product.priceInner = product.price;
    product.quantity = 1;
    renderProduct(products);
    renderCart(products);
}
renderProduct(products);

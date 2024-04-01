import { MagnifyingGlass, ShoppingCartSimple } from "@phosphor-icons/react";
const products = [
  {
    image: "./images/iphone-15-pro.jpg",
    name: "Smartfon APPLE iPhone 15 Pro 256GB",
    price: 5757,
  },
  {
    image: "./images/iphone-15.jpg",
    name: "Smartfon APPLE iPhone 15 128GB",
    price: 3754,
  },
  {
    image: "./images/sluchawki-apple.jpg",
    name: "Słuchawki nauszne APPLE Airpods Max",
    price: 2569,
  },
  {
    image: "./images/xbox.jpg",
    name: "Konsola MICROSOFT XBOX Series X",
    price: 2099,
  },
  {
    image: "./images/playstation-5.jpg",
    name: "Konsola SONY PlayStation 5 Slim",
    price: 2689,
  },
  {
    image: "./images/sluchawki-sony.jpg",
    name: "Słuchawki nauszne SONY WH-1000XM5B ANC",
    price: 1699,
  },
];

export default function App() {
  return (
    <div>
      <Header />
      <Products />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className="logo">Sklep Online</h1>

      <div className="search">
        <form>
          <input type="text" placeholder="Szukaj..."></input>
          <button type="submit">
            <MagnifyingGlass />
          </button>
        </form>
      </div>
      <ShoppingCartSimple className="cart-icon" />
    </header>
  );
}

function Products() {
  return (
    <div className="products-container">
      <div className="products">
        {products.map((product) => (
          <Product
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}{" "}
      </div>
    </div>
  );
}

function Product({ image, name, price }) {
  return (
    <div className="product">
      <img src={image} alt={name} className="product-img"></img>
      <span className="product-name">{name}</span>
      <span className="product-price">{price} zł</span>
      <button className="product-btn">Do koszyka</button>
    </div>
  );
}

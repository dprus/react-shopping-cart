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
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="icon"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
        />
      </svg>
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

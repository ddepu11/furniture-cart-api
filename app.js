const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log("Server Is Runing on Port: " + PORT);
});

app.use(morgan("dev"));
app.use(cors());

const cart = [
  {
    id: Math.floor(Math.random() * 135),
    title: "Chair",
    price: 400,
    howMany: 1,
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/11/19/15/50/chair-1840011_960_720.jpg",
  },
  {
    id: Math.floor(Math.random() * 135),
    title: "Vintage TV",
    price: 2500,
    howMany: 1,
    imgSrc:
      "https://cdn.pixabay.com/photo/2016/01/01/13/56/vintage-tv-1116587_960_720.jpg",
  },
  {
    id: Math.floor(Math.random() * 135),
    title: "AMD Ryzen 7",
    price: 40000,
    howMany: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1611275485157-6e6335aa97e3?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",
  },
  {
    id: Math.floor(Math.random() * 135),
    title: "8 Gb Ram",
    price: 1200,
    howMany: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1542978709-19c95dc3bc7e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1867&q=80",
  },
  {
    id: Math.floor(Math.random() * 135),
    title: "Corsair Mouse",
    price: 2000,
    howMany: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1047&q=80",
  },
  {
    id: Math.floor(Math.random() * 135),
    title: "240 gb SSD",
    price: 2800,
    howMany: 1,
    imgSrc:
      "https://images.unsplash.com/photo-1518547606470-00ac2ae882af?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1834&q=80",
  },
];

app.get("/", (req, res) => {
  res.json({ ok: true, cart });
});


    const products = [
      {
        title: "Sneakers X200",
        price: 89.99,
        image: "https://www.stilettoshop.eu/storage/product_images/1/tuotesivu_BjornBorgTennaritX200Lowsininen_128441_2c36a773def773a912c659effaff6e9c_1.jpg",
        category: "fashion"
      },
      {
        title: "Smart Watch",
        price: 149.99,
        image: "https://lapntabmart.pk/wp-content/uploads/2024/07/Telzeal-TC4G-Android-Ultra-Smart-Watch.webp",
        category: "electronics"
      },
      {
        title: "Backpack",
        price: 49.99,
        image: "https://www.slam.com/cdn/shop/files/A463006S00_W01_BACKPACK_F_ACC_016_13148.webp?v=1710245242&width=1946",
        category: "accessories"
      },
      {
        title: "Wireless Earbuds",
        price: 39.99,
        image: "https://cdn.thewirecutter.com/wp-content/media/2022/11/wirelessearbuds-2048px-8831.jpg",
        category: "electronics"
      },
      {
        title: "Gaming Mouse",
        price: 59.99,
        image: "https://m.media-amazon.com/images/I/61QY3V6A-NL._UF894,1000_QL80_.jpg",
        category: "electronics"
      },
      {
        title: "Leather Jacket",
        price: 199.99,
        image: "https://assets.lakelandleather.co.uk/image-factory/0748332eedffc732293c1595fb0ad981493de863~700x930/images/products/Bjuny6cgN2P5jFq6kgNIcrdkZsNUP4otSf8inTw9.jpg",
        category: "fashion"
      },
      {
        title: "Sunglasses",
        price: 29.99,
        image: "https://m.media-amazon.com/images/I/51ABDkq99LL._UY900_.jpg",
        category: "accessories"
      },
      {
        title: "Bluetooth Speaker",
        price: 89.99,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjMTM2Cf9GTWpQ0Hj7tVdZwphf_XoVjVr9vg&s",
        category: "electronics"
      },
      {
        title: "Denim Jeans",
        price: 69.99,
        image: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchINT/Lge/206781.jpg?im=Resize,width=450",
        category: "fashion"
      }
    ];

    let cartCount = 0;
    const productList = document.getElementById("product-list");
    const cartCountDisplay = document.getElementById("cart-count");

    const categoryFilter = document.getElementById("category-filter");
    const minPriceInput = document.getElementById("min-price");
    const maxPriceInput = document.getElementById("max-price");

    function renderProducts(filteredProducts) {
      productList.innerHTML = "";
      filteredProducts.forEach(product => {
        const card = document.createElement("div");
        card.className = "product";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.title}" />
          <div class="product-details">
            <div class="product-title">${product.title}</div>
            <div class="product-price">$${product.price}</div>
            <button class="add-btn">Add to Cart</button>
          </div>
        `;
        card.querySelector(".add-btn").addEventListener("click", () => {
          cartCount++;
          cartCountDisplay.textContent = cartCount;
        });
        productList.appendChild(card);
      });
    }

    function applyFilters() {
      const category = categoryFilter.value;
      const min = parseFloat(minPriceInput.value);
      const max = parseFloat(maxPriceInput.value);

      const filtered = products.filter(p => {
        return (category === "all" || p.category === category) &&
               p.price >= min && p.price <= max;
      });

      renderProducts(filtered);
    }

    categoryFilter.addEventListener("change", applyFilters);
    minPriceInput.addEventListener("input", applyFilters);
    maxPriceInput.addEventListener("input", applyFilters);

    // Initial render
    renderProducts(products);
const products = [
  {
    id: "key-65",
    name: "Bàn phím cơ K65",
    category: "keyboard",
    categoryName: "Bàn phím",
    price: 1290000,
    oldPrice: 1490000,
    badge: "Được yêu thích",
    image: "https://images.unsplash.com/photo-1721036469059-ab07e6bb6508?auto=format&fit=crop&w=1000&q=85",
    description: "Layout gọn 65% · switch tactile"
  },
  {
    id: "mouse-air",
    name: "Chuột không dây Air",
    category: "mouse",
    categoryName: "Chuột",
    price: 690000,
    oldPrice: 790000,
    badge: "Mới về",
    image: "https://images.unsplash.com/photo-1770479592099-464241a3ad3a?auto=format&fit=crop&w=1000&q=85",
    description: "Kết nối kép · cảm biến 4.000 DPI"
  },
  {
    id: "headphone-studio",
    name: "Tai nghe Studio One",
    category: "audio",
    categoryName: "Âm thanh",
    price: 1590000,
    oldPrice: 1890000,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=1000&q=85",
    description: "Chụp tai êm · kết nối Bluetooth"
  },
  {
    id: "mat-grid",
    name: "Lót chuột Grid XL",
    category: "accessory",
    categoryName: "Phụ kiện",
    price: 390000,
    oldPrice: 490000,
    image: "https://images.unsplash.com/photo-1616763355603-9755a640a287?auto=format&fit=crop&w=1000&q=85",
    description: "Bề mặt vải mịn · đế cao su chống trượt"
  },
  {
    id: "hub-c",
    name: "Hub USB-C 6 trong 1",
    category: "accessory",
    categoryName: "Phụ kiện",
    price: 850000,
    oldPrice: 990000,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?auto=format&fit=crop&w=1000&q=85",
    description: "HDMI 4K · USB 3.0 · đọc thẻ nhớ"
  },
  {
    id: "mic-mini",
    name: "Micro thu âm Mini",
    category: "audio",
    categoryName: "Âm thanh",
    price: 990000,
    oldPrice: 1190000,
    image: "https://images.unsplash.com/photo-1776690329305-fb4141bd528a?auto=format&fit=crop&w=1000&q=85",
    description: "Thu âm cardioid · chạm để tắt tiếng"
  },
  {
    id: "keyboard-arc",
    name: "Bàn phím không dây Arc",
    category: "keyboard",
    categoryName: "Bàn phím",
    price: 1150000,
    oldPrice: 1290000,
    image: "https://images.unsplash.com/photo-1595225476474-87563907a212?auto=format&fit=crop&w=1000&q=85",
    description: "Layout 75% · kết nối 3 thiết bị"
  },
  {
    id: "mouse-dock",
    name: "Đế sạc chuột Dock",
    category: "mouse",
    categoryName: "Chuột",
    price: 490000,
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=1000&q=85",
    description: "Đế sạc từ tính · đèn báo tinh tế"
  }
];

const categoryNames = {
  keyboard: "Bàn phím",
  mouse: "Chuột",
  audio: "Âm thanh",
  accessory: "Phụ kiện"
};

const extraSpecs = [
  ["key-nova-75", "Bàn phím cơ Nova 75", "keyboard", 1790000, "Layout 75% · núm xoay âm lượng", "Bán chạy"],
  ["key-classic-98", "Bàn phím Classic 98", "keyboard", 1590000, "Layout 98 phím · kết nối USB-C", ""],
  ["key-air", "Bàn phím Air Low Profile", "keyboard", 1390000, "Switch thấp · gõ êm, nhẹ tay", "Mới về"],
  ["key-mint", "Bàn phím Mint 68", "keyboard", 1250000, "Layout 68 phím · keycap PBT", ""],
  ["key-silent", "Bàn phím Silent Pro", "keyboard", 1890000, "Switch silent · giảm tiếng gõ", ""],
  ["key-mini", "Bàn phím Mini 60", "keyboard", 990000, "Layout 60% · nhỏ gọn, cơ động", ""],
  ["key-wood", "Bàn phím Wood Edition", "keyboard", 2190000, "Khung gỗ · kết nối ba thiết bị", "Phiên bản mới"],

  ["mouse-pro", "Chuột không dây Pro", "mouse", 1190000, "Cảm biến 8.000 DPI · sạc USB-C", ""],
  ["mouse-quiet", "Chuột Silent Touch", "mouse", 590000, "Nút bấm yên tĩnh · pin bền", ""],
  ["mouse-ergonomic", "Chuột công thái học Ergo", "mouse", 890000, "Thiết kế ôm tay · 5 nút chức năng", "Được yêu thích"],
  ["mouse-travel", "Chuột du lịch Pebble", "mouse", 450000, "Không dây Bluetooth · dáng gọn", ""],
  ["mouse-gaming", "Chuột Gaming Pulse", "mouse", 990000, "Cảm biến 12.000 DPI · RGB nhẹ", ""],
  ["mouse-dual", "Chuột Dual Connect", "mouse", 750000, "Bluetooth và receiver 2.4 GHz", "Mới về"],
  ["mouse-studio", "Chuột Studio Graphite", "mouse", 820000, "Bề mặt nhám · cuộn siêu êm", ""],

  ["headphone-cloud", "Tai nghe Cloud ANC", "audio", 2290000, "Chống ồn chủ động · đeo êm", "Bán chạy"],
  ["headphone-lite", "Tai nghe Lite Wireless", "audio", 1090000, "Bluetooth 5.3 · pin 35 giờ", ""],
  ["headphone-fold", "Tai nghe Fold", "audio", 790000, "Gập gọn · đệm tai mềm", ""],
  ["headphone-stereo", "Tai nghe Stereo Studio", "audio", 1890000, "Âm thanh cân bằng · jack 3.5 mm", ""],
  ["headphone-sand", "Tai nghe Sand Beige", "audio", 1350000, "Âm thanh không dây · màu be", "Mới về"],
  ["mic-stream", "Micro Stream USB", "audio", 1290000, "Thu âm cardioid · USB-C", ""],
  ["speaker-desk", "Loa để bàn Duo", "audio", 1690000, "Âm thanh stereo · kết nối Bluetooth", ""],

  ["hub-slim", "Hub USB-C Slim 7 cổng", "accessory", 990000, "HDMI 4K · đầu đọc SD · PD 100W", ""],
  ["stand-aluminum", "Giá đỡ laptop Lift", "accessory", 790000, "Hợp kim nhôm · gập phẳng", ""],
  ["wrist-rest", "Kê tay bàn phím Soft", "accessory", 320000, "Mút memory foam · vải thoáng", ""],
  ["desk-light", "Đèn bàn Focus", "accessory", 680000, "Ba nhiệt độ màu · sáng dịu mắt", "Mới về"],
  ["cable-kit", "Bộ cáp USB-C Flex", "accessory", 290000, "Bọc dù · sạc nhanh 100W", ""],
  ["desk-mat", "Lót bàn Studio Mat", "accessory", 520000, "Kích thước 90 × 40 cm · chống trượt", ""],
  ["webcam-cover", "Nắp che webcam Duo", "accessory", 120000, "Mỏng nhẹ · đóng mở một chạm", ""]
];

const extraPhotos = {
  "key-nova-75": "photo-1587829741301-dc798b83add3",
  "key-classic-98": "photo-1595225476474-87563907a212",
  "key-air": "photo-1773855127320-87a6ecb34a9f",
  "key-mint": "photo-1721036469059-ab07e6bb6508",
  "key-silent": "photo-1728314167652-dc3c8848dd80",
  "key-mini": "photo-1494016719304-469721e1abc8",
  "key-wood": "photo-1773855127320-87a6ecb34a9f",
  "mouse-pro": "photo-1707592691247-5c3a1c7ba0e3",
  "mouse-quiet": "photo-1527864550417-7fd91fc51a46",
  "mouse-ergonomic": "photo-1770479592099-464241a3ad3a",
  "mouse-travel": "photo-1554576575-a4e7b6e8409d",
  "mouse-gaming": "photo-1527814050087-3793815479db",
  "mouse-dual": "photo-1707592691247-5c3a1c7ba0e3",
  "mouse-studio": "photo-1527864550417-7fd91fc51a46",
  "headphone-cloud": "photo-1613629758552-443027994609",
  "headphone-lite": "photo-1585298723682-7115561c51b7",
  "headphone-fold": "photo-1599855130174-d17356fc659f",
  "headphone-stereo": "photo-1599855129764-f4cc28295202",
  "headphone-sand": "photo-1584585696759-1df9872e1eca",
  "mic-stream": "photo-1776690329305-fb4141bd528a",
  "speaker-desk": "photo-1599955051125-571f47e04316",
  "hub-slim": "photo-1760376789487-994070337c76",
  "stand-aluminum": "photo-1498050108023-c5249f4df085",
  "wrist-rest": "photo-1656071830624-06aa347f99a7",
  "desk-light": "photo-1733974352470-93abec47a814",
  "cable-kit": "photo-1711056823627-64e9089d4a82",
  "desk-mat": "photo-1656071830624-06aa347f99a7",
  "webcam-cover": "photo-1656071830624-06aa347f99a7"
};

products.push(...extraSpecs.map(([id, name, category, price, description, badge]) => {
  const photo = extraPhotos[id];
  return {
    id,
    name,
    category,
    categoryName: categoryNames[category],
    price,
    description,
    ...(badge ? { badge } : {}),
    image: `https://images.unsplash.com/${photo}?auto=format&fit=crop&w=1000&q=85`,
    ...(id === "key-nova-75" ? { oldPrice: 1990000 } : {}),
    ...(id === "mouse-pro" ? { oldPrice: 1390000 } : {}),
    ...(id === "headphone-cloud" ? { oldPrice: 2690000 } : {}),
    ...(id === "hub-slim" ? { oldPrice: 1190000 } : {}),
    ...(id === "desk-light" ? { oldPrice: 790000 } : {})
  };
}));

const productGrid = document.querySelector("#product-grid");
const featuredGrid = document.querySelector("#featured-grid");
const searchInput = document.querySelector("#search-input");
const priceFilter = document.querySelector("#price-filter");
const saleFilter = document.querySelector("#sale-filter");
const sortSelect = document.querySelector("#sort-select");
const resultMessage = document.querySelector("#results-message");
const emptyState = document.querySelector("#empty-state");
const cartDrawer = document.querySelector("#cart-drawer");
const backdrop = document.querySelector("#drawer-backdrop");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const drawerFooter = document.querySelector("#drawer-footer");
const cartStatus = document.querySelector("#drawer-status");
const cart = new Map(Object.entries(JSON.parse(localStorage.getItem("mach-cart") || "{}")));
let activeCategory = "all";
let currentPage = 1;
const productsPerPage = 12;
const accountModal = document.querySelector("#account-modal");
const accountBackdrop = document.querySelector("#account-backdrop");
let accountMode = "login";
const favorites = new Set(JSON.parse(localStorage.getItem("mach-favorites") || "[]"));

function updateAccountButton() {
  const user = JSON.parse(localStorage.getItem("mach-session") || "null");
  const button = document.querySelector("#open-account");
  button.textContent = user ? `Chào, ${user.name.split(" ").at(-1)} · Đăng xuất` : "Đăng nhập";
  button.setAttribute("aria-label", user ? `Đăng xuất tài khoản ${user.name}` : "Đăng nhập hoặc tạo tài khoản");
}

function setAccountMode(mode) {
  accountMode = mode;
  const registering = mode === "register";
  document.querySelector("#name-field").hidden = !registering;
  document.querySelector("#account-name").required = registering;
  document.querySelector("#account-password").autocomplete = registering ? "new-password" : "current-password";
  document.querySelector("#account-title").textContent = registering ? "Tạo tài khoản mới." : "Chào bạn trở lại.";
  document.querySelector("#account-submit").innerHTML = `${registering ? "Tạo tài khoản" : "Đăng nhập"} <span aria-hidden="true">↗</span>`;
  document.querySelectorAll(".account-tab").forEach((tab) => {
    const selected = tab.dataset.mode === mode;
    tab.classList.toggle("is-active", selected);
    tab.setAttribute("aria-selected", String(selected));
  });
  document.querySelector("#account-message").textContent = "";
}

function setAccountOpen(open) {
  accountModal.classList.toggle("is-open", open);
  accountModal.setAttribute("aria-hidden", String(!open));
  accountModal.inert = !open;
  accountBackdrop.hidden = !open;
  document.body.classList.toggle("account-is-open", open);
  if (open) document.querySelector("#account-email").focus();
}

const formatPrice = (price) => `${new Intl.NumberFormat("vi-VN").format(price)}đ`;
document.querySelector("#product-count").textContent = String(products.length).padStart(2, "0");

const fallbackIllustrations = {
  keyboard: "Images/key-65.svg",
  mouse: "Images/mouse-air.svg",
  audio: "Images/headphone-studio.svg",
  accessory: "Images/mat-grid.svg"
};

function addImageFallbacks(container) {
  container.querySelectorAll("img[data-fallback]").forEach((image) => {
    image.addEventListener("error", () => {
      if (!image.dataset.fallbackUsed) {
        image.dataset.fallbackUsed = "true";
        image.src = image.dataset.illustration;
      } else {
        image.remove();
      }
    });
  });
}

function productCard(product) {
  const discountPercent = product.oldPrice ? Math.round((1 - product.price / product.oldPrice) * 100) : 0;
  return `
    <article class="product-card" data-product="${product.id}">
      <div class="product-image">
        <div class="product-badges">${discountPercent ? `<span class="product-badge product-badge-sale">-${discountPercent}%</span>` : ""}${product.badge ? `<span class="product-badge">${product.badge}</span>` : ""}</div>
        <img src="${product.image}" alt="${product.name}" loading="lazy" referrerpolicy="no-referrer" data-fallback="${fallbackIllustrations[product.category]}">
        <button class="favorite-toggle" type="button" data-favorite="${product.id}" aria-pressed="${favorites.has(product.id)}" aria-label="${favorites.has(product.id) ? `Bỏ ${product.name} khỏi yêu thích` : `Thêm ${product.name} vào yêu thích`}">${favorites.has(product.id) ? "♥" : "♡"}</button>
        <button class="quick-add" type="button" data-add="${product.id}" aria-label="Thêm ${product.name} vào giỏ hàng">
          <span aria-hidden="true">+</span><span class="visually-hidden">Thêm vào giỏ</span>
        </button>
      </div>
      <div class="product-info">
        <div class="product-meta"><span>${product.categoryName}</span>${discountPercent ? `<span class="product-discount">Tiết kiệm ${formatPrice(product.oldPrice - product.price)}</span>` : ""}</div>
        <h3><button class="product-detail-link" type="button" data-detail="${product.id}">${product.name}</button></h3>
        <p class="product-description">${product.description}</p>
        <div class="product-pricing"><strong>${formatPrice(product.price)}</strong>${product.oldPrice ? `<del>${formatPrice(product.oldPrice)}</del>` : ""}</div>
      </div>
    </article>
  `;
}

function renderFeaturedProducts() {
  const featuredIds = ["key-65", "mouse-air", "headphone-studio", "key-nova-75", "hub-c", "mic-mini"];
  const featuredProducts = featuredIds.map((id) => products.find((product) => product.id === id)).filter(Boolean);
  featuredGrid.innerHTML = featuredProducts.map(productCard).join("");
  addImageFallbacks(featuredGrid);
}

const featuredMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let featuredAutoplayTimer;
function stopFeaturedAutoplay() { window.clearInterval(featuredAutoplayTimer); featuredAutoplayTimer = undefined; }
function startFeaturedAutoplay() {
  stopFeaturedAutoplay();
  if (featuredMotion.matches || document.hidden || featuredGrid.matches(":hover")) return;
  featuredAutoplayTimer = window.setInterval(() => {
    const card = featuredGrid.querySelector(".product-card");
    const maxScroll = featuredGrid.scrollWidth - featuredGrid.clientWidth;
    if (!card || maxScroll <= 1) return;
    const gap = Number.parseFloat(getComputedStyle(featuredGrid).columnGap) || 0;
    const nextLeft = featuredGrid.scrollLeft + card.getBoundingClientRect().width + gap;
    featuredGrid.scrollTo({ left: nextLeft >= maxScroll - 6 ? 0 : nextLeft, behavior: "smooth" });
  }, 4200);
}
featuredGrid.addEventListener("pointerenter", stopFeaturedAutoplay);
featuredGrid.addEventListener("pointerleave", startFeaturedAutoplay);
featuredGrid.addEventListener("focusin", stopFeaturedAutoplay);
featuredGrid.addEventListener("focusout", (event) => { if (!featuredGrid.contains(event.relatedTarget)) startFeaturedAutoplay(); });
document.addEventListener("visibilitychange", () => document.hidden ? stopFeaturedAutoplay() : startFeaturedAutoplay());
featuredMotion.addEventListener?.("change", startFeaturedAutoplay);

function renderProducts() {
  const query = searchInput.value.trim().toLocaleLowerCase("vi");
  let visibleProducts = products.filter((product) => {
    const matchesCategory = activeCategory === "all" || product.category === activeCategory;
    const searchableText = `${product.name} ${product.categoryName} ${product.description}`.toLocaleLowerCase("vi");
    const matchesPrice = priceFilter.value === "all" || (() => { const [min, max] = priceFilter.value.split("-").map(Number); return product.price >= min && product.price <= max; })();
    const matchesSale = !saleFilter.checked || Boolean(product.oldPrice && product.oldPrice > product.price);
    return matchesCategory && searchableText.includes(query) && matchesPrice && matchesSale;
  });

  if (sortSelect.value === "price-low") {
    visibleProducts = [...visibleProducts].sort((a, b) => a.price - b.price);
  } else if (sortSelect.value === "price-high") {
    visibleProducts = [...visibleProducts].sort((a, b) => b.price - a.price);
  }

  if (sortSelect.value === "discount") visibleProducts.sort((a, b) => (b.oldPrice ? (b.oldPrice - b.price) / b.oldPrice : 0) - (a.oldPrice ? (a.oldPrice - a.price) / a.oldPrice : 0));
  const pageCount = Math.max(1, Math.ceil(visibleProducts.length / productsPerPage));
  currentPage = Math.min(currentPage, pageCount);
  const firstProductIndex = (currentPage - 1) * productsPerPage;
  const pageProducts = visibleProducts.slice(firstProductIndex, firstProductIndex + productsPerPage);
  productGrid.innerHTML = pageProducts.map(productCard).join("");
  addImageFallbacks(productGrid);

  emptyState.hidden = visibleProducts.length > 0;
  resultMessage.textContent = `${visibleProducts.length} sản phẩm${pageCount > 1 ? ` · Trang ${currentPage} / ${pageCount}` : ""}`;
  const pagination = document.querySelector("#catalog-pagination");
  pagination.hidden = pageCount <= 1;
  document.querySelector("#page-status").textContent = `Trang ${currentPage} / ${pageCount}`;
  document.querySelector("#previous-page").disabled = currentPage <= 1;
  document.querySelector("#next-page").disabled = currentPage >= pageCount;
}

function updateCart() {
  const entries = [...cart.entries()];
  const itemCount = entries.reduce((total, [, quantity]) => total + quantity, 0);
  const total = entries.reduce((sum, [id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return sum + product.price * quantity;
  }, 0);

  document.querySelector("#cart-count").textContent = itemCount;
  document.querySelector("#open-cart").setAttribute("aria-label", `Mở giỏ hàng, ${itemCount} sản phẩm`);
  localStorage.setItem("mach-cart", JSON.stringify(Object.fromEntries(cart)));
  document.querySelector("#drawer-count").textContent = `(${itemCount})`;
  document.querySelector("#cart-total").textContent = formatPrice(total);
  const shippingGoal = 800000;
  const remainingForShipping = Math.max(0, shippingGoal - total);
  document.querySelector("#cart-progress-fill").style.width = `${Math.min(100, (total / shippingGoal) * 100)}%`;
  document.querySelector("#cart-progress-message").textContent = total >= shippingGoal
    ? "Đơn hàng đã đủ điều kiện miễn phí vận chuyển."
    : total > 0
      ? `Mua thêm ${formatPrice(remainingForShipping)} để được miễn phí vận chuyển.`
      : "Miễn phí vận chuyển cho đơn từ 800.000đ.";
  cartEmpty.hidden = itemCount > 0;
  drawerFooter.hidden = itemCount === 0;
  cartItems.innerHTML = entries.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `
      <article class="cart-item">
        <img src="${product.image}" alt="" referrerpolicy="no-referrer" data-fallback="${fallbackIllustrations[product.category]}">
        <div class="cart-item-info">
          <h3>${product.name}</h3>
          <p>${formatPrice(product.price)}</p>
          <div class="quantity-control" aria-label="Số lượng ${product.name}">
            <button type="button" data-quantity="${id}" data-change="-1" aria-label="Giảm số lượng">−</button>
            <span>${quantity}</span>
            <button type="button" data-quantity="${id}" data-change="1" aria-label="Tăng số lượng">+</button>
          </div>
        </div>
        <button class="remove-item" type="button" data-remove="${id}" aria-label="Xóa ${product.name} khỏi giỏ">Xóa</button>
      </article>
    `;
  }).join("");
  addImageFallbacks(cartItems);

  const orderLines = entries.map(([id, quantity]) => {
    const product = products.find((item) => item.id === id);
    return `- ${product.name} x${quantity}: ${formatPrice(product.price * quantity)}`;
  });
}

function setCartOpen(isOpen) {
  cartDrawer.classList.toggle("is-open", isOpen);
  cartDrawer.setAttribute("aria-hidden", String(!isOpen));
  cartDrawer.inert = !isOpen;
  backdrop.hidden = !isOpen;
  document.body.classList.toggle("cart-is-open", isOpen);

  if (isOpen) {
    document.querySelector("#close-cart").focus();
  } else {
    document.querySelector("#open-cart").focus();
  }
}

document.querySelectorAll(".category-button").forEach((button) => {
  button.addEventListener("click", () => {
    activeCategory = button.dataset.category;
    currentPage = 1;
    document.querySelectorAll(".category-button").forEach((categoryButton) => {
      const selected = categoryButton === button;
      categoryButton.classList.toggle("is-selected", selected);
      categoryButton.setAttribute("aria-pressed", String(selected));
    });
    renderProducts();
  });
});

searchInput.addEventListener("input", () => {
  currentPage = 1;
  renderProducts();
});
sortSelect.addEventListener("change", () => {
  currentPage = 1;
  renderProducts();
});

function addProductFromGrid(event) {
  const addButton = event.target.closest("[data-add]");
  if (!addButton) return;

  const id = addButton.dataset.add;
  cart.set(id, (cart.get(id) || 0) + 1);
  updateCart();
  cartStatus.textContent = `${products.find((product) => product.id === id).name} đã được thêm vào giỏ hàng.`;
}

productGrid.addEventListener("click", addProductFromGrid);
featuredGrid.addEventListener("click", addProductFromGrid);

function scrollFeatured(direction) {
  const card = featuredGrid.querySelector(".product-card");
  if (!card) return;
  const gap = Number.parseFloat(getComputedStyle(featuredGrid).columnGap) || 0;
  featuredGrid.scrollBy({ left: direction * (card.getBoundingClientRect().width + gap), behavior: featuredMotion.matches ? "auto" : "smooth" });
  startFeaturedAutoplay();
}
document.querySelector("#featured-prev").addEventListener("click", () => scrollFeatured(-1));
document.querySelector("#featured-next").addEventListener("click", () => scrollFeatured(1));

document.querySelector("#previous-page").addEventListener("click", () => {
  if (currentPage <= 1) return;
  currentPage -= 1;
  renderProducts();
  document.querySelector("#san-pham").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("#next-page").addEventListener("click", () => {
  currentPage += 1;
  renderProducts();
  document.querySelector("#san-pham").scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector(".all-products-link").addEventListener("click", () => {
  activeCategory = "all";
  currentPage = 1;
  searchInput.value = "";
  sortSelect.value = "featured";
  document.querySelectorAll(".category-button").forEach((button) => {
    const selected = button.dataset.category === "all";
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
  });
  renderProducts();
});

cartItems.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) {
    cart.delete(removeButton.dataset.remove);
    updateCart();
    return;
  }

  const quantityButton = event.target.closest("[data-quantity]");
  if (!quantityButton) return;

  const id = quantityButton.dataset.quantity;
  const nextQuantity = cart.get(id) + Number(quantityButton.dataset.change);
  if (nextQuantity > 0) {
    cart.set(id, nextQuantity);
  } else {
    cart.delete(id);
  }
  updateCart();
});

document.querySelector("#open-cart").addEventListener("click", () => setCartOpen(true));
document.querySelector("#close-cart").addEventListener("click", () => setCartOpen(false));
backdrop.addEventListener("click", () => setCartOpen(false));
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && accountModal.classList.contains("is-open")) setAccountOpen(false);
  if (event.key === "Escape" && cartDrawer.classList.contains("is-open")) setCartOpen(false);
  if (event.key !== "Tab" || !cartDrawer.classList.contains("is-open")) return;

  const focusableItems = [...cartDrawer.querySelectorAll("a[href], button:not([disabled]), select, input")];
  const firstItem = focusableItems[0];
  const lastItem = focusableItems[focusableItems.length - 1];
  if (event.shiftKey && document.activeElement === firstItem) {
    event.preventDefault();
    lastItem.focus();
  } else if (!event.shiftKey && document.activeElement === lastItem) {
    event.preventDefault();
    firstItem.focus();
  }
});

document.querySelector("#open-account").addEventListener("click", () => {
  if (localStorage.getItem("mach-session")) {
    localStorage.removeItem("mach-session");
    updateAccountButton();
  } else {
    setAccountOpen(true);
  }
});
document.querySelector("#close-account").addEventListener("click", () => setAccountOpen(false));
accountBackdrop.addEventListener("click", () => setAccountOpen(false));
document.querySelectorAll(".account-tab").forEach((tab) => tab.addEventListener("click", () => setAccountMode(tab.dataset.mode)));
document.querySelector("#account-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const email = document.querySelector("#account-email").value.trim().toLowerCase();
  const password = document.querySelector("#account-password").value;
  const message = document.querySelector("#account-message");
  const users = JSON.parse(localStorage.getItem("mach-users") || "{}");

  if (accountMode === "register") {
    if (users[email]) {
      message.textContent = "Email này đã có tài khoản. Hãy đăng nhập nhé.";
      return;
    }
    const name = document.querySelector("#account-name").value.trim();
    users[email] = { name, password };
    localStorage.setItem("mach-users", JSON.stringify(users));
  } else if (!users[email] || users[email].password !== password) {
    message.textContent = "Email hoặc mật khẩu chưa chính xác.";
    return;
  }

  const user = users[email];
  localStorage.setItem("mach-session", JSON.stringify({ name: user.name || email.split("@")[0], email }));
  updateAccountButton();
  setAccountOpen(false);
  event.currentTarget.reset();
  setAccountMode("login");
});

renderProducts();
renderFeaturedProducts();
startFeaturedAutoplay();
updateCart();
updateAccountButton();

/**
 * Kashya.in - Core Interactive Script & Store Engine
 * Expanded Product Catalog (16 Items), Offcanvas Shopping Bag,
 * Filter Tabs, Search Engine, Quick View Modal, and 3D Carousel.
 */

// Expanded Kashya Store Catalog (16 Premium Items)
const KASHYA_CATALOG = [
    {
        id: "k-01",
        name: "Azure Raw Silk Blouse",
        category: "top",
        categoryName: "Blouses & Tops",
        price: 1899,
        originalPrice: 2499,
        image: "images/blouse5.jpg",
        desc: "Exquisitely tailored raw silk blouse with fine hand-embroidery on the cuffs and delicate neckline piping."
    },
    {
        id: "k-02",
        name: "Royal Velvet Corset Top",
        category: "top",
        categoryName: "Tops & Blouses",
        price: 2299,
        originalPrice: 2999,
        image: "images/corser8.jpg",
        desc: "Structured corset silhouette with boning support, luxe shimmer velvet, and adjustable lace-up back."
    },
    {
        id: "k-03",
        name: "Floral Tiered Party Gown",
        category: "dress",
        categoryName: "Dresses & Gowns",
        price: 3499,
        originalPrice: 4299,
        image: "images/dress4.jpg",
        desc: "Breezy chiffon layered silhouette with floral prints, cinched waist, and flowy bohemian tiers."
    },
    {
        id: "k-04",
        name: "Chikankari Short Kurti",
        category: "kurti",
        categoryName: "Kurtis Collection",
        price: 1599,
        originalPrice: 2199,
        image: "images/short kurti.jpg",
        desc: "Handcrafted breathable cotton short kurti featuring chikankari-inspired threadwork for casual sophistication."
    },
    {
        id: "k-05",
        name: "Embroidered Flared Anarkali Kurti",
        category: "kurti",
        categoryName: "Kurtis Collection",
        price: 2199,
        originalPrice: 2899,
        image: "images/kuri2.jpg",
        desc: "A-line flared kurti woven with gold zari borders, comfortable lightweight fabric, and contemporary neck cut."
    },
    {
        id: "k-06",
        name: "Midnight Blue Festive Lehenga",
        category: "festive",
        categoryName: "Festive & Couture",
        price: 6999,
        originalPrice: 8999,
        image: "images/lehnga6.jpg",
        desc: "Showstopper heavy flare lehenga paired with embellished blouse and matching sheer net dupatta with border trim."
    },
    {
        id: "k-07",
        name: "Classic Mulmul Cotton Kurti",
        category: "kurti",
        categoryName: "Kurtis Collection",
        price: 1399,
        originalPrice: 1799,
        image: "images/shortkurti1.jpg",
        desc: "Everyday comfort redefined in pure mulmul cotton with wooden button accents and quarter sleeves."
    },
    {
        id: "k-08",
        name: "Chic Evening Peplum Top",
        category: "top",
        categoryName: "Tops & Blouses",
        price: 1799,
        originalPrice: 2299,
        image: "images/top3.jpg",
        desc: "Flattering tailored peplum silhouette in soft crepe fabric with ruffled sleeve accents."
    },
    {
        id: "k-09",
        name: "Ivory Satin Designer Kurti",
        category: "kurti",
        categoryName: "Kurtis Collection",
        price: 1899,
        originalPrice: 2499,
        image: "images/hii.jpg",
        desc: "Graceful ivory designer tunic adorned with gold gota patti detailing and modern asymmetrical hem."
    },
    {
        id: "k-10",
        name: "Embroidered Artisanal Tote Bag",
        category: "accessory",
        categoryName: "Accessories",
        price: 1299,
        originalPrice: 1699,
        image: "images/bag.jpg",
        desc: "Spacious handcrafted vegan leather tote featuring traditional Indian folk thread embroidery."
    },
    {
        id: "k-11",
        name: "Zari Silk Potli Bag",
        category: "accessory",
        categoryName: "Accessories",
        price: 899,
        originalPrice: 1299,
        image: "images/cart.jpg",
        desc: "Intricately woven silk potli bag with pearl beaded handle and metallic tassel drawstring."
    },
    {
        id: "k-12",
        name: "Handwoven Pastel Cotton Kurti",
        category: "kurti",
        categoryName: "Kurtis Collection",
        price: 1499,
        originalPrice: 1999,
        image: "images/design.jpg",
        desc: "Breathable pastel silhouette tailored for summer brunch and workwear elegance."
    },
    {
        id: "k-13",
        name: "Celestial Blue Satin Dress",
        category: "dress",
        categoryName: "Dresses & Gowns",
        price: 2899,
        originalPrice: 3699,
        image: "images/conifent.jpg",
        desc: "Fluid satin drape dress with cowl neckline and elegant side slit for evening galas."
    },
    {
        id: "k-14",
        name: "Ruby Zardozi Bridal Lehenga",
        category: "festive",
        categoryName: "Festive & Couture",
        price: 8499,
        originalPrice: 10999,
        image: "images/lehnga6.jpg",
        desc: "Opulent micro-velvet bridal lehenga with heavy zardozi embroidery and multi-kali flare."
    },
    {
        id: "k-15",
        name: "Indigo Block Print Kurti",
        category: "kurti",
        categoryName: "Kurtis Collection",
        price: 1249,
        originalPrice: 1699,
        image: "images/short kurti.jpg",
        desc: "Authentic Bagru indigo hand-block printed kurti crafted from 100% organic cotton."
    },
    {
        id: "k-16",
        name: "Metallic Shimmer Crop Top",
        category: "top",
        categoryName: "Tops & Blouses",
        price: 1599,
        originalPrice: 2099,
        image: "images/corser8.jpg",
        desc: "Contemporary metallic stretch crop top designed to pair with high-waist skirts or ethnic palazzos."
    }
];

// Shopping Cart State
let shoppingCart = [];

// Universal Toast Notifier
window.showToast = function(message) {
    const toastEl = document.getElementById('kashyaToast');
    const toastMsg = document.getElementById('toastMessage');
    if (toastEl && toastMsg) {
        toastMsg.textContent = message;
        const toast = new bootstrap.Toast(toastEl, { delay: 3500 });
        toast.show();
    }
};

// Add to Cart Logic
window.addToCart = function(productIdentifier) {
    let product = typeof productIdentifier === 'object' 
        ? productIdentifier 
        : KASHYA_CATALOG.find(p => p.name === productIdentifier || p.id === productIdentifier);

    if (!product) {
        product = {
            id: 'custom-' + Date.now(),
            name: productIdentifier,
            price: 1999,
            image: 'images/hii.jpg',
            categoryName: 'Exclusive'
        };
    }

    const existingIndex = shoppingCart.findIndex(item => item.id === product.id);
    if (existingIndex > -1) {
        shoppingCart[existingIndex].qty += 1;
    } else {
        shoppingCart.push({ ...product, qty: 1 });
    }

    updateCartUI();
    window.showToast(`✨ Added "${product.name}" to your shopping bag!`);
};

// Remove from cart
window.removeFromCart = function(productId) {
    shoppingCart = shoppingCart.filter(item => item.id !== productId);
    updateCartUI();
    window.showToast("Item removed from your shopping bag.");
};

// Change quantity
window.updateCartQty = function(productId, delta) {
    const item = shoppingCart.find(i => i.id === productId);
    if (item) {
        item.qty += delta;
        if (item.qty <= 0) {
            window.removeFromCart(productId);
            return;
        }
        updateCartUI();
    }
};

// Update Offcanvas & Badge UI
function updateCartUI() {
    const totalCount = shoppingCart.reduce((sum, item) => sum + item.qty, 0);
    const subtotal = shoppingCart.reduce((sum, item) => sum + (item.price * item.qty), 0);

    const badge = document.getElementById('cartCount');
    const drawerCount = document.getElementById('cartDrawerCount');
    const listContainer = document.getElementById('cartItemsList');
    const subtotalEl = document.getElementById('cartSubtotal');
    const totalEl = document.getElementById('cartTotal');

    if (badge) {
        badge.textContent = totalCount;
        gsap.fromTo(badge, { scale: 1.6 }, { scale: 1, duration: 0.3, ease: "back.out(2)" });
    }
    if (drawerCount) drawerCount.textContent = totalCount;
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;
    if (totalEl) totalEl.textContent = `₹${subtotal.toLocaleString('en-IN')}`;

    if (listContainer) {
        if (shoppingCart.length === 0) {
            listContainer.innerHTML = `
                <div class="text-center py-5 text-muted">
                    <i class="bi bi-bag-x fs-1 opacity-50 mb-2"></i>
                    <p class="mb-0">Your shopping bag is empty.</p>
                    <a href="#shopCatalog" class="btn btn-outline-primary btn-sm rounded-pill mt-3" data-bs-dismiss="offcanvas">Start Shopping</a>
                </div>
            `;
        } else {
            listContainer.innerHTML = shoppingCart.map(item => `
                <div class="cart-item-row d-flex align-items-center gap-3 p-2 rounded-3 bg-light border border-secondary border-opacity-25">
                    <img src="${item.image}" alt="${item.name}" style="width: 55px; height: 65px; object-fit: cover; border-radius: 8px;">
                    <div class="flex-grow-1">
                        <h6 class="text-dark mb-0 fs-6 fw-bold">${item.name}</h6>
                        <div class="text-primary fw-bold small">₹${item.price.toLocaleString('en-IN')}</div>
                        <div class="d-flex align-items-center gap-2 mt-1">
                            <button class="btn btn-sm btn-outline-secondary py-0 px-2 rounded" onclick="window.updateCartQty('${item.id}', -1)">-</button>
                            <span class="small fw-semibold text-dark">${item.qty}</span>
                            <button class="btn btn-sm btn-outline-secondary py-0 px-2 rounded" onclick="window.updateCartQty('${item.id}', 1)">+</button>
                        </div>
                    </div>
                    <button class="btn btn-sm text-danger border-0 p-1" onclick="window.removeFromCart('${item.id}')" title="Remove">
                        <i class="bi bi-trash3 fs-5"></i>
                    </button>
                </div>
            `).join('');
        }
    }
}

// Render Products to Catalog Grid
function renderCatalogGrid(filter = 'all') {
    const container = document.getElementById('productsGridContainer');
    if (!container) return;

    const filtered = filter === 'all' 
        ? KASHYA_CATALOG 
        : KASHYA_CATALOG.filter(p => p.category === filter);

    container.innerHTML = filtered.map(product => `
        <div class="col-lg-3 col-md-4 col-sm-6">
            <div class="product-card h-100 d-flex flex-column justify-content-between">
                <div>
                    <div class="img-wrapper">
                        <img src="${product.image}" alt="${product.name}" loading="lazy">
                        <span class="card-badge">${product.categoryName}</span>
                        <div class="card-actions">
                            <button class="btn btn-sm btn-light rounded-pill px-3 fw-bold shadow-sm" onclick="window.quickViewProduct('${product.id}')">
                                <i class="bi bi-eye me-1"></i> Quick View
                            </button>
                        </div>
                    </div>
                    <div class="p-3">
                        <h6 class="text-dark fw-bold mb-1 text-truncate">${product.name}</h6>
                        <div class="d-flex align-items-center gap-2">
                            <span class="text-primary fw-bold">₹${product.price.toLocaleString('en-IN')}</span>
                            <span class="text-muted text-decoration-line-through small">₹${product.originalPrice.toLocaleString('en-IN')}</span>
                        </div>
                    </div>
                </div>
                <div class="p-3 pt-0">
                    <button class="btn btn-primary btn-sm w-100 rounded-pill fw-semibold shadow-sm" onclick="window.addToCart('${product.id}')">
                        <i class="bi bi-bag-plus me-1"></i> Add to Bag
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Catalog Filter Action
window.filterCatalog = function(category, btnElement) {
    renderCatalogGrid(category);
    if (btnElement) {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btnElement.classList.add('active');
    }
};

// Quick View Modal Trigger
window.quickViewProduct = function(productId) {
    const product = KASHYA_CATALOG.find(p => p.id === productId);
    if (!product) return;

    document.getElementById('modalProductImg').src = product.image;
    document.getElementById('modalProductCategory').textContent = product.categoryName;
    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductPrice').textContent = `₹${product.price.toLocaleString('en-IN')}`;
    document.getElementById('modalProductOriginalPrice').textContent = `₹${product.originalPrice.toLocaleString('en-IN')}`;
    document.getElementById('modalProductDesc').textContent = product.desc;

    const addBtn = document.getElementById('modalAddToCartBtn');
    if (addBtn) {
        addBtn.onclick = () => {
            window.addToCart(product.id);
            const modalEl = document.getElementById('productQuickViewModal');
            bootstrap.Modal.getInstance(modalEl).hide();
        };
    }

    const modal = new bootstrap.Modal(document.getElementById('productQuickViewModal'));
    modal.show();
};

// Checkout Trigger
window.handleCheckout = function() {
    if (shoppingCart.length === 0) {
        window.showToast("Your shopping bag is currently empty.");
        return;
    }
    const offcanvasEl = document.getElementById('cartOffcanvas');
    if (offcanvasEl) {
        bootstrap.Offcanvas.getInstance(offcanvasEl).hide();
    }
    window.showToast("🎉 Thank you for your order! Checkout simulated successfully.");
    shoppingCart = [];
    updateCartUI();
};

// Auth & Newsletter handlers
window.handleAuthSubmit = function(type) {
    const modalEl = document.getElementById('authModal');
    if (modalEl) {
        const modal = bootstrap.Modal.getInstance(modalEl);
        if (modal) modal.hide();
    }
    window.showToast(type === 'login' ? '🎉 Welcome back to Kashya!' : '🎉 Account created successfully! 10% welcome coupon applied.');
};

window.handleNewsletter = function() {
    const input = document.getElementById('newsletterEmail');
    if (input && input.value) {
        window.showToast(`💌 Subscribed! Exclusive fashion drops will be sent to ${input.value}`);
        input.value = '';
    }
};

// Lifecycle initialization
document.addEventListener("DOMContentLoaded", () => {
    // Render store items immediately
    renderCatalogGrid('all');

    // Load asynchronous components
    Promise.all([
        loadHTML("page2", "page2.html"),
        loadHTML("page3", "page3.html"),
        loadHTML("page4", "page4.html"),
        loadHTML("footer", "Footer.html")
    ]).then(() => {
        initPage2CursorPreview();
        initPage3VideoTheater();
        initPage4CircularCarousel();
        initSearchFeature();
    }).catch(err => {
        console.warn("Component loading notice:", err);
    });
});

function loadHTML(id, file) {
    return fetch(file)
        .then(res => {
            if (!res.ok) throw new Error(`Failed to load ${file}`);
            return res.text();
        })
        .then(data => {
            const container = document.getElementById(id);
            if (container) container.innerHTML = data;
        });
}

function initPage2CursorPreview() {
    const listItems = document.querySelectorAll(".interactive-list .right-list");
    listItems.forEach(item => {
        const img = item.querySelector("img");
        if (!img) return;

        item.addEventListener("mouseenter", () => {
            gsap.killTweensOf(img);
            gsap.to(img, { opacity: 1, scale: 1, duration: 0.3, ease: "back.out(1.7)" });
        });

        item.addEventListener("mouseleave", () => {
            gsap.killTweensOf(img);
            gsap.to(img, { opacity: 0, scale: 0, duration: 0.2, ease: "power2.in" });
        });

        item.addEventListener("mousemove", (dets) => {
            gsap.to(img, {
                x: dets.clientX + 15,
                y: dets.clientY - 45,
                duration: 0.15,
                ease: "power1.out"
            });
        });
    });
}

function initPage3VideoTheater() {
    const theaterBox = document.querySelector(".video-theater-box");
    const video = document.getElementById("kashyaPromoVideo");
    const centerTrigger = document.querySelector(".page3-center");
    const hint = document.querySelector(".video-overlay-hint");

    if (!theaterBox || !video) return;

    theaterBox.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            theaterBox.classList.add("playing");
            if (centerTrigger) centerTrigger.style.opacity = "0";
            if (hint) hint.style.opacity = "1";
        } else {
            video.pause();
            theaterBox.classList.remove("playing");
            if (centerTrigger) centerTrigger.style.opacity = "1";
            if (hint) hint.style.opacity = "0";
        }
    });
}

function initPage4CircularCarousel() {
    const carousel = document.getElementById("carousel");
    const items = document.querySelectorAll("#page4 .item, .page4-showcase .item");
    const prevBtn = document.getElementById("prev");
    const nextBtn = document.getElementById("next");

    if (!carousel || items.length === 0) return;

    const total = items.length;
    let angle = 0;
    const theta = 360 / total;
    const radius = window.innerWidth < 768 ? 260 : 380;

    items.forEach((item, i) => {
        const rot = theta * i;
        item.style.transform = `rotateY(${rot}deg) translateZ(${radius}px)`;
    });

    function rotate(direction) {
        angle += direction * theta;
        carousel.style.transform = `translateZ(-${radius}px) rotateY(${angle}deg)`;
    }

    if (nextBtn) nextBtn.onclick = () => rotate(-1);
    if (prevBtn) prevBtn.onclick = () => rotate(1);

    let autoRotate = setInterval(() => rotate(-1), 6000);
    const stage = document.querySelector(".slider-stage");
    if (stage) {
        stage.addEventListener("mouseenter", () => clearInterval(autoRotate));
        stage.addEventListener("mouseleave", () => {
            clearInterval(autoRotate);
            autoRotate = setInterval(() => rotate(-1), 6000);
        });
    }
}

function initSearchFeature() {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");
    const pills = document.querySelectorAll(".search-pill");

    if (searchInput && searchResults) {
        searchInput.addEventListener("input", (e) => {
            const query = e.target.value.toLowerCase().trim();
            if (!query) {
                searchResults.innerHTML = "";
                return;
            }
            const matches = KASHYA_CATALOG.filter(p => 
                p.name.toLowerCase().includes(query) || 
                p.categoryName.toLowerCase().includes(query)
            );

            if (matches.length > 0) {
                searchResults.innerHTML = `
                    <div class="list-group">
                        ${matches.map(item => `
                            <button type="button" class="list-group-item list-group-item-action bg-white text-dark border-secondary border-opacity-25 d-flex justify-content-between align-items-center py-2" onclick="window.addToCart('${item.id}'); bootstrap.Modal.getInstance(document.getElementById('searchModal')).hide();">
                                <span class="d-flex align-items-center gap-2">
                                    <img src="${item.image}" style="width: 32px; height: 32px; border-radius: 6px; object-fit: cover;">
                                    <span>${item.name} <small class="text-primary ms-1">₹${item.price}</small></span>
                                </span>
                                <span class="badge bg-primary rounded-pill"><i class="bi bi-bag-plus"></i></span>
                            </button>
                        `).join("")}
                    </div>
                `;
            } else {
                searchResults.innerHTML = `<p class="text-muted mb-0">No matching items found for "${e.target.value}".</p>`;
            }
        });
    }

    pills.forEach(pill => {
        pill.addEventListener("click", () => {
            if (searchInput) {
                searchInput.value = pill.textContent.trim();
                searchInput.dispatchEvent(new Event('input'));
            }
        });
    });
}
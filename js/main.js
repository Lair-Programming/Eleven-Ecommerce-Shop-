// ============================================================
// Classic Eleven: main.js (shared by every page)
// ============================================================

// ---------- Part 1: Header and mobile menu ----------
const siteHeader = document.getElementById("site-header");
const menuButton = document.getElementById("menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const iconOpen = document.getElementById("icon-open");
const iconClose = document.getElementById("icon-close");

// Open or close the mobile menu
function setMenuOpen(shouldOpen) {
    mobileMenu.classList.toggle("hidden", !shouldOpen);
    iconOpen.classList.toggle("hidden", shouldOpen);
    iconClose.classList.toggle("hidden", !shouldOpen);
    menuButton.setAttribute("aria-expanded", String(shouldOpen));
}

if (siteHeader && menuButton && mobileMenu) {

    // Clicking the hamburger flips the menu open or closed
    menuButton.addEventListener("click", function () {
        const menuIsClosed = mobileMenu.classList.contains("hidden");
        setMenuOpen(menuIsClosed);
    });

    // Close the menu after tapping a link inside it
    mobileMenu.querySelectorAll("a").forEach(function (link) {
        link.addEventListener("click", function () {
            setMenuOpen(false);
        });
    });

    // Add a soft shadow once the page has scrolled a little
    window.addEventListener("scroll", function () {
        siteHeader.classList.toggle("has-shadow", window.scrollY > 10);
    });
}

// ---------- Part 2: Newsletter form (simulated) ----------
const newsletterForm = document.getElementById("newsletter-form");
const newsletterEmail = document.getElementById("newsletter-email");
const newsletterMessage = document.getElementById("newsletter-message");

// Returns true if the text looks like an email: something@something.something
function isValidEmail(text) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(text);
}

if (newsletterForm) {
    newsletterForm.addEventListener("submit", function (event) {
        // Stop the browser from reloading the page
        event.preventDefault();

        const emailText = newsletterEmail.value.trim();

        if (emailText === "") {
            newsletterMessage.textContent = "Please enter your email address.";
            newsletterMessage.className = "mt-3 text-sm min-h-[1.25rem] text-red-700";
        } else if (!isValidEmail(emailText)) {
            newsletterMessage.textContent = "That email address doesn't look right. Please check it.";
            newsletterMessage.className = "mt-3 text-sm min-h-[1.25rem] text-red-700";
        } else {
            newsletterMessage.textContent = "Thank you! (Demo only: nothing was saved or sent.)";
            newsletterMessage.className = "mt-3 text-sm min-h-[1.25rem] text-green-700";
            newsletterForm.reset();
        }
    });
}

// ---------- Part 3: Product cards ----------

// Turn a number like 12 into the text "$12.00"
function formatPrice(price) {
    return "$" + price.toFixed(2);
}

// Build the little color circles shown under each product
function createColorDots(colors) {
    let dotsHtml = "";

    colors.forEach(function (color) {
        dotsHtml += `<span class="inline-block h-3.5 w-3.5 rounded-full border border-brand-border"
                       style="background-color: ${color.hex}" title="${color.name}"></span>`;
    });

    return dotsHtml;
}

// Build the HTML for ONE product card.
// rootPath is "" on the homepage, and "../" on pages inside the pages folder.
function createProductCard(product, rootPath) {
    // A list of color names for screen readers, like "Black, White, Cream"
    const colorNames = product.colors.map(function (color) {
        return color.name;
    }).join(", ");

    // Show a "New" badge only for new products
    let newBadge = "";
    if (product.isNew) {
        newBadge = `<span class="absolute top-3 left-3 bg-white text-xs font-semibold px-3 py-1 rounded-full">New</span>`;
    }

    return `
    <a href="${rootPath}pages/product.html?id=${product.id}" class="group block">

      <!-- Slightly darker cream (#EAE6DC) so the box shows on white AND cream sections -->
      <div class="relative aspect-[4/5] overflow-hidden rounded-2xl bg-[#EAE6DC]">
        <div class="absolute inset-0 flex items-center justify-center px-4 text-center text-sm font-medium text-brand-accent">
          ${product.name}
        </div>

        <img src="${rootPath}${product.image}"
             alt="${product.name}"
             loading="lazy"
             class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
             onerror="this.style.display='none'">

        ${newBadge}
      </div>

      <div class="mt-3">
        <p class="text-xs text-brand-muted">${product.category}</p>
        <h3 class="font-semibold">${product.name}</h3>
        <div class="mt-1 flex items-center justify-between">
          <p class="font-semibold">${formatPrice(product.price)}</p>
          <div class="flex items-center gap-1">
            ${createColorDots(product.colors)}
            <span class="sr-only">Colors: ${colorNames}</span>
          </div>
        </div>
      </div>

    </a>
  `;
}

// Put a list of products into the grid with the given id
function showProducts(containerId, productList, rootPath) {
    const container = document.getElementById(containerId);

    // This page may not have that grid, so stop quietly
    if (!container) {
        return;
    }

    // Empty state: nothing to show
    if (productList.length === 0) {
        container.innerHTML = `<p class="col-span-full p-10 text-center text-sm text-brand-muted">No products to show yet.</p>`;
        return;
    }

    // Join the HTML of every card, then put it on the page in one go
    let allCardsHtml = "";
    productList.forEach(function (product) {
        allCardsHtml += createProductCard(product, rootPath);
    });
    container.innerHTML = allCardsHtml;
}

// ---------- Part 4: Homepage product sections ----------
// "typeof products" checks that products.js loaded, to avoid a crash if it didn't
if (typeof products !== "undefined") {

    const newArrivals = products.filter(function (product) {
        return product.isNew;
    }).slice(0, 4);

    const featuredProducts = products.filter(function (product) {
        return product.featured;
    }).slice(0, 4);

    showProducts("new-arrivals-grid", newArrivals, "");
    showProducts("featured-grid", featuredProducts, "");
} else {
    // Helpful hint in the Console if the data file didn't load
    console.error("products.js did not load. Check the script tags at the bottom of index.html.");
}
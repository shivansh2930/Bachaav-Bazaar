const categories = [
  {
    id: "bread",
    name: "Bread",
    limitPerPerson: 2,
    unit: "loaves",
    items: [
      { id:"multi", name:"Multigrain Bread", unit:"1 loaf", limit:2, image:"https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=700&q=80" },
      { id:"whole", name:"Whole Wheat Bread", unit:"1 loaf", limit:2, image:"https://images.unsplash.com/photo-1549931319-a545dcf3bc73?auto=format&fit=crop&w=700&q=80" },
      { id:"sourdough", name:"Sourdough", unit:"1 loaf", limit:1, image:"https://images.unsplash.com/photo-1707915317302-9565553eea02?auto=format&fit=crop&w=700&q=80" },
      { id:"bun", name:"Whole Wheat Buns", unit:"1 pack", limit:2, image:"https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=700&q=80" }
    ]
  },
  {
    id: "flour",
    name: "Flour",
    limitPerPerson: 1,
    unit: "kg",
    weight: true,
    items: [
      { id:"jowar", name:"Jowar Flour", unit:"500 g", limit:2, image:"https://images.unsplash.com/photo-1603122612817-2fe0e0631a93?auto=format&fit=crop&w=700&q=80" },
      { id:"atta", name:"Whole Wheat Atta", unit:"500 g", limit:2, image:"https://images.unsplash.com/photo-1471646174523-327e108889e7?auto=format&fit=crop&w=700&q=80" },
      { id:"ragi", name:"Ragi Flour", unit:"500 g", limit:2, image:"https://images.unsplash.com/photo-1590346336252-db96eccfd44e?auto=format&fit=crop&w=700&q=80" },
      { id:"bajra", name:"Bajra Flour", unit:"500 g", limit:2, image:"https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?auto=format&fit=crop&w=700&q=80" }
    ]
  },
  {
    id: "dairy",
    name: "Dairy",
    limitPerPerson: 2,
    unit: "units",
    items: [
      { id:"milk", name:"Fresh Milk", unit:"1 litre", limit:2, image:"https://images.unsplash.com/photo-1550583724-b2692b85b150?auto=format&fit=crop&w=700&q=80" },
      { id:"curd", name:"Plain Curd", unit:"500 g", limit:2, image:"https://images.unsplash.com/photo-1571212515416-fef01fc43637?auto=format&fit=crop&w=700&q=80" },
      { id:"paneer", name:"Paneer", unit:"200 g", limit:1, image:"https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=80" },
      { id:"butter", name:"Butter", unit:"100 g", limit:1, image:"https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?auto=format&fit=crop&w=700&q=80" }
    ]
  },
  {
    id: "produce",
    name: "Produce",
    limitPerPerson: 2,
    unit: "kg",
    weight: true,
    items: [
      { id:"potato", name:"Potatoes", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=700&q=80" },
      { id:"tomato", name:"Tomatoes", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1546094096-0df4bcaaa337?auto=format&fit=crop&w=700&q=80" },
      { id:"carrot", name:"Carrots", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1445282768818-728615cc910a?auto=format&fit=crop&w=700&q=80" },
      { id:"spinach", name:"Spinach", unit:"250 g", limit:2, image:"https://images.unsplash.com/photo-1576045057995-568f588f82fb?auto=format&fit=crop&w=700&q=80" },
      { id:"onion", name:"Onions", unit:"500 g", limit:3, image:"https://images.unsplash.com/photo-1571167002474-17b083c46f90?auto=format&fit=crop&w=700&q=80" },
      { id:"garlic", name:"Garlic", unit:"200 g", limit:2, image:"https://images.unsplash.com/photo-1587049332298-1c42e83937a7?auto=format&fit=crop&w=700&q=80" },
      { id:"broccoli", name:"Broccoli", unit:"1 head", limit:1, image:"https://images.unsplash.com/photo-1564874998499-1f3c14e9e8b6?auto=format&fit=crop&w=700&q=80" },
      { id:"cauliflower", name:"Cauliflower", unit:"1 head", limit:1, image:"https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=700&q=80" },
      { id:"cabbage", name:"Cabbage", unit:"1 head", limit:1, image:"https://images.unsplash.com/photo-1580451533422-f89a01788af3?auto=format&fit=crop&w=700&q=80" },
      { id:"cucumber", name:"Cucumber", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1587411768638-ec71f8e33b78?auto=format&fit=crop&w=700&q=80" },
      { id:"capsicum", name:"Bell Peppers", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1592548868664-f8b4e4b1cfb7?auto=format&fit=crop&w=700&q=80" },
      { id:"banana", name:"Bananas", unit:"500 g", limit:2, image:"https://images.unsplash.com/photo-1676495706102-ca1be8fdf676?auto=format&fit=crop&w=700&q=80" },
      { id:"apple", name:"Apples", unit:"500 g", limit:2, image:"https://images.unsplash.com/photo-1669295418566-f9833417f330?auto=format&fit=crop&w=700&q=80" },
      { id:"orange", name:"Oranges", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1592736465136-02dae5319b25?auto=format&fit=crop&w=700&q=80" }
    ]
  },
  {
    id: "grains",
    name: "Grains",
    limitPerPerson: 2,
    unit: "kg",
    weight: true,
    items: [
      { id:"rice", name:"Brown Rice", unit:"500 g", limit:2, image:"https://images.unsplash.com/photo-1625980319455-985e5442c5ae?auto=format&fit=crop&w=700&q=80" },
      { id:"oats", name:"Rolled Oats", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1676289124506-bdce1e1acc97?auto=format&fit=crop&w=700&q=80" },
      { id:"quinoa", name:"Quinoa", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1722882270502-4758cbd78661?auto=format&fit=crop&w=700&q=80" },
      { id:"millet", name:"Millet", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1758356860542-a2df92aad294?auto=format&fit=crop&w=700&q=80" }
    ]
  },
  {
    id: "pantry",
    name: "Pantry",
    limitPerPerson: 3,
    unit: "units",
    items: [
      { id:"dal", name:"Toor Dal", unit:"500 g", limit:2, image:"https://images.unsplash.com/photo-1702041357314-db5826c96f04?auto=format&fit=crop&w=700&q=80" },
      { id:"chana", name:"Chana Dal", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1612869538502-b5baa439abd7?auto=format&fit=crop&w=700&q=80" },
      { id:"oil", name:"Cooking Oil", unit:"1 litre", limit:1, image:"https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=700&q=80" },
      { id:"jaggery", name:"Jaggery", unit:"500 g", limit:1, image:"https://images.unsplash.com/photo-1550297486-5deebace721e?auto=format&fit=crop&w=700&q=80" }
    ]
  }
];

let people = 1;
let cart = {};

const $ = id => document.getElementById(id);

function categoryTotal(category) {
  return Object.entries(cart)
    .filter(([key]) => key.startsWith(category.id + ":"))
    .reduce((sum, [, item]) => sum + item.qty * item.weightKg, 0);
}

function categoryLimit(category) {
  return category.limitPerPerson * people;
}

function selectedCategories() {
  return categories.filter(c => categoryTotal(c) > 0);
}

function findItem(categoryId, itemId) {
  const category = categories.find(c => c.id === categoryId);
  return { category, item: category.items.find(i => i.id === itemId) };
}

function addItem(categoryId, itemId) {
  const { category, item } = findItem(categoryId, itemId);
  const key = `${categoryId}:${itemId}`;
  const current = cart[key]?.qty || 0;

  // Every category has one shared allowance across all its units.
  // Each item also has its own sensible per-person cap, independent of that shared allowance.
  if (item.limit != null && current >= item.limit * people) return;
  if (current >= 99 || categoryTotal(category) + itemWeight(item) > categoryLimit(category)) return;

  cart[key] = {
    ...item,
    categoryId,
    categoryName: category.name,
    qty: current + 1,
    weightKg: itemWeight(item)
  };
  render();
}

function itemWeight(item) {
  // Weight-based products are represented by the weight in their displayed unit.
  const match = item.unit.match(/([\d.]+)\s*(kg|g)/i);
  if (!match) return 1;
  const value = Number(match[1]);
  return /kg/i.test(match[2]) ? value : value / 1000;
}

function removeItem(categoryId, itemId) {
  const key = `${categoryId}:${itemId}`;
  if (!cart[key]) return;
  cart[key].qty--;
  if (cart[key].qty <= 0) delete cart[key];
  render();
}

function canAdd(category, item) {
  // A new category can only be activated while fewer than 3 categories are used.
  if (categoryTotal(category) === 0 && selectedCategories().length >= 3) return false;
  // Each item also has its own sensible per-person cap, independent of the shared category allowance.
  const key = `${category.id}:${item.id}`;
  const qty = cart[key]?.qty || 0;
  if (item.limit != null && qty >= item.limit * people) return false;
  return categoryTotal(category) + itemWeight(item) <= categoryLimit(category);
}

function renderCategories() {
  $("categoryGrid").innerHTML = categories.map(category => {
    const total = categoryTotal(category);
    const limit = categoryLimit(category);
    const pct = Math.min(100, (total / limit) * 100);

    return `
      <article class="category-card">
        <div class="category-card-head">
          <div><h3>${category.name}</h3></div>
          <div class="limit">${category.weight ? "Weight allowance" : "Category allowance"}<br><b>${formatNumber(total)} / ${formatNumber(limit)} ${category.unit}</b></div>
        </div>
        <div class="category-progress"><span style="width:${pct}%"></span></div>
        <div class="products">
          ${category.items.map(item => {
            const key = `${category.id}:${item.id}`;
            const qty = cart[key]?.qty || 0;
            const plusDisabled = !canAdd(category, item);
            const minusDisabled = qty === 0;
            return `
              <div class="product">
                <img src="${item.image}" alt="${item.name}" loading="lazy">
                <div class="product-info">
                  <div class="product-name">${item.name}</div>
                  <div class="product-meta">
                    <span class="product-unit">${item.unit}</span>
                    ${item.limit != null ? `<span class="limit-badge">LIMIT ${formatNumber(item.limit * people)}</span>` : ""}
                  </div>
                  <div class="stepper">
                    <button onclick="removeItem('${category.id}','${item.id}')" ${minusDisabled ? "disabled" : ""}>−</button>
                    <span class="qty">${qty}</span>
                    <button onclick="addItem('${category.id}','${item.id}')" ${plusDisabled ? "disabled" : ""}>+</button>
                  </div>
                </div>
              </div>`;
          }).join("")}
        </div>
      </article>`;
  }).join("");
}

function formatNumber(n) {
  return Number.isInteger(n) ? n : n.toFixed(2).replace(/0+$/, "").replace(/\.$/, "");
}

function renderCart() {
  const entries = Object.values(cart);
  $("cartCount").textContent = entries.reduce((s, x) => s + x.qty, 0);
  $("cartSummary").textContent = entries.length
    ? `${entries.reduce((s,x) => s+x.qty, 0)} item(s) • ${selectedCategories().length} categories`
    : "Nothing added yet.";

  $("cartItems").innerHTML = entries.length ? entries.map(item => `
    <div class="cart-row">
      <img src="${item.image}" alt="">
      <div class="cart-row-main">
        <strong>${item.name}</strong>
        <small>${item.categoryName} • ${item.unit} × ${item.qty}</small>
      </div>
      <button class="remove" onclick="removeItem('${item.categoryId}','${item.id}')">Remove</button>
    </div>
  `).join("") : `<div class="empty">🛒<br><br>Your cart is empty.<br>Add supplies while staying within the limits.</div>`;
}

function renderPeople() {
  $("peopleCount").textContent = people;
  $("rulePeople").textContent = `${people} ${people === 1 ? "person" : "people"}`;
  $("peopleMinus").disabled = people <= 1;
}

function renderMeter() {
  $("categoryMeter").textContent = `${selectedCategories().length} / 3 categories`;
}

function render() {
  renderPeople();
  renderCategories();
  renderCart();
  renderMeter();
}

$("peoplePlus").addEventListener("click", () => { people++; render(); });
$("peopleMinus").addEventListener("click", () => {
  if (people <= 1) return;
  people--;
  // Existing orders are preserved; the UI prevents adding beyond the new allowance.
  render();
});

$("cartButton").addEventListener("click", () => {
  $("cartPanel").classList.add("open");
  $("overlay").classList.add("open");
  $("cartPanel").setAttribute("aria-hidden", "false");
});
function closeCart() {
  $("cartPanel").classList.remove("open");
  $("overlay").classList.remove("open");
  $("cartPanel").setAttribute("aria-hidden", "true");
}
$("closeCart").addEventListener("click", closeCart);
$("overlay").addEventListener("click", closeCart);
$("clearCart").addEventListener("click", () => { cart = {}; render(); });

render();

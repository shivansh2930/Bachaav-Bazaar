# Bachaav Bazaar

A colorful, front-end-only food/supplies ordering cart.

## Run it

Open `index.html` in a browser. No build step or server is required.

## Logic

- A household starts with 1 person.
- Increase/decrease the number of people at the top.
- Each category has a shared allowance.
- Weight-based categories use kg limits and their allowance scales with people.
- Only 3 categories can contain items at once.
- Every item inside a category consumes part of that category's shared allowance.
- Once a category allowance is reached, all relevant `+` buttons become disabled.
- The cart has no payment/checkout section yet.
- Product photos are loaded from Unsplash URLs.

## Important implementation detail

The shared category limit is enforced by `categoryTotal(category)`, not separately per product. For example, if Bread has a 2-loaf limit for one person, the user can order 2 multigrain loaves, or 1 multigrain + 1 whole wheat, etc., but not 2 + 1.

For weight-based items, the displayed unit is converted to kilograms by `itemWeight()`.

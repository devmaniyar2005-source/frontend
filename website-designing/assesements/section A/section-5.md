# 1. Flexbox Properties for the Layout

To achieve the responsive 4-column to 2-column layout using Flexbox, you must apply specific properties to both the parent container and the child cards, and utilize a media query for the breakpoint.

### Properties for the Container Element:
* **`display: flex;`**: This activates the Flexbox layout context on the container.
* **`flex-wrap: wrap;`**: This is the most crucial property for this scenario. By default, Flexbox tries to squeeze all items onto a single line. `wrap` tells the browser to allow the cards to flow onto a new row when they exceed the container's width.
* **`gap: 20px;`** *(Optional but recommended)*: Adds consistent spacing between the rows and columns without needing complex margin calculations.

### Properties for the Individual Cards (Desktop View):
To get exactly 4 cards per row, you must constrain their width so they share the row equally, accounting for any gaps.
* **`flex: 0 0 calc((100% - 60px) / 4);`** (or simply setting the `width`): This tells the card not to grow or shrink, but to take up exactly 25% of the container width minus the space taken up by the three gaps between the four cards.

### Properties for the Individual Cards (Tablet View):
Using a media query (e.g., `@media (max-width: 768px)`), you change the width of the cards.
* **`flex: 0 0 calc((100% - 20px) / 2);`**: This forces the cards to take up nearly 50% of the row, forcing the third and fourth cards to wrap to the next line, creating the 2-column layout.

---

# 2. When to Use CSS Grid Instead of Flexbox

**The Scenario: Strict Two-Dimensional Alignment with Unequal Content**

While Flexbox is excellent for this task, CSS Grid provides much more precise control when dealing with a true two-dimensional layout (rows and columns simultaneously), especially when content size varies.

### Why Flexbox struggles here:
Flexbox is fundamentally one-dimensional. It controls layout either in a row or in a column, but not both at the same time. When Flexbox wraps items to a second row, that new row acts independently of the first. If "Card 1" has a very long description and stretches its height, Flexbox will stretch the other three cards in that specific row to match. However, the items in the next row below it do not care about the heights above them. Furthermore, because we rely on percentages and `calc()` for widths in Flexbox, adding borders or padding can sometimes break the math and cause unexpected wrapping if `box-sizing: border-box` isn't strictly applied.

### Why CSS Grid is better:
CSS Grid is natively two-dimensional. You define the structure entirely on the parent container, not the children. Instead of calculating percentages on every card, you simply tell the Grid container: `grid-template-columns: repeat(4, 1fr);`.

* **Perfect Alignment:** Grid strictly enforces the columns. Even if a card in row 1 is massive, the card directly below it in row 2 will perfectly align with its left and right edges.
* **Easier Media Queries:** To switch to the tablet view, you simply change one line of code on the container: `grid-template-columns: repeat(2, 1fr);`. You don't have to recalculate widths on the individual child elements at all.
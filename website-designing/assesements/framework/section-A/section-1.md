# Bootstrap Grid System Explanation

**1. How Bootstrap's Grid Classes Work Together:**
* **`container`**: Acts as the foundational wrapper. It centers the layout horizontally, sets maximum widths at different responsive breakpoints, and adds horizontal padding to prevent content from touching the edges of the screen.
* **`row`**: Functions as a flexbox container (`display: flex`) designed exclusively to hold columns. It uses negative horizontal margins to counteract the container's padding, ensuring the internal columns align perfectly with the container's edges.
* **`col-*`**: Dictates the width of the content elements based on Bootstrap's 12-column grid system. These classes define how many of those 12 available slots an element should occupy at specific screen sizes.

**2. Behaviour of `col-12 col-md-6 col-lg-3`:**
Applying this specific combination of classes ensures the cuisine boxes adapt perfectly across different devices by instructing the browser how to divide the 12-column grid at specific breakpoints:
* **Mobile (`col-12`)**: On extra-small and small screens (under 768px), each box takes up all 12 available columns. This forces the boxes to stack vertically, displaying one box per row.
* **Tablet (`col-md-6`)**: On medium screens (768px and up), each box takes up 6 columns (exactly half of the 12-column row). This allows two boxes to fit side-by-side, naturally wrapping to create a 2x2 grid for the four categories.
* **Desktop (`col-lg-3`)**: On large screens (992px and up), each box takes up 3 columns (a quarter of the 12-column row). This allows all four boxes to fit comfortably side-by-side in a single horizontal row.
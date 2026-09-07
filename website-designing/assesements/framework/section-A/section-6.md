**1. Why Bootstrap Follows a Mobile-First Philosophy:**
Bootstrap prioritizes a mobile-first approach primarily for performance and architectural simplicity. Mobile devices typically possess less processing power and bandwidth than desktop computers. By loading the simplest, default CSS rules first (which usually dictate stacked, single-column layouts) and progressively enhancing the layout for larger screens, mobile browsers can render the page faster without having to parse, calculate, and then override complex desktop-specific styles.

**2. Impact on Breakpoint Class Order:**
This progressive enhancement dictates that you must design for the smallest screen first, then add overrides for larger breakpoints. When applying classes like `col-12 col-md-6 col-lg-3`, the `col-12` class acts as the foundational baseline for mobile. The `col-md-6` class uses a `min-width` media query to override that baseline only when the tablet breakpoint is reached, and `col-lg-3` overrides both once the desktop breakpoint is reached.

**3. Switching to a Desktop-First Approach (`max-width`):**
If the framework relied on a desktop-first approach using `max-width` media queries, the core logic and performance would invert:
* **The Default State:** The browser would immediately load and apply the complex, multi-column desktop layout (e.g., four cards side-by-side) as the default baseline.
* **The Override Process:** As the screen viewport shrinks, the browser would have to actively trigger `max-width` media queries to strip away those complex flexbox alignments, force the elements to expand to full width, and stack the cards vertically. 
* **The Result:** Mobile devices would be burdened with downloading and processing heavier, unnecessary desktop CSS rules just to actively undo them to achieve a simple stacked layout, resulting in less efficient rendering on the weakest devices.
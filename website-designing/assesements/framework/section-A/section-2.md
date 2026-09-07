# Bootstrap Navbar Collapse Behaviour

**1. How Bootstrap Achieves the Collapse Behaviour:**
Bootstrap utilizes a mix of CSS media queries and its bundled JavaScript. CSS handles hiding the navigation links below a specific screen width breakpoint defined by a utility class. When the user interacts with the hamburger menu, Bootstrap's JavaScript listens for the click event and dynamically toggles visibility classes (such as `.show`) on the navigation container to reveal or hide the links.

**2. Key Classes and HTML Attributes:**
* **`.navbar-expand-{sm|md|lg|xl|xxl}`**: Added to the parent `<nav>`, this class sets the specific breakpoint at which the navbar expands horizontally. Below this width, it collapses.
* **`.collapse navbar-collapse`**: Applied to the container wrapping the navigation links, responsible for hiding the content on smaller screens.
* **`.navbar-toggler`**: Applied to the `<button>` element to style it as the hamburger toggle.
* **`data-bs-toggle="collapse"`**: A data attribute on the toggler button that instructs Bootstrap's JavaScript to trigger the collapse function.
* **`data-bs-target="#targetID"`**: A data attribute on the toggler button pointing to the exact `id` of the `.collapse` container it controls.

**3. What Breaks if `navbar-toggler` is Removed:**
If the `<button class="navbar-toggler">` element is deleted from the markup, the hamburger button will not appear on mobile devices. Because the CSS rules will still hide the navigation links inside the `.collapse` container, users on smaller screens will have no way to open the menu, making the website's main navigation entirely inaccessible.
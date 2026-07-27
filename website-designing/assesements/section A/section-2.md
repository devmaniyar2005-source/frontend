# 1. Identifying and Justifying the HTML Form Elements

For the checkout form scenario described, here are the specific HTML elements I would use for each input and the semantic justification for those choices:

### Input A: Multi-line Delivery Address
* **Element Choice:** `<textarea>`
* **Semantic Justification:** The `<textarea>` element is specifically designed for multi-line plain-text editing. An address naturally requires multiple lines (e.g., Street/Apartment on line 1, City/State on line 2). Using this element natively supports line breaks and provides the user with a resizable box, which is the correct semantic representation for paragraph-style or multi-line data.

### Input B: Choose a Payment Method (Cash, Card, UPI)
* **Element Choice:** `<input type="radio">` (Grouped together using the same `name` attribute)
* **Semantic Justification:** Radio buttons are semantically designed for selecting exactly one option from a predefined, mutually exclusive list. Since a customer will select only one payment method for their order, radio buttons accurately represent this logic. It ensures the user cannot accidentally select both "Cash" and "Card".

### Input C: Tick a box to save the address for future orders
* **Element Choice:** `<input type="checkbox">`
* **Semantic Justification:** A checkbox is the semantic standard for boolean data—meaning an independent "yes/no" or "true/false" toggle. It perfectly captures the binary choice of whether the user wants to opt-in to saving their address or not.

---

# 2. Why using `<input type="text">` for all three is a poor decision

Relying entirely on plain `<input type="text">` fields would be a bad architectural decision for three main reasons:

* **Terrible User Experience (UX):** A text input is a single-line field, making it incredibly frustrating for a user to review a long, multi-line address. Furthermore, forcing a user to manually type "Card" or "Yes" instead of simply tapping a visual button adds unnecessary friction to the checkout process, likely leading to abandoned carts.
* **Complex Backend Validation:** A plain text input accepts any string of characters. A user might misspell a payment method as "Csh", "credit card", or "GPay" instead of the expected "Cash", "Card", or "UPI". If we used text inputs, our server would need complex validation logic to catch and handle these errors. Semantic elements like radio buttons completely eliminate this issue by restricting the submitted data to predefined, valid values.
* **Poor Accessibility (a11y):** Screen readers rely on semantic HTML to explain the page to visually impaired users. If the payment options were just text inputs, the screen reader would not announce the available choices. By using radio buttons and checkboxes, the screen reader natively understands the context and announces "radio button, 1 of 3" or "checkbox, unchecked," making the site accessible.
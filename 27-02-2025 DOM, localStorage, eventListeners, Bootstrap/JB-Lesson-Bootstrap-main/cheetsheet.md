# Bootstrap Classes and Elements Explained

## Layout Classes

### Containers and Grid
- `container`: Centers content and adds padding
- `row`: Creates horizontal groups of columns using flexbox
- `col-md-6`: Creates a column that takes up 6 units (half) on medium screens and up
- `col-sm-12`: Takes full width on small screens
- `col-lg-3`: Takes up 1/4 width on large screens

## Spacing Utilities

These follow pattern: `{property}{sides}-{size}`

### Properties
- `m`: margin
- `p`: padding

### Sides
- `t`: top
- `b`: bottom
- `s`: start 
- `e`: end 
- `x`: left and right (stand and end)
- `y`: top and bottom
- No letter: all sides

### Sizes
- `0` to `5`: Increasing size (0 removes spacing)
- Examples:
  - `mb-3`: Margin bottom (medium size)
  - `p-2`: Padding on all sides (small size)
  - `py-4`: Padding on top and bottom (larger size)
  - `mt-5`: Large margin on top

## Color Classes

### Text Colors
- `text-primary`: Blue primary text
- `text-secondary`: Gray secondary text
- `text-success`: Green text
- `text-danger`: Red text
- `text-warning`: Yellow/orange text
- `text-info`: Light blue text
- `text-light`: Light gray/white text
- `text-dark`: Dark gray/black text

### Background Colors
- `bg-primary`: Blue background
- `bg-secondary`: Gray background
- `bg-success`: Green background
- `bg-danger`: Red background
- `bg-light`: Light gray/white background
- `bg-dark`: Dark gray/black background

## Components

### Buttons
- `btn`: Base button class
- `btn-primary`, `btn-secondary`, etc.: Colored buttons
- `btn-outline-primary`: Outlined buttons
- `btn-sm`, `btn-lg`: Size variations

### Cards
- `card`: Container element
- `card-body`: Content container
- `card-title`: Card heading
- `card-text`: Card paragraph
- `card-header`: Header section
- `card-footer`: Footer section

### Alerts
- `alert`: Base alert class
- `alert-success`, `alert-danger`, etc.: Contextual alert types

### Forms
- `form-control`: Input styling
- `form-label`: Label styling
- `form-select`: Dropdown styling
- `form-check`: Checkbox/radio container
- `form-check-input`: Checkbox/radio input
- `form-check-label`: Checkbox/radio label

## Display Utilities

- `d-flex`: Use flexbox display
- `d-none`: Hide element
- `d-md-block`: Display as block on medium screens and up
- `justify-content-between`: Space items evenly
- `justify-content-center`: Center items horizontally

## Border Utilities

- `border`: Add border on all sides
- `border-primary`: Colored border
- `border-3`: Thicker border
- `rounded`: Rounded corners
- `rounded-pill`: Very rounded (pill-shaped)

## HTML Entities

- `&lt;`: Less than sign (`<`)
- `&gt;`: Greater than sign (`>`)
- Used in code examples to display HTML tags as text

## Interactive Components (require Bootstrap JS)

- `data-bs-toggle`: Activates Bootstrap's JavaScript
- `data-bs-target`: Identifies target element
- `data-bs-dismiss`: Closes/dismisses components
- `fade`: Animation class
- `modal`: Modal dialog
- `collapse`: Collapsible content
- `tab-content`: Tab container
- `tab-pane`: Individual tab

## Miscellaneous Classes

- `active`: Indicates current/active state
- `disabled`: Disables an element
- `text-center`: Centers text horizontally
- `fw-bold`: Bold text
- `border-bottom`: Only bottom border
- `w-100`: Full width


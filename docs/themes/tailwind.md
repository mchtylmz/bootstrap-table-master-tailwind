---
title: Tailwind
---

# Tailwind Theme

The Tailwind theme lets Bootstrap Table render with a modern Tailwind-style light UI without loading Bootstrap CSS. It keeps Bootstrap Table's DOM, data attributes, and public API intact, so `data-toggle="table"` and existing extensions keep working.

## Import Order

Load the Tailwind theme CSS, jQuery, Bootstrap Table, any extensions, and then the Tailwind theme JavaScript.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-table@VERSION/dist/themes/tailwind/bootstrap-table-tailwind.min.css">

<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-table@VERSION/dist/bootstrap-table.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-table@VERSION/dist/extensions/filter-control/bootstrap-table-filter-control.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-table@VERSION/dist/extensions/export/bootstrap-table-export.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-table@VERSION/dist/extensions/sticky-header/bootstrap-table-sticky-header.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap-table@VERSION/dist/themes/tailwind/bootstrap-table-tailwind.min.js"></script>
```

Bootstrap CSS is not required. The Bootstrap-compatible class names can remain in the generated DOM because this theme restyles the selectors that Bootstrap Table and its extensions expect.

## npm or Bundler

```js
import 'bootstrap-table/dist/themes/tailwind/bootstrap-table-tailwind.min.css'
import 'bootstrap-table'
import 'bootstrap-table/dist/extensions/filter-control/bootstrap-table-filter-control.min.js'
import 'bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js'
import 'bootstrap-table/dist/themes/tailwind/bootstrap-table-tailwind.min.js'
```

## Search and Pagination

```html
<table
  data-toggle="table"
  data-search="true"
  data-pagination="true">
  <thead>
    <tr>
      <th data-field="id">ID</th>
      <th data-field="name" data-sortable="true">Name</th>
      <th data-field="price" data-sortable="true">Price</th>
    </tr>
  </thead>
</table>
```

## Filter Control

```html
<table
  data-toggle="table"
  data-filter-control="true">
  <thead>
    <tr>
      <th data-field="name" data-filter-control="input">Name</th>
      <th data-field="status" data-filter-control="select">Status</th>
    </tr>
  </thead>
</table>
```

## Export

```html
<table
  data-toggle="table"
  data-show-export="true"
  data-pagination="true">
</table>
```

Load `bootstrap-table-export` and the table export dependency used by your project before the Tailwind theme JS.

## Fixed Columns

```html
<table
  data-toggle="table"
  data-fixed-columns="true"
  data-fixed-number="1">
</table>
```

The theme gives fixed column clones a white background, soft border, and a z-index that keeps them above the scrolling body.

## Sticky Header

```html
<table
  data-toggle="table"
  data-sticky-header="true">
</table>
```

Sticky headers use the same neutral table header background as the main table to avoid transparent overlap while scrolling.

## Tailwind v4 Pipeline

The source file is `src/themes/tailwind/bootstrap-table-tailwind.css`. It uses plain CSS inside `@layer components`, so it can pass through a Tailwind CSS v4 pipeline without `@tailwind base`, `@tailwind components`, or `@tailwind utilities`.

The distributed files in `dist/themes/tailwind/` are browser-ready CSS and do not contain `@apply`. If you customize the source with Tailwind `@apply`, compile it with your Tailwind v4 build step before publishing the dist CSS.

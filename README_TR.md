# Bootstrap Table Tailwind Teması

[English](README.md) | [Türkçe](README_TR.md)

Bu çalışma, Bootstrap Table için Bootstrap CSS gerektirmeyen modern Tailwind CSS v4 görünümlü bir tema ekler. Tema, Bootstrap Table'ın mevcut theme mimarisini takip eder ve yalnızca Tailwind theme CSS/JS dosyaları import edilerek kullanılabilir.

Bu Tailwind tema, Bootstrap Table'ın güncel `v1.27.3` sürümüne göre hazırlanmıştır.

![Bootstrap Table Tailwind Theme Full Demo](Bootstrap-Table-Tailwind-Theme-Full-Demo-2026-06-24_15_43.png)

## Öne Çıkanlar

- Tailwind tarzı modern, nötr slate tabanlı light arayüz.
- Bootstrap CSS bağımlılığı yok.
- `data-toggle="table"` ve Bootstrap Table public API kullanımı korunur.
- Sadece theme katmanında sınıf, ikon, buton, dropdown, pagination ve input eşlemeleri yapılır.
- `dist` CSS dosyaları doğrudan tarayıcıda kullanılabilir; `@tailwind` ve `@apply` içermez.
- Demo; search, pagination, show columns, refresh, toggle view, export, filter controls, sticky header ve fixed columns özelliklerini gösterir.
- Tam demo, Bootstrap Table etiketlerini Türkçe göstermek için `tr-TR` locale kullanır.

## Eklenen Dosyalar

```text
src/themes/tailwind/bootstrap-table-tailwind.css
src/themes/tailwind/bootstrap-table-tailwind.js
dist/themes/tailwind/bootstrap-table-tailwind.css
dist/themes/tailwind/bootstrap-table-tailwind.min.css
dist/themes/tailwind/bootstrap-table-tailwind.js
dist/themes/tailwind/bootstrap-table-tailwind.min.js
docs/themes/tailwind.md
examples/theme/tailwind.html
tailwind-theme-demo.html
Bootstrap-Table-Tailwind-Theme-Full-Demo-2026-06-24_15_43.png
README_TR.md
```

## Tam Demo

Proje kökünde lokal sunucuyu başlatın:

```bash
python3 -m http.server 8899
```

Sonra şu adresi açın:

```text
http://127.0.0.1:8899/tailwind-theme-demo.html
```

Demo üç gerçek çalışma senaryosuna ayrılmıştır:

- Toolbar, search, pagination, show columns ve export.
- Filter control ile sticky header.
- Horizontal scroll ile fixed columns.
- `https://jsonplaceholder.typicode.com/comments` üzerinden AJAX veri yükleme.

## Tarayıcı Kullanımı

Önce Tailwind theme CSS dosyasını, sonra jQuery, Bootstrap Table, opsiyonel extension dosyalarını ve en son Tailwind theme JS dosyasını yükleyin.

```html
<link rel="stylesheet" href="dist/themes/tailwind/bootstrap-table-tailwind.min.css">

<script src="https://cdn.jsdelivr.net/npm/jquery@3.7.1/dist/jquery.min.js"></script>
<script src="dist/bootstrap-table.min.js"></script>
<script src="dist/extensions/filter-control/bootstrap-table-filter-control.min.js"></script>
<script src="dist/extensions/export/bootstrap-table-export.min.js"></script>
<script src="dist/themes/tailwind/bootstrap-table-tailwind.min.js"></script>
```

```html
<table
  data-toggle="table"
  data-search="true"
  data-pagination="true"
  data-show-columns="true">
  <thead>
    <tr>
      <th data-field="id" data-sortable="true">ID</th>
      <th data-field="name" data-sortable="true">Name</th>
      <th data-field="status">Status</th>
    </tr>
  </thead>
</table>
```

## Active Pagination Rengini Değiştirme

Bu CSS'i Tailwind theme CSS dosyasından sonra ekleyin. İstediğiniz renk için hex değerlerini değiştirmeniz yeterli:

```css
.bootstrap-table.tailwind .page-item.active .page-link,
.bootstrap-table.tailwind .page-link.active {
  background: #16a34a;
  border-color: #16a34a;
  color: #fff;
}
```

## Bundler Kullanımı

```js
import 'bootstrap-table/dist/themes/tailwind/bootstrap-table-tailwind.min.css'
import 'bootstrap-table'
import 'bootstrap-table/dist/extensions/filter-control/bootstrap-table-filter-control.min.js'
import 'bootstrap-table/dist/extensions/export/bootstrap-table-export.min.js'
import 'bootstrap-table/dist/themes/tailwind/bootstrap-table-tailwind.min.js'
```

## Tailwind v4 Notları

Kaynak CSS, `@layer components` içinde normal CSS olarak yazılmıştır ve Tailwind CSS v4 pipeline'ından geçebilir. Bilerek şu direktifleri kullanmaz:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Dağıtım CSS dosyaları doğrudan tarayıcıda çalışır ve `@apply` içermez.

## Build Notları

Bootstrap Table'ın mevcut build sistemi Sass dosyalarını otomatik derler. Bu tema kaynağı özellikle `.css` olduğu için küçük bir kopyalama adımı eklenmiştir:

```bash
npm run css:build:tailwind
```

Tam CSS build:

```bash
npm run css:build
```

## Lisans

Bootstrap Table MIT Lisansı ile yayınlanır.

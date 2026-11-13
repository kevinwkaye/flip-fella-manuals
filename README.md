# Pebble's Plugin Manuals

Visual manuals for the Flip Fella family of Ableton plugins.

- `site/` is the finished website that Cloudflare Pages serves. Don't edit it by hand.
- `data/` holds one file per plugin, `template.html` the page design, `img/` the panel pictures.
- `python3 build.py <plugin ids in order>` rebuilds `site/` (and a single-file copy).

Cloudflare Pages settings: framework preset **None**, build command **blank**, output directory **site**.

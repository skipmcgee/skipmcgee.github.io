source "https://rubygems.org"

# Jekyll version compatible with GitHub Pages
gem "jekyll", "~> 3.9.0"

# GitHub Pages gem (includes compatible versions of all plugins)
gem "github-pages", group: :jekyll_plugins

# Ruby 3.4 compatibility - these gems were moved out of default gems
gem "csv"
gem "base64"
gem "bigdecimal"
gem "webrick"
gem "fiddle"

# Jekyll plugins (GitHub Pages compatible)
group :jekyll_plugins do
  gem "jekyll-sitemap"
  gem "jekyll-seo-tag"
  gem "jekyll-feed"
end

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Note: wdm gem removed to avoid Windows compilation issues
# File watching will still work, just without the performance optimization
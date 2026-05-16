# Skip's Personal Portfolio Site

## Adapted from

- 

### Prerequisites

Before you begin, make sure you have:

- **Ruby** - `sudo apt install ruby-full -y`
- **Bundler** - `sudo gem install bundler`

### Local Development Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/skipmcgee/skipmcgee.github.io
   cd skipmcgee.github.io
   ```

2. **Install dependencies**
   ```bash
   mkdir /tmp/bundle_cache
   export BUNDLE_PATH=/tmp/bundle_cache
   bundle install
   ```

3. **Start the development server**
   ```bash
   bundle exec jekyll serve --incremental
   ```

### Updates

``` bash
bundle update --bundler
bundle update
```

### Images

<p float="middle">
  <img src="/assets/img/hunter1.jpg" width="26%" title="Hillside in Northern Arizona" />
  <img src="/assets/img/thelooters.jpg" width="44%" title="The 'Looters' (minus 4)" /> 
  <img src="/assets/img/deer.jpg" width="26%" title="Deer" /> 
</p>

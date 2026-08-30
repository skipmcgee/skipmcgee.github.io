document.addEventListener('DOMContentLoaded', () => {
    const photos = window.GALLERY_PHOTOS || [];
    const lightbox = document.getElementById('lightbox');
    if (!lightbox || !photos.length) return;

    const cards = document.querySelectorAll('.gallery-card');
    const imageEl = document.getElementById('lightbox-image');
    const titleEl = document.getElementById('lightbox-title');
    const descEl = document.getElementById('lightbox-description');
    const tagEl = document.getElementById('lightbox-tag');
    const currentEl = document.getElementById('lightbox-current');
    const totalEl = document.getElementById('lightbox-total');
    const closeBtn = lightbox.querySelector('.lightbox-close');
    const prevBtn = lightbox.querySelector('.lightbox-prev');
    const nextBtn = lightbox.querySelector('.lightbox-next');

    let currentIndex = 0;
    let lastFocused = null;

    totalEl.textContent = photos.length;

    function render(index) {
        const photo = photos[index];
        imageEl.src = photo.image;
        imageEl.alt = photo.alt;
        titleEl.textContent = photo.title;
        descEl.textContent = photo.description;
        tagEl.textContent = photo.tag;
        currentEl.textContent = index + 1;
    }

    function open(index) {
        currentIndex = index;
        render(currentIndex);
        lastFocused = document.activeElement;
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
        closeBtn.focus();
    }

    function close() {
        lightbox.classList.remove('open');
        lightbox.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
        if (lastFocused) lastFocused.focus();
    }

    function show(delta) {
        currentIndex = (currentIndex + delta + photos.length) % photos.length;
        render(currentIndex);
    }

    cards.forEach(card => {
        card.addEventListener('click', () => open(parseInt(card.dataset.index, 10)));
    });

    lightbox.querySelectorAll('[data-close]').forEach(el => {
        el.addEventListener('click', close);
    });

    prevBtn.addEventListener('click', () => show(-1));
    nextBtn.addEventListener('click', () => show(1));

    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('open')) return;
        if (e.key === 'Escape') close();
        if (e.key === 'ArrowLeft') show(-1);
        if (e.key === 'ArrowRight') show(1);
    });
});

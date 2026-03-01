// --------------------
// --- Gallery Folders & State --- 
// --------------------
const galleryFolders = [
    { id: 'yildiz', title: 'Yıldız Sarayı', folder: 'yildiz', bgm: ['audio/bgm1.mp3', 'audio/bgm2.mp3', 'audio/bgm3.mp3'] },
    { id: 'dolma', title: 'Dolmabahçe Sarayı', folder: 'dolma', bgm: ['audio/bgm1.mp3', 'audio/bgm2.mp3', 'audio/bgm3.mp3'] },
    { id: 'besiktas', title: 'Beşiktaş', folder: 'besiktas', bgm: ['audio/bgm1.mp3', 'audio/bgm2.mp3', 'audio/bgm3.mp3'] },
    { id: 'deniz', title: 'Deniz Müzesi', folder: 'deniz', bgm: ['audio/bgm1.mp3', 'audio/bgm2.mp3', 'audio/bgm3.mp3'] }
];

let currentSection = 'yildiz';
let isTransitioning = false;

// --------------------
// --- Audio Controller --- 
// --------------------
const audio = {
    bgm: null,
    sfx: null,
    playBGMPlaylist(tracks) {
        if (!tracks?.length) return;
        let index = 0;
        if (audio.bgm) audio.bgm.pause();

        function playNext() {
            audio.bgm = new Audio(tracks[index]);
            audio.bgm.volume = 0.5;
            audio.bgm.play();
            audio.bgm.onended = () => {
                index = (index + 1) % tracks.length;
                playNext();
            };
        }

        playNext();
    },
    pauseBGM() { if (audio.bgm) audio.bgm.pause(); },
    resumeBGM() { if (audio.bgm) audio.bgm.play(); },
    playSFX(src) {
        if (audio.sfx) audio.sfx.pause();
        audio.sfx = new Audio(src);
        audio.sfx.volume = 1;
        audio.sfx.play();
    }
};

// --------------------
// --- Transition Overlay --- 
// --------------------
function createTransitionOverlay() {
    const overlay = document.createElement('div');
    overlay.id = 'transition-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = 0;
    overlay.style.zIndex = 10001;
    overlay.style.background = 'linear-gradient(135deg, #fdf6e3 0%, #d2980f 100%)';
    overlay.style.display = 'flex';
    overlay.style.flexDirection = 'column';
    overlay.style.alignItems = 'center';
    overlay.style.justifyContent = 'center';
    overlay.style.transition = 'opacity 0.7s cubic-bezier(.4,2,.6,1)';
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = 'none';

    const icon = document.createElement('img');
    icon.className = 'palace-icon';
    icon.style.width = '120px';
    icon.style.height = '120px';
    icon.style.opacity = 0;
    icon.style.transition = 'opacity 0.5s cubic-bezier(.4,2,.6,1)';
    overlay.appendChild(icon);

    const progressContainer = document.createElement('div');
    progressContainer.style.width = '200px';
    progressContainer.style.height = '10px';
    progressContainer.style.background = '#ccc';
    progressContainer.style.marginTop = '1rem';
    progressContainer.style.borderRadius = '5px';
    progressContainer.style.overflow = 'hidden';

    const progressBar = document.createElement('div');
    progressBar.className = 'transition-progress';
    progressBar.style.width = '0%';
    progressBar.style.height = '100%';
    progressBar.style.background = '#4caf50';
    progressContainer.appendChild(progressBar);

    overlay.appendChild(progressContainer);

    document.body.appendChild(overlay);
    return overlay;
}
const transitionOverlay = createTransitionOverlay();

function showTransition(section, onDone, progressCallback) {
    isTransitioning = true;

    const icon = transitionOverlay.querySelector('.palace-icon');
    const progressBar = transitionOverlay.querySelector('.transition-progress');
    transitionOverlay.style.opacity = 1;
    transitionOverlay.style.pointerEvents = 'auto';
    icon.src = `images/${section.folder}/icon.webp`;
    icon.alt = section.title;
    icon.style.opacity = 0;
    progressBar.style.width = '0%';

    audio.pauseBGM();
    audio.playSFX('audio/sfx.mp3');

    function fadeInIcon() {
        icon.style.opacity = 1;
        setTimeout(fadeOutIconStart, 1300);
    }

    function fadeOutIconStart() {
        icon.style.opacity = 0;
        if (progressCallback) progressCallback(progressBar, hideOverlay);
        else hideOverlay();
    }

    function hideOverlay() {
        transitionOverlay.style.opacity = 0;
        transitionOverlay.style.pointerEvents = 'none';
        setTimeout(finishTransition, 600);
    }

    function finishTransition() {
        isTransitioning = false;
        if (onDone) onDone();
    }

    setTimeout(fadeInIcon, 100);
}

// --------------------
// --- Section Tabs ---
// --------------------
function createSectionTabs() {
    const tabBar = document.createElement('div');
    tabBar.id = 'section-tabs';
    tabBar.style.display = 'flex';
    tabBar.style.justifyContent = 'center';
    tabBar.style.gap = '2rem';
    tabBar.style.margin = '2rem 0';

    galleryFolders.forEach(sec => {
        const btn = document.createElement('button');
        btn.textContent = sec.title;
        btn.dataset.section = sec.id;
        btn.className = sec.id === currentSection ? 'active-tab' : '';
        btn.addEventListener('click', async () => {
            if (isTransitioning || currentSection === sec.id) return;

            showTransition(sec, () => {
                currentSection = sec.id;
                updateTabs();
                renderGallery(sec);
                audio.playBGMPlaylist(sec.bgm);
            }, async (progressBar, done) => {
                const images = await fetchImagesForFolder(sec);
                const gallery = document.getElementById('gallery');
                gallery.innerHTML = '';
                gallery.appendChild(createGallerySection({ title: sec.title, images }));
                waitForAllImagesToLoad(progressBar, done);
            });
        });
        tabBar.appendChild(btn);
    });

    return tabBar;
}

function updateTabs() {
    document.querySelectorAll('#section-tabs button').forEach(btn => {
        btn.classList.toggle('active-tab', btn.dataset.section === currentSection);
    });
}

// --------------------
// --- Gallery Rendering & Utilities ---
// --------------------
async function renderGallery(secObj) {
    const gallery = document.getElementById('gallery');
    gallery.innerHTML = '';

    const images = secObj.images || await fetchImagesForFolder(secObj);
    secObj.images = images;

    gallery.appendChild(createGallerySection({ title: secObj.title, images }));
    waitForAllImagesToLoad();
}

function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = image.src;
    item.appendChild(img);

    return item;
}

function createGallerySection(section) {
    const sectionDiv = document.createElement('section');
    sectionDiv.className = 'gallery-section';

    const title = document.createElement('div');
    title.className = 'gallery-section-title';
    title.textContent = section.title;
    sectionDiv.appendChild(title);

    const subgroups = [...new Set(section.images.map(img => img.subgroup))];
    for (let sub of subgroups) {
        if (sub) {
            const subTitle = document.createElement('div');
            subTitle.className = 'gallery-subgroup-title';
            subTitle.textContent = sub;
            sectionDiv.appendChild(subTitle);
        }

        const grid = document.createElement('div');
        grid.className = 'gallery-grid';
        section.images
            .filter(img => img.subgroup === sub)
            .forEach(img => grid.appendChild(createGalleryItem(img)));
        sectionDiv.appendChild(grid);
    }

    return sectionDiv;
}

// --------------------
// --- Fetch Images ---
// --------------------
async function fetchImagesForFolder(folderObj) {
    const imageConfig = {
        yildiz: [
            { prefix: 'yildiz_i', count: 45, subgroup: 'İç Mimari' },
            { prefix: 'yildiz_o', count: 27, subgroup: 'Dış Mimari' },
            { prefix: 'bahce_', count: 8, subgroup: 'Bahçe' }
        ],
        dolma: [
            { prefix: 'dolma_i', count: 75, subgroup: 'İç Mimari' },
            { prefix: 'dolma_o', count: 10, subgroup: 'Dış Mimari' }
        ],
        besiktas: [{ prefix: 'besiktas_', count: 17, subgroup: '' }],
        deniz: [{ prefix: 'deniz_muzesi_', count: 35, subgroup: '' }]
    };

    const images = [];
    for (const { prefix, count, subgroup } of imageConfig[folderObj.id] || []) {
        for (let i = 1; i <= count; i++) {
            images.push({ src: `images/${folderObj.folder}/${prefix}${i}.webp`, subgroup });
        }
    }
    return images;
}

// --------------------
// --- Image Loader ---
// --------------------
function waitForAllImagesToLoad(progressBar = null, doneCallback = null) {
    const imgElements = Array.from(document.querySelectorAll('.gallery-item img'));
    if (imgElements.length === 0) { 
        if (doneCallback) doneCallback(); 
        return; 
    }

    let loadedCount = 0;
    const total = imgElements.length;

    function updateProgress() {
        const percent = Math.round((loadedCount / total) * 100);
        if (progressBar) progressBar.style.width = percent + '%';
    }

    function checkDone() {
        loadedCount++;
        updateProgress();
        if (loadedCount === total) {
            hideLoadingOverlay();
            if (doneCallback) doneCallback();
        }
    }

    updateProgress();
    imgElements.forEach(img => {
        if (img.complete) checkDone();
        else {
            img.addEventListener('load', checkDone, { once: true });
            img.addEventListener('error', checkDone, { once: true });
        }
    });
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        setTimeout(() => overlay.style.display = 'none', 500);
    }
}

// --------------------
// --- Zoom Modal ---
// --------------------
document.addEventListener('DOMContentLoaded', async () => {
    const zoomModal = document.getElementById('zoom-modal');
    const zoomImg = zoomModal.querySelector('img');
    const closeBtn = zoomModal.querySelector('.close-btn');

    zoomModal.addEventListener('click', e => {
        if (e.target === zoomModal || e.target === closeBtn) closeZoom();
    });

    document.addEventListener('keydown', e => {
        if (zoomModal.classList.contains('active') && (e.key === 'Escape' || e.key === 'Esc')) {
            closeZoom();
        }
    });

    function closeZoom() {
        zoomModal.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(() => { zoomImg.src = ''; zoomImg.alt = ''; }, 350);
    }
});

// --------------------
// --- DOMContentLoaded: INIT ---
// --------------------
document.addEventListener('DOMContentLoaded', async () => {
    // --- CD Player & BGM ---
    const cdIcon = document.querySelector('.cd-icon');
    const bgmSelector = document.getElementById('bgm-selector');

    if (bgmSelector) {
        bgmSelector.addEventListener('change', () => {
            audio.playBGMPlaylist([bgmSelector.value]);
            cdIcon.style.animationPlayState = 'running';
        });
    }

    cdIcon?.addEventListener('click', () => {
        if (!audio.bgm) return;
        if (audio.bgm.paused) {
            audio.resumeBGM();
            cdIcon.style.animationPlayState = 'running';
        } else {
            audio.pauseBGM();
            cdIcon.style.animationPlayState = 'paused';
        }
    });

    // --- Gallery ---
    const header = document.querySelector('header');
    const tabs = createSectionTabs();
    header.after(tabs);

    const secObj = galleryFolders.find(s => s.id === currentSection);
    secObj.images = await fetchImagesForFolder(secObj);

    const gallery = document.getElementById('gallery');
    gallery.appendChild(createGallerySection({ title: secObj.title, images: secObj.images }));

    waitForAllImagesToLoad();
    audio.playBGMPlaylist(secObj.bgm);
});

// --------------------
// --- Credits Modal Logic --- 
// --------------------
function openCredits() {
    const creditsHTML = `
        <img src="images/credits.webp" alt="Credits 1">
        <p>Ege Toprakal (10/D), Berk Varlı (10/D), Kıvanç Bozik (10/D), Sarp Çetinsoylu (11/D)</p>

        <img src="images/credits2.webp" alt="Credits 2">
        <p>Berk Varlı (10/D), Kıvanç Bozik (10/D), Sarp Çetinsoylu (11/D)</p>
    `;
    document.getElementById('credits-body').innerHTML = creditsHTML;
    document.getElementById('credits-modal').classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeCredits() {
    document.getElementById('credits-modal').classList.remove('active');
    document.body.style.overflow = '';
}

document.querySelector('.open-credits').addEventListener('click', openCredits);
document.querySelector('.close-credits').addEventListener('click', closeCredits);
document.getElementById('credits-modal').addEventListener('click', e => {
    if (e.target.id === 'credits-modal') closeCredits();
});
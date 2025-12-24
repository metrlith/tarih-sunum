// Loading screen animation
window.addEventListener('load', function() {
    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('fade-out');
        setTimeout(() => {
            document.getElementById('loadingScreen').style.display = 'none';
        }, 500);
    }, 1500);
});

// Add sparkles randomly
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.className = 'sparkle';
    sparkle.style.left = Math.random() * 100 + '%';
    sparkle.style.top = Math.random() * 100 + '%';
    sparkle.style.animationDelay = Math.random() * 3 + 's';
    document.body.appendChild(sparkle);
    
    setTimeout(() => {
        sparkle.remove();
    }, 3000);
}

// Create sparkles periodically
setInterval(createSparkle, 1200);

const imageGroups = {
    'bahçe': Array.from({length: 8}, (_, i) => `images/bahçe_${i + 1}.jpg`),
    'beşiktaş': Array.from({length: 17}, (_, i) => `images/beşiktaş_${i + 1}.jpg`),
    'deniz_müzesi': Array.from({length: 35}, (_, i) => `images/deniz_müzesi_${i + 1}.jpg`),
    'yıldız': [
        ...Array.from({length: 45}, (_, i) => {
            if (i === 45) return 'images/yıldız_i46.mp4';
            return `images/yıldız_i${i + 1}.jpg`;
        }),
        ...Array.from({length: 27}, (_, i) => {
            if (i === 27) return 'images/yıldız_o28.mp4';
            return `images/yıldız_o${i + 1}.jpg`;
        })
    ]
};

const imageDescriptions = {
    // Bahçe
    'images/bahçe_1.jpg': 'Yıldız Sarayı bahçesinden bir görünüm.',
    'images/bahçe_2.jpg': 'Bahçedeki tarihi ağaçlar.',
    'images/bahçe_3.jpg': 'Saray bahçesindeki yürüyüş yolu.',
    'images/bahçe_4.jpg': 'Çiçeklerle süslenmiş bir köşe.',
    'images/bahçe_5.jpg': 'Bahçede bir havuz ve çevresi.',
    'images/bahçe_6.jpg': 'Tarihi duvarlar ve bahçe bitkileri.',
    'images/bahçe_7.jpg': 'Gölgelik alan ve oturma bankları.',
    'images/bahçe_8.jpg': 'Bahçeden saraya bakış.',

    // Beşiktaş
    'images/beşiktaş_1.jpg': 'Beşiktaş meydanından bir kare.',
    'images/beşiktaş_2.jpg': 'Vapur iskelesi ve çevresi.',
    'images/beşiktaş_3.jpg': 'Beşiktaş’ta bir sokak manzarası.',
    'images/beşiktaş_4.jpg': 'Tarihi bir bina önünde.',
    'images/beşiktaş_5.jpg': 'Kaldırımda yürüyen insanlar.',
    'images/beşiktaş_6.jpg': 'Beşiktaş’ta bir kafe.',
    'images/beşiktaş_7.jpg': 'Deniz kenarında gün batımı.',
    'images/beşiktaş_8.jpg': 'Beşiktaş’ta bir park.',
    'images/beşiktaş_9.jpg': 'Sahil boyunca yürüyüş yapanlar.',
    'images/beşiktaş_10.jpg': 'Beşiktaş’ta bir anıt.',
    'images/beşiktaş_11.jpg': 'Şehir içi trafik ve araçlar.',
    'images/beşiktaş_12.jpg': 'Beşiktaş’ta bir sanat eseri.',
    'images/beşiktaş_13.jpg': 'Tarihi çeşme.',
    'images/beşiktaş_14.jpg': 'Beşiktaş’ta bir heykel.',
    'images/beşiktaş_15.jpg': 'Sokak lambaları ve akşam görüntüsü.',
    'images/beşiktaş_16.jpg': 'Beşiktaş’ta bir alışveriş caddesi.',
    'images/beşiktaş_17.jpg': 'Beşiktaş’ın kalabalık bir anı.',

    // Deniz Müzesi
    'images/deniz_müzesi_1.jpg': 'Deniz Müzesi girişinden bir görüntü.',
    'images/deniz_müzesi_2.jpg': 'Müzede sergilenen bir gemi modeli.',
    'images/deniz_müzesi_3.jpg': 'Tarihi bir harita sergisi.',
    'images/deniz_müzesi_4.jpg': 'Denizcilik objeleri koleksiyonu.',
    'images/deniz_müzesi_5.jpg': 'Müze içindeki bir tablo.',
    'images/deniz_müzesi_6.jpg': 'Denizci üniformaları sergisi.',
    'images/deniz_müzesi_7.jpg': 'Müze salonunda bir rehber anlatımı.',
    'images/deniz_müzesi_8.jpg': 'Tarihi bir pusula.',
    'images/deniz_müzesi_9.jpg': 'Denizcilik aletleri vitrini.',
    'images/deniz_müzesi_10.jpg': 'Müze koridorunda yürüyüş.',
    'images/deniz_müzesi_11.jpg': 'Bir deniz haritası detayı.',
    'images/deniz_müzesi_12.jpg': 'Müzede bir çocuk ziyaretçi.',
    'images/deniz_müzesi_13.jpg': 'Denizcilik temalı bir tablo.',
    'images/deniz_müzesi_14.jpg': 'Müze bahçesinden bir kare.',
    'images/deniz_müzesi_15.jpg': 'Tarihi bir gemi maketi.',
    'images/deniz_müzesi_16.jpg': 'Deniz Müzesi’nin dış cephesi.',
    'images/deniz_müzesi_17.jpg': 'Müze giriş kapısı.',
    'images/deniz_müzesi_18.jpg': 'Denizcilik araçları sergisi.',
    'images/deniz_müzesi_19.jpg': 'Müze salonunda bir etkinlik.',
    'images/deniz_müzesi_20.jpg': 'Denizci heykeli.',
    'images/deniz_müzesi_21.jpg': 'Müze içindeki bir pano.',
    'images/deniz_müzesi_22.jpg': 'Denizcilik tarihi anlatımı.',
    'images/deniz_müzesi_23.jpg': 'Bir gemi maketi detayı.',
    'images/deniz_müzesi_24.jpg': 'Müze ziyaretçileri.',
    'images/deniz_müzesi_25.jpg': 'Denizcilik objeleri.',
    'images/deniz_müzesi_26.jpg': 'Müze salonunda bir köşe.',
    'images/deniz_müzesi_27.jpg': 'Tarihi bir tablo.',
    'images/deniz_müzesi_28.jpg': 'Denizcilik haritaları.',
    'images/deniz_müzesi_29.jpg': 'Müze içindeki bir sergi.',
    'images/deniz_müzesi_30.jpg': 'Denizcilik temalı bir köşe.',
    'images/deniz_müzesi_31.jpg': 'Müze bahçesinde bir etkinlik.',
    'images/deniz_müzesi_32.jpg': 'Denizcilik araçları.',
    'images/deniz_müzesi_33.jpg': 'Müze salonunda bir rehber.',
    'images/deniz_müzesi_34.jpg': 'Denizcilik tarihi objeleri.',
    'images/deniz_müzesi_35.jpg': 'Müze çıkışından bir görüntü.',

    // Yıldız Sarayı
    'images/yıldız_i1.jpg': 'Yıldız Sarayı iç mekanından bir görünüm.',
    'images/yıldız_i2.jpg': 'Sarayın tarihi mobilyaları.',
    'images/yıldız_i3.jpg': 'Saray içindeki bir tablo.',
    'images/yıldız_i4.jpg': 'Yıldız Sarayı’nın tavan süslemeleri.',
    'images/yıldız_i5.jpg': 'Saray içindeki bir avize.',
    'images/yıldız_i6.jpg': 'Yıldız Sarayı iç mekan detayları.',
    'images/yıldız_i7.jpg': 'Saray içindeki bir oturma alanı.',
    'images/yıldız_i8.jpg': 'Yıldız Sarayı’nın iç bahçesi.',
    'images/yıldız_i9.jpg': 'Saray içindeki bir heykel.',
    'images/yıldız_i10.jpg': 'Yıldız Sarayı iç mekan dekorasyonu.',
    'images/yıldız_i11.jpg': 'Saray içindeki bir şömine.',
    'images/yıldız_i12.jpg': 'Yıldız Sarayı iç mekan mobilya detayı.',
    'images/yıldız_i13.jpg': 'Saray içindeki bir sanat eseri.',
    'images/yıldız_i14.jpg': 'Yıldız Sarayı iç mekan aydınlatması.',
    'images/yıldız_i15.jpg': 'Saray içindeki bir oturma grubu.',
    'images/yıldız_i16.jpg': 'Yıldız Sarayı iç mekan halıları.',
    'images/yıldız_i17.jpg': 'Saray içindeki bir masa düzeni.',
    'images/yıldız_i18.jpg': 'Yıldız Sarayı iç mekan duvar süslemeleri.',
    'images/yıldız_i19.jpg': 'Saray içindeki bir vitrin.',
    'images/yıldız_i20.jpg': 'Yıldız Sarayı iç mekan pencereleri.',
    'images/yıldız_i21.jpg': 'Saray içindeki bir avlu.',
    'images/yıldız_i22.jpg': 'Yıldız Sarayı iç mekan tavan detayı.',
    'images/yıldız_i23.jpg': 'Saray içindeki bir oturma köşesi.',
    'images/yıldız_i24.jpg': 'Yıldız Sarayı iç mekan sanat eserleri.',
    'images/yıldız_i25.jpg': 'Saray içindeki bir lamba detayı.',
    'images/yıldız_i26.jpg': 'Yıldız Sarayı iç mekan dekoratif objeler.',
    'images/yıldız_i27.jpg': 'Saray içindeki bir tablo detayı.',
    'images/yıldız_i28.jpg': 'Yıldız Sarayı iç mekan mobilya düzeni.',
    'images/yıldız_i29.jpg': 'Saray içindeki bir heykel detayı.',
    'images/yıldız_i30.jpg': 'Yıldız Sarayı iç mekan aydınlatma detayı.',
    'images/yıldız_i31.jpg': 'Saray içindeki bir oturma alanı detayı.',
    'images/yıldız_i32.jpg': 'Yıldız Sarayı iç mekan halı detayı.',
    'images/yıldız_i33.jpg': 'Saray içindeki bir masa detayı.',
    'images/yıldız_i34.jpg': 'Yıldız Sarayı iç mekan duvar süsleme detayı.',
    'images/yıldız_i35.jpg': 'Saray içindeki bir vitrin detayı.',
    'images/yıldız_i36.jpg': 'Yıldız Sarayı iç mekan pencere detayı.',
    'images/yıldız_i37.jpg': 'Saray içindeki bir avlu detayı.',
    'images/yıldız_i38.jpg': 'Yıldız Sarayı iç mekan tavan süsleme detayı.',
    'images/yıldız_i39.jpg': 'Saray içindeki bir oturma köşesi detayı.',
    'images/yıldız_i40.jpg': 'Yıldız Sarayı iç mekan sanat eseri detayı.',
    'images/yıldız_i41.jpg': 'Saray içindeki bir lamba detayı.',
    'images/yıldız_i42.jpg': 'Yıldız Sarayı iç mekan dekoratif obje detayı.',
    'images/yıldız_i43.jpg': 'Saray içindeki bir tablo detayı.',
    'images/yıldız_i44.jpg': 'Yıldız Sarayı iç mekan mobilya düzeni detayı.',
    'images/yıldız_i45.jpg': 'Saray içindeki bir heykel detayı.',
    'images/yıldız_i46.mp4': 'Yıldız Sarayı iç mekanından kısa bir video.',
    'images/yıldız_o1.jpg': 'Yıldız Sarayı dış mekanından bir görünüm.',
    'images/yıldız_o2.jpg': 'Sarayın dış bahçesi.',
    'images/yıldız_o3.jpg': 'Yıldız Sarayı’nın dış cephesi.',
    'images/yıldız_o4.jpg': 'Saray dışındaki bir heykel.',
    'images/yıldız_o5.jpg': 'Yıldız Sarayı dış mekan detayları.',
    'images/yıldız_o6.jpg': 'Saray dışındaki bir yürüyüş yolu.',
    'images/yıldız_o7.jpg': 'Yıldız Sarayı dış bahçesinden bir kare.',
    'images/yıldız_o8.jpg': 'Saray dışındaki bir oturma alanı.',
    'images/yıldız_o9.jpg': 'Yıldız Sarayı dış mekan bitkileri.',
    'images/yıldız_o10.jpg': 'Saray dışındaki bir çeşme.',
    'images/yıldız_o11.jpg': 'Yıldız Sarayı dış mekan ağaçları.',
    'images/yıldız_o12.jpg': 'Saray dışındaki bir heykel detayı.',
    'images/yıldız_o13.jpg': 'Yıldız Sarayı dış mekan yürüyüş yolu detayı.',
    'images/yıldız_o14.jpg': 'Saray dışındaki bir oturma alanı detayı.',
    'images/yıldız_o15.jpg': 'Yıldız Sarayı dış mekan bitki detayı.',
    'images/yıldız_o16.jpg': 'Saray dışındaki bir çeşme detayı.',
    'images/yıldız_o17.jpg': 'Yıldız Sarayı dış mekan ağaç detayı.',
    'images/yıldız_o18.jpg': 'Saray dışındaki bir heykel detayı.',
    'images/yıldız_o19.jpg': 'Yıldız Sarayı dış mekan yürüyüş yolu detayı.',
    'images/yıldız_o20.jpg': 'Saray dışındaki bir oturma alanı detayı.',
    'images/yıldız_o21.jpg': 'Yıldız Sarayı dış mekan bitki detayı.',
    'images/yıldız_o22.jpg': 'Saray dışındaki bir çeşme detayı.',
    'images/yıldız_o23.jpg': 'Yıldız Sarayı dış mekan ağaç detayı.',
    'images/yıldız_o24.jpg': 'Saray dışındaki bir heykel detayı.',
    'images/yıldız_o25.jpg': 'Yıldız Sarayı dış mekan yürüyüş yolu detayı.',
    'images/yıldız_o26.jpg': 'Saray dışındaki bir oturma alanı detayı.',
    'images/yıldız_o27.jpg': 'Yıldız Sarayı dış mekan bitki detayı.',
    'images/yıldız_o28.mp4': 'Yıldız Sarayı dış mekanından kısa bir video.'
};

function openGallery(location) {
    const modal = document.getElementById('galleryModal');
    const title = document.getElementById('galleryTitle');
    const container = document.getElementById('galleryContainer');
    
    title.textContent = location.charAt(0).toUpperCase() + location.slice(1).replace('_', ' ');
    container.innerHTML = '';
    
    for (const [index, src] of imageGroups[location].entries()) {
        const element = createMediaElement(src, index);
        container.appendChild(element);
    }
    
    modal.style.display = 'block';
}

function createMediaElement(src, index) {
    const isVideo = src.endsWith('.mp4');
    const wrapper = document.createElement('div');
    wrapper.style.display = 'flex';
    wrapper.style.flexDirection = 'column';
    wrapper.style.alignItems = 'center';

    const element = document.createElement(isVideo ? 'video' : 'img');
    element.src = src;
    element.style.animationDelay = (index * 0.05) + 's';

    if (isVideo) {
        element.controls = true;
        element.muted = true;
        element.preload = 'metadata';
    } else {
        element.alt = `Galeri fotoğrafı ${index + 1}`;
        element.onerror = function() {
            this.style.display = 'none';
        };
    }

    element.onclick = () => window.open(src, '_blank');
    wrapper.appendChild(element);

    // Add description
    const desc = document.createElement('div');
    desc.className = 'image-description';
    desc.textContent = imageDescriptions[src] || '';
    desc.style.marginTop = '8px';
    desc.style.fontSize = '14px';
    desc.style.color = '#444';
    desc.style.textAlign = 'center';
    wrapper.appendChild(desc);

    return wrapper;
}

function handleKeyDown(event, location) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openGallery(location);
    }
}

function handleCloseKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        closeGallery();
    }
}

function closeGallery() {
    document.getElementById('galleryModal').style.display = 'none';
}

// Close modal when clicking outside
globalThis.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

function preloadImages() {
    const criticalImages = [
        'images/bahçe_1.jpg', 'images/beşiktaş_1.jpg', 
        'images/deniz_müzesi_1.jpg', 'images/yıldız_i1.jpg'
    ];
    
    for (const src of criticalImages) {
        const img = new Image();
        img.src = src;
    }
}

// Call after loading screen
window.addEventListener('load', function() {
    preloadImages();
});

// Add escape key support
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('galleryModal');
        if (modal.style.display === 'block') {
            closeGallery();
        }
    }
});

// Replace existing animations with intersection observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    }
}, observerOptions);

for (const el of document.querySelectorAll('.location-collage')) {
    observer.observe(el);
}

function openCredits() {
    const modal = document.getElementById('creditsModal');
    modal.style.display = 'block';
    // Load saved names if any
    const saved = localStorage.getItem('creditNames');
    if (saved) document.getElementById('creditNames').value = saved;
}

function closeCredits() {
    document.getElementById('creditsModal').style.display = 'none';
}

// Save names to localStorage
document.getElementById('creditsForm').onsubmit = function(e) {
    e.preventDefault();
    const names = document.getElementById('creditNames').value;
    localStorage.setItem('creditNames', names);
    closeCredits();
};

// Close modal when clicking outside
globalThis.onclick = function(event) {
    const creditsModal = document.getElementById('creditsModal');
    if (event.target === creditsModal) {
        creditsModal.style.display = 'none';
    }
    // Existing gallery modal logic
    const galleryModal = document.getElementById('galleryModal');
    if (event.target === galleryModal) {
        galleryModal.style.display = 'none';
    }
};

// Escape key closes credits modal too
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modal = document.getElementById('creditsModal');
        if (modal.style.display === 'block') {
            closeCredits();
        }
    }
});
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
    'images/bahçe_1.jpg': 'Yıldız Sarayı bahçesinin cam işleme motifleri.',
    'images/bahçe_2.jpg': 'Limonluk - Kasr-ı Hümâyün-u adlı giriş.',
    'images/bahçe_3.jpg': 'Bitkilerden bir görüntü.',
    'images/bahçe_4.jpg': 'Çiçeklerle süslenmiş bir köşe.',
    'images/bahçe_5.jpg': 'Bitkili uzun koridor.',
    'images/bahçe_6.jpg': 'Bu bir Medine gülü.',
    'images/bahçe_7.jpg': 'Bu bir Anforyum bitkisi.',
    'images/bahçe_8.jpg': 'Bahçeyi tanıtan plaket.',

    // Beşiktaş
    'images/beşiktaş_1.jpg': 'Beşiktaş meydanından bir kare.',
    'images/beşiktaş_2.jpg': 'Sultanahmet durağından bir görüntü.',
    'images/beşiktaş_3.jpg': 'Tabelalar! (kim sevmez ki?)',
    'images/beşiktaş_4.jpg': 'Burası: Mimar Sinan Güzel Sanatlar Üniversitesi.',
    'images/beşiktaş_5.jpg': 'Barbaros Hayrettin Paşa`nın türbesi.',
    'images/beşiktaş_6.jpg': 'Meşhur Baruthane Pilavcısı.',
    'images/beşiktaş_7.jpg': 'Beşiktaş Bulvarı.',
    'images/beşiktaş_8.jpg': 'Beşiktaş Bulvarı (ama daha kalabalık).',
    'images/beşiktaş_9.jpg': 'Daha çok tabela!!!',
    'images/beşiktaş_10.jpg': 'Bina içine gömük bir Şok market (ilginç olduğunu düşündük).',
    'images/beşiktaş_11.jpg': 'Atatürk Anıtı.',
    'images/beşiktaş_12.jpg': 'Bir tabela daha.',
    'images/beşiktaş_13.jpg': 'Yahya Kemal Parkı.',
    'images/beşiktaş_14.jpg': 'Parkın içi.',
    'images/beşiktaş_15.jpg': 'Anıtın daha yakın çekimi.',
    'images/beşiktaş_16.jpg': 'Dolmabahçe Sarayı.',
    'images/beşiktaş_17.jpg': 'Dolmabahçe Sarayı`nın bir kapısı (tahminlerimizce).',

    // Deniz Müzesi
    'images/deniz_müzesi_1.jpg': 'Deniz Müzesi girişinden bir görüntü.',
    'images/deniz_müzesi_2.jpg': 'Duvarda asılı bir hat eseri.',
    'images/deniz_müzesi_3.jpg': 'Osmanlı denizcilik arması/sancağı.',
    'images/deniz_müzesi_4.jpg': 'Denizcilik objeleri koleksiyonu.',
    'images/deniz_müzesi_5.jpg': 'Kalyon tipi bir gemi.',
    'images/deniz_müzesi_6.jpg': 'Müzenin giriş sergi bölümü.',
    'images/deniz_müzesi_7.jpg': 'Önemli iki denizcinin heykelleri.',
    'images/deniz_müzesi_8.jpg': 'Daha çok gemi.',
    'images/deniz_müzesi_9.jpg': 'Kadırga tipi büyük bir gemi.',
    'images/deniz_müzesi_10.jpg': 'Türk tarihindeki bütün denizcilerin heykelleri.',
    'images/deniz_müzesi_11.jpg': 'Büyük kürekli bir geminin maketi.',
    'images/deniz_müzesi_12.jpg': 'İçinde padişahın da bulunabileceği türden bir gemi.',
    'images/deniz_müzesi_13.jpg': 'Daha çok gemi.',
    'images/deniz_müzesi_14.jpg': 'Peyk-i Nusret`i tanıtan bir plaket.',
    'images/deniz_müzesi_15.jpg': 'Daha çok gemi.',
    'images/deniz_müzesi_16.jpg': 'Daha çok gemi.',
    'images/deniz_müzesi_17.jpg': 'Daha çok gemi.',
    'images/deniz_müzesi_18.jpg': 'Denizcilik arması.',
    'images/deniz_müzesi_19.jpg': 'Denizcilik arması (ama daha büyük).',
    'images/deniz_müzesi_20.jpg': 'Denizcilik arması (ama kocaman).',
    'images/deniz_müzesi_21.jpg': 'Padişahlı 4 adet gemi.',
    'images/deniz_müzesi_22.jpg': 'Daha çok gemi.',
    'images/deniz_müzesi_23.jpg': 'Başka bir denizcilik arması.',
    'images/deniz_müzesi_24.jpg': 'Üzerinde kuş motifleri olan bir gemi parçası.',
    'images/deniz_müzesi_25.jpg': 'Denizcilik objeleri.',
    'images/deniz_müzesi_26.jpg': 'Silahlar.',
    'images/deniz_müzesi_27.jpg': 'Bir gemi daha.',
    'images/deniz_müzesi_28.jpg': 'Başka bir gemi.',
    'images/deniz_müzesi_29.jpg': 'Önemli denizci maketleri.',
    'images/deniz_müzesi_30.jpg': 'Müzeden dışarı gözüken alan.',
    'images/deniz_müzesi_31.jpg': 'O dönemden kalma bir zincir.',
    'images/deniz_müzesi_32.jpg': 'Denizcilik tabloları.',
    'images/deniz_müzesi_33.jpg': 'Barbaros Hayrettin Paşa`nın sancağı.q',
    'images/deniz_müzesi_34.jpg': 'Birçok dini motif içeren bir kumaş.',
    'images/deniz_müzesi_35.jpg': 'Önemli şahsiyetlerin portreleri.',

    // Yıldız Sarayı
    'images/yıldız_i1.jpg': 'Yıldız Sarayı`nın tavan avizesi.',
    'images/yıldız_i2.jpg': 'Sarayın tarihi bir masası.',
    'images/yıldız_i3.jpg': 'Saray içindeki çeşmeler.',
    'images/yıldız_i4.jpg': 'Yıldız Sarayı’nın mobilyaları.',
    'images/yıldız_i5.jpg': 'Saray içindeki bir oda.',
    'images/yıldız_i6.jpg': 'Saray içindeki bir oturma odası.',
    'images/yıldız_i7.jpg': 'Gösterişli mobilyalar.',
    'images/yıldız_i8.jpg': 'Yıldız Sarayı’nın alt kat merdivenleri.',
    'images/yıldız_i9.jpg': 'Saray içindeki ana salon.',
    'images/yıldız_i10.jpg': 'Sarayın içindeki bir tuvalet (kalite kötü olabilir 🙏).',
    'images/yıldız_i11.jpg': 'Fotoğraf müzesi.',
    'images/yıldız_i12.jpg': 'Müzeden bir kare.',
    'images/yıldız_i13.jpg': 'Tablolar.',
    'images/yıldız_i14.jpg': 'Tablolar.',
    'images/yıldız_i15.jpg': 'Kur`an-ı Kerim.',
    'images/yıldız_i16.jpg': 'Tablolar.',
    'images/yıldız_i17.jpg': 'Tablolar.',
    'images/yıldız_i18.jpg': 'Tablolar.',
    'images/yıldız_i19.jpg': 'Tablolar.',
    'images/yıldız_i20.jpg': 'Tablolar.',
    'images/yıldız_i21.jpg': 'Önemli bir anı gösteren plaket.',
    'images/yıldız_i22.jpg': 'Tablolar.',
    'images/yıldız_i23.jpg': 'Tablolar.',
    'images/yıldız_i24.jpg': 'Kudüs şehrini tanıtan plaket.',
    'images/yıldız_i25.jpg': 'Tablolar.',
    'images/yıldız_i26.jpg': 'Tablolar.',
    'images/yıldız_i27.jpg': 'Tablolar.',
    'images/yıldız_i28.jpg': 'Tablolar.',
    'images/yıldız_i29.jpg': 'Hamidiye Hicaz Demiryolu`nu tanıtan plaket.',
    'images/yıldız_i30.jpg': 'Demiryolunu gösteren resim.',
    'images/yıldız_i31.jpg': 'Saray içindeki bir oturma alanı detayı.',
    'images/yıldız_i32.jpg': 'Yıldız Sarayı cephane deposu.',
    'images/yıldız_i33.jpg': 'Kat 2 ana giriş yeri (kötü kaliteli fotoğraflar için özür dileriz!).',
    'images/yıldız_i34.jpg': 'Sandalyeler.',
    'images/yıldız_i35.jpg': '🪑',
    'images/yıldız_i36.jpg': 'Bu insanlar sandalyeleri seviyorlar...',
    'images/yıldız_i37.jpg': 'Piyanolu bir oda.',
    'images/yıldız_i38.jpg': 'Saraydan dışarının görüntüsü.',
    'images/yıldız_i39.jpg': 'Kadınefendi Dairesi girişi.',
    'images/yıldız_i40.jpg': 'Ana salon #2.',
    'images/yıldız_i41.jpg': 'Bir oturma odası.',
    'images/yıldız_i42.jpg': 'Misafir odası.',
    'images/yıldız_i43.jpg': 'Kocaman yatağı olan bir yatak odası.',
    'images/yıldız_i44.jpg': 'İç mekan mobilya düzeni detayı.',
    'images/yıldız_i45.jpg': 'Çeşme jr.',
    'images/yıldız_i46.mp4': 'Yıldız Sarayı iç mekanından kısa bir video.',
    'images/yıldız_o1.jpg': 'Yıldız Sarayı`na giriş kapıları.',
    'images/yıldız_o2.jpg': 'İşte saray!',
    'images/yıldız_o3.jpg': 'Yıldız Sarayı’nın dış cephesi.',
    'images/yıldız_o4.jpg': 'Saray dışındaki bir yürüme yolu.',
    'images/yıldız_o5.jpg': 'Yıldız Sarayı dış mekan detayları (sarayla alakası yok).',
    'images/yıldız_o6.jpg': 'Çeşme (big boss).',
    'images/yıldız_o7.jpg': 'Küçük Mâbeyn tanıtım plaketi.',
    'images/yıldız_o8.jpg': 'Sarayın diğer bölümüne geçiş (Kadıefendi Dairesi`ne).',
    'images/yıldız_o9.jpg': 'Bu bir gölet.',
    'images/yıldız_o10.jpg': 'Mobilya Müzesi`ne giriş (istemediğiniz kadar koltuk ve sandalye var!).',
    'images/yıldız_o11.jpg': 'Yıldız Sarayı dış mekan parkı.',
    'images/yıldız_o12.jpg': 'Parkın daha detaylı karesi.',
    'images/yıldız_o13.jpg': 'Koca yürekli ağaç...',
    'images/yıldız_o14.jpg': 'Laleler! (Lale Devri`nden özel)',
    'images/yıldız_o15.jpg': 'Yıldız Sarayı dış mekan bitki detayı.',
    'images/yıldız_o16.jpg': 'Saray dışındaki başka bir bitki detayı.',
    'images/yıldız_o17.jpg': 'Köprü ve gölet :)',
    'images/yıldız_o18.jpg': 'Köprü ve gölet #2 :)',
    'images/yıldız_o19.jpg': 'Ağaç köklerinden yapılmış bir çardak.',
    'images/yıldız_o20.jpg': 'Saraydaki canlı ekosistem.',
    'images/yıldız_o21.jpg': 'Vapura giden bina (ayrıca kafe de var).',
    'images/yıldız_o22.jpg': 'Bu bir tavuskuşu!!.',
    'images/yıldız_o23.jpg': 'Başka bir tavuskuşu daha!!.',
    'images/yıldız_o24.jpg': 'Saray dışındaki bir mini-köşk detayı.',
    'images/yıldız_o25.jpg': 'Üsküdar`ı gören bir manzara fotoğrafı.',
    'images/yıldız_o26.jpg': 'Başka bir kare daha.',
    'images/yıldız_o27.jpg': 'Mini-köşk`ün daha yakından bir karesi.',
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

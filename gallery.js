const gallerySections = [
    {
        title: 'Bahçe',
        images: [
            { src: 'images/bahce_1.jpg', desc: 'Yıldız Sarayı bahçesinin cam işleme motifleri.' },
            { src: 'images/bahce_2.jpg', desc: 'Limonluk - Kasr-ı Hümâyün-u adlı giriş.' },
            { src: 'images/bahce_3.jpg', desc: 'Bitkilerden bir görüntü.' },
            { src: 'images/bahce_4.jpg', desc: 'Çiçeklerle süslenmiş bir köşe.' },
            { src: 'images/bahce_5.jpg', desc: 'Bitkili uzun koridor.' },
            { src: 'images/bahce_6.jpg', desc: 'Bu bir Medine gülü.' },
            { src: 'images/bahce_7.jpg', desc: 'Bu bir Anforyum bitkisi.' },
            { src: 'images/bahce_8.jpg', desc: 'Bahçeyi tanıtan plaket.' }
        ]
    },
    {
        title: 'Beşiktaş',
        images: [
            { src: 'images/besiktas_1.jpg', desc: 'Beşiktaş meydanından bir kare.' },
            { src: 'images/besiktas_2.jpg', desc: 'Sultanahmet durağından bir görüntü.' },
            { src: 'images/besiktas_3.jpg', desc: 'Tabelalar! (kim sevmez ki?)' },
            { src: 'images/besiktas_4.jpg', desc: 'Burası: Mimar Sinan Güzel Sanatlar Üniversitesi.' },
            { src: 'images/besiktas_5.jpg', desc: 'Barbaros Hayrettin Paşa\'nın türbesi.' },
            { src: 'images/besiktas_6.jpg', desc: 'Meşhur Baruthane Pilavcısı.' },
            { src: 'images/besiktas_7.jpg', desc: 'Beşiktaş Bulvarı.' },
            { src: 'images/besiktas_8.jpg', desc: 'Beşiktaş Bulvarı (ama daha kalabalık).' },
            { src: 'images/besiktas_9.jpg', desc: 'Daha çok tabela!!!' },
            { src: 'images/besiktas_10.jpg', desc: 'Bina içine gömük bir Şok market (ilginç olduğunu düşündük).' },
            { src: 'images/besiktas_11.jpg', desc: 'Atatürk Anıtı.' },
            { src: 'images/besiktas_12.jpg', desc: 'Bir tabela daha.' },
            { src: 'images/besiktas_13.jpg', desc: 'Yahya Kemal Parkı.' },
            { src: 'images/besiktas_14.jpg', desc: 'Parkın içi.' },
            { src: 'images/besiktas_15.jpg', desc: 'Anıtın daha yakın çekimi.' },
            { src: 'images/besiktas_16.jpg', desc: 'Dolmabahçe Sarayı.' },
            { src: 'images/besiktas_17.jpg', desc: 'Dolmabahçe Sarayı\'nın bir kapısı (tahminlerimizce).' }
        ]
    },
    {
        title: 'Deniz Müzesi',
        images: [
            { src: 'images/deniz_muzesi_1.jpg', desc: 'Deniz Müzesi girişinden bir görüntü.' },
            { src: 'images/deniz_muzesi_2.jpg', desc: 'Duvarda asılı bir hat eseri.' },
            { src: 'images/deniz_muzesi_3.jpg', desc: 'Osmanlı denizcilik arması/sancağı.' },
            { src: 'images/deniz_muzesi_4.jpg', desc: 'Denizcilik objeleri koleksiyonu.' },
            { src: 'images/deniz_muzesi_5.jpg', desc: 'Kalyon tipi bir gemi.' },
            { src: 'images/deniz_muzesi_6.jpg', desc: 'Müzenin giriş sergi bölümü.' },
            { src: 'images/deniz_muzesi_7.jpg', desc: 'Önemli iki denizcinin heykelleri.' },
            { src: 'images/deniz_muzesi_8.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_muzesi_9.jpg', desc: 'Kadırga tipi büyük bir gemi.' },
            { src: 'images/deniz_muzesi_10.jpg', desc: 'Türk tarihindeki bütün denizcilerin heykelleri.' },
            { src: 'images/deniz_muzesi_11.jpg', desc: 'Büyük kürekli bir geminin maketi.' },
            { src: 'images/deniz_muzesi_12.jpg', desc: 'İçinde padişahın da bulunabileceği türden bir gemi.' },
            { src: 'images/deniz_muzesi_13.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_muzesi_14.jpg', desc: 'Peyk-i Nusret\'i tanıtan bir plaket.' },
            { src: 'images/deniz_muzesi_15.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_muzesi_16.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_muzesi_17.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_muzesi_18.jpg', desc: 'Denizcilik arması.' },
            { src: 'images/deniz_muzesi_19.jpg', desc: 'Denizcilik arması (ama daha büyük).' },
            { src: 'images/deniz_muzesi_20.jpg', desc: 'Denizcilik arması (ama kocaman).' },
            { src: 'images/deniz_muzesi_21.jpg', desc: 'Padişahlı 4 adet gemi.' },
            { src: 'images/deniz_muzesi_22.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_muzesi_23.jpg', desc: 'Başka bir denizcilik arması.' },
            { src: 'images/deniz_muzesi_24.jpg', desc: 'Üzerinde kuş motifleri olan bir gemi parçası.' },
            { src: 'images/deniz_muzesi_25.jpg', desc: 'Denizcilik objeleri.' },
            { src: 'images/deniz_muzesi_26.jpg', desc: 'Silahlar.' },
            { src: 'images/deniz_muzesi_27.jpg', desc: 'Bir gemi daha.' },
            { src: 'images/deniz_muzesi_28.jpg', desc: 'Başka bir gemi.' },
            { src: 'images/deniz_muzesi_29.jpg', desc: 'Önemli denizci maketleri.' },
            { src: 'images/deniz_muzesi_30.jpg', desc: 'Müzeden dışarı gözüken alan.' },
            { src: 'images/deniz_muzesi_31.jpg', desc: 'O dönemden kalma bir zincir.' },
            { src: 'images/deniz_muzesi_32.jpg', desc: 'Denizcilik tabloları.' },
            { src: 'images/deniz_muzesi_33.jpg', desc: 'Barbaros Hayrettin Paşa\'nın sancağı.' },
            { src: 'images/deniz_muzesi_34.jpg', desc: 'Birçok dini motif içeren bir kumaş.' },
            { src: 'images/deniz_muzesi_35.jpg', desc: 'Önemli şahsiyetlerin portreleri.' }
        ]
    },
    {
        title: 'Yıldız Sarayı (İç)',
        images: [
            { src: 'images/yildiz_i1.jpg', desc: 'Yıldız Sarayı\'nın tavan avizesi.' },
            { src: 'images/yildiz_i2.jpg', desc: 'Sarayın tarihi bir masası.' },
            { src: 'images/yildiz_i3.jpg', desc: 'Saray içindeki çeşmeler.' },
            { src: 'images/yildiz_i4.jpg', desc: 'Yıldız Sarayı’nın mobilyaları.' },
            { src: 'images/yildiz_i5.jpg', desc: 'Saray içindeki bir oda.' },
            { src: 'images/yildiz_i6.jpg', desc: 'Saray içindeki bir oturma odası.' },
            { src: 'images/yildiz_i7.jpg', desc: 'Gösterişli mobilyalar.' },
            { src: 'images/yildiz_i8.jpg', desc: 'Yıldız Sarayı’nın alt kat merdivenleri.' },
            { src: 'images/yildiz_i9.jpg', desc: 'Saray içindeki ana salon.' },
            { src: 'images/yildiz_i10.jpg', desc: 'Sarayın içindeki bir tuvalet (kalite kötü olabilir 🙏).' },
            { src: 'images/yildiz_i11.jpg', desc: 'Fotoğraf müzesi.' },
            { src: 'images/yildiz_i12.jpg', desc: 'Müzeden bir kare.' },
            { src: 'images/yildiz_i13.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i14.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i15.jpg', desc: 'Kur\'an-ı Kerim.' },
            { src: 'images/yildiz_i16.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i17.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i18.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i19.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i20.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i21.jpg', desc: 'Önemli bir anı gösteren plaket.' },
            { src: 'images/yildiz_i22.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i23.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i24.jpg', desc: 'Kudüs şehrini tanıtan plaket.' },
            { src: 'images/yildiz_i25.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i26.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i27.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i28.jpg', desc: 'Tablolar.' },
            { src: 'images/yildiz_i29.jpg', desc: 'Hamidiye Hicaz Demiryolu\'nu tanıtan plaket.' },
            { src: 'images/yildiz_i30.jpg', desc: 'Demiryolunu gösteren resim.' },
            { src: 'images/yildiz_i31.jpg', desc: 'Saray içindeki bir oturma alanı detayı.' },
            { src: 'images/yildiz_i32.jpg', desc: 'Yıldız Sarayı cephane deposu.' },
            { src: 'images/yildiz_i33.jpg', desc: 'Kat 2 ana giriş yeri (kötü kaliteli fotoğraflar için özür dileriz!).' },
            { src: 'images/yildiz_i34.jpg', desc: 'Sandalyeler.' },
            { src: 'images/yildiz_i35.jpg', desc: '🪑' },
            { src: 'images/yildiz_i36.jpg', desc: 'Bu insanlar sandalyeleri seviyorlar...' },
            { src: 'images/yildiz_i37.jpg', desc: 'Piyanolu bir oda.' },
            { src: 'images/yildiz_i38.jpg', desc: 'Saraydan dışarının görüntüsü.' },
            { src: 'images/yildiz_i39.jpg', desc: 'Kadınefendi Dairesi girişi.' },
            { src: 'images/yildiz_i40.jpg', desc: 'Ana salon #2.' },
            { src: 'images/yildiz_i41.jpg', desc: 'Bir oturma odası.' },
            { src: 'images/yildiz_i42.jpg', desc: 'Misafir odası.' },
            { src: 'images/yildiz_i43.jpg', desc: 'Kocaman yatağı olan bir yatak odası.' },
            { src: 'images/yildiz_i44.jpg', desc: 'İç mekan mobilya düzeni detayı.' },
            { src: 'images/yildiz_i45.jpg', desc: 'Çeşme jr.' }
        ]
    },
    {
        title: 'Yıldız Sarayı (Dış)',
        images: [
            { src: 'images/yildiz_o1.jpg', desc: 'Yıldız Sarayı\'na giriş kapıları.' },
            { src: 'images/yildiz_o2.jpg', desc: 'İşte saray!' },
            { src: 'images/yildiz_o3.jpg', desc: 'Yıldız Sarayı’nın dış cephesi.' },
            { src: 'images/yildiz_o4.jpg', desc: 'Saray dışındaki bir yürüme yolu.' },
            { src: 'images/yildiz_o5.jpg', desc: 'Yıldız Sarayı dış mekan detayları (sarayla alakası yok).' },
            { src: 'images/yildiz_o6.jpg', desc: 'Çeşme (big boss).' },
            { src: 'images/yildiz_o7.jpg', desc: 'Küçük Mâbeyn tanıtım plaketi.' },
            { src: 'images/yildiz_o8.jpg', desc: 'Sarayın diğer bölümüne geçiş (Kadıefendi Dairesi\'ne).' },
            { src: 'images/yildiz_o9.jpg', desc: 'Bu bir gölet.' },
            { src: 'images/yildiz_o10.jpg', desc: 'Mobilya Müzesi\'ne giriş (istemediğiniz kadar koltuk ve sandalye var!).' },
            { src: 'images/yildiz_o11.jpg', desc: 'Yıldız Sarayı dış mekan parkı.' },
            { src: 'images/yildiz_o12.jpg', desc: 'Parkın daha detaylı karesi.' },
            { src: 'images/yildiz_o13.jpg', desc: 'Koca yürekli ağaç...' },
            { src: 'images/yildiz_o14.jpg', desc: 'Laleler! (Lale Devri\'nden özel)' },
            { src: 'images/yildiz_o15.jpg', desc: 'Yıldız Sarayı dış mekan bitki detayı.' },
            { src: 'images/yildiz_o16.jpg', desc: 'Saray dışındaki başka bir bitki detayı.' },
            { src: 'images/yildiz_o17.jpg', desc: 'Köprü ve gölet :)' },
            { src: 'images/yildiz_o18.jpg', desc: 'Köprü ve gölet #2 :)' },
            { src: 'images/yildiz_o19.jpg', desc: 'Ağaç köklerinden yapılmış bir çardak.' },
            { src: 'images/yildiz_o20.jpg', desc: 'Saraydaki canlı ekosistem.' },
            { src: 'images/yildiz_o21.jpg', desc: 'Vapura giden bina (ayrıca kafe de var).' },
            { src: 'images/yildiz_o22.jpg', desc: 'Bu bir tavuskuşu!!' },
            { src: 'images/yildiz_o23.jpg', desc: 'Başka bir tavuskuşu daha!!' },
            { src: 'images/yildiz_o24.jpg', desc: 'Saray dışındaki bir mini-köşk detayı.' },
            { src: 'images/yildiz_o25.jpg', desc: 'Üsküdar\'ı gören bir manzara fotoğrafı.' },
            { src: 'images/yildiz_o26.jpg', desc: 'Başka bir kare daha.' },
            { src: 'images/yildiz_o27.jpg', desc: 'Mini-köşk\'ün daha yakından bir karesi.' }
        ]
    },
    {
        title: 'Hazırlayanlar',
        images: [
            { src: 'images/credits.jpg', desc: 'Sarp Çetinsoylu - 11/D, Ege Toprakal - 10/D, Berk Varlı - 10/D, Kıvanç Bozik - 10/D' }
        ]
    }
];

function createGalleryItem(image) {
    const item = document.createElement('div');
    item.className = 'gallery-item';

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.desc;
    item.appendChild(img);

    const desc = document.createElement('div');
    desc.className = 'desc';
    desc.textContent = image.desc;
    item.appendChild(desc);

    return item;
}

function createGallerySection(section) {
    const sectionDiv = document.createElement('section');
    sectionDiv.className = 'gallery-section';

    const title = document.createElement('div');
    title.className = 'gallery-section-title';
    title.textContent = section.title;
    sectionDiv.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'gallery-grid';
    section.images.forEach(img => {
        grid.appendChild(createGalleryItem(img));
    });
    sectionDiv.appendChild(grid);

    return sectionDiv;
}

function waitForAllImagesToLoad() {
    const imgElements = Array.from(document.querySelectorAll('.gallery-item img'));
    const progressBar = document.querySelector('.loading-progress');
    if (imgElements.length === 0) {
        hideLoadingOverlay();
        return;
    }
    let loadedCount = 0;
    const total = imgElements.length;
    function updateProgress() {
        if (progressBar) {
            const percent = Math.round((loadedCount / total) * 100);
            progressBar.style.width = percent + '%';
        }
    }
    function checkDone() {
        loadedCount++;
        updateProgress();
        if (loadedCount === total) {
            hideLoadingOverlay();
        }
    }
    updateProgress();
    imgElements.forEach(img => {
        if (img.complete) {
            checkDone();
        } else {
            img.addEventListener('load', checkDone, { once: true });
            img.addEventListener('error', checkDone, { once: true });
        }
    });
}

function hideLoadingOverlay() {
    const overlay = document.getElementById('loading-overlay');
    if (overlay) {
        overlay.classList.add('hidden');
        setTimeout(() => {
            overlay.style.display = 'none';
        }, 500);
    }
}

// Zoom modal logic
const zoomModal = document.getElementById('zoom-modal');
const zoomImg = zoomModal.querySelector('img');
const closeBtn = zoomModal.querySelector('.close-btn');

function openZoom(src, alt) {
    zoomImg.src = src;
    zoomImg.alt = alt;
    zoomModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeZoom() {
    zoomModal.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => {
        zoomImg.src = '';
        zoomImg.alt = '';
    }, 350);
}

zoomModal.addEventListener('click', (e) => {
    if (e.target === zoomModal || e.target === closeBtn) {
        closeZoom();
    }
});

document.addEventListener('keydown', (e) => {
    if (zoomModal.classList.contains('active') && (e.key === 'Escape' || e.key === 'Esc')) {
        closeZoom();
    }
});

document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    gallerySections.forEach(section => {
        gallery.appendChild(createGallerySection(section));
    });
    // Wait for all images to load before hiding the overlay
    waitForAllImagesToLoad();

    // Attach click event to gallery images
    document.querySelectorAll('.gallery-item img').forEach(img => {
        img.addEventListener('click', (e) => {
            openZoom(img.src, img.alt);
        });
    });
});

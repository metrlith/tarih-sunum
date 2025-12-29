const gallerySections = [
    {
        title: 'Bahçe',
        images: [
            { src: 'images/bahçe_1.jpg', desc: 'Yıldız Sarayı bahçesinin cam işleme motifleri.' },
            { src: 'images/bahçe_2.jpg', desc: 'Limonluk - Kasr-ı Hümâyün-u adlı giriş.' },
            { src: 'images/bahçe_3.jpg', desc: 'Bitkilerden bir görüntü.' },
            { src: 'images/bahçe_4.jpg', desc: 'Çiçeklerle süslenmiş bir köşe.' },
            { src: 'images/bahçe_5.jpg', desc: 'Bitkili uzun koridor.' },
            { src: 'images/bahçe_6.jpg', desc: 'Bu bir Medine gülü.' },
            { src: 'images/bahçe_7.jpg', desc: 'Bu bir Anforyum bitkisi.' },
            { src: 'images/bahçe_8.jpg', desc: 'Bahçeyi tanıtan plaket.' }
        ]
    },
    {
        title: 'Beşiktaş',
        images: [
            { src: 'images/beşiktaş_1.jpg', desc: 'Beşiktaş meydanından bir kare.' },
            { src: 'images/beşiktaş_2.jpg', desc: 'Sultanahmet durağından bir görüntü.' },
            { src: 'images/beşiktaş_3.jpg', desc: 'Tabelalar! (kim sevmez ki?)' },
            { src: 'images/beşiktaş_4.jpg', desc: 'Burası: Mimar Sinan Güzel Sanatlar Üniversitesi.' },
            { src: 'images/beşiktaş_5.jpg', desc: 'Barbaros Hayrettin Paşa\'nın türbesi.' },
            { src: 'images/beşiktaş_6.jpg', desc: 'Meşhur Baruthane Pilavcısı.' },
            { src: 'images/beşiktaş_7.jpg', desc: 'Beşiktaş Bulvarı.' },
            { src: 'images/beşiktaş_8.jpg', desc: 'Beşiktaş Bulvarı (ama daha kalabalık).' },
            { src: 'images/beşiktaş_9.jpg', desc: 'Daha çok tabela!!!' },
            { src: 'images/beşiktaş_10.jpg', desc: 'Bina içine gömük bir Şok market (ilginç olduğunu düşündük).' },
            { src: 'images/beşiktaş_11.jpg', desc: 'Atatürk Anıtı.' },
            { src: 'images/beşiktaş_12.jpg', desc: 'Bir tabela daha.' },
            { src: 'images/beşiktaş_13.jpg', desc: 'Yahya Kemal Parkı.' },
            { src: 'images/beşiktaş_14.jpg', desc: 'Parkın içi.' },
            { src: 'images/beşiktaş_15.jpg', desc: 'Anıtın daha yakın çekimi.' },
            { src: 'images/beşiktaş_16.jpg', desc: 'Dolmabahçe Sarayı.' },
            { src: 'images/beşiktaş_17.jpg', desc: 'Dolmabahçe Sarayı\'nın bir kapısı (tahminlerimizce).' }
        ]
    },
    {
        title: 'Deniz Müzesi',
        images: [
            { src: 'images/deniz_müzesi_1.jpg', desc: 'Deniz Müzesi girişinden bir görüntü.' },
            { src: 'images/deniz_müzesi_2.jpg', desc: 'Duvarda asılı bir hat eseri.' },
            { src: 'images/deniz_müzesi_3.jpg', desc: 'Osmanlı denizcilik arması/sancağı.' },
            { src: 'images/deniz_müzesi_4.jpg', desc: 'Denizcilik objeleri koleksiyonu.' },
            { src: 'images/deniz_müzesi_5.jpg', desc: 'Kalyon tipi bir gemi.' },
            { src: 'images/deniz_müzesi_6.jpg', desc: 'Müzenin giriş sergi bölümü.' },
            { src: 'images/deniz_müzesi_7.jpg', desc: 'Önemli iki denizcinin heykelleri.' },
            { src: 'images/deniz_müzesi_8.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_müzesi_9.jpg', desc: 'Kadırga tipi büyük bir gemi.' },
            { src: 'images/deniz_müzesi_10.jpg', desc: 'Türk tarihindeki bütün denizcilerin heykelleri.' },
            { src: 'images/deniz_müzesi_11.jpg', desc: 'Büyük kürekli bir geminin maketi.' },
            { src: 'images/deniz_müzesi_12.jpg', desc: 'İçinde padişahın da bulunabileceği türden bir gemi.' },
            { src: 'images/deniz_müzesi_13.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_müzesi_14.jpg', desc: 'Peyk-i Nusret\'i tanıtan bir plaket.' },
            { src: 'images/deniz_müzesi_15.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_müzesi_16.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_müzesi_17.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_müzesi_18.jpg', desc: 'Denizcilik arması.' },
            { src: 'images/deniz_müzesi_19.jpg', desc: 'Denizcilik arması (ama daha büyük).' },
            { src: 'images/deniz_müzesi_20.jpg', desc: 'Denizcilik arması (ama kocaman).' },
            { src: 'images/deniz_müzesi_21.jpg', desc: 'Padişahlı 4 adet gemi.' },
            { src: 'images/deniz_müzesi_22.jpg', desc: 'Daha çok gemi.' },
            { src: 'images/deniz_müzesi_23.jpg', desc: 'Başka bir denizcilik arması.' },
            { src: 'images/deniz_müzesi_24.jpg', desc: 'Üzerinde kuş motifleri olan bir gemi parçası.' },
            { src: 'images/deniz_müzesi_25.jpg', desc: 'Denizcilik objeleri.' },
            { src: 'images/deniz_müzesi_26.jpg', desc: 'Silahlar.' },
            { src: 'images/deniz_müzesi_27.jpg', desc: 'Bir gemi daha.' },
            { src: 'images/deniz_müzesi_28.jpg', desc: 'Başka bir gemi.' },
            { src: 'images/deniz_müzesi_29.jpg', desc: 'Önemli denizci maketleri.' },
            { src: 'images/deniz_müzesi_30.jpg', desc: 'Müzeden dışarı gözüken alan.' },
            { src: 'images/deniz_müzesi_31.jpg', desc: 'O dönemden kalma bir zincir.' },
            { src: 'images/deniz_müzesi_32.jpg', desc: 'Denizcilik tabloları.' },
            { src: 'images/deniz_müzesi_33.jpg', desc: 'Barbaros Hayrettin Paşa\'nın sancağı.' },
            { src: 'images/deniz_müzesi_34.jpg', desc: 'Birçok dini motif içeren bir kumaş.' },
            { src: 'images/deniz_müzesi_35.jpg', desc: 'Önemli şahsiyetlerin portreleri.' }
        ]
    },
    {
        title: 'Yıldız Sarayı (İç)',
        images: [
            { src: 'images/yıldız_i1.jpg', desc: 'Yıldız Sarayı\'nın tavan avizesi.' },
            { src: 'images/yıldız_i2.jpg', desc: 'Sarayın tarihi bir masası.' },
            { src: 'images/yıldız_i3.jpg', desc: 'Saray içindeki çeşmeler.' },
            { src: 'images/yıldız_i4.jpg', desc: 'Yıldız Sarayı’nın mobilyaları.' },
            { src: 'images/yıldız_i5.jpg', desc: 'Saray içindeki bir oda.' },
            { src: 'images/yıldız_i6.jpg', desc: 'Saray içindeki bir oturma odası.' },
            { src: 'images/yıldız_i7.jpg', desc: 'Gösterişli mobilyalar.' },
            { src: 'images/yıldız_i8.jpg', desc: 'Yıldız Sarayı’nın alt kat merdivenleri.' },
            { src: 'images/yıldız_i9.jpg', desc: 'Saray içindeki ana salon.' },
            { src: 'images/yıldız_i10.jpg', desc: 'Sarayın içindeki bir tuvalet (kalite kötü olabilir 🙏).' },
            { src: 'images/yıldız_i11.jpg', desc: 'Fotoğraf müzesi.' },
            { src: 'images/yıldız_i12.jpg', desc: 'Müzeden bir kare.' },
            { src: 'images/yıldız_i13.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i14.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i15.jpg', desc: 'Kur\'an-ı Kerim.' },
            { src: 'images/yıldız_i16.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i17.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i18.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i19.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i20.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i21.jpg', desc: 'Önemli bir anı gösteren plaket.' },
            { src: 'images/yıldız_i22.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i23.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i24.jpg', desc: 'Kudüs şehrini tanıtan plaket.' },
            { src: 'images/yıldız_i25.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i26.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i27.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i28.jpg', desc: 'Tablolar.' },
            { src: 'images/yıldız_i29.jpg', desc: 'Hamidiye Hicaz Demiryolu\'nu tanıtan plaket.' },
            { src: 'images/yıldız_i30.jpg', desc: 'Demiryolunu gösteren resim.' },
            { src: 'images/yıldız_i31.jpg', desc: 'Saray içindeki bir oturma alanı detayı.' },
            { src: 'images/yıldız_i32.jpg', desc: 'Yıldız Sarayı cephane deposu.' },
            { src: 'images/yıldız_i33.jpg', desc: 'Kat 2 ana giriş yeri (kötü kaliteli fotoğraflar için özür dileriz!).' },
            { src: 'images/yıldız_i34.jpg', desc: 'Sandalyeler.' },
            { src: 'images/yıldız_i35.jpg', desc: '🪑' },
            { src: 'images/yıldız_i36.jpg', desc: 'Bu insanlar sandalyeleri seviyorlar...' },
            { src: 'images/yıldız_i37.jpg', desc: 'Piyanolu bir oda.' },
            { src: 'images/yıldız_i38.jpg', desc: 'Saraydan dışarının görüntüsü.' },
            { src: 'images/yıldız_i39.jpg', desc: 'Kadınefendi Dairesi girişi.' },
            { src: 'images/yıldız_i40.jpg', desc: 'Ana salon #2.' },
            { src: 'images/yıldız_i41.jpg', desc: 'Bir oturma odası.' },
            { src: 'images/yıldız_i42.jpg', desc: 'Misafir odası.' },
            { src: 'images/yıldız_i43.jpg', desc: 'Kocaman yatağı olan bir yatak odası.' },
            { src: 'images/yıldız_i44.jpg', desc: 'İç mekan mobilya düzeni detayı.' },
            { src: 'images/yıldız_i45.jpg', desc: 'Çeşme jr.' }
        ]
    },
    {
        title: 'Yıldız Sarayı (Dış)',
        images: [
            { src: 'images/yıldız_o1.jpg', desc: 'Yıldız Sarayı\'na giriş kapıları.' },
            { src: 'images/yıldız_o2.jpg', desc: 'İşte saray!' },
            { src: 'images/yıldız_o3.jpg', desc: 'Yıldız Sarayı’nın dış cephesi.' },
            { src: 'images/yıldız_o4.jpg', desc: 'Saray dışındaki bir yürüme yolu.' },
            { src: 'images/yıldız_o5.jpg', desc: 'Yıldız Sarayı dış mekan detayları (sarayla alakası yok).' },
            { src: 'images/yıldız_o6.jpg', desc: 'Çeşme (big boss).' },
            { src: 'images/yıldız_o7.jpg', desc: 'Küçük Mâbeyn tanıtım plaketi.' },
            { src: 'images/yıldız_o8.jpg', desc: 'Sarayın diğer bölümüne geçiş (Kadıefendi Dairesi\'ne).' },
            { src: 'images/yıldız_o9.jpg', desc: 'Bu bir gölet.' },
            { src: 'images/yıldız_o10.jpg', desc: 'Mobilya Müzesi\'ne giriş (istemediğiniz kadar koltuk ve sandalye var!).' },
            { src: 'images/yıldız_o11.jpg', desc: 'Yıldız Sarayı dış mekan parkı.' },
            { src: 'images/yıldız_o12.jpg', desc: 'Parkın daha detaylı karesi.' },
            { src: 'images/yıldız_o13.jpg', desc: 'Koca yürekli ağaç...' },
            { src: 'images/yıldız_o14.jpg', desc: 'Laleler! (Lale Devri\'nden özel)' },
            { src: 'images/yıldız_o15.jpg', desc: 'Yıldız Sarayı dış mekan bitki detayı.' },
            { src: 'images/yıldız_o16.jpg', desc: 'Saray dışındaki başka bir bitki detayı.' },
            { src: 'images/yıldız_o17.jpg', desc: 'Köprü ve gölet :)' },
            { src: 'images/yıldız_o18.jpg', desc: 'Köprü ve gölet #2 :)' },
            { src: 'images/yıldız_o19.jpg', desc: 'Ağaç köklerinden yapılmış bir çardak.' },
            { src: 'images/yıldız_o20.jpg', desc: 'Saraydaki canlı ekosistem.' },
            { src: 'images/yıldız_o21.jpg', desc: 'Vapura giden bina (ayrıca kafe de var).' },
            { src: 'images/yıldız_o22.jpg', desc: 'Bu bir tavuskuşu!!.' },
            { src: 'images/yıldız_o23.jpg', desc: 'Başka bir tavuskuşu daha!!.' },
            { src: 'images/yıldız_o24.jpg', desc: 'Saray dışındaki bir mini-köşk detayı.' },
            { src: 'images/yıldız_o25.jpg', desc: 'Üsküdar\'ı gören bir manzara fotoğrafı.' },
            { src: 'images/yıldız_o26.jpg', desc: 'Başka bir kare daha.' },
            { src: 'images/yıldız_o27.jpg', desc: 'Mini-köşk\'ün daha yakından bir karesi.' }
        ]
    },
    {
        title: 'Hazırlayanlar',
        images: [
            { src: 'images/credits.jpg', desc: 'Sarp Çetinsoylu - 11/D, Ege Toprakal - 10/D, Berk Varlı - 10/D, Kıvanç Bozik - 10/D' },
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

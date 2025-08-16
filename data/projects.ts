export interface Project {
  id: string
  title: string
  location: string
  description: string
  year: number
  image: string
  images: string[]
  category: 'fabrika' | 'hastane' | 'okul' | 'otel' | 'ticari' | 'spor' | 'nukleer' | 'yol' | 'arastirma'
  area?: string
  status: 'tamamlandi' | 'devam-ediyor'
}

export const projects: Project[] = [
  {
    id: '1',
    title: 'Akkuyu Nükleer Santral Güvenlik Yolu',
    location: 'Mersin, Gülnar',
    description: 'NEPT 9.2 Güvenlik Yolu projesi - Nükleer santral güvenlik altyapısı',
    year: 2022,
    image: '/projects/AKKUYU NÜKLEER SANTRAL GÜVENLİK YOLU/NEPT 9.2 GÜVENLİK YOLU/IMG_20220316_170321.webp',
    images: [
      '/projects/AKKUYU NÜKLEER SANTRAL GÜVENLİK YOLU/NEPT 9.2 GÜVENLİK YOLU/IMG_20220316_170321.webp',
      '/projects/AKKUYU NÜKLEER SANTRAL GÜVENLİK YOLU/NEPT 9.2 GÜVENLİK YOLU/IMG_20220316_170329.webp',
      '/projects/AKKUYU NÜKLEER SANTRAL GÜVENLİK YOLU/NEPT 9.2 GÜVENLİK YOLU/IMG_20220316_155357.webp',
      '/projects/AKKUYU NÜKLEER SANTRAL GÜVENLİK YOLU/NEPT 9.2 GÜVENLİK YOLU/IMG_20220323_170915.webp',
      '/projects/AKKUYU NÜKLEER SANTRAL GÜVENLİK YOLU/NEPT 9.2 GÜVENLİK YOLU/IMG_20220323_164703.webp',
      '/projects/AKKUYU NÜKLEER SANTRAL GÜVENLİK YOLU/NEPT 9.2 GÜVENLİK YOLU/IMG_20220323_164710.webp'
    ],
    category: 'nukleer',
    area: 'Güvenlik Yolu',
    status: 'tamamlandi'
  },
  {
    id: '2',
    title: 'Akkuyu Nükleer Santral Radyasyon Ölçüm Merkezi',
    location: 'Mersin, Gülnar',
    description: 'Nükleer santral radyasyon ölçüm ve kontrol merkezi inşaatı',
    year: 2022,
    image: '/projects/AKKUYU NÜKLEER SANTRAL RADYASYON ÖLÇÜM MERKEZİ/IMG_20231231_122303.webp',
    images: [
      '/projects/AKKUYU NÜKLEER SANTRAL RADYASYON ÖLÇÜM MERKEZİ/IMG_20231231_122303.webp',
      '/projects/AKKUYU NÜKLEER SANTRAL RADYASYON ÖLÇÜM MERKEZİ/IMG_20230228_181752.webp',
      '/projects/AKKUYU NÜKLEER SANTRAL RADYASYON ÖLÇÜM MERKEZİ/IMG-20240611-WA0007.webp',
      '/projects/AKKUYU NÜKLEER SANTRAL RADYASYON ÖLÇÜM MERKEZİ/IMG-20240626-WA0007.webp',
      '/projects/AKKUYU NÜKLEER SANTRAL RADYASYON ÖLÇÜM MERKEZİ/IMG-20240626-WA0006.webp',
      '/projects/AKKUYU NÜKLEER SANTRAL RADYASYON ÖLÇÜM MERKEZİ/IMG-20240605-WA0017.webp'
    ],
    category: 'nukleer',
    area: 'Radyasyon Ölçüm Merkezi',
    status: 'tamamlandi'
  },
  {
    id: '3',
    title: 'İnönü Üniversitesi Açık Olimpik Havuz',
    location: 'Malatya, Merkez',
    description: 'Olimpik standartlarda açık yüzme havuzu ve spor tesisi',
    year: 2022,
    image: '/projects/İNÖNÜ ÜNVİVERSİTESİ AÇIK OLİMPİK HAVUZ/IMG_3920.webp',
    images: [
      '/projects/İNÖNÜ ÜNVİVERSİTESİ AÇIK OLİMPİK HAVUZ/IMG_3920.webp',
      '/projects/İNÖNÜ ÜNVİVERSİTESİ AÇIK OLİMPİK HAVUZ/IMG_3919.webp',
      '/projects/İNÖNÜ ÜNVİVERSİTESİ AÇIK OLİMPİK HAVUZ/IMG_3918.webp',
      '/projects/İNÖNÜ ÜNVİVERSİTESİ AÇIK OLİMPİK HAVUZ/IMG_3917.webp',
      '/projects/İNÖNÜ ÜNVİVERSİTESİ AÇIK OLİMPİK HAVUZ/IMG_3866.webp',
      '/projects/İNÖNÜ ÜNVİVERSİTESİ AÇIK OLİMPİK HAVUZ/IMG_3865.webp'
    ],
    category: 'spor',
    area: 'Olimpik Havuz Kompleksi',
    status: 'tamamlandi'
  },
  {
    id: '4',
    title: 'Manisa Turgutlu İlçesi Fatih Caddesi Yol ve Kaldırım Düzenleme',
    location: 'Manisa, Turgutlu',
    description: 'İlçe merkezi yol ve kaldırım yenileme projesi',
    year: 2022,
    image: '/projects/MANİSA TURGUTLU İLÇESİ FATİH CADDESİ YOL VE KALDIRIM DÜZENLEME/projemedyafotograf_209_99a7fcbc75064d0d93bf28c493332221.webp',
    images: [
      '/projects/MANİSA TURGUTLU İLÇESİ FATİH CADDESİ YOL VE KALDIRIM DÜZENLEME/projemedyafotograf_209_99a7fcbc75064d0d93bf28c493332221.webp',
      '/projects/MANİSA TURGUTLU İLÇESİ FATİH CADDESİ YOL VE KALDIRIM DÜZENLEME/projemedyafotograf_209_99a7fcbc75064d0d93bf28c493332221-1024x682.webp',
      '/projects/MANİSA TURGUTLU İLÇESİ FATİH CADDESİ YOL VE KALDIRIM DÜZENLEME/Ekran-Resmi-2020-10-16-15.22.30-315x237.webp'
    ],
    category: 'yol',
    area: 'Fatih Caddesi',
    status: 'tamamlandi'
  },
  {
    id: '5',
    title: 'Manisa Yunusemre İlçesi Tevfik Lav Spor Tesisleri',
    location: 'Manisa, Yunusemre',
    description: 'Çok amaçlı spor tesisi ve sosyal tesis kompleksi',
    year: 2022,
    image: '/projects/MANİSA YUNUSEMRE İLÇESİ TEVFİK LAV SPOR TESİSLERİ/Ekran-Resmi-2020-10-16-15.34.34-538x306.webp',
    images: [
      '/projects/MANİSA YUNUSEMRE İLÇESİ TEVFİK LAV SPOR TESİSLERİ/Ekran-Resmi-2020-10-16-15.34.34-538x306.webp',
      '/projects/MANİSA YUNUSEMRE İLÇESİ TEVFİK LAV SPOR TESİSLERİ/Ekran-Resmi-2020-10-16-15.37.38-349x329.webp',
      '/projects/MANİSA YUNUSEMRE İLÇESİ TEVFİK LAV SPOR TESİSLERİ/Ekran-Resmi-2020-10-16-15.37.44-348x331.webp',
      '/projects/MANİSA YUNUSEMRE İLÇESİ TEVFİK LAV SPOR TESİSLERİ/Ekran-Resmi-2020-10-16-15.37.58-513x290.webp'
    ],
    category: 'spor',
    area: 'Spor Tesisleri Kompleksi',
    status: 'tamamlandi'
  },
  {
    id: '6',
    title: 'Mudanya Güzelyalı 32 Derslik Ortaokul İnşaatı',
    location: 'Bursa, Mudanya',
    description: 'Modern eğitim binası ve sosyal tesisler',
    year: 2022,
    image: '/projects/MUDANYA GÜZELYALI 32 DERSLİK ORTAOKUL İNŞAATI/3-1.webp',
    images: [
      '/projects/MUDANYA GÜZELYALI 32 DERSLİK ORTAOKUL İNŞAATI/3-1.webp',
      '/projects/MUDANYA GÜZELYALI 32 DERSLİK ORTAOKUL İNŞAATI/2-1-1024x768.webp',
      '/projects/MUDANYA GÜZELYALI 32 DERSLİK ORTAOKUL İNŞAATI/WhatsApp-Image-2020-10-07-at-11.15.49-1024x768.webp'
    ],
    category: 'okul',
    area: '32 Derslik Ortaokul',
    status: 'tamamlandi'
  },
  {
    id: '7',
    title: 'TÜBİTAK MAM BKTM Binaları İnşaatı',
    location: 'Kocaeli, Gebze',
    description: 'TÜBİTAK araştırma ve geliştirme merkezi binaları',
    year: 2022,
    image: '/projects/TÜBİTAK MAM BKTM BİNALARI İNŞAATI/TÜBİTAK.webp',
    images: [
      '/projects/TÜBİTAK MAM BKTM BİNALARI İNŞAATI/TÜBİTAK.webp',
      '/projects/TÜBİTAK MAM BKTM BİNALARI İNŞAATI/TÜBİTAK2.webp',
      '/projects/TÜBİTAK MAM BKTM BİNALARI İNŞAATI/TÜBİTAK 3.webp'
    ],
    category: 'arastirma',
    area: 'BKTM Binaları',
    status: 'tamamlandi'
  },
  {
    id: '8',
    title: 'LEF YAPI Hasnbeyli TOKİ Ticaret Merkezi ve Konutları',
    location: 'İstanbul, Hasnbeyli',
    description: 'TOKİ konut projesi ve ticaret merkezi kompleksi',
    year: 2024,
    image: '/projects/LEF YAPI HASNBEYLİ TOKİ TİCARET MERKEZİ VE KONUTLARI/IMG-20250811-WA0018.webp',
    images: [
      '/projects/LEF YAPI HASNBEYLİ TOKİ TİCARET MERKEZİ VE KONUTLARI/IMG-20250811-WA0018.webp',
      '/projects/LEF YAPI HASNBEYLİ TOKİ TİCARET MERKEZİ VE KONUTLARI/IMG-20250811-WA0019.webp',
      '/projects/LEF YAPI HASNBEYLİ TOKİ TİCARET MERKEZİ VE KONUTLARI/IMG-20250811-WA0020.webp',
      '/projects/LEF YAPI HASNBEYLİ TOKİ TİCARET MERKEZİ VE KONUTLARI/IMG-20250811-WA0024.webp'
    ],
    category: 'ticari',
    area: 'TOKİ Konut ve Ticaret Merkezi',
    status: 'devam-ediyor'
  }
]

function genGameMap(name, gameName, lat, lng, real1, real2, game1, game2, description) {
    return { name, gameName, lat, lng, real1, real2, game1, game2, description };
}

const battlefield4 = [
    genGameMap(
        'Цинхай-Тибетская железная дорога',
        'Golmud Railway',
        36.157840,
        94.288221,
        'GolmudRailway-1.jpg',
        'GolmudRailway-2.jpg',
        'GolmudRailway-3.jpg',
        'GolmudRailway-4.jpg',
        'Железная дорога, протяженностью 1956 км, является не только самой длинной на нагорье, но и самой высокогорной (поднимается на высоту 5072 метров над уровнем моря) в мире.',
    ),
    genGameMap(
        'Плотина Сяовань',
        'Lancang Dam',
        24.42,
        100.05,
        'LancangDam-1.jpg',
        undefined,
        'LancangDam-3.png',
        'LancangDam-4.jpg',
        'Высочайшая арочная плотина в мире (292 м) расположена на Меконге — крупнейшей реке Юго-Восточной Азии.',
    ),
    // genGameMap(
    //     'Парасельские острова',
    //     'Paracel Storm',
    //     16.5,
    //     112,
    // ),
    genGameMap(
        'Обсерватория Аресибо',
        'Rouge Transmission',
        18.375482,
        -66.765562,
        'RougeTransmission-1.jpg',
        'RougeTransmission-2.gif',
        'RougeTransmission-3.jpg',
        'RougeTransmission-4.jpg',
        'Астрономическая обсерватория расположена в 15 км от города Аресибо (Пуэрто-Рико) на высоте 497 м над уровнем моря. Установленный здесь радиотелескоп в настоящее время является самым крупным в мире (из использующих одну апертуру).',
    ),
];

const gameMaps = [
    ...battlefield4.map(obj => ({ ...obj, game: 'Battlefield 4' })),
];

export default gameMaps;

import { ServiceItem, BeforeAfterItem, ReelVideo, ReviewItem } from '../types';

import hoodSwirlsBefore from '../assets/images/hood_swirls_before_1789465009273.jpg';
import hoodMirrorAfter from '../assets/images/hood_mirror_after_1789465029492.jpg';
import hoodSplitTest from '../assets/images/detailing_paint_correction_5050_1789464942618.jpg';

import lightsCloudyBefore from '../assets/images/headlight_cloudy_before_1789465045421.jpg';
import lightsClearAfter from '../assets/images/headlight_clear_after_1789465066819.jpg';
import lightsSplitTest from '../assets/images/headlight_restoration_5050_1789464963530.jpg';

import leatherDirtyBefore from '../assets/images/leather_dirty_before_1789465082619.jpg';
import leatherCleanAfter from '../assets/images/leather_clean_after_1789465097640.jpg';
import leatherSplitTest from '../assets/images/leather_interior_5050_1789464978748.jpg';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'ppf-protection',
    name: 'Антигравійна PPF Плівка',
    shortDesc: 'Поліуретановий самовідновлювальний бронезахист кузова від сколів, гравію та притертостей.',
    badge: 'Топ Захист • Гарантія 5-10 років',
    priceStarting: 'від 18 500 ₴',
    timeEstimate: '2-4 дні',
    warranty: 'до 10 років',
    category: 'Захист Кузова',
    iconName: 'ShieldCheck',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80',
    options: [
      {
        title: 'Пакет "Зона Ризику"',
        description: 'Капот повністю, передній бампер, крила, фари, дзеркала, зони під ручками та пороги.',
        price: 'від 18 500 ₴'
      },
      {
        title: 'Пакет "Повний Бронезахист (Full Body)"',
        description: '100% обклейка всіх фарбованих деталей кузова з підворотом країв всередину деталей.',
        price: 'від 55 000 ₴'
      },
      {
        title: 'Пакет "Matte Stealth Transformation"',
        description: 'Перетворення рідного глянцевого лаку на глибокий сатиновий мат преміум-класу.',
        price: 'від 62 000 ₴'
      }
    ],
    processSteps: [
      'Трифазна делікатна мийка та знежирення поверхні',
      'Глибока деконтамінація глиною та лубрикантом',
      'Фінішне безпастове знежирення під лампами спектру CRI 98+',
      'Позиціонування лекал на гелеву основу з підворотами',
      'Теплова активація клейового шару та контроль адгезії'
    ],
    techSpec: 'Плівка товщиною 215 мкм із топ-коатом TopCoat Hydrophobic та технологією самозатягування подряпин під впливом гарячої води чи сонця.'
  },
  {
    id: 'ceramic-coating',
    name: 'Нанокераміка 9H та Рідке Скло',
    shortDesc: 'Дзеркальний карамельний блиск, кут гідрофобу 115° та стійкість до агресивної дорожньої хімії.',
    badge: 'Дзеркальний Блиск • Гідрофоб 115°',
    priceStarting: 'від 11 000 ₴',
    timeEstimate: '1-2 дні',
    warranty: 'до 3 років',
    category: 'Захисні Покриття',
    iconName: 'Sparkles',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
    options: [
      {
        title: 'Кераміка "Double Layer 9H"',
        description: '2 шари надтвердої кераміки 9H + 1 фінішний шар водовідштовхувального Top Coat.',
        price: 'від 11 000 ₴'
      },
      {
        title: 'Кераміка "Extreme Matrix 9H+ Titanium"',
        description: '4 шари преміум-кераміки з діоксидом титану для максимального захисту від реагентів Києва.',
        price: 'від 17 500 ₴'
      }
    ],
    processSteps: [
      'Делікатна очистка та двоетапне полірування до ідеального дзеркала',
      'Антистатичне знежирення ізопропіловими розчинами',
      'Пошарове нанесення керамічного складу аплікатором',
      'Інфрачервона сушка кожного шару при 65°C протягом 40 хв'
    ],
    techSpec: 'Склади Gyeon Q² Mohs EVO та CarPro CQuartz з твердістю 9H за шкалою Мооса.'
  },
  {
    id: 'deep-polishing',
    name: 'Детейлінг-Полірування ЛФП',
    shortDesc: 'Видалення до 95% мікроподряпин, "павутиння" та голограм зі збереженням максимального шару заводського лаку.',
    badge: 'Видалення 95% дефектів',
    priceStarting: 'від 7 500 ₴',
    timeEstimate: '1-2 дні',
    warranty: 'Ідеальне дзеркало',
    category: 'Відновлення',
    iconName: 'Flame',
    image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=1200&q=80',
    options: [
      {
        title: 'Коригуюче експрес-полірування',
        description: 'Однокрокове видалення матовості та дрібної сітки без зняття товщини лаку.',
        price: 'від 7 500 ₴'
      },
      {
        title: 'Глибоке відновлювальне полірування 3-Step',
        description: '3 етапи: абразивний різ, вирівнювання рельєфу та антиголограмний фініш пастами на водній основі.',
        price: 'від 12 500 ₴'
      }
    ],
    processSteps: [
      'Замір товщини заводського лаку цифровим мікрометром',
      'Ізоляція гумових та пластикових ущільнювачів захисним скотчем 3M',
      'Робота ексцентриковими та роторними машинками Rupes BigFoot',
      'Видалення голограм та перевірка ультрафіолетовими інспекційними ліхтарями'
    ],
    techSpec: 'Полірувальні системи Rupes, пасти Koch Chemie та Menzerna без силіконів та маскуючих філерів.'
  },
  {
    id: 'interior-detailing',
    name: 'Хімчистка з Розбором та Озонуванням',
    shortDesc: 'Стерильна чистота кожного міліметра: консервація шкіри, очищення повітроводів паром та озонова стерилізація.',
    badge: '100% Гіпоалергенно • Озон',
    priceStarting: 'від 5 500 ₴',
    timeEstimate: '1 день',
    warranty: 'Стерильність салону',
    category: 'Інтер\'єр',
    iconName: 'Wind',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=1200&q=80',
    options: [
      {
        title: 'Комплексна хімчистка салону',
        description: 'Підлога, стеля, сидіння, карти дверей, багажник та консервація пластику матовим антистатиком.',
        price: 'від 5 500 ₴'
      },
      {
        title: 'Преміум Spa для Nappa шкіри + Озонування',
        description: 'Делікатне живлення натуральної шкіри крем-бальзамами Colourlock + 45 хв антибактеріального озону.',
        price: 'від 8 000 ₴'
      }
    ],
    processSteps: [
      'Акуратний демонтаж переднього ряду сидінь за регламентом',
      'Очищення парогенератором 160°C та торнадорами з нейтральними pH-складами',
      'Сушка салону тепловими гарматами до 100% сухості за 2 години',
      'Медична дезінфекція озоногенератором від вірусів та запахів тютюну'
    ],
    techSpec: 'Німецька гіпоалергенна біохімія Koch Chemie та засоби для реставрації шкіри Colourlock (Німеччина).'
  },
  {
    id: 'black-package',
    name: 'Black Package & Chrome Delete',
    shortDesc: 'Агресивний спортивний стиль: антихром молдингів, тонування оптики, порошкове фарбування дисків.',
    badge: 'Спортивний Агресивний Стиль',
    priceStarting: 'від 6 500 ₴',
    timeEstimate: '1-2 дні',
    warranty: '3 роки гарантії',
    category: 'Стайлінг',
    iconName: 'Zap',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=1200&q=80',
    options: [
      {
        title: 'Повний Антихром кузова (Shadow Line)',
        description: 'Обтяжка чорною глянцевою або сатиновою вініловою плівкою віконних рамок, решітки та дифузорів.',
        price: 'від 6 500 ₴'
      },
      {
        title: 'Black Out Дисків та Супортів',
        description: 'Піскоструйна очистка, порошкове фарбування дисків у чорний глянець + термостійкий акцент супортів.',
        price: 'від 12 000 ₴'
      }
    ],
    processSteps: [
      'Хімічне знежирення та підготовка поверхонь',
      'Безрозбірне або делікатне зняття хромованих молдингів',
      'Поклейка преміального вінілу 3M 2080 або Avery Dennison',
      'Запікання праймером та захист стиків від відставання'
    ],
    techSpec: 'Американські литі плівки 3M Wrap Film Series 2080 Black Gloss з додатковим захисним прозорим шаром.'
  }
];

export const BEFORE_AFTER_WORKS: BeforeAfterItem[] = [
  {
    id: 'work-paint',
    title: 'Porsche 911 (Deep Black Metallic)',
    subtitle: 'Корекція ЛФП під Scangrip ліхтарем + Самовідновлювальна PPF плівка 215 мкм',
    category: 'ЛФП та Бронеплівка',
    beforeImg: hoodSwirlsBefore,
    afterImg: hoodMirrorAfter,
    splitTestImg: hoodSplitTest,
    timeSpent: '32 години',
    coating: 'SunTek Ultra PPF 215 мкм + Gyeon Q² Pure EVO 9H',
    stats: '100% усунення голограм та павутиння • Дзеркало 99.8 GU'
  },
  {
    id: 'work-lights',
    title: 'BMW M5 F90 (Лазерна Оптика)',
    subtitle: 'Шліфування мікротріщин від піскострую + Оптичний поліуретан Stek Dyno',
    category: 'Відновлення Оптики',
    beforeImg: lightsCloudyBefore,
    afterImg: lightsClearAfter,
    splitTestImg: lightsSplitTest,
    timeSpent: '4 години',
    coating: 'Stek DynoShield Transparent Polyurethane',
    stats: '+38% прозорість та яскравість світлового пучка'
  },
  {
    id: 'work-leather',
    title: 'Range Rover SV (Nappa White)',
    subtitle: 'Глибока екстракція джинсового барвника + Матова наноконсервація Colourlock',
    category: 'Хімчистка Салону',
    beforeImg: leatherDirtyBefore,
    afterImg: leatherCleanAfter,
    splitTestImg: leatherSplitTest,
    timeSpent: '12 годин',
    coating: 'Colourlock Leder Shield + Gyeon Q² LeatherCoat',
    stats: '100% матовий заводський шовк без жирного блиску'
  }
];

export const REELS_DATA: ReelVideo[] = [
  {
    id: 'reel-1',
    title: 'Гідрофобний тест кераміки 9H під тиском',
    car: 'Audi RS6 Avant',
    service: 'Кераміка 9H',
    views: '142K',
    likes: 8420,
    duration: '0:24',
    videoPoster: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?auto=format&fit=crop&w=600&q=80',
    videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-car-washing-cleaning-spray-41139-large.mp4'
  },
  {
    id: 'reel-2',
    title: 'Поклейка бампера Porsche 911 єдиним шматком плівки',
    car: 'Porsche 911 Turbo',
    service: 'Антигравійна плівка',
    views: '98K',
    likes: 5670,
    duration: '0:32',
    videoPoster: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=600&q=80',
    videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-mechanic-spraying-a-car-part-41142-large.mp4'
  },
  {
    id: 'reel-3',
    title: 'Видалення синіх плям від джинсів зі світлої шкіри',
    car: 'BMW M8 Gran Coupe',
    service: 'Хімчистка салону',
    views: '76K',
    likes: 4120,
    duration: '0:18',
    videoPoster: 'https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=600&q=80',
    videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-cleaning-car-wheel-rims-41140-large.mp4'
  },
  {
    id: 'reel-4',
    title: 'Дзеркальне полірування чорного лаку без голограм',
    car: 'Mercedes G63 AMG',
    service: 'Полірування ЛФП',
    views: '115K',
    likes: 7290,
    duration: '0:29',
    videoPoster: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=600&q=80',
    videoSrc: 'https://assets.mixkit.co/videos/preview/mixkit-car-polishing-process-in-detailing-studio-41141-large.mp4'
  }
];

export const REVIEWS_DATA: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Владислав М.',
    car: 'Porsche Macan GTS (2023)',
    rating: 5,
    date: '3 дні тому',
    text: 'Робив повний бронезахист у PPF плівку та кераміку на диски. Якість підворотів країв вражає — плівку буквально неможливо помітити неозброєним оком! Бокси стерильні, хлопці дають офіційну гарантію на 7 років.',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&q=80',
    verifiedMaps: true,
    serviceUsed: 'Повний PPF захист'
  },
  {
    id: 'rev-2',
    author: 'Олександр Дяченко',
    car: 'BMW M5 Competition',
    rating: 5,
    date: '1 тиждень тому',
    text: 'Чорний лак BMW — це пекло в плані павутиння. Віддав авто на 3-етапне полірування та 2 шари кераміки 9H. Результат перевершив мої очікування: колір став насиченим, мокрим, дзеркальним, а краплі води на швидкості просто злітають з капота!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80',
    verifiedMaps: true,
    serviceUsed: 'Полірування + Кераміка 9H'
  },
  {
    id: 'rev-3',
    author: 'Євгенія К.',
    car: 'Tesla Model Y Performance',
    rating: 5,
    date: '2 тижні тому',
    text: 'У мене білий салон, і після року експлуатації він виглядав сумно. Зробили хімчистку з озонуванням і покрили шкіру керамічним захистом. Салон пахне новим автомобілем із заводу! Рекомендую всім!',
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=150&q=80',
    verifiedMaps: true,
    serviceUsed: 'Хімчистка + Кераміка шкіри'
  }
];

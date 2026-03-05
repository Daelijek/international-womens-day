export type Language = 'ru' | 'kk' | 'en';

export const translations = {
    ru: {
        header: {
            flower: 'Цветок',
            logo: 'Логотип',
        },
        intro: {
            from: 'Поздравительная страничка от разработчиков',
            developers: 'BeyimTech',
        },
        hero: {
            title: 'С 8 Марта!',
            description: 'Сегодня особенный день, когда мы хотим сказать спасибо нашим замечательным коллегам за энергию, поддержку, профессионализм и атмосферу, которую вы создаёте в команде.',
        },
        greetings: {
            title: 'Наши поздравления',
            cards: [
                {
                    emoji: '💐',
                    title: 'С праздником!',
                    message: 'Желаем вам весеннего настроения, ярких эмоций и бесконечного счастья!'
                },
                {
                    emoji: '🌹',
                    title: 'Вы прекрасны!',
                    message: 'Ваша энергия и профессионализм вдохновляют всю команду каждый день.'
                },
                {
                    emoji: '🌸',
                    title: 'Спасибо вам!',
                    message: 'За вашу поддержку, понимание и ту особую атмосферу, которую вы создаёте.'
                },
                {
                    emoji: '🌺',
                    title: 'Пусть сбудутся мечты!',
                    message: 'Желаем вам достигать всех поставленных целей и быть счастливыми!'
                },
                {
                    emoji: '🌻',
                    title: 'Вы особенные!',
                    message: 'Ваш вклад в работу команды неоценим. Спасибо за всё, что вы делаете!'
                },
                {
                    emoji: '🌷',
                    title: 'С 8 Марта!',
                    message: 'Пусть каждый день приносит радость, улыбки и приятные сюрпризы!'
                },
            ],
        },
        generator: {
            title: 'Сгенерируйте поздравление',
            description: 'Нажмите на кнопку и получите персональное поздравление!',
            button: 'Получить поздравление',
            congratulations: [
                'Желаем вам весеннего настроения, ярких эмоций и бесконечного счастья! Пусть каждый день приносит радость и вдохновение!',
                'Вы прекрасны во всём! Ваша энергия и профессионализм вдохновляют всю команду каждый день. Спасибо за вашу работу!',
                'Спасибо вам за поддержку, понимание и ту особую атмосферу, которую вы создаёте. Вы делаете наш коллектив лучше!',
                'Пусть сбудутся все ваши мечты! Желаем вам достигать всех поставленных целей и быть счастливыми каждый день!',
                'Вы особенные! Ваш вклад в работу команды неоценим. Спасибо за всё, что вы делаете для нас!',
                'Пусть каждый день приносит радость, улыбки и приятные сюрпризы! Вы заслуживаете только лучшего!',
                'Ваша доброта и отзывчивость делают мир лучше! Спасибо за то, что вы есть в нашей команде!',
                'Вы — источник вдохновения для всех нас! Пусть ваша жизнь будет наполнена любовью и счастьем!',
                'Ваш профессионализм и креативность восхищают! Продолжайте сиять и вдохновлять окружающих!',
                'Пусть ваша жизнь будет такой же яркой и прекрасной, как бабочка! Летайте высоко и достигайте новых вершин!',
                'Желаем вам спокойных ночей и солнечных дней! Пусть каждый момент будет наполнен гармонией и умиротворением!',
                'Вы сияете, как звезда! Ваш свет освещает путь всем вокруг. Продолжайте быть примером для других!',
                'Пусть ваша жизнь будет полна ярких моментов и незабываемых впечатлений! Поднимайтесь всё выше и выше!',
                'Вы дарите столько тепла и заботы окружающим! Пусть вам возвращается в сто раз больше любви и внимания!',
                'Ваша красота не только внешняя, но и внутренняя! Вы прекрасны душой, и это самое главное!',
                'Вы грациозны и элегантны во всём! Ваше достоинство и уверенность восхищают всех вокруг!',
                'Пусть ваша жизнь будет наполнена свежестью и новыми возможностями! Растите и развивайтесь каждый день!',
                'Вы умеете быть разными и всегда оставаться собой! Ваша многогранность — это ваша сила!',
                'Вы создаёте магию вокруг себя! Каждое ваше действие наполнено смыслом и красотой!',
                'Пусть ваша жизнь будет такой же свободной и мощной, как океан! Плывите по течению счастья!',
                'Вы уникальны и неповторимы! Ваша индивидуальность делает мир интереснее и ярче!',
                'Желаем вам жизни, полной праздников и веселья! Пусть каждый день будет особенным!',
                'Каждое утро — это новая возможность стать лучше! Встречайте рассветы с улыбкой и оптимизмом!',
                'Пусть в вашей жизни будет мир, гармония и спокойствие! Вы заслуживаете самого лучшего!',
                'Ваша жизнь — это прекрасная мелодия! Пусть она звучит гармонично и радостно каждый день!',
                'Вы приносите в мир яркие краски! Без вас жизнь была бы серой. Спасибо за ваше присутствие!',
                'Загадайте желание и верьте в него! Пусть все ваши мечты сбудутся, как падающие звёзды!',
                'Вы всегда точно знаете, чего хотите! Ваша целеустремлённость вдохновляет всех вокруг!',
                'Вы — настоящий драгоценный камень! Ваша ценность не измеряется, она бесценна!',
                'Вы делаете мир лучше своим присутствием! Ваше влияние распространяется далеко за пределы видимого!',
                'Желаем вам жизни, полной приключений и открытий! Пусть каждый день приносит что-то новое!',
                'Вы строите мосты между людьми! Ваша способность объединять других — это настоящий дар!',
                'Вы — художница своей судьбы! Рисуйте жизнь такими красками, какими хотите видеть её!',
                'Вы прошли через множество превращений и стали прекраснее! Продолжайте расти и развиваться!',
                'Ваша красота расцветает с каждым днём! Пусть вы всегда чувствуете себя прекрасно!',
                'Вы заслуживаете всех цветов мира! Пусть ваша жизнь будет такой же яркой и ароматной!',
                'Вы — подарок для всех, кто вас знает! Спасибо за то, что вы есть в нашей жизни!',
                'Вы сияете изнутри! Ваш внутренний свет освещает путь не только вам, но и всем вокруг!',
            ],
        },
    },
    kk: {
        header: {
            flower: 'Гүл',
            logo: 'Логотип',
        },
        intro: {
            from: 'BeyimTech',
            developers: 'әзірлеушілерінен құттықтау беті',
        },
        hero: {
            title: '8 Наурызбен!',
            description: 'Бүгін ерекше күн, біз керемет әріптестерімізге энергия, қолдау, кәсібилік және командада сіздер құраған атмосфера үшін рахмет айтқымыз келеді.',
        },
        greetings: {
            title: 'Біздің құттықтауларымыз',
            cards: [
                {
                    emoji: '💐',
                    title: 'Мерекеңізбен!',
                    message: 'Сіздерге көктемгі көңіл-күй, жарқын эмоциялар және шексіз бақыт тілейміз!'
                },
                {
                    emoji: '🌹',
                    title: 'Сіздер әдемісіздер!',
                    message: 'Сіздердің энергияңыз және кәсібилігіңіз команданы күн сайын шабыттандырады.'
                },
                {
                    emoji: '🌸',
                    title: 'Рахмет сіздерге!',
                    message: 'Қолдауыңыз, түсінуіңіз және сіздер құраған ерекше атмосфера үшін.'
                },
                {
                    emoji: '🌺',
                    title: 'Армандарыңыз орындалсын!',
                    message: 'Сіздерге барлық мақсаттарыңызға жету және бақытты болу тілейміз!'
                },
                {
                    emoji: '🌻',
                    title: 'Сіздер ерекшесіздер!',
                    message: 'Команда жұмысына қосқан үлесіңіз бағасыз. Барлығыңыз үшін рахмет!'
                },
                {
                    emoji: '🌷',
                    title: '8 Наурызбен!',
                    message: 'Күн сайын қуаныш, күлкі және жағымды сюрприздер әкелсін!'
                },
            ],
        },
        generator: {
            title: 'Құттықтау генерациялаңыз',
            description: 'Батырманы басып, жеке құттықтау алыңыз!',
            button: 'Құттықтау алу',
            congratulations: [
                'Сіздерге көктемгі көңіл-күй, жарқын эмоциялар және шексіз бақыт тілейміз! Күн сайын қуаныш пен шабыт әкелсін!',
                'Сіздер барлығында әдемісіздер! Сіздердің энергияңыз және кәсібилігіңіз команданы күн сайын шабыттандырады. Жұмысыңызға рахмет!',
                'Қолдауыңыз, түсінуіңіз және сіздер құраған ерекше атмосфера үшін рахмет. Сіздер біздің коллективті жақсартасыздар!',
                'Барлық армандарыңыз орындалсын! Сіздерге барлық мақсаттарыңызға жету және күн сайын бақытты болу тілейміз!',
                'Сіздер ерекшесіздер! Команда жұмысына қосқан үлесіңіз бағасыз. Барлығыңыз үшін рахмет!',
                'Күн сайын қуаныш, күлкі және жағымды сюрприздер әкелсін! Сіздер тек ең жақсысына лайықсыздар!',
                'Сіздердің мейірімділігіңіз және жылылығыңыз әлемді жақсартады! Біздің командада болғаныңызға рахмет!',
                'Сіздер бәріміз үшін шабыт көзісіздер! Өміріңіз махаббат пен бақытқа толы болсын!',
                'Сіздердің кәсібилігіңіз және шығармашылығыңыз таңғажайып! Жалғастырыңыз жарқырау және айналаңызды шабыттандыру!',
                'Өміріңіз көбелектей жарқын және әдемі болсын! Биікте ұшыңыз және жаңа биіктіктерге жетіңіз!',
                'Тыныш түндер мен күн сәулесін тілейміз! Әр сәт үйлесім мен тыныштыққа толы болсын!',
                'Сіздер жұлдыздай жарқырайсыздар! Сіздердің жарығыңыз айналаңыздағыларға жол көрсетеді. Басқаларға мысал болып жалғастырыңыз!',
                'Өміріңіз жарқын сәттер мен ұмытылмас әсерлерге толы болсын! Одан да биікке көтеріліңіз!',
                'Сіздер айналаңыздағыларға сонша жылылық пен қамқорлық сыйлайсыздар! Сіздерге жүз есе көп махаббат пен назар қайтсын!',
                'Сіздердің сұлулығыңыз тек сыртқы емес, сонымен қатар ішкі де! Сіздер жанмен әдемісіздер, және бұл ең бастысы!',
                'Сіздер барлығында сәнді және әсемсіздер! Сіздердің қадір-қасиетіңіз мен сенімділігіңіз айналаңыздағыларды таңғалдырады!',
                'Өміріңіз жаңашылдық пен жаңа мүмкіндіктерге толы болсын! Күн сайын өсіп, дамыңыз!',
                'Сіздер әртүрлі болып, әрдайым өзіңізді сақтай білесіздер! Сіздердің көп қырлылығыңыз — бұл сіздердің күшіңіз!',
                'Сіздер айналаңызда сиқыр жасайсыздар! Әр әрекетіңіз мағына мен сұлулыққа толы!',
                'Өміріңіз мұхиттай еркін және күшті болсын! Бақыт ағынымен жүзіңіз!',
                'Сіздер бірегей және қайталанбас! Сіздердің жеке басыңыз әлемді қызықтырады және жарқын етеді!',
                'Сіздерге мерекелер мен қуанышқа толы өмір тілейміз! Күн сайын ерекше болсын!',
                'Әр таң — бұл жақсарудың жаңа мүмкіндігі! Таң сәулесін күлкімен және оптимизммен қарсы алыңыз!',
                'Өміріңізде бейбітшілік, үйлесім және тыныштық болсын! Сіздер ең жақсысына лайықсыздар!',
                'Өміріңіз — бұл әдемі әуен! Ол үйлесімді және қуанышты күн сайын дыбысталсын!',
                'Сіздер әлемге жарқын түстер әкелесіздер! Сіздерсіз өмір сұр болар еді. Болғаныңызға рахмет!',
                'Тілек тілеңіз және оған сеніңіз! Барлық армандарыңыз түсетін жұлдыздардай орындалсын!',
                'Сіздер әрдайым не қалайтыныңызды нақты білесіздер! Сіздердің мақсатқа бағытталғандығыңыз айналаңыздағыларды шабыттандырады!',
                'Сіздер — нағыз қымбат тас! Сіздердің құндылығыңыз өлшенбейді, ол бағасыз!',
                'Сіздер болғаныңызбен әлемді жақсартасыздар! Сіздердің әсеріңіз көрінетіннен алысқа тарайды!',
                'Сіздерге оқиғалар мен ашылуларға толы өмір тілейміз! Күн сайын жаңа нәрсе әкелсін!',
                'Сіздер адамдар арасында көпірлер саласыздар! Басқаларды біріктіру қабілетіңіз — бұл нағыз сыйлық!',
                'Сіздер — тағдырыңыздың суретшісісіздер! Өмірді қалаған түстеріңізбен салыңыз!',
                'Сіздер көптеген өзгерістерден өтіп, әдемірек болдыңыздар! Өсіп, дамуды жалғастырыңыз!',
                'Сіздердің сұлулығыңыз күн сайын гүлдейді! Әрдайым өзіңізді әдемі сезініңіз!',
                'Сіздер әлемнің барлық гүлдеріне лайықсыздар! Өміріңіз сондай жарқын және хош иісті болсын!',
                'Сіздер — сіздерді білетіндердің барлығына сыйлықсыздар! Өмірімізде болғаныңызға рахмет!',
                'Сіздер іштей жарқырайсыздар! Сіздердің ішкі жарығыңыз тек сіздерге ғана емес, айналаңыздағыларға да жол көрсетеді!',
            ],
        },
    },
    en: {
        header: {
            flower: 'Flower',
            logo: 'Logo',
        },
        intro: {
            from: 'Greeting page from developers of',
            developers: 'BeyimTech',
        },
        hero: {
            title: 'Happy Women\'s Day!',
            description: 'Today is a special day when we want to thank our wonderful colleagues for their energy, support, professionalism and the atmosphere you create in the team.',
        },
        greetings: {
            title: 'Our Congratulations',
            cards: [
                {
                    emoji: '💐',
                    title: 'Happy Holiday!',
                    message: 'We wish you spring mood, bright emotions and endless happiness!'
                },
                {
                    emoji: '🌹',
                    title: 'You are beautiful!',
                    message: 'Your energy and professionalism inspire the whole team every day.'
                },
                {
                    emoji: '🌸',
                    title: 'Thank you!',
                    message: 'For your support, understanding and the special atmosphere you create.'
                },
                {
                    emoji: '🌺',
                    title: 'May your dreams come true!',
                    message: 'We wish you to achieve all your goals and be happy!'
                },
                {
                    emoji: '🌻',
                    title: 'You are special!',
                    message: 'Your contribution to the team\'s work is invaluable. Thank you for everything you do!'
                },
                {
                    emoji: '🌷',
                    title: 'Happy Women\'s Day!',
                    message: 'May every day bring joy, smiles and pleasant surprises!'
                },
            ],
        },
        generator: {
            title: 'Generate a Congratulation',
            description: 'Click the button and get a personal congratulation!',
            button: 'Get Congratulation',
            congratulations: [
                'We wish you spring mood, bright emotions and endless happiness! May every day bring joy and inspiration!',
                'You are beautiful in everything! Your energy and professionalism inspire the whole team every day. Thank you for your work!',
                'Thank you for your support, understanding and the special atmosphere you create. You make our team better!',
                'May all your dreams come true! We wish you to achieve all your goals and be happy every day!',
                'You are special! Your contribution to the team\'s work is invaluable. Thank you for everything you do for us!',
                'May every day bring joy, smiles and pleasant surprises! You deserve only the best!',
                'Your kindness and responsiveness make the world better! Thank you for being in our team!',
                'You are a source of inspiration for all of us! May your life be filled with love and happiness!',
                'Your professionalism and creativity are admirable! Keep shining and inspiring others!',
                'May your life be as bright and beautiful as a butterfly! Fly high and reach new heights!',
                'We wish you peaceful nights and sunny days! May every moment be filled with harmony and tranquility!',
                'You shine like a star! Your light illuminates the path for everyone around. Keep being an example for others!',
                'May your life be full of bright moments and unforgettable impressions! Rise higher and higher!',
                'You give so much warmth and care to others! May you receive a hundred times more love and attention!',
                'Your beauty is not only external, but also internal! You are beautiful in soul, and that\'s the most important thing!',
                'You are graceful and elegant in everything! Your dignity and confidence amaze everyone around!',
                'May your life be filled with freshness and new opportunities! Grow and develop every day!',
                'You know how to be different and always remain yourself! Your versatility is your strength!',
                'You create magic around you! Every action you take is filled with meaning and beauty!',
                'May your life be as free and powerful as the ocean! Flow with the stream of happiness!',
                'You are unique and irreplaceable! Your individuality makes the world more interesting and brighter!',
                'We wish you a life full of holidays and fun! May every day be special!',
                'Every morning is a new opportunity to become better! Meet the dawns with a smile and optimism!',
                'May there be peace, harmony and tranquility in your life! You deserve the best!',
                'Your life is a beautiful melody! May it sound harmonious and joyful every day!',
                'You bring bright colors to the world! Without you, life would be gray. Thank you for your presence!',
                'Make a wish and believe in it! May all your dreams come true like falling stars!',
                'You always know exactly what you want! Your determination inspires everyone around!',
                'You are a real precious stone! Your value cannot be measured, it is priceless!',
                'You make the world better with your presence! Your influence extends far beyond the visible!',
                'We wish you a life full of adventures and discoveries! May every day bring something new!',
                'You build bridges between people! Your ability to unite others is a real gift!',
                'You are the artist of your destiny! Paint life with the colors you want to see!',
                'You have gone through many transformations and become more beautiful! Keep growing and developing!',
                'Your beauty blossoms every day! May you always feel beautiful!',
                'You deserve all the flowers in the world! May your life be as bright and fragrant!',
                'You are a gift to everyone who knows you! Thank you for being in our lives!',
                'You shine from within! Your inner light illuminates the path not only for you, but for everyone around!',
            ],
        },
    },
};

export const emojis = [
    '💐', '🌹', '🌸', '🌺', '🌻', '🌷', '🌼', '💖', '✨', '🦋',
    '🌙', '⭐', '🎈', '💝', '🦢', '🌿', '🎭', '💫', '🌊', '🦄',
    '🎪', '🌄', '🕊️', '🎵', '🌈', '🌠', '🎯', '💎', '🌍', '🌉',
    '🎨', '🌟',
];

import { initReactI18next } from "react-i18next";
import i18n from "i18next";

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // the translations
    // (tip move them in a JSON file and import them,
    // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
    resources: {
      tm: {
        translation: {
          hakimlik: "hakimligin yeri",
          gijeki: "Okuwlaryň gündizki we agşamky bölümleri bar.",
          resmi:
            "Resminamalar iýul aýynyň 01-den awgust aýynyň 28-ne çenli irden ",
          dan: "-dan ",
          namalar: "çenli kabul edilýär.",
          resminamaSanaw: "Gerekli resminamalar:",
          list1: "pasportyň nusgasy",
          list2: "orta bilim hakynda attestat we onuň nusgasy,",
          list3: "öňki okan ýa-da işlän ýerinden häsiýetnama,",
          list4: "harby bilediň nusgasy",
          list5a: "ýaşaýan ýerinden güwä haty",
          list5b: "(forma №3),",
          list6: "6 surat",
          list7: "lukmançylyk güwänamasy,",
          list8a: "üç arka we maglumat",
          list8b: "(çap edilen we elektron görnüşi).",
          homePage: "Baş sahypa",
          aboutUs: "Biz barada",
          raspisaniya: "Okuw meýilnamalar",
          contactUs: "Habarlaşmak üçin",
          title: "aşgabat şäher häkimliginiň 8-nji hünär okuw mekdebi",
          adress: "Salgysy:",
          addres: "Aşgabat şäheri, Görogly köçesi, 91 (20)",
          mail: "Elektron poçta:",
          phone: "Telefon belgisi:",
          okuw: "OKUW HÜNÄRLERI",
          busDirection:
            "Biziň mekdebimiziň ýanyndaky teke bazar awtobus duralgasyna gelýän awtobuslar:",
          invitation:
            "Orta mekdep uçurymlaryny we ululary aşakdaky hünärler boýunça okuwa çagyrýar:",
          professia1: "Apparat we programma üpjünçiligini sazlaýjy",
          professia2: "Sanly maglumaty işläp taýýarlamak boýunça ussa",
          professia3: "Buhgalterçilik işi",
          professia4: "Kitaphana we arhiw işi",
          professia5: "Kompýuter tehnikalaryny bejeriji we hyzmat ediji ussa",
          professia6: "Iş ýörediji",
          professia7: "Tikinçi-biçimçi",
          professia8:
            "Konstruktor-modelýer, kompýuter grafikasyny öwrenmek bilen",
          professia9: "Çeper bezeg işlerini ýerine ýetiriji",
          professia10: "Awtomehanik ",
          professia11: "Kebşirleýji",
          professia12: "(elektro kebşirleme we gaz bilen kebşirleme işleri)",
          professia13: "Geodeziýaçy",
          professia14: "Ýaşaýyş-jemagat hojalygynyň ussasy",
          professia15: "Sowadyjylary we kondisionerleri bejeriji slesar",
          time: "\u00a0\u00a0\u00a0\u00a0\u00a01,5 ýyl\u00a0\u00a0\u00a0\u00a0\u00a0",
          timee:
            "\u00a0\u00a0\u00a0\u00a0\u00a010 aý\u00a0\u00a0\u00a0\u00a0\u00a0",
          come: "BIZE okamaga geliň !",
          kontact: "HABARLAŞMAK üçin ",
        },
      },
      ru: {
        translation: {
          hakimlik: "dlya prowerka",
          kontact: "НАШИ  контакты",
          okuw: "учебные планы",
          gijeki: "Занятия проводяться дневное и вечернее время",
          resmi: "Документы принимают с 01 июля по 28 августа 2022 года с ",
          dan: "по",
          namalar: "часов.",
          resminamaSanaw: "Необходимые документы:",
          list1: "Копия паспорта",
          list2: "Аттестат о среднем образовании (оргинал) и копия",
          list3: "Характеристика с последней места работы или учебы",
          list4: "Копия военного билета",
          list5a: "Справка с места жительства",
          list5b: "(форма №3)",
          list6: "Фотография 6 штук",
          list7: "Справка о состоянии здоровья",
          list8a: "Маглумат и информация о родственниках в трех поколениях",
          list8b: "(распечатанное и электронном виде)",
          homePage: "Главное",
          aboutUs: "О нас",
          raspisaniya: "Расписания",
          contactUs: "Наши контакты",
          title:
            "профессионально-техническая школа №8 хякимлика города ашгабат",
          adress: "Наш адрес:",
          addres: "гор. Ашгабат, улица Героглы, 91",
          mail: "Электронной почты:",
          phone: "Телефон номер:",
          busDirection: "Автобусные маршруты:",
          invitation:
            "Приглашает выпусников средних школ и взрослых на учебу по следующим специальностям:",
          professia1: "«Наладчик аппаратного и программного обеспечения»",
          professia2: "Мастер по обработке цифровой информации",
          professia3: "Бухгалтерская работа",
          professia4: "Библиотека и архивное дело",
          professia5: "Мастер по обслуживанию и ремонту компьютерной техники",
          professia6: "Делопроизводитель",
          professia7: "Закройщик-швея",
          professia8: "Конструктор-модельер, с изучением компьютерной графики",
          professia9: "Исполнитель художественно-оформительских работ",
          professia10: "Автомеханик",
          professia11: "Сварщик ",
          professia12: "(электро-газо сварка)",
          professia13: "Геодезист",
          professia14: "Мастер жилищно-коммунального хозяйство",
          professia15: "Слесарь по ремонту холодильников и кондиционеров",

          time: "\u00a0\u00a0\u00a0\u00a0\u00a01,5 год\u00a0\u00a0\u00a0\u00a0\u00a0",
          timee:
            "\u00a0\u00a0\u00a0\u00a0\u00a010 месяц\u00a0\u00a0\u00a0\u00a0\u00a0",
          come: "ПРИХОДИТЕ  к нам учиться !",
        },
      },
    },
    keySeparator: false,
    interpolation: { escapeValue: false },
  });

export { i18n };

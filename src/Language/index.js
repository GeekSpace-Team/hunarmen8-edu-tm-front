const {LocalizedStrings} = require('LocalizedStrings');

let strings = new LocalizedStrings({
    en:{
      home:{
          homePage:"Home page",
          ourServices:"Our services",
          about:"About us",
          contact:"Contacts"
      }
    },
    tm: {
        home:{
            homePage:"Bas sahypa",
            ourServices:"Hyzmatlarymyz",
            about:"Biz barada",
            contact:"Habarlashmak"
        }
    },
    ru:{
        home:{
            homePage:"Home page",
            ourServices:"Our services",
            about:"About us",
            contact:"Contacts"
        }
    }
   });

   module.exports = strings;
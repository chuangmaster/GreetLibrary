(function(global, $) {
  var Greetr = function(firstName, lastName, language) {
    return new Greetr.init(firstName, lastName, language);
  };

  //只有在框架中使用，不讓外面程式取用的變數：
  var supportedLangs = ['en', 'es']; //可使用的語言

  var greetings = {
    //不同語的招呼語
    en: 'Hello',
    es: 'Hola'
  };

  var formalGreetings = {
    //不同語言的正式招呼語
    en: 'Greetings',
    es: 'Saludos'
  };

  var logMessages = {
    //不同語言的log訊息
    en: 'Logged in',
    es: 'Inició sesión'
  };

  Greetr.prototype = {
    //建立的物件會共用的成員函數：

    fullName: function() {
      return this.firstName + ' ' + this.lastName;
    },

    validate: function() {
      if (supportedLangs.indexOf(this.language) === -1) {
        throw 'Invalid language';
      }
    },

    greeting: function() {
      return greetings[this.language] + ' ' + this.firstName + '!';
    },

    formalGreeting: function() {
      return formalGreetings[this.language] + ', ' + this.fullName();
    },

    greet: function(formal) {
      var msg;

      // if undefined or null it will be coerced to 'false'
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      if (console) {
        console.log(msg);
      }

      // 'this' refers to the calling object at execution time
      // makes the method chainable
      return this;
    },

    log: function() {
      if (console) {
        console.log(logMessages[this.language] + ': ' + this.fullName());
      }

      return this;
    },

    setLang: function(lang) {
      //改變要使用的語言
      this.language = lang;

      this.validate();

      return this;
    },

    HTMLGreet: function(selector, formal) {
      if (!$) {
        throw 'You should loaded jQuery library';
      }
      if (!selector) {
        throw 'You should pass a selector';
      }
      var msg;
      if (formal) {
        msg = this.formalGreeting();
      } else {
        msg = this.greeting();
      }

      $(selector).html(msg);
      return this;
    }
  };

  Greetr.init = function(firstName, lastName, language) {
    var self = this;
    self.firstName = firstName || '';
    self.lastName = lastName || '';
    self.language = language || 'en';
    this.validate();
  };

  Greetr.init.prototype = Greetr.prototype;
  global.Greetr = global.G$ = Greetr;
})(window, jQuery);

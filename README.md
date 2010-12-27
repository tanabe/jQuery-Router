#URL routing jQuery plugin
---
##usage
    $.route(
      {
        //always match
        path: /./,
        func: function() {
          console.log("boo!");
        }
      },

      {
        //url contains /sample/index.html
        path: /\/sample\/index\.html/,
        func: function() {
          console.log("sample boo!");
        }
      }
    );


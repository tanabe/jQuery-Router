#URL routing jQuery plugin
---
##usage
    $.route(
      {
        //always match
        //http://example.com/foo/bar/baz.html
        path: /./,
        func: function() {
          console.log("boo!");
        }
      },

      {
        //url contains /sample/index.html
        //http://example.com/foo/bar/sample/index.html
        path: /\/sample\/index\.html/,
        func: function() {
          console.log("sample boo!");
        }
      }
    );


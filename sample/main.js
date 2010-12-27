$.route(
  {
    path: /(index\.html|\/)$/,
    func: function() {
      $("#output").html("this is /index.html or /");
    }
  },

  {
    path: /index2\.html$/,
    func: function() {
      $("#output").html("this is /index2.html");
    }
  }
);

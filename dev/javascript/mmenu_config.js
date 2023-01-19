/* document.addEventListener(
    "DOMContentLoaded", () => {
      new Mmenu( "#menu", {
        // options
        theme: "dark",
        "navbars": [
          {
            "position": "top",
            "content": [
              "searchfield"
            ]
          },
          {
            "position": "top",
            "type": "tabs",
            "content": [
              "<a href='#panel-menu'>Menu</a>",
              "<a href='https://vinylimagination.foxycart.com/cartView Cart'>View Cart</a>"
            ]
          },
          {
            "position": "bottom",
            "content": [
              "<a class='fa fa-envelope' href='#/'>email</a>",
              "<a class='fa fa-twitter' href='#/'>tweet</a>",
              "<a class='fa fa-facebook' href='#/'>SMS</a>"
            ]
          }
        ]
      }, {
        // configuration
        offCanvas: {
          "position": "right"
        }
      });
    }
);*/

//Working
document.addEventListener(
    "DOMContentLoaded", () => {
      new Mmenu( "#menu", {
        "setSelected": {
          "hover": true,
          "parent": true
        },
        "slidingSubmenus": false,
        "offCanvas": {
          "position": "left-front",
          "page": {
            "selector": "#page"
          }
        },
        "theme": "dark",
        "navbars": [
          {
            "position": "top",
            "content": [
                "searchfield",
                "close"
            ]
          },
          {
            "position": "bottom",
            "content": [
              "<a class='fa fa-envelope' href='#/'>Email</a>",
              "<a class='fa fa-twitter' href='#/'>Tweet</a>",
              "<a class='fa fa-facebook' href='#/'>SMS</a>"
            ]
          }
        ]
      });
    }
);
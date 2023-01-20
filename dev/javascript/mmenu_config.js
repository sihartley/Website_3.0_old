document.addEventListener(
    "DOMContentLoaded", () => {
      new Mmenu( "#menu", {
        setSelected: {
          hover: true,
          parent: true
        },
        slidingSubmenus: false,
        offCanvas: {
          position: "left-front",
          page: {
            selector: "#page"
          }
        },
        theme: "dark",
        // navbar: {
        //   title: "Vinyl Imagination"
        //   content: [
        //       ]
        //   breadcrumbs: {
        //     removeFirst: true
        //   }
        // },
        navbars: [
          {
            position: "top",
            content: [
              "<img style='background-color: #000; padding: 10px 7px 4px 0;' src='/images/company/Logo.svg' width ='100%' height='100%' alt='Vinyl Imagination Logo'/>"
            ]
          },
          {
            position: "top",
            content: [
                "searchfield",
                "close"
            ]
          },
          {
            position: "bottom",
            content: [
              "<a class='fa fa-envelope' href='#/'>Email</a>",
              "<a class='fa fa-twitter' href='#/'>Tweet</a>",
              "<a class='fa fa-facebook' href='#/'>SMS</a>"
            ]
          }
        ]
      });

      // let notFollow = document.getElementsByClassName("mm-navbar__title");
      // notFollow.setAttribute("rel", "nofollow");
    }

);

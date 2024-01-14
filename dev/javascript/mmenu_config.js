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
          // {
          //   position: "top",
          //   content: [
          //     "<img style='background-color: #000; padding: 10px 7px 4px 0;' src='/images/company/vi_car_logo.svg' width ='100%' height='100%' alt='Vinyl Imagination Logo'/>"
          //   ]
          // },
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
              "<a class='fa fa-envelope' href=\"javascript:void(window.open('https://form.jotform.com/vinylimagination/information-request-form', 'blank', 'scrollbars=yes, toolbar=no, width=700, height=500'))\">Email</a>",
              //"<a class='fa fa-twitter' href='#/'>Tweet</a>",
              "<a class='fa fa-facebook' href='sms:+1 (805) 910-7072'>SMS</a>"
            ]
          }
        ]
      });

    }

);

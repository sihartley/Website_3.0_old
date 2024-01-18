<head>
    <?php
    /**
     * @var $page_title * is set by each page except index.php which is set below
     * @var $css_file * is set on per page basis.
     * @var $gallery * is set on per page basis.
     * @var $carousel * is set on per page basis.
     * @var $foxycart_SSL * is set in includes/business_info.php
     */
    if (strtolower(basename($_SERVER['PHP_SELF'])) !== 'index.php') {
        $title_info = "Vinyl Imagination - $page_title";
    } else {
        $title_info = "Vinyl Imagination - Automotive Decals and Graphics Main Page";
    } ?>
    <!-- Google tag (gtag.js) -->
    <!--<script async src="https://www.googletagmanager.com/gtag/js?id=G-FE5S0PMVW8"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FE5S0PMVW8');
    </script>-->
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-MPGTV5V');
    </script>
    <!-- End Google Tag Manager -->

    <!-- Meta -->
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="description" content="<?php echo $title_info; ?>">
    <title><?php echo $title_info; ?></title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="icon" href="/images/company/favicon.svg" sizes="any" type="image/svg+xml">
    <link rel="dns-prefetch" href="https://fonts.googleapis.com">
    <link rel="dns-prefetch" href="https://ajax.googleapis.com">
    <link rel="dns-prefetch" href="https://fonts.gstatic.com" crossorigin>
    <link rel="dns-prefetch" href="https://cdnjs.cloudflare.com" crossorigin>
    <link rel="dns-prefetch" href="https://cdn.foxycart.com" crossorigin>
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Exo:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap">
    <?php
    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/global.min.css') . '" type="text/css">' . "\n";

// active for ford graphics pages only
    /*category_ident(['pages/automotive', 'pages/motorcycle', 'pages/trailer'], ['automotive.php', 'vehicle-main.php', 'motorcycle.php', 'trailer.php'],
        '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/select2.min.css') . '" type="text/css">' . "\n");*/
    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/select2.min.css') . '" type="text/css">' . "\n";

// active for ALL pages
    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/menu.min.css') . '" type="text/css">' . "\n";
    if (isset($gallery) || isset($slider) || isset($carousel) == 'on') {
        echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/unite-gallery.min.css') . '" type="text/css">' . "\n";
    }

// active for ford graphics pages only
    category_ident(['pages/automotive/dodge'], ['automotive.php', 'vehicle-main.php'],
        '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/dodge-fonts.min.css') . '" type="text/css">' . "\n");

// active for ford graphics pages only
    category_ident(['pages/automotive/ford'], ['automotive.php', 'vehicle-main.php'],
        '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/ford-fonts.min.css') . '" type="text/css">' . "\n");

// active for jeep graphics pages only
    category_ident(['pages/automotive/jeep'], ['automotive.php', 'vehicle-main.php'],
        '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/jeep-fonts.min.css') . '" type="text/css">' . "\n");

// active for subaru graphics pages only
    category_ident(['pages/automotive/subaru'], ['automotive.php', 'vehicle-main.php'],
        '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/subaru-fonts.min.css') . '" type="text/css">' . "\n");

// $css_file passed from each page
    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version($css_file) . '" type="text/css">' . "\n";

// active for all graphics pages
    category_ident(['pages/automotive', 'pages/motorcycle', 'pages/trailer'], ['automotive.php', 'vehicle-main.php', 'motorcycle.php', 'trailer.php'],
        '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/jquery-ui.css') . '" type="text/css">' . "\n");

// active for ALL pages
    /* Simon: Info: These are ordered for optimal performance ref. Lighthouse Test. Simon: Todo: RECHECK ORDER after adding jqueryui*/
    echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/9.3.0/mmenu.js" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('/js/mmenu_config.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js" type="text/javascript"></script>' . "\n" ;

// active for all graphics pages
    category_ident(['pages/automotive', 'pages/motorcycle', 'pages/trailer'], ['automotive.php', 'vehicle-main.php', 'motorcycle.php', 'trailer.php'],
        '<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js" type="text/javascript" defer></script>' . "\n");
    /*category_ident(['pages/automotive', 'pages/motorcycle', 'pages/trailer'], ['automotive.php', 'vehicle-main.php', 'motorcycle.php', 'trailer.php'],
        '<script src="' . auto_version('/js/jquery-ui.min.js') . '" type="text/javascript" async defer></script>' . "\n");*/

// active for all graphics pages
    category_ident(['pages/automotive', 'pages/motorcycle', 'pages/trailer'], ['automotive.php', 'vehicle-main.php', 'motorcycle.php', 'trailer.php'],
        '<script src="' . auto_version('/js/select2.full.min.js') . '" type="text/javascript" async defer></script>' . "\n");

// active for all graphics pages
    category_ident(['pages/automotive', 'pages/motorcycle', 'pages/trailer'], ['automotive.php', 'vehicle-main.php', 'motorcycle.php', 'trailer.php'],
        '<script src="' . auto_version('/js/validate.min.js') . '" type="text/javascript" async defer></script>' . "\n");

    /* FOXYCART */
    category_ident(['pages/automotive', 'pages/motorcycle', 'pages/trailer'], ['automotive.php', 'vehicle-main.php', 'motorcycle.php', 'trailer.php'],
        '<script src="' . auto_version('/js/foxycart_dynamin_price_calc.min.js') . '" type="text/javascript" defer></script>' . "\n");

    echo '<script src="https://cdn.foxycart.com/'.$foxycart_SSL.'/loader.js" type="text/javascript" defer></script>' . "\n" ; /* Simon: Note: was async defer*/
    /* Global */
    if (isset($gallery) || isset($slider) || isset($carousel) == 'on') {
        echo '<script src="' . auto_version('/js/unitegallery.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    }
    if (isset($gallery) == 'on') {
        echo '<script src="' . auto_version('/js/ug-theme-compact.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    }
    if (isset($slider) == 'on') {
        echo '<script src="' . auto_version('/js/ug-theme-slider.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    }
    if (isset($carousel) == 'on') {
        echo '<script src="' . auto_version('/js/ug-theme-carousel.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    }
    echo '<script src="' . auto_version('/js/scripts_global.min.js') . '" type="text/javascript" defer></script>' . "\n" ;

    category_ident(['pages/automotive'], ['automotive.php', 'vehicle-main.php'], '<script src="' . auto_version('/js/autographics.min.js') . '" type="text/javascript" defer></script>' . "\n");
    category_ident(['pages/motorcycle'], ['motorcycle.php'], '<script src="' . auto_version('/js/mcgraphics.min.js') . '" type="text/javascript" defer></script>' . "\n");
    category_ident(['pages/trailer'], ['trailer.php'], '<script src="' . auto_version('/js/trailergraphics.min.js') . '" type="text/javascript" defer></script>' . "\n");
    ?>
</head>

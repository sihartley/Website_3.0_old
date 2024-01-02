<head>
    <?php
    /**
     * @var $page_title * is set by each page except index.php which is set below
     * @var $css_file * is set on per page basis.
     * @var $gallery * is set on per page basis.
     * @var $carousel * is set on per page basis.
     */
    if (strtolower(basename($_SERVER['PHP_SELF'])) !== 'index.php') {
        $title_info = "Vinyl Imagination - $page_title";
    } else {
        $title_info = "Vinyl Imagination - Automotive Decals and Graphics Main Page";
    } ?>
    <!-- Google tag (gtag.js) -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-FE5S0PMVW8"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', 'G-FE5S0PMVW8');
    </script>

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
    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/select2.min.css') . '" type="text/css">' . "\n";
    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/menu.min.css') . '" type="text/css">' . "\n";
    if (isset($gallery) || isset($slider) || isset($carousel) == 'on') {
        echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version('/css/unite-gallery.min.css') . '" type="text/css">' . "\n";
    }
    echo '<link rel="stylesheet" rel="preload" media="screen"  href="' . auto_version($css_file) . '" type="text/css">' . "\n";
    echo '<link rel="stylesheet" media="screen"  href="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/themes/smoothness/jquery-ui.css" type="text/css">' . "\n";

    /* Simon: Info: These are ordered for optimal performance ref. Lighthouse Test. Simon: Todo: RECHECK ORDER after adding jqueryui*/
    echo '<script src="https://cdnjs.cloudflare.com/ajax/libs/jQuery.mmenu/9.3.0/mmenu.js" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="' . auto_version('/js/mmenu_config.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.0/jquery.min.js" type="text/javascript"></script>' . "\n" ;

    /* Simon: ToDo: Download custom minimal version of jqueryui with necessary components only */
    echo '<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.13.2/jquery-ui.min.js" type="text/javascript" defer></script>' . "\n" ; /* Simon: Todo: Load this only on required pages. */
    echo '<script src="' . auto_version('/js/select2.full.min.js') . '" type="text/javascript" async defer></script>' . "\n" ; /* Simon: Todo: Load this only on required pages. */
    /* FOXYCART */
    echo '<script src="' . auto_version('/js/foxycart_dynamin_price_calc.min.js') . '" type="text/javascript" defer></script>' . "\n" ;
    echo '<script src="https://cdn.foxycart.com/vinylimagination/loader.js" type="text/javascript" defer></script>' . "\n" ; /* Simon: Note: was async defer*/
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
//    echo '<script src="' . auto_version('/js/autographics.min.js') . '" type="text/javascript" defer></script>' . "\n" ; /* Simon: Note: Load this only on required pages. */
    category_ident('pages/automotive', '<script src="' . auto_version('/js/autographics.min.js') . '" type="text/javascript" defer></script>' . "\n");
    category_ident('pages/motorcycle', '<script src="' . auto_version('/js/mcgraphics.min.js') . '" type="text/javascript" defer></script>' . "\n");
    category_ident('pages/trailer', '<script src="' . auto_version('/js/trailergraphics.min.js') . '" type="text/javascript" defer></script>' . "\n");
    ?>
</head>
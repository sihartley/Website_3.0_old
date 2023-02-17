<!--<ul class="color-type">-->
<!--    <li><a href="#premium"><span>Premium </span>Cast</a></li>-->
<!--    <li><a href="#wrap-gloss"><span>Premium </span>Gloss<span> Wrap</span></a></li>-->
<!--    <li><a href="#wrap-matte"><span>Premium </span>Matte<span> Wrap</span></a></li>-->
<!--    <li><a href="#wrap-satin"><span>Premium </span>Satin<span> Wrap</span></a></li>-->
<!--    <li><a href="#wrap-tex"><span>Premium </span>Textured<span> Wrap</span></a></li>-->
<!--    <li><a href="#wrap-shift"><span>Premium </span>Shift<span> Wrap</span></a></li>-->
<!--    <li><a href="#reflective">Reflective</a></li>-->
<!--</ul>-->
<ul class="color-type">
    <?php foreach ($color_items as $type) {
//        $tag = str_replace(' ', '-', $type);
        $tag = explode(' ', $type);

        $item = explode(' ', ucwords($type));
        echo "<li><a href='#$tag[2]-$tag[1]'><span>$item[0] </span>$item[1]<span> $item[2]</span></a></li>";
    }?>
</ul>
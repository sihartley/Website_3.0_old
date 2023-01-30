<section class="addtocart">
<!--     link example -->
<!---->
            <a href="<?php echo $foxy_cart; ?>?name=Cool%20Example&price=10&color=red&code=sku123">Add a red Cool Example</a>
     form example
            <form data-fc-form-code="p1" action="<?php echo $foxy_cart; ?>" method="post" accept-charset="utf-8">
                <input type="hidden" name="name" value="2022 Ford Maverick Mach 1 Esque Hood Decal" />
                <input type="hidden" name="image" value="https://vinylimagination.com/Graphics/Vehicles/Ford/Maverick/2k22/M1HD/Ford%20Maverick%20Mach-1%20Hood%20Decal%20(M1HD-001).webp" />
                <input type="hidden" name="Design" value="Design 01" />
                <input type="hidden" name="price" value="93.31" />
                <input type="hidden" name="Part" value="FRD-MAVK22-M1HD" />
                <input type="hidden" name="weight" value="2" />
                <label class="label_left">Color</label>
                <select name="Main Color" onchange="initDynamicPrice();">
                    <option value="Black">Black</option>
                    <option value="Red{p+10|w+1.2}">Red (+$10)</option>
                    <option value="White">White</option>
                </select><br>
                <label class="label_left">Accent</label>
                <select name="Accent" onchange="initDynamicPrice();">
                    <option value="orange">Orange</option>
                    <option value="yellow{p+10|w+1.2}">Yellow (+$10)</option>
                    <option value="green">Green</option>
                </select><br>
                <label class="label_left">Accent 2</label>
                <select name="Accent 2" onchange="initDynamicPrice();">
                    <option value="pink">Pink</option>
                    <option value="brown{p+10|w+1.2}">Brown (+$10)</option>
                    <option value="blue">Blue</option>
                </select><br>
                <label class="label_left">Notes
                <input type="text" name="Design Notes" value="Design Notes"></label><br>
                <input type="submit" value="Add a Cool Example" class="submit" />
            </form>
            <h3 class="p1_total">$93.31</h3>

        View Cart Buttons
            <form action="<?php echo $foxy_cart; ?>?cart=view" method="get" target="_blank">
                <button type="submit">View Cart Side Panel</button>
            </form>
            <button  onclick="window.open('<?php echo $foxy_cart; ?>?cart=view', '_blank')">View Cart Page</button>


</section>


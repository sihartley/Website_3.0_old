<?php
//Company Identification
$companyName = 'Vinyl Imagination';
$companySite = 'https://vinylimagination.com';
$godaddy_ip = '208.109.67.139';
$inmotion_ip = '168.235.116.113';

//Business Hours
$office_hours = '10am to 5pm PST';
$office_days = 'Monday to Friday';

//Address
$address = 'Camarillo, CA 93010 USA';

//Contact Phone Numbers
$phone = '+1 (877) 558-2335'; $phone_clean = str_replace([' ', '(', ')', '-'], '', $phone);
$sms = '+1 (805) 910-7072'; $sms_clean = str_replace([' ', '(', ')', '-'], '', $sms);
$fax = '+1 (866) 871-8450'; $fax_clean = str_replace([' ', '(', ')', '-'], '', $fax);

//Contact Email Addresses
$email_info = 'info@vinylimagination.com'; $e_info = 'info@';
$email_graphics = 'graphics@vinylimagination.com'; $e_graphics = 'graphics@';
$email_sales = 'sales@vinylimagination.com'; $e_sales = 'sales@';
$email_orders = 'orders@vinylimagination.com'; $e_orders = 'orders@';
$email_admin = 'administrator@vinylimagination.com'; $e_admin = 'administrator@';
$email_gallery = 'gallery@vinylimagination.com'; $e_gallery = 'gallery@';

//FoxyCart
$foxy_cart = 'https://vinylimagination.foxycart.com/cart';

//Tawk.to Direct Chat Link
$chat_link = 'https://tawk.to/chat/6229917ca34c2456412a54e4/1ftp60k94';

//Discounts
$automotive_sale_discount = match (date('M')) {
    /* Simon: Info: a -ve value will add to the price. */
    'Jan', 'Feb', 'Mar' => 0.01,
    'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' => 0.02,
    'Oct', 'Nov', 'Dec' => 0.03,
    default => 0.00
};



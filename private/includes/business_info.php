<?php
//Company Identification
$companyName = 'Vinyl Imagination';
$companySite = 'https://vinylimagination.com';

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

//Base Costs
$tube_caps = 1.00;
$shipping_tube = 3.00;
$shipping_cost = 10.00;
$foxy_trans_fee = 0.20; //$21.25 Monthly Subscription
$oDesk_trans_fee = 0.25; //$20.00 Monthly Subscription
$cc_trans_fee = 0.25; //+3.4% Fee
$base_costs = $tube_caps + $shipping_tube + $shipping_cost + $foxy_trans_fee + $oDesk_trans_fee + $cc_trans_fee;

$trans_fee = 0.034;

//Hourly Rate
$hr_rate = 88.00;

//Discounts (Percentage)
$automotive_sale_discount = match (date('M')) {
    /* Simon: Info: a -ve value will add to the price. */
    'Jan', 'Feb', 'Mar' => 0.01,
    'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep' => 0.00,
    'Oct', 'Nov', 'Dec' => 0.03,
    default => 0.10
};
$motorcycle_sale_discount = .000;
$trailer_sale_discount = .000;

//JotForm Form Identifiers
$graphicRequest = '232556466911057';
$infoRequest = '221986631775165';
$insuranceClaim = '233647762310152';



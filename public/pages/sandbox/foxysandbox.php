<?php

?>

<!-- Added Form Sections -->
<!-- Referral Source -->
<div class="fc-form-group ">
    <div class="col-sm-8 col-sm-offset-3" data-fc-error-for="referral_source" data-fc-error-class="fc-alert-container--error">
        <div class="fc-input-group-container fc-input-group-container--checkbox fc-input-group-container--active">
            <label class="fc-input-group-container__title fc-input-group-container__title--forced fc-form-label">
                How did you find us? (optional)
            </label>
            <div class="fc-form-group">
                <p>Please let us know who referred you.</p>
                <input type="text" id="referral_source" name="referral_source" placeholder="" autocomplete="off" class="fc-form-control" formnovalidate="" aria-required="false" value="">
            </div>
        </div>
    </div>
</div>

<!-- Order Notes-->
<div class="fc-form-group">
    <div class="col-sm-8 col-sm-offset-3">
        <div class="fc-input-group-container fc-input-group-container--textarea fc-input-group-container--active">
            <label class="fc-input-group-container__title fc-input-group-container__title--forced fc-form-label">
                Order Notes (optional)
            </label>
            <div class="fc-form-group">
                <textarea name="Order_Notes" id="Order_Notes" aria-required="false" autocomplete="off" class="fc-form-control" placeholder="Questions? Feedback? Let us know!" style="background:#fff; height:5em;"></textarea>
            </div>
        </div>
    </div>
</div>

<div class="fc-form-group">
    <div class="col-sm-8 col-sm-offset-3 fc-checkout__additional-field--proof-checkbox">
        <div class="fc-input-group-container fc-input-group-container--checkbox">
            <label class="fc-input-group-container__title fc-form-label fc-form-label--proof-checkbox">
                <input type="hidden" name="Proof Requested" value="0" />
                <input type="checkbox"
                       id="proof_request"
                       name="Design Proof"
                       value="Requested"
                       class="fc-form-control fc-form-control--proof"
                       {{ checked(my_proof_checkbox == '1') }} />
                My Checkbox Label
            </label>
        </div>
    </div>
</div>

<!-- Terms & Conditions -->
<div class="fc-form-group">
    <div class="fc-checkout__additional-field--tos " data-fc-error-for="tos_agreement" data-fc-error-class="fc-alert-container--error">
        <div class="fc-input-group-container fc-input-group-container--checkbox">
            <label class="fc-input-group-container__title fc-form-label fc-form-label--tos">
                <input type="hidden" name="tos_agreement" value="false" />
                <input type="checkbox"
                       id="tos_agreement"
                       name="tos_agreement"
                       value="true"
                       class="fc-form-control fc-form-control--tos"
                />
                I agree to the <a href="https://vinylimagination.com/pages/support/terms-conditions.php" target="_blank">Terms of Service</a>.
            </label>
        </div>
    </div>
</div>

<!-- Newsletter Subscription -->
<div class="fc-form-group">
    <div class="fc-checkout__additional-field--subscribe">
        <div class="fc-input-group-container fc-input-group-container--checkbox">
            <label class="fc-input-group-container__title fc-form-label fc-form-label--subscribe">
                <input type="hidden" name="newsletter_subscribe" value="0" />
                <input type="checkbox"
                       name="newsletter_subscribe"
                       value="1"
                       class="fc-form-control fc-form-control--subscribe"
                />
                I would like to subscribe to your newsletter
            </label>
        </div>
    </div>
</div>
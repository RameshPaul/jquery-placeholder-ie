function getInternetExplorerVersion() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    var rv = -1;
    if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))      // If Internet Explorer, return version number
    {
        if (isNaN(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))))) {
            //For IE 11 >
            if (navigator.appName == 'Netscape') {
                var ua = navigator.userAgent;
                var re = new RegExp("Trident/.*rv:([0-9]{1,}[\.0-9]{0,})");
                if (re.exec(ua) != null) {
                    rv = parseFloat(RegExp.$1);
                    return rv;
                }
            }
            else {
                return 9000;
            }
        }
        else {
            //For < IE11
            return (parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        }
        return 9000;
    }
}
var Browser = getInternetExplorerVersion();
if(Browser == undefined){
    Browser = 9000;
}

$(document).ready(function(){
    if(Browser < 10){
        $('input, textarea').placeholder();
    }

var code = $('#form_coupons .form-controls');
$('body').on('click', '.add-new-code', function (e) {
    e.preventDefault();
    var count = $('#form_coupons .coupon_codes').length;
    if (count > 4) {
        return;
    }
    if(Browser < 10){
        $('input, textarea').placeholder("destroy");
    }
    var id = 'coupon_code_' + (+count);
    var name = 'coupon_code[' + (+count) + ']';
    var inputItemWrap = $('<div />', {class: 'code-box'});//'<div class="code-box"></div>';
    var inputHtml = '<input type="text" value="" id="'+id+'" name="'+name+'" class="coupon_codes" placeholder="This is dynamic filed" maxlength="14"  />';
    inputItemWrap.append(inputHtml);
    code.append(inputItemWrap);
    if(Browser < 10){
        $('input, textarea').placeholder();
    }

});
});

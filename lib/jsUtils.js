/**
 * Created by gjwlg on 2017/6/16.
 */
function Utils() {

    var root = this;

    root.VERSION = '0.0.1';

    // 保留n位小数，将浮点数四舍五入，取小数点后n位
    root.decimal = function(arg, scale) {
        var num = parseFloat(arg);
        if (isNaN(scale)) {
            console.log('The scale you\'ve passed isNaN, please check.');
            return;
        }
        if (isNaN(num)) {
            console.log('The arg you\'ve passed isNaN, please check.');
            return;
        }
        var pow = Math.pow(10, scale);
        num = Math.round(arg*pow)/pow;
        return num;
    };

    //强制保留n位小数, 注意此时返回的是字符串
    root.forceDecimal = function(arg, scale) {
        var num = parseFloat(arg);
        if (isNaN(num)) {
            return false;
        }
        var pow = Math.pow(10, scale)
        num = Math.round(arg*pow)/pow;
        var str = num.toString();
        var rs = str.indexOf('.');
        if (rs < 0) {
            rs = str.length;
            str += '.';
        }
        while (str.length <= rs + scale) {
            str += '0';
        }
        return str;
    };

}
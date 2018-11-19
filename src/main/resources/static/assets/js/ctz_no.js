'use strict';
var CtzNo = (function () {
	var ssn = '';
	var ssn1, ssn2;
	var message='';
	var valid=false;
    function CtzNo(ctzNo) {
    	ssn = ctzNo;
        message = '';
        valid = validate();
    };

    var validate = function () {
        // 자리수 체크
        if (ssn == undefined || ssn.length != 13){
            message = "올바른 주민등록 번호를 입력하여 주세요.";
            return false;
        }   
        
        ssn1 = ssn.substring(0,6);
        ssn2 = ssn.substring(6);
        let arr_ssn = [],
            compare = [2,3,4,5,6,7,8,9,2,3,4,5],
            sum     = 0;
        
        // 입력여부 체크
        if( ssn1 == undefined || ssn1 == '') {
            message = '주민등록번호를 기입해주세요.';
            return false;
        }
        
        if( ssn2 == undefined || ssn2 == ''){
            message = '주민등록번호를 기입해주세요.';
            return false;
        }   
        
        // 입력값 체크
        if( ssn1.match('[^0-9]')) { 
            message = "주민등록번호는 숫자만 입력하셔야 합니다.";
            return false;
        }
        if( ssn2.match('[^0-9]') ) {
            message = "주민등록번호는 숫자만 입력하셔야 합니다.";
            return false;
        }
        
        
        // 공식: M = (11 - ((2×A + 3×B + 4×C + 5×D + 6×E + 7×F + 8×G + 9×H + 2×I + 3×J + 4×K + 5×L) % 11)) % 11
        for(var i = 0; i<13; i++) {
            arr_ssn[i] = ssn.substring(i,i+1);
        }
         
        for(var i = 0; i<12; i++){
            sum = sum + (arr_ssn[i] * compare[i]);
        }
        
        sum = (11 - (sum % 11)) % 10;
         
        if (sum != arr_ssn[12]){
            message = "올바른 주민등록 번호를 입력하여 주세요.";
            return false;
        }
        
        return true;
    };

    var gender = function() {        
    	let sSliceCtzCd = ssn2.substring(0,1);
        if ( sSliceCtzCd > 0 && sSliceCtzCd < 8 )
            if ( sSliceCtzCd%2 )
                return 'M';
            else
                return 'F';
        else
            return '';
    };
    CtzNo.prototype.isValid = function(){
    	return valid;
    }
    CtzNo.prototype.getMessage = function(){
    	return message;
    };
    CtzNo.prototype.getGender = function(){
    	return gender();
    };
    
    return CtzNo;
}());
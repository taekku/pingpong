'use strict';
/**
 * Table, Column별 권한관리필요
 * Message에서의 권한관리 방안
 * Dictionary필요
 * 
 * A.I. Server --> Client
 * 1.Data
 * 2.Field별 수정권한여부관리
 * 3.수정불과항목중 저장에 관여하는 Field값을 Server Session등으로 관리
 *   3.1. 또는 수정불과항목에 대한 값의 Hash Value를 계산
 * B.II. Client --> Server
 * 1.Filter에서 수정항목검사
 *   1.1. 또는 Hash Value체크
 */
var PMessage = (function () {
	var ssn = '';
	var ssn1, ssn2;
    
    return PMessage;
}());
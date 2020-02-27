/*
http://codingdojang.com/scode/410?answer=19518
주어진 문자열(공백 없이 쉼표로 구분되어 있음)을 가지고 아래 문제에 대한 프로그램을 작성하세요.

이유덕,이재영,권종표,이재영,박민호,강상희,이재영,김지완,최승혁,이성연,박영서,박민호,전경헌,송정환,김재성,이유덕,전경헌

1. 김씨와 이씨는 각각 몇 명 인가요?
2. "이재영"이란 이름이 몇 번 반복되나요?
3. 중복을 제거한 이름을 출력하세요.
4. 중복을 제거한 이름을 오름차순으로 정렬하여 출력하세요.
*/

function init() {
    const str = "이유덕,이재영,권종표,이재영,박민호,강상희,이재영,김지완,최승혁,이성연,박영서,박민호,전경헌,송정환,김재성,이유덕,전경헌";
    const arr = str.split(",");
    
    const kimCnt = arr.filter(s => s.startsWith("김")).length;
    const leeCnt = arr.filter(s => s.startsWith("이")).length;
    console.log(`1번 답: 김씨 ${kimCnt}명, 이씨 ${leeCnt}명`);

    const leejaeyoungCnt = arr.filter(s => s == "이재영").length;
    console.log(`2번 답: 이재영 ${leejaeyoungCnt}번`);

    const set = arr.reduce((set, s) => set.add(s), new Set());
    const unsorted = [...set];
    console.log(`3번 답:`, unsorted.join(", "));

    const sorted = [...unsorted].sort();
    console.log(`4번 답:`, sorted.join(", "));
}

init();
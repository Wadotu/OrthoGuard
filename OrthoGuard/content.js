// 현재 접속한 URL과 도메인 주소를 소문자로 가져옵니다.
const currentUrl = window.location.href.toLowerCase();
const currentDomain = window.location.hostname.toLowerCase();

// 🟢 1. 화이트리스트 (절대 차단하면 안 되는 안전한 사이트)
// 여기에 게임 사이트나 유용한 사이트를 등록해 두면 무조건 통과시킵니다.
const whitelist = [
  "roblox.com",
  "google.com",
  "youtube.com",
  "naver.com",
  "github.com",
  "discord.com"
];

// 🔴 2. 블랙리스트 (포르노 사이트 도메인 및 유해 키워드)
// 주소에 이 단어들이 포함되어 있으면 자비 없이 때려잡습니다.
const blacklist = [
  "pornhub", "xvideos", "xhamster", "xnxx", "redtube",
  "youporn", "tube8", "spankbang", "eporner", "beeg",
  "avgle", "missav", "jable", "sex", "porn", "hentai", "jav",
  "19wiki", "yako", "mingky", "kissjav", "rule34"
];

// 3. 판독 및 실행 엔진
function checkDomainGuard() {
  // 우선순위 1: 화이트리스트에 있는 사이트인가?
  const isSafe = whitelist.some(safeDomain => currentDomain.includes(safeDomain));
  if (isSafe) {
    console.log("OrthoGuard: 안전한 사이트 확인 완료. 통과!");
    return; // 여기서 검사를 종료하고 보내줍니다.
  }

  // 우선순위 2: 블랙리스트 키워드가 주소에 들어있는가?
  const isBadSite = blacklist.some(badKeyword => currentUrl.includes(badKeyword));

  if (isBadSite) {
    console.warn("OrthoGuard: 유해 도메인 감지! 즉시 차단합니다.");
    // 하느님의 말씀이 있는 차단 화면으로 튕겨냄
    window.location.replace(chrome.runtime.getURL("block.html"));
  } else {
    console.log("OrthoGuard: 일반 사이트입니다. 통과!");
  }
}

// 스크립트가 로드되자마자 즉시 주소를 검사합니다.
checkDomainGuard();
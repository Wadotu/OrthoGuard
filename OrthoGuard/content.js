// 코드 전체를 캡슐화(() => { ... })(); 하여 변수 충돌 에러를 완벽히 차단합니다.
(() => {
  // 🟢 1. 절대 안전지대
  const whitelist = [
    "roblox.com", "google.com", "youtube.com", "github.com", 
    "discord.com", "naver.com", "daum.net", "namu.wiki", 
    "orthodoxwiki.org", "wikipedia.org", "stackoverflow.com"
  ];

  // 🔴 2. 궁극의 유해 키워드 데이터베이스 (글로벌 + 한국 + AI)
  const riskKeywords = {
    // [즉결 처단 대상 - 100점]
    "pornhub": 100, "xvideos": 100, "xnxx": 100, "xhamster": 100, 
    "redtube": 100, "youporn": 100, "spankbang": 100, "eporner": 100, 
    "beeg": 100, "brazzers": 100, "realitykings": 100, "naughtyamerica": 100,
    "hitomi": 100, "nhentai": 100, "rule34": 100, "e621": 100, 
    "missav": 100, "jable": 100, "avgle": 100, "gelbooru": 100, 
    "sankaku": 100, "fakku": 100, "exhentai": 100, "javhd": 100,
    "야동": 100, "야설": 100, "국산야동": 100, "무료야동": 100,
    "19금": 100, "성인웹툰": 100, "밤토끼": 100, "뉴토끼": 100, "soranet": 100,
    "onlyfans": 100, "fansly": 100, "stripchat": 100, "chaturbate": 100, 
    "bongacams": 100, "cam4": 100, "fantia": 100,
    "spicychat": 100, "janitorai": 100, "crushon": 100, "nudify": 100,
    "deepnude": 100, "ai-nude": 100, "nsfw-ai": 100, "civitai": 90,
    
    // [고위험 키워드 - 80점]
    "porn": 80, "hentai": 80, "jav": 80, "sex": 80, 
    "xxx": 80, "nsfw": 80, "erotic": 80, "doujinshi": 80, 
    "bdsm": 80, "deepfake": 80, "incest": 80, "loli": 80, "shota": 80,
    "uncensored": 80, "unfiltered": 80,

    // [중위험 키워드 - 40~50점]
    "nude": 50, "naked": 50, "adult": 50, "camgirl": 50, "escort": 50, 
    "boobs": 40, "pussy": 40, "dick": 40, "fetish": 40, "babes": 40, 
    "thicc": 40, "milf": 40, "망가": 50, "성인물": 50
  };

  const THRESHOLD = 100;

  function executeJudgment() {
    let currentUrl = window.location.href.toLowerCase();
    
    // 주소창 한글 및 특수기호 해독 시 발생하는 에러를 막기 위한 안전장치
    try {
      currentUrl = decodeURIComponent(currentUrl);
    } catch (e) {
      // 해독할 수 없는 특이한 주소면 원래 주소를 그대로 사용
    }

    const currentDomain = window.location.hostname.toLowerCase();
    
    const isSafe = whitelist.some(domain => currentDomain.includes(domain));
    if (isSafe) return;

    let totalScore = 0;

    for (const [word, penalty] of Object.entries(riskKeywords)) {
      if (currentUrl.includes(word)) {
        totalScore += penalty;
      }
    }

    const pageTitle = document.title ? document.title.toLowerCase() : "";
    for (const [word, penalty] of Object.entries(riskKeywords)) {
      if (pageTitle.includes(word) && !currentUrl.includes(word)) {
        totalScore += (penalty * 0.8); 
      }
    }

    if (totalScore >= THRESHOLD) {
      console.warn("OrthoGuard: 유해물 확정! 하느님의 이름으로 즉시 처단합니다. ⚡");
      window.location.replace(chrome.runtime.getURL("block.html"));
    }
  }

  // 1. 최초 실행
  executeJudgment();

  // 2. 지연 실행 (제목이 늦게 뜨는 사이트 대비)
  setTimeout(executeJudgment, 1500);

  // 3. 실시간 주소 변경 감시
  let lastUrl = location.href; 
  const observer = new MutationObserver(() => {
    const url = location.href;
    if (url !== lastUrl) {
      lastUrl = url;
      executeJudgment();
    }
  });
  
  // document가 완전히 로딩되기 전에도 안전하게 감시 시작
  observer.observe(document, { subtree: true, childList: true });

})();

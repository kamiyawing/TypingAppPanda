// =========================================
// パンマスタ（お題データ：全70種類・ローマ字検証済み）
// =========================================
const BREAD_LIST = [
  { id: 1, name: "あんぱん", romaji: "anpan", icon: "🍞" },
  { id: 2, name: "メロンパン", romaji: "meronpan", icon: "🍈" },
  { id: 3, name: "クロワッサン", romaji: "kurowassan", icon: "🥐" },
  { id: 4, name: "カレーパン", romaji: "kare-pan", icon: "🍛" },
  { id: 5, name: "フランスパン", romaji: "furansupan", icon: "🥖" },
  { id: 6, name: "食パン", romaji: "syokupan", icon: "🍞" },
  { id: 7, name: "クリームパン", romaji: "kuri-mupan", icon: "🧁" },
  { id: 8, name: "ベーグル", romaji: "be-guru", icon: "🥯" },
  { id: 9, name: "サンドイッチ", romaji: "sandoitti", icon: "🥪" },
  { id: 10, name: "ホットドッグ", romaji: "hottodoggu", icon: "🌭" },
  { id: 11, name: "塩パン", romaji: "siopan", icon: "🧂" },
  { id: 12, name: "チョココロネ", romaji: "tyokokorone", icon: "🍫" },
  { id: 13, name: "ジャムパン", romaji: "jyamupan", icon: "🍓" },
  { id: 14, name: "揚げパン", romaji: "agepan", icon: "🍩" },
  { id: 15, name: "コッペパン", romaji: "koppepan", icon: "🥖" },
  { id: 16, name: "デニッシュ", romaji: "denissyu", icon: "🥐" },
  { id: 17, name: "ブリオッシュ", romaji: "buriossyu", icon: "👑" },
  { id: 18, name: "フォカッチャ", romaji: "fokkattya", icon: "🌿" },
  { id: 19, name: "シナモンロール", romaji: "sinamonro-ru", icon: "🌀" },
  { id: 20, name: "ガーリックフランス", romaji: "ga-rikkufuransu", icon: "🧄" },
  { id: 21, name: "明太フランス", romaji: "mentaifuransu", icon: "🌶️" },
  { id: 22, name: "レーズンパン", romaji: "re-zunpan", icon: "🍇" },
  { id: 23, name: "くるみパン", romaji: "kurumipan", icon: "🌰" },
  { id: 24, name: "ちぎりパン", romaji: "tigiripan", icon: "🍞" },
  { id: 25, name: "ツイストドーナツ", romaji: "tuisutodo-natu", icon: "🍩" },
  { id: 26, name: "ピロシキ", romaji: "pirosiki", icon: "🥟" },
  { id: 27, name: "バゲット", romaji: "bagetto", icon: "🥖" },
  { id: 28, name: "パニーニ", romaji: "pani-ni", icon: "🥪" },
  { id: 29, name: "ブール", romaji: "bu-ru", icon: "🍞" },
  { id: 30, name: "チーズケーキデニッシュ", romaji: "ti-zuke-kidenissyu", icon: "🧀" },
  { id: 31, name: "きなこパン", romaji: "kinakopan", icon: "🫘" },
  { id: 32, name: "ぶどうパン", romaji: "budoupan", icon: "🍇" },
  { id: 33, name: "豆パン", romaji: "mamepan", icon: "🫛" },
  { id: 34, name: "米粉パン", romaji: "komekopan", icon: "🌾" },
  { id: 35, name: "玄米パン", romaji: "genmaipan", icon: "🌾" },
  { id: 36, name: "丸パン", romaji: "marupan", icon: "🍞" },
  { id: 37, name: "角食", romaji: "kakusyoku", icon: "🍞" },
  { id: 38, name: "山食", romaji: "yamasyoku", icon: "🍞" },
  { id: 39, name: "バターロール", romaji: "bata-ro-ru", icon: "🧈" },
  { id: 40, name: "ミルクパン", romaji: "mirukupan", icon: "🥛" },
  { id: 41, name: "ハムパン", romaji: "hamupan", icon: "🥓" },
  { id: 42, name: "たまごパン", romaji: "tamagopan", icon: "🥚" },
  { id: 43, name: "ツナパン", romaji: "tunapan", icon: "🐟" },
  { id: 44, name: "コーンパン", romaji: "ko-npan", icon: "🌽" },
  { id: 45, name: "とろけるクリームパン", romaji: "torokerukuri-mupan", icon: "🧁" },
  { id: 46, name: "焼きたてメロンパン", romaji: "yakitatemeronpan", icon: "🍈" },
  { id: 47, name: "サクサククロワッサン", romaji: "sakusakukurowassan", icon: "🥐" },
  { id: 48, name: "スパイシーカレーパン", romaji: "supaishi-kare-pan", icon: "🍛" },
  { id: 49, name: "もちもちちぎりパン", romaji: "motimotitigiripan", icon: "🍞" },
  { id: 50, name: "はちみつバターパン", romaji: "hatimitubata-pan", icon: "🍯" },
  { id: 51, name: "宇治抹茶あんぱん", romaji: "ujimattyaanpan", icon: "🍵" },
  { id: 52, name: "つぶあんマーガリン", romaji: "tubuanma-garin", icon: "🧈" },
  { id: 53, name: "チョコチップメロンパン", romaji: "tyokotippumeronpan", icon: "🍫" },
  { id: 54, name: "カスタードデニッシュ", romaji: "kasuta-dodenissyu", icon: "🍮" },
  { id: 55, name: "ブルーベリーベーグル", romaji: "buru-be-ri-be-guru", icon: "🫐" },
  { id: 56, name: "クランベリーフランス", romaji: "kuranbe-ri-furansu", icon: "🍒" },
  { id: 57, name: "アップルシナモンパイ", romaji: "appurusinamonpai", icon: "🍎" },
  { id: 58, name: "ハムチーズクロワッサン", romaji: "hamuti-zukurowassan", icon: "🧀" },
  { id: 59, name: "ベーコンエピフランス", romaji: "be-konepifuransu", icon: "🥓" },
  { id: 60, name: "キャラメルミルクフランス", romaji: "kyaramerumirukufuransu", icon: "🍮" },
  { id: 61, name: "チョコパン", romaji: "tyokopan", icon: "🍫" },
  { id: 62, name: "ゴマパン", romaji: "gomapan", icon: "⚪" },
  { id: 63, name: "栗パン", romaji: "kuripan", icon: "🌰" },
  { id: 64, name: "芋パン", romaji: "imopan", icon: "🍠" },
  { id: 65, name: "梅パン", romaji: "umepan", icon: "🔴" },
  { id: 66, name: "ピザパン", romaji: "pizapan", icon: "🍕" },
  { id: 67, name: "パンドミ", romaji: "pandomi", icon: "🍞" },
  { id: 68, name: "蒸しパン", romaji: "musipan", icon: "☁️" },
  { id: 69, name: "黒糖パン", romaji: "kokutoupan", icon: "🟤" },
  { id: 70, name: "ピタパン", romaji: "pitapan", icon: "🫓" }
];

const DIFFICULTY_CONFIG = {
  easy: {
    key: "easy",
    label: "かんたん",
    filter: (bread) => bread.romaji.length <= 7
  },
  normal: {
    key: "normal",
    label: "ふつう",
    filter: (bread) => bread.romaji.length <= 11
  },
  hard: {
    key: "hard",
    label: "むずかしい",
    filter: (bread) => bread.romaji.length >= 12
  }
};

const GAME_DURATION = 30;
const RANKING_STORAGE_KEY = "panda_rankings_v2";
const MAX_RANKING_DISPLAY = 5;

// =========================================
// DOM要素の取得
// =========================================
const screens = {
  title: document.getElementById("screen-title"),
  countdown: document.getElementById("screen-countdown"),
  game: document.getElementById("screen-game"),
  result: document.getElementById("screen-result")
};

const usernameInput = document.getElementById("username-input");
const diffButtons = Array.from(document.querySelectorAll(".diff-btn"));
const rankingTabs = Array.from(document.querySelectorAll(".ranking-tab"));
const startBtn = document.getElementById("start-btn");
const retryBtn = document.getElementById("retry-btn");
const backTitleBtn = document.getElementById("back-title-btn");

const currentDifficultyLabelEl = document.getElementById("current-difficulty-label");
const timeLeftEl = document.getElementById("time-left");
const eatenCountEl = document.getElementById("eaten-count");
const pandaFaceEl = document.getElementById("panda-face");
const pandaSpeechEl = document.getElementById("panda-speech");
const breadStageEl = document.querySelector(".bread-stage");
const breadIconEl = document.getElementById("bread-icon");
const eatMessageEl = document.getElementById("eat-message");
const breadNameEl = document.getElementById("bread-name");
const breadRomajiEl = document.getElementById("bread-romaji");

const resultUsernameEl = document.getElementById("result-username");
const resultDifficultyEl = document.getElementById("result-difficulty");
const resultEatenEl = document.getElementById("result-eaten");
const resultAccuracyEl = document.getElementById("result-accuracy");
const resultRankingTitleEl = document.getElementById("result-ranking-title");
const pandaRankTitleEl = document.getElementById("panda-rank-title");
const pandaRankCommentEl = document.getElementById("panda-rank-comment");

const titleRankingBody = document.getElementById("title-ranking-body");
const resultRankingBody = document.getElementById("result-ranking-body");

const eatAnimStageEl = document.getElementById("eat-anim-stage");
const animPandaEl = document.getElementById("anim-panda");
const animBreadEl = document.getElementById("anim-bread");

let eatAnimTimerId = null;
let countdownIntervalId = null;
let isCountingDown = false;

const abortBtn = document.getElementById("abort-btn");
const countdownOverlayEl = document.getElementById("countdown-overlay");
const countdownNumberEl = document.getElementById("countdown-number");

const countdownAbortBtn = document.getElementById("countdown-abort-btn");

// =========================================
// 選択状態・ゲーム状態管理
// =========================================
let selectedDifficulty = "normal";
let activeRankingTab = "normal";

let remainingQueueByDiff = {
  easy: [],
  normal: [],
  hard: []
};

let gameState = {
  isPlaying: false,
  playerName: "ゲスト",
  difficulty: "normal",
  timeLeft: GAME_DURATION,
  eatenCount: 0,
  correctKeys: 0,
  missKeys: 0,
  currentBread: null,
  lastBreadId: null,
  charIndex: 0,
  timerId: null
};

// =========================================
// 画面切り替え＆選択UI制御
// =========================================
function showScreen(screenName) {
  Object.values(screens).forEach((sec) => sec.classList.remove("active"));
  if (screens[screenName]) {
    screens[screenName].classList.add("active");
  }
}

function setSelectedDifficulty(diffKey) {
  if (!DIFFICULTY_CONFIG[diffKey]) return;
  selectedDifficulty = diffKey;

  diffButtons.forEach((btn) => {
    btn.classList.toggle("active", btn.dataset.diff === diffKey);
  });

  setActiveRankingTab(diffKey);
}

function setActiveRankingTab(diffKey) {
  if (!DIFFICULTY_CONFIG[diffKey]) return;
  activeRankingTab = diffKey;

  rankingTabs.forEach((tab) => {
    tab.classList.toggle("active", tab.dataset.rankDiff === diffKey);
  });

  renderRankingTable(titleRankingBody, diffKey);
}

// =========================================
// シャッフル＆重複なし出題キュー管理
// =========================================
function shuffleArray(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function refillQueueForDifficulty(diffKey) {
  const config = DIFFICULTY_CONFIG[diffKey] || DIFFICULTY_CONFIG.normal;
  const candidates = BREAD_LIST.filter(config.filter);
  const pool = candidates.length > 0 ? candidates : BREAD_LIST;

  let shuffled = shuffleArray(pool);

  if (
    shuffled.length > 1 &&
    gameState.lastBreadId !== null &&
    shuffled[0].id === gameState.lastBreadId
  ) {
    const swapIndex = shuffled.findIndex((item) => item.id !== gameState.lastBreadId);
    if (swapIndex > 0) {
      [shuffled[0], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[0]];
    }
  }

  remainingQueueByDiff[diffKey] = shuffled;
}

function pickNextBread() {
  const diffKey = gameState.difficulty;

  if (!remainingQueueByDiff[diffKey] || remainingQueueByDiff[diffKey].length === 0) {
    refillQueueForDifficulty(diffKey);
  }

  const nextBread = remainingQueueByDiff[diffKey].shift();
  gameState.currentBread = nextBread;
  gameState.lastBreadId = nextBread.id;
  gameState.charIndex = 0;

  renderBread();
}

function renderBread() {
  const bread = gameState.currentBread;
  if (!bread) return;

  breadIconEl.textContent = bread.icon;
  breadNameEl.textContent = bread.name;

  const romaji = bread.romaji;
  const idx = gameState.charIndex;

  const typedPart = romaji.slice(0, idx);
  const currentPart = romaji.slice(idx, idx + 1);
  const untypedPart = romaji.slice(idx + 1);

  breadRomajiEl.innerHTML =
    `<span class="typed">${escapeHtml(typedPart)}</span>` +
    `<span class="current">${escapeHtml(currentPart)}</span>` +
    `<span class="untyped">${escapeHtml(untypedPart)}</span>`;
}

function showEatEffect(breadName, eatenCount, breadIcon = "🍞") {
  eatMessageEl.textContent = `🐼 モグモグ…「${breadName}」を完食！`;
  pandaFaceEl.textContent = "😋";
  pandaSpeechEl.textContent =
    eatenCount >= 10
      ? `すごい食欲！もう${eatenCount}個も食べたよ！`
      : `おいしい〜！これで${eatenCount}個目！`;

  // パンダ＆パンの食べるアニメーション再生
  if (eatAnimStageEl && animPandaEl && animBreadEl) {
    animPandaEl.textContent = "😋";
    animBreadEl.textContent = breadIcon;

    eatAnimStageEl.classList.remove("is-playing");
    void eatAnimStageEl.offsetWidth;
    eatAnimStageEl.classList.add("is-playing");

    if (eatAnimTimerId !== null) {
      clearTimeout(eatAnimTimerId);
    }
    eatAnimTimerId = setTimeout(() => {
      eatAnimStageEl.classList.remove("is-playing");
      animPandaEl.textContent = "🐼";
      eatAnimTimerId = null;
    }, 650);
  }

  breadIconEl.classList.remove("eaten-anim");
  void breadIconEl.offsetWidth;
  breadIconEl.classList.add("eaten-anim");

  setTimeout(() => {
    breadIconEl.classList.remove("eaten-anim");
  }, 220);
}

function flashMiss() {
  pandaFaceEl.textContent = "💦";
  pandaSpeechEl.textContent = "おっと！落ち着いてパンを狙おう！";

  breadStageEl.classList.remove("miss-flash");
  void breadStageEl.offsetWidth;
  breadStageEl.classList.add("miss-flash");

  setTimeout(() => {
    breadStageEl.classList.remove("miss-flash");
  }, 150);
}

function getPandaEvaluation(eatenCount, diffKey) {
  const multiplier = diffKey === "hard" ? 1.5 : diffKey === "normal" ? 1.0 : 0.8;
  const scorePoint = eatenCount * multiplier;

  if (scorePoint >= 15) {
    return {
      title: "👑 伝説のパンダ大食い王",
      comment: "パン屋さんの棚が空っぽになるレベルの神速タイピング！"
    };
  }
  if (scorePoint >= 9) {
    return {
      title: "🥖 熟練ベーカリーパンダ",
      comment: "素晴らしい食べっぷり！パンダ店長も大満足です！"
    };
  }
  if (scorePoint >= 4) {
    return {
      title: "🥐 お散歩パンダ",
      comment: "いい調子！次はもう2〜3個おかわりを目指そう！"
    };
  }
  return {
    title: "🐼 見習い子パンダ",
    comment: "まずはウォームアップ完了！もう一度焼きたてパンに挑戦だ！"
  };
}

// =========================================
// ゲーム開始・タイマー・終了処理
// =========================================
function clearAllTimers() {
  if (gameState.timerId !== null) {
    clearInterval(gameState.timerId);
    gameState.timerId = null;
  }
  if (countdownIntervalId !== null) {
    clearInterval(countdownIntervalId);
    countdownIntervalId = null;
  }
  if (eatAnimTimerId !== null) {
    clearTimeout(eatAnimTimerId);
    eatAnimTimerId = null;
  }
  isCountingDown = false;
  if (eatAnimStageEl) {
    eatAnimStageEl.classList.remove("is-playing");
  }
}

function triggerCountdownAnimation() {
  if (!countdownNumberEl) return;
  countdownNumberEl.classList.remove("countdown-big-number");
  void countdownNumberEl.offsetWidth;
  countdownNumberEl.classList.add("countdown-big-number");
}

function beginGameplayTimer() {
  gameState.isPlaying = true;
  pandaFaceEl.textContent = "🐼";
  pandaSpeechEl.textContent = "スタート！どんどん打ち込もう！";

  // カウントダウン終了と同時にゲーム画面へ切り替え＆1問目を表示
  pickNextBread();
  showScreen("game");

  gameState.timerId = setInterval(() => {
    gameState.timeLeft -= 1;
    timeLeftEl.textContent = Math.max(0, gameState.timeLeft);

    if (gameState.timeLeft === 10) {
      pandaFaceEl.textContent = "🔥";
      pandaSpeechEl.textContent = "残り10秒！ラストスパートで食べまくれ〜！";
    }

    if (gameState.timeLeft <= 0) {
      finishGame();
    }
  }, 1000);
}

function startGame() {
  clearAllTimers();

  const rawName = usernameInput.value.trim();
  const playerName = rawName !== "" ? rawName : "ゲスト";
  const diffKey = selectedDifficulty;
  const diffLabel = DIFFICULTY_CONFIG[diffKey].label;

  refillQueueForDifficulty(diffKey);

  gameState = {
    isPlaying: false,
    playerName,
    difficulty: diffKey,
    timeLeft: GAME_DURATION,
    eatenCount: 0,
    correctKeys: 0,
    missKeys: 0,
    currentBread: null,
    lastBreadId: null,
    charIndex: 0,
    timerId: null
  };

  currentDifficultyLabelEl.textContent = diffLabel;
  timeLeftEl.textContent = gameState.timeLeft;
  eatenCountEl.textContent = gameState.eatenCount;
  eatMessageEl.textContent = "";

  // まずはカウントダウン画面を表示
  let count = 3;
  isCountingDown = true;
  if (countdownNumberEl) {
    countdownNumberEl.textContent = count;
    triggerCountdownAnimation();
  }
  showScreen("countdown");

  countdownIntervalId = setInterval(() => {
    count -= 1;
    if (count > 0) {
      if (countdownNumberEl) {
        countdownNumberEl.textContent = count;
        triggerCountdownAnimation();
      }
    } else {
      clearInterval(countdownIntervalId);
      countdownIntervalId = null;
      isCountingDown = false;
      beginGameplayTimer();
    }
  }, 1000);
}

function abortGame() {
  // プレイ中でもカウントダウン中でも安全に中断してタイトルへ戻る
  gameState.isPlaying = false;
  clearAllTimers();
  setActiveRankingTab(gameState.difficulty || selectedDifficulty);
  showScreen("title");
}

function finishGame() {
  if (!gameState.isPlaying) return;
  gameState.isPlaying = false;

  if (gameState.timerId !== null) {
    clearInterval(gameState.timerId);
    gameState.timerId = null;
  }

  const totalKeys = gameState.correctKeys + gameState.missKeys;
  const accuracy =
    totalKeys > 0 ? ((gameState.correctKeys / totalKeys) * 100).toFixed(1) : "0.0";

  const diffKey = gameState.difficulty;
  const diffLabel = DIFFICULTY_CONFIG[diffKey].label;

  const record = {
    id: Date.now(),
    userName: gameState.playerName,
    difficulty: diffKey,
    eatenCount: gameState.eatenCount,
    accuracy: Number(accuracy),
    playedAt: formatDateTime(new Date())
  };

  saveRanking(record);

  const evaluation = getPandaEvaluation(record.eatenCount, diffKey);
  pandaRankTitleEl.textContent = evaluation.title;
  pandaRankCommentEl.textContent = evaluation.comment;

  resultUsernameEl.textContent = record.userName;
  resultDifficultyEl.textContent = diffLabel;
  resultEatenEl.textContent = record.eatenCount;
  resultAccuracyEl.textContent = accuracy;
  resultRankingTitleEl.textContent = `🏆 ランキング TOP5（${diffLabel}）`;

  renderRankingTable(resultRankingBody, diffKey, record.id);
  showScreen("result");
}

// =========================================
// キーボード入力判定（keydown）
// =========================================
document.addEventListener("keydown", (event) => {
  if (isCountingDown || !gameState.isPlaying || !gameState.currentBread) return;
  if (event.isComposing || event.key.length !== 1) return;

  const expectedChar = gameState.currentBread.romaji[gameState.charIndex];
  const pressedChar = event.key;

  if (pressedChar === expectedChar) {
    gameState.correctKeys += 1;
    gameState.charIndex += 1;

    if (gameState.charIndex >= gameState.currentBread.romaji.length) {
      gameState.eatenCount += 1;
      eatenCountEl.textContent = gameState.eatenCount;
      
      showEatEffect(
        gameState.currentBread.name,
        gameState.eatenCount,
        gameState.currentBread.icon
      );

      pickNextBread();
    } else {
      renderBread();
    }
  } else {
    gameState.missKeys += 1;
    flashMiss();
  }
});

abortBtn.addEventListener("click", () => {
  abortGame();
});

// =========================================
// ランキング保存・取得・描画（難易度別）
// =========================================
function getAllRankings() {
  try {
    const raw = localStorage.getItem(RANKING_STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    console.error("ランキングの読み込みに失敗しました:", e);
    return [];
  }
}

function getRankingsByDifficulty(diffKey) {
  return getAllRankings()
    .filter((item) => (item.difficulty || "normal") === diffKey)
    .sort((a, b) => {
      if (b.eatenCount !== a.eatenCount) {
        return b.eatenCount - a.eatenCount;
      }
      return b.accuracy - a.accuracy;
    });
}

function saveRanking(newRecord) {
  const allRankings = getAllRankings();
  allRankings.push(newRecord);
  localStorage.setItem(RANKING_STORAGE_KEY, JSON.stringify(allRankings));
}

function renderRankingTable(tbodyEl, diffKey, highlightId = null) {
  const rankings = getRankingsByDifficulty(diffKey).slice(0, MAX_RANKING_DISPLAY);

  if (rankings.length === 0) {
    tbodyEl.innerHTML =
      `<tr><td colspan="4" class="empty-msg">まだ記録がありません</td></tr>`;
    return;
  }

  tbodyEl.innerHTML = rankings
    .map((item, index) => {
      const rank = index + 1;
      const isHighlight = highlightId !== null && item.id === highlightId;
      const rowStyle = isHighlight ? ' style="background-color: #fef3c7; font-weight: 700;"' : "";
      return (
        `<tr${rowStyle}>` +
        `<td>${rank}位</td>` +
        `<td>${escapeHtml(item.userName)}</td>` +
        `<td>${item.eatenCount}個</td>` +
        `<td>${Number(item.accuracy).toFixed(1)}%</td>` +
        `</tr>`
      );
    })
    .join("");
}

// =========================================
// ユーティリティ
// =========================================
function formatDateTime(date) {
  const pad = (n) => String(n).padStart(2, "0");
  const y = date.getFullYear();
  const m = pad(date.getMonth() + 1);
  const d = pad(date.getDate());
  const hh = pad(date.getHours());
  const mm = pad(date.getMinutes());
  return `${y}-${m}-${d} ${hh}:${mm}`;
}

function escapeHtml(str) {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

// =========================================
// イベント登録・初期表示
// =========================================
diffButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    setSelectedDifficulty(btn.dataset.diff);
  });
});

rankingTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    setActiveRankingTab(tab.dataset.rankDiff);
  });
});

startBtn.addEventListener("click", () => {
  usernameInput.blur();
  startGame();
});

retryBtn.addEventListener("click", () => {
  startGame();
});

backTitleBtn.addEventListener("click", () => {
  setActiveRankingTab(gameState.difficulty);
  showScreen("title");
});

if (countdownAbortBtn) {
  countdownAbortBtn.addEventListener("click", () => {
    abortGame();
  });
}

// 初期ロード時にランキングを表示
renderRankingTable(titleRankingBody, activeRankingTab);
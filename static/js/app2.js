const quiz = [
  {
    question: '問1 ジョゼ寺院で出会う召喚士は誰？当てはまるものを選べ',
    answers: [
      'ドナ',
      'イーサル',
      'ドナとイサール',
      '誰にも会わない',
    ],
    correct:'ドナとイサール'
  },{
    question: '問2 幻光河で乗る乗り物の名前は？',
    answers: [
      'チョコボ',
      'ゾウ',
      'シパーフ',
      'ドワーフ',
    ],
    correct:'シパーフ'
  },{
    question: '問3 グアドでキマリが「グアドのポーションは良く効く」と言っているがそのポーションの回復力は？',
    answers: [
      '200',
      '220',
      '250',
      '300',
    ],
    correct:'200'
  },{
    question: '問4 雷平原の雷連続回避５回で得られる報酬は？',
    answers: [
      'ハイポーション×５',
      'エクスポーション×２',
      'メガポーション×２',
      'エリクサー×２',
    ],
    correct:'エクスポーション×２'
  },{
    question: '問5 雷平原の宿屋の前で写真を撮って逃げて行った少年が落としたアイテムは？',
    answers: [
      'ハイポーション',
      '雷の魔石',
      'サンダーガード',
      'サンダーシールド',
    ],
    correct:'サンダーシールド'
  },{
    question: '問6 マカラーニャの泉で戦うスフィアマナージュを倒すと落とすアイテムは？',
    answers: [
      'Lv.1キースフィア',
      'Lv.2キースフィア',
      'Lv.3キースフィア',
      'ダークマター',
    ],
    correct:'Lv.2キースフィア'
  },{
    question: '問7 マカラーニャ寺院で戦うシーモアはHP何千未満になるとアニマを召喚するか',
    answers: [
      '3000',
      '2500',
      '2000',
      '1000',
    ],
    correct:'3000'
  },{
    question: '問8 マカラーニャ寺院の試練の間の’破のスフィア’で開けることのできる宝箱に入ってるアイテムは？',
    answers: [
      '攻撃力スフィア',
      '物理防御スフィア',
      '魔力スフィア',
      '運スフィア',
    ],
    correct:'運スフィア'
  },{
    question: '問9 寺院から帰ってきたマカラーニャ湖で戦うボスの名前は？',
    answers: [
      'ウェンディゴ',
      'イエティ',
      'オーガ',
      'タイラント',
    ],
    correct:'ウェンディゴ'
  },{
    question: '問10 ビーカネル砂漠で手に入れることができる’アルベド回復薬’の効果で当てはまるものは',
    answers: [
      '味方全員の毒、石化とHP1000回復',
      '味方全員の毒、沈黙とHP1000回復',
      '味方全員の毒、沈黙、石化とHP1000回復',
      '味方全員の毒、沈黙、石化、混乱とHP1000回復',
    ],
    correct:'味方全員の毒、沈黙、石化とHP1000回復'
  },{
    question: '問11 ベベルでユウナやアーロンが放り込まれたところの名前は？',
    answers: [
      '浄罪の路',
      '浄罪の水路',
      '浄罪の穴',
      '浄罪の檻',
    ],
    correct:'浄罪の路'
  },{
    question: '問12 シーモア:異体のHPは？',
    answers: [
      '30000',
      '32000',
      '34000',
      '36000',
    ],
    correct:'36000'
  },{
    question: '問13 ナギ平原で会ったルールーとワッカがガードを務めたことのある召喚士の名前は？ ',
    answers: [
      'シール',
      'ズーク',
      'ギール',
      'アーク',
    ],
    correct:'ズーク'
  },{
    question: '問14 ガガゼトで戦うビラン・エンケ戦でビランが一人になると行う行動は？ ',
    answers: [
      'ホワイトウィンド',
      '死の宣告',
      'マイティガード',
      'バーサク',
    ],
    correct:'バーサク'
  },{
    question: '問15 シーモア:終異体の攻撃「滅びのヤリ」の効果は？ ',
    answers: [
      '約700ダメージ 毒',
      '約700ダメージ ゾンビ',
      '約700ダメージ 沈黙',
      '約700ダメージ カーズ',
    ],
    correct:'約700ダメージ ゾンビ'
  },{
    question: '問16 ガガゼトにいる大量の祈り子は何を召喚している？',
    answers: [
      'スピラ',
      'ザナルカンド',
      'シン',
      'ガガゼト',
    ],
    correct:'ザナルカンド'
  },{
    question: '問17 ユウナレスカの攻撃「マインドブラスト」の効果は？',
    answers: [
      '約400ダメージ、ゾンビ',
      '約400ダメージ、混乱',
      '約400ダメージ、沈黙',
      '約400ダメージ、石化',
    ],
    correct:'約400ダメージ、混乱'
  },{
    question: '問18 エボン＝ジュはもともと何だったか',
    answers: [
      'ガード',
      '祈り子',
      '召喚士',
      '召喚獣',
    ],
    correct:'召喚士'
  },{
    question: '問19 シーモアが異界に送られる時最後に言った言葉は？',
    answers: [
      '私を消しても…スピラの悲しみは消えはしない',
      '私を消しても…エボンの悲しみは消えはしない',
      '私を消しても…スピラは悲しみに満ちたままだ',
      '私を消しても…シンは消えない',
    ],
    correct:'私を消しても…スピラの悲しみは消えはしない'
  },{
    question: '問20 ティーダの最後の言葉は？',
    answers: [
      'オレ…消えっから',
      'じゃあな!',
      'さよなら',
      'ありがとう',
    ],
    correct:'じゃあな!'
  }
];

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName('button');
const buttonLength = $button.length;


//クイズの問題文、選択肢を定義
const setUpQuiz = () => {
  document.getElementById('js-question').textContent = quiz[quizIndex].question;
  let buttonIndex = 0;
  while(buttonIndex < buttonLength){
    $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
    buttonIndex++;
  }
}
setUpQuiz();


const clickHandler = (e) => {
  if(quiz[quizIndex].correct === e.target.textContent){
    window.alert('正解！');
    score++;
  } else{
    window.alert('不正解');
  }

  quizIndex++;

  if(quizIndex < quizLength){
    //問題文がまだあればこちらを実行
    setUpQuiz();
  } else {
    //問題文がもうなければこちらを実行
    window.alert('終了!あなたの正解数は' + score + '/' + quizLength + 'です！');
  }
};


// ボタンをクリックしたら正誤判定
let handlerIndex = 0;
while(handlerIndex < buttonLength){
  $button[handlerIndex].addEventListener('click', (e) => {
    clickHandler(e);
  });
  handlerIndex++;
}
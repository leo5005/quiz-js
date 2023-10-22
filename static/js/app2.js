const quiz = [
  {
    question: '問1 ジョゼ寺院で出会う召喚士は誰？当てはまるものを選べ',
    answers: [
      'ドナ',
      'イーサル',
      'ドナとイサール',
      '誰に会わない',
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
    question: '問4 雷平原の宿屋の前で写真を撮って逃げて行った少年が落としたアイテムは？',
    answers: [
      'ハイポーション',
      '雷の魔石',
      'サンダーガード',
      'サンダーシールド',
    ],
    correct:'サンダーシールド'
  },{
    question: '問5 マカラーニャの泉で戦うスフィアマナージュを倒すと落とすアイテムは？',
    answers: [
      'Lv.1キースフィア',
      'Lv.2キースフィア',
      'Lv.3キースフィア',
      'ダークマター',
    ],
    correct:'Lv.2キースフィア'
  },{
    question: '問6 マカラーニャ寺院で戦うシーモアはHP何千未満になるとアニマを召喚するか',
    answers: [
      '3000',
      '2500',
      '2000',
      '1000',
    ],
    correct:'3000'
  },{
    question: '問7 マカラーニャ寺院の試練の間の’破のスフィア’で開けることのできる宝箱に入ってるアイテムは？',
    answers: [
      '攻撃力スフィア',
      '物理防御スフィア',
      '魔力スフィア',
      '運スフィア',
    ],
    correct:'運スフィア'
  },{
    question: '問8 寺院から帰ってきたマカラーニャ湖で戦うボスの名前は？',
    answers: [
      'ウェンディゴ',
      'イエティ',
      'オーガ',
      'タイラント',
    ],
    correct:'ウェンディゴ'
  },{
    question: '問9 ビーカネル砂漠で手に入れることができる’アルベド回復薬’の効果で当てはまるものは',
    answers: [
      '味方全員の毒、石化とHP1000回復',
      '味方全員の毒、沈黙とHP1000回復',
      '味方全員の毒、沈黙、石化とHP1000回復',
      '味方全員の毒、沈黙、石化、混乱とHP1000回復',
    ],
    correct:'味方全員の毒、沈黙、石化とHP1000回復'
  },{
    question: '問10 ベベルでユウナやアーロンが放り込まれたところの名前は？',
    answers: [
      '浄罪の路',
      '浄罪の水路',
      '浄罪の穴',
      '浄罪の檻',
    ],
    correct:'浄罪の路'
  },{
    question: '問11 シーモア:異体のHPは？',
    answers: [
      '30000',
      '32000',
      '34000',
      '36000',
    ],
    correct:'36000'
  },{
    question: '問12 ナギ平原で会ったルールーとワッカがガードを務めたことのある召喚士の名前は？ ',
    answers: [
      'シール',
      'ズーク',
      'ギール',
      'アーク',
    ],
    correct:'ズーク'
  },{
    question: '問13 ガガゼトで戦うビラン・エンケ戦でビランが一人になると行う行動は？ ',
    answers: [
      'ホワイトウィンド',
      '死の宣告',
      'マイティガード',
      'バーサク',
    ],
    correct:''
  },{
    question: '問 ',
    answers: [
      '',
      '',
      '',
      '',
    ],
    correct:''
  },{
    question: '問 ',
    answers: [
      '',
      '',
      '',
      '',
    ],
    correct:''
  },{
    question: '問 ',
    answers: [
      '',
      '',
      '',
      '',
    ],
    correct:''
  },{
    question: '問 ',
    answers: [
      '',
      '',
      '',
      '',
    ],
    correct:''
  },{
    question: '問 ',
    answers: [
      '',
      '',
      '',
      '',
    ],
    correct:''
  },{
    question: '問 ',
    answers: [
      '',
      '',
      '',
      '',
    ],
    correct:''
  },{
    question: '問 ',
    answers: [
      '',
      '',
      '',
      '',
    ],
    correct:''
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
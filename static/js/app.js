const quiz = [
{
  question: '問1 このゲームが発売されたのは何年？',
  answers: [
    '2000年',
    '2001年',
    '2002年',
    '2003年',
  ],
  correct:'2001年'
},{
  question: '問2 ザナルカンドでティーダが出場したブリッツボールの大会の名前は？',
  answers: [
    'ジェクト記念トーナメント',
    'ザナルカンドカップ',
    'ザナルカンドトーナメント',
    'ジェクト記念カップ',
  ],
  correct:'ジェクト記念トーナメント'
},{
  question: '問3 シンの襲撃の後、アーロンがティーダに言った最初の言葉は',
  answers: [
    'あれがシンだ',
    '逃げるぞ',
    'おまえを待っていた',
    'ジェクトが待っている',
  ],
  correct:'おまえを待っていた'
},{
  question: '問4 最初に戦った’シンのコケラ’の名前は？',
  answers: [
    'シンのコケラ：ギイ',
    'シンのコケラ：エムズ',
    'シンのコケラ：アルス',
    'シンのコケラ：ガイ',
  ],
  correct:'シンのコケラ：エムズ'
},{
  question: '問5 海の遺跡で戦ったボスの名前は？',
  answers: [
    'ジオスガイノ',
    'ジオスゲイノ',
    'ジオスゲイル',
    'ジオス・ジオス',
  ],
  correct:'ジオスゲイノ'
},{
  question: '問6 一番最初に手に入れる召喚獣の名前は？',
  answers: [
    'ヴァルファーレ',
    'イフリート',
    'シヴァ',
    'バハムート',
  ],
  correct:'ヴァルファーレ'
},{
  question: '問7 ヴァルファーレのオーバードライブ技はシューティング・レイと何？',
  answers: [
    'シューティング・バスター',
    'シューティング・ガン',
    'シューティング・ソード',
    'シューティング・パワー',
  ],
  correct:'シューティング・パワー'
},{
  question: '問8 今作に登場する属性について正しいものを選べ',
  answers: [
    '炎、氷、雷、水',
    '火、氷、雷、水',
    '炎、氷、雷、水、聖',
    '火、氷、雷、水、聖',
  ],
  correct:'炎、氷、雷、水、聖'
},{
  question: '問9 ビサイド島に出現するモンスターは、ディンゴ、ウォータプリン、と後何？',
  answers: [
    'シームルグ',
    'シュメルケ',
    'コンドル',
    'アルキュオネ',
  ],
  correct:'コンドル'
},{
  question: '問10 ビサイド島からキーリカ島に向けて乗った船’連絡船リキ号’の動力は何？',
  answers: [
    'ガソリン',
    '魔法',
    'チョコボ',
    '水',
  ],
  correct:'チョコボ'
},{
  question: '問11 キーリカのショップで買えるキマリの武器’スティンガー’の値段は？',
  answers: [
    '200',
    '250',
    '275',
    '375',
  ],
  correct:'375'
},{
  question: '問12 キーリカの森に出てくる’はぐれオチュー’の体力は？',
  answers: [
    '4595',
    '4649',
    '4883',
    '4949',
  ],
  correct:'4649'
},{
  question: '問13 キーリカからルカに向かう船上でティーダが覚えることができるシュートの名前は？',
  answers: [
    'ビサイドシュート',
    'ジェクトシュート',
    'ザナルカンドシュート',
    'エイブスシュート',
  ],
  correct:'ジェクトシュート'
},{
  question: '問14 ルカでのブリッツボールの初戦の相手は？',
  answers: [
    'ルカ・ゴワーズ',
    'アルベド・サイクス',
    'ロンゾ・ファング',
    'キーリカ・ビースト',
  ],
  correct:'アルベド・サイクス'
},{
  question: '問15 アルベドの船上のアルベドシューター戦でクレーンを使うには魔法’サンダー’を何回当てると使えるようになる？’',
  answers: [
    '0回',
    '1回',
    '2回',
    '3回',
  ],
  correct:'3回'
},{
  question: '問16 ルカでアローンはティーダに’シン’の正体を何だと言ったか',
  answers: [
    'ブラスカ',
    'ジェクト',
    'エボン',
    'ユウナレスカ',
  ],
  correct:'ジェクト'
},{
  question: '問17 ミヘン街道で戦うチョコボイーターの体力は？',
  answers: [
    '8000',
    '8500',
    '9000',
    '10000',
  ],
  correct:'10000'
},{
  question: '問18 ワッカの弟チャップを討伐隊に誘ったのは誰？',
  answers: [
    'ルッツ',
    'ガッタ',
    'ルールー',
    'ルチル',
  ],
  correct:'ルッツ'
},{
  question: '問19 キノコ岩街道で戦った’シンのコケラ’の名前は？',
  answers: [
    'シンのコケラ:ガイ',
    'シンのコケラ:ギイ',
    'シンのコケラ:ゴウ',
    'シンのコケラ:ギル',
  ],
  correct:'シンのコケラ:ギイ'
},{
  question: '問20 去っていく’シン’に対しティーダは何をした？',
  answers: [
    '走って追いかけた',
    '泳いで追いかけた',
    '呆然としていた',
    'スフィアボールを投げた',
  ],
  correct:'泳いで追いかけた'
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
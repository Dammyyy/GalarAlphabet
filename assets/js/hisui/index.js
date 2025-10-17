const items = [
  {'Id':'', 'Galar':'QCRqZCI', 'Alt':'ポケモン', 'Text':'ガラル地方の文字', 'Image':'./assets/images/hisui/2022012810141900-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'地図', 'Text':'', 'Image':'./assets/images/hisui/2022013023133000-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'HxclW', 'Alt':'コトブキムラ', 'Text':'', 'Image':'./assets/images/hisui/2022021401343800-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'HxclW', 'Alt':'コトブキムラ', 'Text':'', 'Image':'./assets/images/hisui/2022012813383000-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'AYiGS', 'Alt':'黒曜の原野', 'Text':'', 'Image':'./assets/images/hisui/2022012811133000-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'HritM', 'Alt':'紅蓮の湿地', 'Text':'', 'Image':'./assets/images/hisui/2022012822063800-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'eRina', 'Alt':'群青の海岸', 'Text':'', 'Image':'./assets/images/hisui/2022012916035100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'EciQO', 'Alt':'天冠の山麓', 'Text':'', 'Image':'./assets/images/hisui/2022012921005500-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'mbijF', 'Alt':'純白の凍土', 'Text':'', 'Image':'./assets/images/hisui/2022013000493100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'TiXxV', 'Alt':'古の隠れ里', 'Text':'', 'Image':'./assets/images/hisui/2022021401354300-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'ODXX tG', 'Alt':'キング場(バサギリ)', 'Text':'', 'Image':'./assets/images/hisui/2022012820032300-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'ODXX tG', 'Alt':'キング場(ドレディア)', 'Text':'', 'Image':'./assets/images/hisui/2022012913091500-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'ODXX tG', 'Alt':'キング場(ウインディ)', 'Text':'', 'Image':'./assets/images/hisui/2022012919055500-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'ODXX tG', 'Alt':'キング場(マルマイン)', 'Text':'', 'Image':'./assets/images/hisui/2022012922574700-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'ODXX tG', 'Alt':'キング場(クレベース)', 'Text':'', 'Image':'./assets/images/hisui/2022013013425600-7CBCCE282CD36658AB28471FB4791102.jpg'},

  {'Id':'', 'Hisui':'koT ZrDU', 'Alt':'イモズル亭', 'Text':'', 'Image':'./assets/images/hisui/2022012810282600-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'eclC', 'Alt':'ミオ橋', 'Text':'', 'Image':'./assets/images/hisui/2022012810291400-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Ccelf SQO', 'Alt':'放牧場', 'Text':'', 'Image':'./assets/images/hisui/2022012810310100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'IeO', 'Alt':'訓練場', 'Text':'', 'Image':'./assets/images/hisui/2022012811245500-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'fH ZSnL', 'Alt':'デンボクの写真', 'Text':'', 'Image':'./assets/images/hisui/2022021401161200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'oZSOrl', 'Alt':'ポニータの写真', 'Text':'', 'Image':'./assets/images/hisui/2022021401162500-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'xozs', 'Alt':'髪結い屋の看板', 'Text':'', 'Image':'./assets/images/hisui/2022012812274200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'GktViol..', 'Alt':'髪結い屋の掛け軸', 'Text':'', 'Image':'./assets/images/hisui/2022020301005100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Ccelf', 'Alt':'反物', 'Text':'', 'Image':'./assets/images/hisui/2022012812252700-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Di GF\nmTynYi', 'Alt':'', 'Text':'', 'Image':'./assets/images/hisui/2022012812281900-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Me..', 'Alt':'米', 'Text':'', 'Image':'./assets/images/hisui/2022012812284800-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'HxclM', 'Alt':'イモズル亭', 'Text':'', 'Image':'./assets/images/hisui/2022012812292200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Lljo jJy\nXBYK', 'Alt':'右の張り紙', 'Text':'', 'Image':'./assets/images/hisui/2022012915593400-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'TJX TNc\nxAB jJy iCT', 'Alt':'メニュー(上)', 'Text':'', 'Image':'./assets/images/hisui/2022012915593400-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'BYe', 'Alt':'メニュー(右下)', 'Text':'', 'Image':'./assets/images/hisui/2022012915593400-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'CjJYG\njJ jJy', 'Alt':'メニュー(左下)', 'Text':'', 'Image':'./assets/images/hisui/2022012915593400-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'WCnLM', 'Alt':'クラフト屋', 'Text':'', 'Image':'./assets/images/hisui/2022012812312200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Gjk\nziJ\nThmH', 'Alt':'モモンのみ\nオレンのみ\nクラボのみ', 'Text':'', 'Image':'./assets/images/hisui/2022012811294000-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'TfS', 'Alt':'表札', 'Text':'', 'Image':'./assets/images/hisui/2022012812390800-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'BMr\ntlB\nYnx\nAGF', 'Alt':'表札', 'Text':'', 'Image':'./assets/images/hisui/2022012811035200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'aMG\nroa\nhrw', 'Alt':'表札', 'Text':'', 'Image':'./assets/images/hisui/2022012812394600-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'HUZ\nozs\nCce', 'Alt':'表札', 'Text':'', 'Image':'./assets/images/hisui/2022012812403500-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'GKt', 'Alt':'表札', 'Text':'', 'Image':'./assets/images/hisui/2022012812513200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'FeY', 'Alt':'表札', 'Text':'', 'Image':'./assets/images/hisui/2022012811034700-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'rbz', 'Alt':'表札', 'Text':'', 'Image':'./assets/images/hisui/2022012920280700-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'nJNB', 'Alt':'交換屋', 'Text':'', 'Image':'./assets/images/hisui/2022012816241701-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'CcAj', 'Alt':'アメ屋さん', 'Text':'', 'Image':'./assets/images/hisui/2022012915312700-7CBCCE282CD36658AB28471FB4791102.jpg'},

  {'Id':'', 'Hisui':'', 'Alt':'標語', 'Text':'', 'Image':'./assets/images/hisui/2022012817083100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Mf\nrZWGmH', 'Alt':'標語\nひとつ　礼儀正しく', 'Text':'', 'Image':'./assets/images/hisui/2022012810440800-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'CRtUDF\nDTkxRB', 'Alt':'ひとつ　目上を敬う\nひとつ　好き嫌い禁止', 'Text':'', 'Image':'./assets/images/hisui/2022012810441400-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'AuGOA\nDHjSeB', 'Alt':'ひとつ　弱者を助ける\nひとつ　困難に立ち向かう', 'Text':'', 'Image':'./assets/images/hisui/2022012810441700-7CBCCE282CD36658AB28471FB4791102.jpg'},

  {'Id':'', 'Hisui':'WGBDHt', 'Alt':'ギンガ団本部', 'Text':'', 'Image':'./assets/images/hisui/2022012810473700-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'eaot', 'Alt':'(調査隊 隊長)シマボシ', 'Text':'', 'Image':'./assets/images/hisui/2022012810482500-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'iJxBe', 'Alt':'掲示板', 'Text':'', 'Image':'./assets/images/hisui/2022012810534200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'AcCVT', 'Alt':'右の紙', 'Text':'', 'Image':'./assets/images/hisui/2022012810534200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Xh\nHG\nta', 'Alt':'真ん中の紙', 'Text':'', 'Image':'./assets/images/hisui/2022012810534200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Ut', 'Alt':'真ん中の紙', 'Text':'', 'Image':'./assets/images/hisui/2022012810534200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Zn\nLt', 'Alt':'戸籍謄本', 'Text':'', 'Image':'./assets/images/hisui/2022012810534200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'ThM', 'Alt':'地図：ホール', 'Text':'', 'Image':'./assets/images/hisui/2022012810552100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'ER', 'Alt':'調査隊の部屋', 'Text':'', 'Image':'./assets/images/hisui/2022012810552100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'hSQOuQ lC', 'Alt':'調査隊 活動報告', 'Text':'', 'Image':'./assets/images/hisui/2022012810555300-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'VY', 'Alt':'研究室', 'Text':'', 'Image':'./assets/images/hisui/2022012821345300-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'OWM', 'Alt':'製造隊の部屋', 'Text':'', 'Image':'./assets/images/hisui/2022012811000700-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'hSQOuQ nc', 'Alt':'製造隊 活動報告', 'Text':'', 'Image':'./assets/images/hisui/2022012811003300-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'OaB', 'Alt':'', 'Text':'', 'Image':'./assets/images/hisui/2022012812091400-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'OeI', 'Alt':'畑作隊', 'Text':'', 'Image':'./assets/images/hisui/2022012812093600-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'hSQOuQ nc', 'Alt':'畑作隊 活動報告', 'Text':'', 'Image':'./assets/images/hisui/2022012812133100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'OCr', 'Alt':'警備隊', 'Text':'', 'Image':'./assets/images/hisui/2022012812092600-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'hSQOuQ nc', 'Alt':'警備隊 活動報告', 'Text':'', 'Image':'./assets/images/hisui/2022012812130200-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'FeY', 'Alt':'', 'Text':'', 'Image':'./assets/images/hisui/2022012811012000-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'aAx', 'Alt':'', 'Text':'', 'Image':'./assets/images/hisui/2022012811013400-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'GMa', 'Alt':'人相書', 'Text':'', 'Image':'./assets/images/hisui/2022012812123600-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'GMa', 'Alt':'人相書', 'Text':'', 'Image':'./assets/images/hisui/2022012812125400-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'HLclW', 'Alt':'コトブキムラの地図', 'Text':'', 'Image':'./assets/images/hisui/2022012810554300-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Galar':'REYFBOI\nBM..AF..VORA\n→RLSS NODW..M\nCAEF BReYITKR\nAg..rlkolai\neqoca\nXcgkdlfokicnrc\nEdial eqoca\nBgkr..apak\nlaonpkag', 'Alt':'ガラル地方の文字', 'Text':'', 'Image':'./assets/images/hisui/2022012810565300-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'cxAa', 'Alt':'掛け軸', 'Text':'', 'Image':'./assets/images/hisui/2022012816111800-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'hSBO', 'Alt':'掛け軸', 'Text':'', 'Image':'./assets/images/hisui/2022012811005800-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'覚書', 'Text':'', 'Image':'./assets/images/hisui/2022012810572100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'覚書', 'Text':'', 'Image':'./assets/images/hisui/2022012820115100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'覚書', 'Text':'', 'Image':'./assets/images/hisui/2022012820115800-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'XjcB oH', 'Alt':'本のタイトル', 'Text':'', 'Image':'./assets/images/hisui/2022012820121000-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'X..Cj..', 'Alt':'和綴じ本', 'Text':'', 'Image':'./assets/images/hisui/2022012920284000-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'戸籍謄本', 'Text':'', 'Image':'./assets/images/hisui/2022012812141500-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'jDODJ..f..', 'Alt':'何かのグラフ', 'Text':'', 'Image':'./assets/images/hisui/2022012812140100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'Gi', 'Alt':'キズぐすり', 'Text':'', 'Image':'./assets/images/hisui/2022012811070600-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'jD', 'Alt':'いいキズぐすり', 'Text':'', 'Image':'./assets/images/hisui/IMG_1675.JPG'},
  {'Id':'', 'Hisui':'Lj', 'Alt':'すごいキズぐすり', 'Text':'', 'Image':'./assets/images/hisui/IMG_1676.JPG'},
  {'Id':'', 'Hisui':'JmCJ', 'Alt':'まんたんのくすり', 'Text':'', 'Image':'./assets/images/hisui/2022013100093100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'XnYT', 'Alt':'かいふくのくすり', 'Text':'', 'Image':'./assets/images/hisui/IMG_1678.JPG'},
  {'Id':'', 'Hisui':'Nlm', 'Alt':'なんでもなおし', 'Text':'', 'Image':'./assets/images/hisui/IMG_1679.JPG'},
  {'Id':'', 'Hisui':'H', 'Alt':'メガトンボール', 'Text':'', 'Image':'./assets/images/hisui/IMG_1680.JPG'},

  {'Id':'', 'Hisui':'xIn', 'Alt':'レポート画面', 'Text':'', 'Image':'./assets/images/hisui/2022012817445700-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'SUBETE NO\nINOCHI HA', 'Text':'すべてのいのちは', 'Image':'./assets/images/hisui/2022012822301900-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'BETSU NO\nINOCHI TO DEAI', 'Text':'べつのなにかとであい', 'Image':'./assets/images/hisui/2022012822302700-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'NANIKA WO UMIDASU', 'Text':'なにかをうみだす', 'Image':'./assets/images/hisui/2022012822303300-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'コンゴウ団', 'Text':'', 'Image':'./assets/images/hisui/2022012912155100-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'シンジュ団', 'Text':'', 'Image':'./assets/images/hisui/2022013010241800-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'壁画', 'Text':'', 'Image':'./assets/images/hisui/2022012821014600-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'壁画', 'Text':'', 'Image':'./assets/images/hisui/2022012913023500-7CBCCE282CD36658AB28471FB4791102.jpg'},
  {'Id':'', 'Hisui':'', 'Alt':'壁画', 'Text':'', 'Image':'./assets/images/hisui/2022013011174100-7CBCCE282CD36658AB28471FB4791102.jpg'}
];

// new Vue({
//   el: '#app',
//   data () {
//     return {
//       info: null
//     }
//   },
//   mounted () {
//     axios
//       .get('https://script.google.com/macros/s/AKfycbwiBx_4iRiaYQVKGeunDISwy8IMMn9-qSgNmYhFzZUb2GTrFoBz3l4/exec')
//       .then(response => {
//         this.info = response.data
//       })
//   }
// })
new Vue({
  el: '#app',
  data: {
    items: items,
    sort: {
      key: '', // ソートキー
      isAsc: false // 昇順ならtrue,降順ならfalse
    },
    // types: types,       // チェックボックスの値
    // selectTypes: types,  // 選択されたチェックボックスの値
    searchHisui: '',   // 入力された文字列を格納
  },
  computed: {
    eventedAction: function() {
      let list = this.items.slice();

      // ソート実施
      if(this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key];
          b = b[this.sort.key];
          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1);
        });
      }
      // // Typeでフィルタリング実施
      // if(this.selectTypes) {
      //   list = list.filter(element => {
      //     for(const type of this.selectTypes) {
      //       if(element.Type === type) {
      //         return true;
      //       }
      //     }
      //   });
      // }
      // Nameで検索実施
      if (this.searchHisui) {
        list = list.filter(element => {
          return Object.keys(element).some(key => {
            if(key === 'Hisui') {
              return element[key].indexOf(this.searchHisui) > -1;
            }
          });
        });
      }

      return list;
    }   
  },
  methods: {
    // sort用キーをセットし、昇順・降順を入れ替える
    sortBy: function(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
    sortedClass: function(key) {
      return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc' }` : '';
    },
    // 全ての処理をクリアする
    resetting: function() {
      this.sort.key = '';
      this.sort.isAsc = false;
      // this.selectTypes = types;
      this.searchHisui = '';
      this.items = items;
    }
  }
});
! function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    p = /^http:/.test(d.location) ? 'http' : 'https';
  if (!d.getElementById(id)) {
    js = d.createElement(s);
    js.id = id;
    js.src = p + '://platform.twitter.com/widgets.js';
    fjs.parentNode.insertBefore(js, fjs);
  }
}(document, 'script', 'twitter-wjs');

$('p.galar').css({'white-space':'pre-line'});
$('p.hisui').css({'white-space':'pre-line'});
$('p.text').css({'white-space':'pre-line'});

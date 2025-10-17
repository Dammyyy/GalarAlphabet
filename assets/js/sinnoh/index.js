const items = [
  {'Id':'', 'Sinnoh':'DIN JcL', 'Alt':'フタバタウン', 'Text':'', 'Image':'./assets/images/sinnoh/2021111920481200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'aBu JcL', 'Alt':'マサゴタウン', 'Text':'', 'Image':'./assets/images/sinnoh/2021111921225500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'Hxcl xke', 'Alt':'コトブキシティ', 'Text':'', 'Image':'./assets/images/sinnoh/2021111921442400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'cJMF xke', 'Alt':'クロガネシティ', 'Text':'', 'Image':'./assets/images/sinnoh/2021111922525600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'eLR JcL', 'Alt':'ソノオタウン', 'Text':'', 'Image':'./assets/images/sinnoh/2021112000042200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'hNOH xke', 'Alt':'ハクタイシティ', 'Text':'', 'Image':'./assets/images/sinnoh/2021112008390600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'Erf xke', 'Alt':'ヨスガシティ', 'Text':'', 'Image':'./assets/images/sinnoh/2021112013490800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'lj JcL', 'Alt':'ズイタウン', 'Text':'', 'Image':'./assets/images/sinnoh/2021112112592800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'OAY xke', 'Alt':'トバリシティ', 'Text':'', 'Image':'./assets/images/sinnoh/2021112017433000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'uQD xke', 'Alt':'ノモセシティ', 'Text':'', 'Image':'./assets/images/sinnoh/2021112101033900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'tnxo JcL', 'Alt':'カンナギシティ', 'Text':'', 'Image':'./assets/images/sinnoh/2021112104020000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'Si xke', 'Alt':'ミオシティ', 'Text':'', 'Image':'./assets/images/sinnoh/2021112113125700-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'NTwX xke', 'Alt':'キッサキシティ', 'Text':'', 'Image':'./assets/images/sinnoh/2021112120121400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'rGa xke', 'Alt':'ナギサシティ', 'Text':'', 'Image':'./assets/images/sinnoh/2021112218473600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'rVmCBFr', 'Alt':'ポケモンリーグ', 'Text':'', 'Image':'./assets/images/sinnoh/2021112222152200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'tlM LCI', 'Alt':'ファイトエリア', 'Text':'', 'Image':'./assets/images/sinnoh/2021112300192100-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'NmH LCI', 'Alt':'サバイバルエリア', 'Text':'', 'Image':'./assets/images/sinnoh/2021112700190100-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'FTr LCI', 'Alt':'リゾートエリア', 'Text':'', 'Image':'./assets/images/sinnoh/2021112814433100-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'EHNC', 'Alt':'シンジ湖（心情湖）', 'Text':'', 'Image':'./assets/images/sinnoh/2021111921112400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'aWBC', 'Alt':'エイチ湖（叡智湖）', 'Text':'', 'Image':'./assets/images/sinnoh/2021112500480400-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'', 'Alt':'リッシ湖', 'Text':'湖の前に看板がない', 'Image':'./assets/images/sinnoh/no_image.jpg'},
  {'Id':'', 'Sinnoh':'flecC', 'Alt':'看板（共通）', 'Text':'', 'Image':'./assets/images/sinnoh/2021112014082300-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'Erf xke', 'Alt':'看板（ヨスガジム）', 'Text':'ヨスガシティの街の看板と同じ （ヨスガシティと書かれている）', 'Image':'./assets/images/sinnoh/2021112112552900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'ZTokHri', 'Alt':'ゆびをふる', 'Text':'', 'Image':'./assets/images/sinnoh/2021112017510500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'BUDr', 'Alt':'掛け軸', 'Text':'', 'Image':'./assets/images/sinnoh/2021112104043500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'HxOCQk', 'Alt':'バトルパーク', 'Text':'', 'Image':'./assets/images/sinnoh/2021112300221600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'hCGMZS', 'Alt':'ポスター', 'Text':'', 'Image':'./assets/images/sinnoh/2021112501004800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'VRhCGMZ', 'Alt':'ポスター', 'Text':'', 'Image':'./assets/images/sinnoh/2021112501004800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'AG FWcTV WjoHxOCQKAF', 'Alt':'テレビコトブキ', 'Text':'', 'Image':'./assets/images/sinnoh/2021111920471800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'', 'Alt':'ポケモンセンター', 'Text':'', 'Image':'./assets/images/sinnoh/2021111920472500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'YnxLxBU', 'Alt':'トレーナーズスクール', 'Text':'', 'Image':'./assets/images/sinnoh/2021111920473101-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'', 'Alt':'天気予報', 'Text':'', 'Image':'./assets/images/sinnoh/2021112000075800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'', 'Alt':'相性チャンネル', 'Text':'', 'Image':'./assets/images/sinnoh/2021112000485200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'FrAloftJS', 'Alt':'ポケッチ', 'Text':'', 'Image':'./assets/images/sinnoh/2021111920473600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'ioH CQkA', 'Alt':'フレンドリィショップ', 'Text':'', 'Image':'./assets/images/sinnoh/2021111920473800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'UDrZTokHriBtW', 'Alt':'キャスター', 'Text':'', 'Image':'./assets/images/sinnoh/2021111921084500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'joHxOCQkAUt', 'Alt':'きのみ', 'Text':'', 'Image':'./assets/images/sinnoh/2021112000483000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'BMrVmOB FrAloftSZ', 'Alt':'ヨスガ スーパーコンテストショー', 'Text':'', 'Image':'./assets/images/sinnoh/2021112013464000-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'AGFWcD', 'Alt':'ホテルグランドレイク', 'Text':'', 'Image':'./assets/images/sinnoh/2021112013531200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'mOBFrA', 'Alt':'フラワーショップ いろとりどり', 'Text':'', 'Image':'./assets/images/sinnoh/2021112013524700-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'AGFW cTVWjoH', 'Alt':'ヨスガ ふれあい広場', 'Text':'', 'Image':'./assets/images/sinnoh/2021112013530300-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'AGFW cTV WjoHxOEQ', 'Alt':'サイクルショップ 「自転車人力」', 'Text':'', 'Image':'./assets/images/sinnoh/2021112013532300-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'BMrVmO', 'Alt':'トバリデパート', 'Text':'', 'Image':'./assets/images/sinnoh/2021112013532900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'Ynx LxBUDr', 'Alt':'ノモセシティ 大湿原 サファリゲーム', 'Text':'', 'Image':'./assets/images/sinnoh/2021112013533600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'BMrVmO', 'Alt':'トバリ ファッションスタイル 「ゆびをふる」', 'Text':'', 'Image':'./assets/images/sinnoh/2021112015303900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'', 'Alt':'ナギサ市場', 'Text':'', 'Image':'./assets/images/sinnoh/2021112116005600-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'VWjoHxOCQKrUt', 'Alt':'バトルタワー', 'Text':'', 'Image':'./assets/images/sinnoh/2021112315342800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'UDrZDoKHriBtW', 'Alt':'各種ニュース', 'Text':'', 'Image':'./assets/images/sinnoh/2021111921084500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'', 'Alt':'ズイの洞窟', 'Text':'アンノーン文字に見える もどりのどうくつと同じ', 'Image':'./assets/images/sinnoh/2021112015385800-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'', 'Alt':'もどりのどうくつ', 'Text':'アンノーン文字に見える ズイの洞窟と同じ', 'Image':'./assets/images/sinnoh/2021112501174500-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'', 'Alt':'ポケッチカンパニー', 'Text':'アニポケ文字に登場する', 'Image':'./assets/images/sinnoh/2021111921560900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'', 'Alt':'黒板', 'Text':'', 'Image':'./assets/images/sinnoh/2021111921471900-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
  {'Id':'', 'Sinnoh':'', 'Alt':'トバリデパートのフロア', 'Text':'', 'Image':'./assets/images/sinnoh/2021112017463200-7F4AACC644EAC4BF4E5897B413FFD611.jpg'},
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
    searchSinnoh: '',   // 入力された文字列を格納
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
      if (this.searchSinnoh) {
        list = list.filter(element => {
          return Object.keys(element).some(key => {
            if(key === 'Sinnoh') {
              return element[key].indexOf(this.searchSinnoh) > -1;
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
      this.searchSinnoh = '';
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

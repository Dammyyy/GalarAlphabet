const items = [
{'Id':'', 'Galar':'DCVDB', 'Alt':'ダンデ', 'Image':'./assets/images/galar/reagueCard/2019112323445700-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'EOU', 'Alt':'ホップ', 'Image':'./assets/images/galar/reagueCard/2019112323460900-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'MVRY', 'Alt':'マリィ', 'Image':'./assets/images/galar/reagueCard/2019120302031200-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'OeeJ', 'Alt':'ビート', 'Image':'./assets/images/galar/reagueCard/2019112323450700-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'OeeJ', 'Alt':'ビート', 'Image':'./assets/images/galar/reagueCard/2019112323460600-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'ROSH', 'Alt':'ローズ', 'Image':'./assets/images/galar/reagueCard/2019112323450500-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'LJOOAW', 'Alt':'ヤロー', 'Image':'./assets/images/galar/reagueCard/2019112323445900-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'UVUK', 'Alt':'ルリナ', 'Image':'./assets/images/galar/reagueCard/2019112323450100-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'RVDS', 'Alt':'カブ', 'Image':'./assets/images/galar/reagueCard/2019112323450300-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'RVDS', 'Alt':'カブ', 'Image':'./assets/images/galar/reagueCard/2019112323452500-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'SVFJU', 'Alt':'サイトウ', 'Image':'./assets/images/galar/reagueCard/2019112323451000-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'SVFJU', 'Alt':'サイトウ', 'Image':'./assets/images/galar/reagueCard/2019112323452800-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'CeICe', 'Alt':'オニオン', 'Image':'./assets/images/galar/reagueCard/2019120115400900-B8FAEF4816CAC2B76D11869B05CA7601.jpg'},
{'Id':'', 'Galar':'CeICe', 'Alt':'オニオン', 'Image':'./assets/images/galar/reagueCard/2019120115402200-B8FAEF4816CAC2B76D11869B05CA7601.jpg'},
{'Id':'', 'Galar':'', 'Alt':'ポプラ', 'Image':'./assets/images/galar/reagueCard/2019112323451200-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'', 'Alt':'ポプラ', 'Image':'./assets/images/galar/reagueCard/2019120200471500-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'NBRVBY', 'Alt':'マクワ', 'Image':'./assets/images/galar/reagueCard/2019112323451800-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'NBRVBY', 'Alt':'マクワ', 'Image':'./assets/images/galar/reagueCard/2019112323453400-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'WHKOV', 'Alt':'メロン', 'Image':'./assets/images/galar/reagueCard/2019120115401400-B8FAEF4816CAC2B76D11869B05CA7601.jpg'},
{'Id':'', 'Galar':'WHKOV', 'Alt':'メロン', 'Image':'./assets/images/galar/reagueCard/2019120115402600-B8FAEF4816CAC2B76D11869B05CA7601.jpg'},
{'Id':'', 'Galar':'', 'Alt':'ネズ', 'Image':'./assets/images/galar/reagueCard/2019112323452000-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'YINJEJ', 'Alt':'キバナ', 'Image':'./assets/images/galar/reagueCard/2019112323451400-3C66B776DB1AA06323037049FACD96D3.jpg'},
{'Id':'', 'Galar':'YINJEJ', 'Alt':'キバナ', 'Image':'./assets/images/galar/reagueCard/2019112323460100-3C66B776DB1AA06323037049FACD96D3.jpg'},

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
    searchGalar: '',   // 入力された文字列を格納
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
      if (this.searchGalar) {
        list = list.filter(element => {
          return Object.keys(element).some(key => {
            if(key === 'Galar') {
              return element[key].indexOf(this.searchGalar) > -1;
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
      this.searchGalar = '';
      this.items = items;
    }
  }
});

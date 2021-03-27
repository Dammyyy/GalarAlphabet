Vue.config.devtools = true;

new Vue({
  el: '#app',
  data: {
    results: [],
    sort: {
      key: '', // ソートキー
      isAsc: false // 昇順ならtrue,降順ならfalse
    },
    searchGalar: '',   // 入力された文字列を格納
  },
  mounted () {
    axios
      .get('https://script.google.com/macros/s/AKfycbyn13k9gfMfxC6MK1biwt8Kneu2xLyYSQm9lEZSCLoGpuLZmPknASfH2GUGZT6KHB6r/exec', { crossDomain: true })
      .then(response => {this.results = response.data.results})
  },

  computed: {
    eventedAction: function() {
      let list = this.results.slice();

      // ソート実施
      if(this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key];
          b = b[this.sort.key];
          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1);
        });
      }

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
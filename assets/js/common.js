// 共通JavaScript機能

// React用の共通コンポーネント
const { useMemo, useState, useEffect } = React;

// 共通のテーブルコンポーネント
function AlphabetTable({ items, searchKey, sortKey, title }) {
  const [sort, setSort] = useState({ key: '', isAsc: false });
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    let list = items.slice();
    
    // ソート実施
    if (sort.key) {
      list.sort((a, b) => {
        const av = a[sort.key];
        const bv = b[sort.key];
        return (av === bv ? 0 : av > bv ? 1 : -1) * (sort.isAsc ? 1 : -1);
      });
    }
    
    // 検索実施
    if (searchTerm) {
      list = list.filter(element => {
        return Object.keys(element).some(key => {
          if (key === searchKey) {
            return element[key].indexOf(searchTerm) > -1;
          }
        });
      });
    }
    
    return list;
  }, [items, sort, searchTerm, searchKey]);

  const sortBy = (key) => {
    setSort(prev => ({ key, isAsc: prev.key === key ? !prev.isAsc : false }));
  };

  const sortedClass = (key) => (sort.key === key ? `sorted ${sort.isAsc ? 'asc' : 'desc'}` : '');

  const resetting = () => {
    setSort({ key: '', isAsc: false });
    setSearchTerm('');
  };

  return React.createElement('div', null,
    React.createElement('table', null,
      React.createElement('thead', null,
        React.createElement('tr', null,
          React.createElement('th', { onClick: () => sortBy('Image'), className: sortedClass('Image') }, 'SS'),
          React.createElement('th', { onClick: () => sortBy(sortKey), className: sortedClass(sortKey) }, title)
        )
      ),
      React.createElement('tbody', null,
        filteredItems.map((row) => (
          React.createElement('tr', { key: row.Id },
            React.createElement('td', null,
              React.createElement('a', { 'data-fancybox': 'gallery', href: row.Image, 'data-caption': row.Alt },
                React.createElement('img', { src: row.Image, alt: row.Alt })
              )
            ),
            React.createElement('td', null,
              React.createElement('p', { className: 'galar' }, row.Galar),
              React.createElement('p', { className: 'hisui' }, row.Hisui),
              React.createElement('p', { className: 'kalos' }, row.Kalos),
              React.createElement('p', { className: 'sinnoh' }, row.Sinnoh),
              React.createElement('p', { className: 'text' }, row.Alt),
              React.createElement('p', { className: 'text' }, row.Text)
            )
          )
        ))
      )
    )
  );
}

// 共通のアプリケーションコンポーネント
function AlphabetApp({ items, searchKey, sortKey, title }) {
  const [itemsState, setItemsState] = useState(() => items.slice());

  useEffect(() => {
    // Twitterウィジェットの読み込み
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'twitter-wjs');
  }, []);

  return React.createElement(AlphabetTable, {
    items: itemsState,
    searchKey: searchKey,
    sortKey: sortKey,
    title: title
  });
}

// 共通のユーティリティ関数
const CommonUtils = {
  // データの初期化
  initData: (data) => data.slice(),
  
  // ソート機能
  sortData: (data, key, isAsc) => {
    return data.slice().sort((a, b) => {
      const av = a[key];
      const bv = b[key];
      return (av === bv ? 0 : av > bv ? 1 : -1) * (isAsc ? 1 : -1);
    });
  },
  
  // 検索機能
  searchData: (data, searchKey, searchTerm) => {
    if (!searchTerm) return data;
    return data.filter(element => {
      return Object.keys(element).some(key => {
        if (key === searchKey) {
          return element[key].indexOf(searchTerm) > -1;
        }
      });
    });
  },
  
  // Twitterウィジェットの読み込み
  loadTwitterWidget: () => {
    (function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0],
        p = /^http:/.test(d.location) ? 'http' : 'https';
      if (!d.getElementById(id)) {
        js = d.createElement(s);
        js.id = id;
        js.src = p + '://platform.twitter.com/widgets.js';
        fjs.parentNode.insertBefore(js, fjs);
      }
    })(document, 'script', 'twitter-wjs');
  }
};

// グローバルに公開
window.AlphabetApp = AlphabetApp;
window.AlphabetTable = AlphabetTable;
window.CommonUtils = CommonUtils;

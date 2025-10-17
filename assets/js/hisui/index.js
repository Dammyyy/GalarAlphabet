// ヒスイ文字データベース用Reactコンポーネント
const { useMemo, useState, useEffect } = React;

function HisuiApp() {
  const [items, setItems] = useState(() => (window.HisuiItems || []).slice());
  const [sort, setSort] = useState({ key: '', isAsc: false });
  const [searchHisui, setSearchHisui] = useState('');

  const list = useMemo(() => {
    let next = items.slice();
    if (sort.key) {
      next.sort((a, b) => {
        const av = a[sort.key];
        const bv = b[sort.key];
        return (av === bv ? 0 : av > bv ? 1 : -1) * (sort.isAsc ? 1 : -1);
      });
    }
    if (searchHisui) {
      next = next.filter((element) => String(element.Hisui || '').indexOf(searchHisui) > -1);
    }
    return next;
  }, [items, sort, searchHisui]);

  const sortBy = (key) => {
    setSort((prev) => ({ key, isAsc: prev.key === key ? !prev.isAsc : false }));
  };

  const sortedClass = (key) => (sort.key === key ? `sorted ${sort.isAsc ? 'asc' : 'desc'}` : '');

  const resetting = () => {
    setSort({ key: '', isAsc: false });
    setSearchHisui('');
    setItems((window.HisuiItems || []).slice());
  };

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

  return React.createElement('div', null,
    React.createElement('table', null,
      React.createElement('thead', null,
        React.createElement('tr', null,
          React.createElement('th', { onClick: () => sortBy('Image'), className: sortedClass('Image') }, 'SS'),
          React.createElement('th', { onClick: () => sortBy('Hisui'), className: sortedClass('Hisui') }, 'ヒスイ文字\n補足')
        )
      ),
      React.createElement('tbody', null,
        list.map((row) => (
          React.createElement('tr', { key: row.Id },
            React.createElement('td', null,
              React.createElement('a', { 'data-fancybox': 'gallery', href: row.Image, 'data-caption': row.Alt },
                React.createElement('img', { src: row.Image, alt: row.Alt })
              )
            ),
            React.createElement('td', null,
              React.createElement('p', { className: 'galar' }, row.Galar),
              React.createElement('p', { className: 'hisui' }, row.Hisui),
              React.createElement('p', { className: 'text' }, row.Alt),
              React.createElement('p', { className: 'text' }, row.Text)
            )
          )
        ))
      )
    )
  );
}

// グローバルに公開
window.HisuiApp = HisuiApp;

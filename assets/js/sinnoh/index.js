// シンオウ文字データベース用Reactコンポーネント
const { useMemo, useState, useEffect } = React;

function SinnohApp() {
  const [items, setItems] = useState(() => (window.SinnohItems || []).slice());
  const [sort, setSort] = useState({ key: '', isAsc: false });
  const [searchSinnoh, setSearchSinnoh] = useState('');

  const list = useMemo(() => {
    let next = items.slice();
    if (sort.key) {
      next.sort((a, b) => {
        const av = a[sort.key];
        const bv = b[sort.key];
        return (av === bv ? 0 : av > bv ? 1 : -1) * (sort.isAsc ? 1 : -1);
      });
    }
    if (searchSinnoh) {
      next = next.filter((element) => String(element.Sinnoh || '').indexOf(searchSinnoh) > -1);
    }
    return next;
  }, [items, sort, searchSinnoh]);

  const sortBy = (key) => {
    setSort((prev) => ({ key, isAsc: prev.key === key ? !prev.isAsc : false }));
  };

  const sortedClass = (key) => (sort.key === key ? `sorted ${sort.isAsc ? 'asc' : 'desc'}` : '');

  const resetting = () => {
    setSort({ key: '', isAsc: false });
    setSearchSinnoh('');
    setItems((window.SinnohItems || []).slice());
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
          React.createElement('th', { onClick: () => sortBy('Sinnoh'), className: sortedClass('Sinnoh') }, 'シンオウ文字')
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

// グローバルに公開
window.SinnohApp = SinnohApp;

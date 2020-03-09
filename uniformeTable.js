// 表の動的作成
function makeTable(data, tableId) {
	// 表の作成開始
	var rows = [];
	var table = document.createElement("table");

	// 表に2次元配列の要素を格納
	for (i = 0; i < data.length; i++) {
		rows.push(table.insertRow(-1)); // 行の追加
		for (j = 0; j < data[0].length; j++) {
			cell = rows[i].insertCell(-1);
			cell.appendChild(document.createTextNode(data[i][j]));
			// 背景色の設定
			if (i == 0) {
				cell.style.backgroundColor = "#bbb"; // ヘッダ行
			} else {
				cell.style.backgroundColor = "#ddd"; // ヘッダ行以外
			}
			if (j == 0) {
				cell.classList.add('galar');
			}
		}
	}
	// 指定したdiv要素に表を加える
	document.getElementById(tableId).appendChild(table);
}
window.onload = function () {
	// 表のデータ
	var data = [
		["GALAR", "推測", "コメント", "分類"],
    ["SeeC chqllingi", "SEED Challenge", "チャレンジセット", "ユニフォーム"],
    ["WCSh", "KUSA", "くさセット", "ユニフォーム"],
    ["BKSe", "MIZU", "みずセット", "ユニフォーム"],
    ["IOWO", "HONO", "ほのおセット", "ユニフォーム"],
    ["OCET", "", "ゴーストセット", "ユニフォーム"],
    ["RFESBLO", "KAKUTOU", "かくとうセット", "ユニフォーム"],
    ["EHIOT", "FAIRY", "フェアリーセット", "ユニフォーム"],
    ["TMY", "IWA", "いわセット", "ユニフォーム"],
    ["BDeY", "", "こおりセット", "ユニフォーム"],
    ["JWE", "AKU", "あくセット", "ユニフォーム"],
    ["MLKDUA", "DRAGON", "ドラゴンセット", "ユニフォーム"],
    ["CVSLI", "", "むしセット", "ユニフォーム"],
    ["CYDYUH", "HAGANE", "はがねセット", "ユニフォーム"],
    ["IEOeU", "PSICO(伊)", "エスパーセット", "ユニフォーム"],
    ["UEXMF", "DENKI", "でんきセット", "ユニフォーム"],
    ["LFCBN", "JIMEN", "じめんセット", "ユニフォーム"],
    ["XFRUK", "HIKOU", "ひこうセット", "ユニフォーム"],
    ["XUTXVF", "NORMAL", "ノーマルセット", "ユニフォーム"],
    ["JNHV", "DOKU", "どくセット", "ユニフォーム"],
    ["Whodplon", "Champion", "チャンピオンセット", "ユニフォーム"],
	];

	// 表の動的作成
	makeTable(data, "table");
};

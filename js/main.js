// 0.保存データ表示
for (let i = 1; i < localStorage.length+1; i++) {
        
    // 表示する要素を追加
    $(".myrecipelist").prepend(
        '<div class="col-6 col-md-4 col-lg-3 myrecipe"><p class="name'+i+'">料理名：</p><p class="calorie'+i+'">カロリー：</p><p class="time'+i+'">調理時間：</p><p class="cost'+i+'">費用目安：</p><p class="evaluation'+i+'">評価：</p><p class="memo'+i+'">めも：</p></div>'
    );

    // ローカルストレージからデータ取得
    const json_localData = localStorage.getItem(i);
    // JSON文字列 -> JavaScriptオブジェクトに変換
    const localData = JSON.parse(json_localData);
    // 画面に表示
    $(".name"+i).append(localData.name)
    $(".calorie"+i).append(localData.calorie)
    $(".time"+i).append(localData.time)
    $(".cost"+i).append(localData.cost)
}

// 1.saveクリックイベント

$("#save").on('click', function () {
    let number = localStorage.length+1;
    let name = $("#name").val();
    let calorie = $("#calorie").val();
    let time = $("#time").val();
    let cost = $("#cost").val();

    let formData = {
        name: name,
        calorie: calorie,
        time: time,
        cost: cost
    }

    // JavaScriptオブジェクト -> JSON文字列に変換
    let json_formData = JSON.stringify(formData);
    // ローカルストレージに保存
    localStorage.setItem(number,json_formData);
    

    // ページ再読み込み
    window.location.reload();
});




//2.clear クリックイベント

$("#clear").on("click", function () {
    localStorage.clear();

    // ページ再読み込み
    window.location.reload();
});










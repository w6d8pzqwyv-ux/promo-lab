/* ============================================================
   channels.js  —  周知アドバイザーの知識ベース（心臓部）
   ------------------------------------------------------------
   ここを編集すればサイトのアドバイス内容が変わります。
   ・1チャネル（サブレ）＝ 1つの { ... } ブロック。
   ・コードを足すときは既存ブロックをコピーして中身を書き換えるだけ。
   ・実データ(realData)の数字は「実際に投稿して出た数字」だけ入れる。
     まだ投稿していないものは posted:false のままにする（でっち上げ禁止）。
   ============================================================ */

window.CHANNELS = [

  /* ---- A 一般向け × 感情 / Reddit r/GenX ------------------- */
  {
    id: "reddit-genx",
    channel: "Reddit r/GenX",
    platform: "Reddit",

    // どの型に効くか（1階 tier ＝ A/B、2階 hook ＝ 感情/実用/驚き）
    fitsType: { tier: "A", hook: "感情" },

    // 推奨度（"本命" / "○" / "△"）
    rank: "要モッド承認",

    // 層2：このサブレの文化を1行で肩代わり
    cultureNote: "40〜50代の自虐ユーモア文化。『教訓』『意識高い』は滑る。笑いと自虐で共感を取る場。",

    // 投稿の前提条件（ここで詰まる人が多い）
    prerequisite: "⚠自己宣伝は事前のモッド承認が必須（Rule 12・2026-06-17確認）。承認なしのリンク投稿は削除される。承認を得るか、リンク無しの純粋な体験談のみ。加えて作りたてアカウントは警戒されるので先にコメントでカルマを貯める。アプリは英語版が必要。",

    // タイミングの鉄則
    timing: "1日1サブレ。投稿後 最低1時間は張り付いてコメント返信。投稿時間よりタイトルで勝負が決まる（狙うなら22〜23時JST＝米東部の朝、でも神経質にならない）。",

    // 投稿の角度
    postPattern: "自虐タイトルで『落差』を作る（すごい人 vs 今日の自分）。本文は体験談。リンクは本文に置かず、自分の最初のコメント（セルフコメント）に置く＝宣伝臭を消す。",

    // 運営者の一次データ（正直に。数字をでっち上げない）
    realData: {
      posted: false,                 // r/GenX はまだ未投稿（2026-06-17予定）
      plannedDate: "2026-06-17",
      note: "未投稿。Rule12（自己宣伝は事前承認制）と判明したため、承認なしでは投稿しない方針に変更。",
      // 近縁サブレの参考値（実際に出た数字）
      reference: {
        channel: "Reddit r/midlifecrisis",
        date: "2026-06-16",
        views: 1136,
        upvotes: 4,
        clicks: 1,
        emotionalComments: 0,
        lesson: "48時間で表示1136・クリック1（CTR0.09%）。悩みを吐く部屋は閲覧されても外部ツールに動きにくい。GenXのような『笑い合う部屋』を次に試す。"
      }
    },

    // 英日テンプレ（汎用＝空欄を埋めればどんな感情型アプリでも使える）
    // en=英語(コピー用) / ja=日本語訳(意味) / blanks=空欄の埋め方 / note=ニュアンス注記
    template: {
      title: {
        en: "I'm [年齢]. [偉人] [すごい功績] at [その人の年齢]. My biggest achievement today was [今日のしょぼい出来事].",
        ja: "「[年齢]歳。[偉人]は[年齢]歳で[すごい功績]。今日の俺の最大の功績は[しょぼい出来事]だった。」",
        blanks: "[偉人][功績]＝あなたのアプリが出す“すごい例” ／ [しょぼい出来事]＝「メール返信した」等の自虐",
        example: "I'm 40. Dostoevsky wrote Crime and Punishment at 45. My biggest achievement today was answering emails."
      },
      body: {
        en: "Lately I keep feeling like I should have achieved more by now.\nOut of curiosity I started looking up [あなたのアプリのテーマ]. Turns out [意外な発見].\nSomehow that made today feel slightly less pathetic. Anyone else hitting this wall?",
        ja: "「最近、もっと成し遂げてるべきだったと感じてばかり。気になって[テーマ]を調べ始めたら、[意外な発見]だった。おかげで今日が少しだけマシに思えた。同じ壁にぶつかってる人いる？」",
        blanks: "[テーマ]＝アプリが扱う題材 ／ [意外な発見]＝ユーザーが驚く事実",
        note: "pathetic（情けない）は自虐ジョーク。深刻に見せない軽さが命。"
      },
      comment: {
        en: "This rabbit hole turned into a tiny free site — you enter [入力するもの] and it shows [出るもの]. No signup. Built it mostly for myself: [URL] — curious what you all get.",
        ja: "「この沼が小さな無料サイトになった。[入力するもの]を入れると[出るもの]が出る。登録不要。ほぼ自分用に作った：[URL]。みんなは何が出る？」",
        blanks: "[入力するもの]＝例『your birthday』 ／ [出るもの]＝例『what authors wrote at your exact age』 ／ [URL]＝あなたのアプリのURL",
        note: "投稿1分以内に、この自分のコメントとして投稿。ここで初めてリンクを出す。"
      }
    },

    // 「次の一手」ロジック（PDCA）：投稿後の結果に応じてサイトが返す提案
    nextMove: [
      { when: "表示は出るがクリック率<1%", advice: "本文で言い切りすぎ。締めを『あなたの場合は？』に変えてクリック動機を作る。" },
      { when: "そもそも表示が伸びない",       advice: "タイトルが弱い。自虐／驚きの『落差』を強める。" },
      { when: "感情コメントが0",             advice: "サブレ文化が不一致かも。『悩みを吐く場』を避け、『面白いもの好き』の大箱へ。" }
    ]
  }

];

/* REEDS SEL x ESL curriculum map: 9 grades x 10 months. */
(function(){
  const months = ['9月','10月','11月','12月','1月','2月','3月','4月','5月','6月'];
  const selCycle = [
    ['自我覺察','Discipline 自律'],['自我管理','Resilience 韌性'],
    ['社會覺察','Empathy 同理'],['人際技巧','Empathy 同理'],
    ['負責任決策','Spirit 活力精神'],['自我管理','Discipline 自律'],
    ['社會覺察','Exploration 探索'],['負責任決策','Exploration 探索'],
    ['人際技巧','Spirit 活力精神'],['自我覺察','Resilience 韌性']
  ];
  const languageFunctions = ['描述與介紹','提問與澄清','比較與觀點採擇','協商與合作','解釋與反思','設定目標與回饋','摘要與連結','分析與提出理由','說服與公開溝通','統整與成長敘事'];
  const inputs = ['圖像、示範影片與分級短文','分級讀本、觀察紀錄與訪談範例','雙觀點文本、圖表與文化案例','任務卡、對話示例與同儕回饋','作品範例、歷程照片與反思文本','目標表、人物故事與策略示例','分級文章、資料圖表與實地訪談','多文本資料、測試數據與專家意見','倡議影片、受眾回饋與公開資料','作品集、成果紀錄與自評量表'];

  const grades = {
    1:{axis:'認識自己與安心表達',promise:'從被理解到能表達：建立安全感、生活自理與開口溝通的勇氣。',rows:[
      ['我的名字，我的故事','我如何讓新朋友認識真正的我？','向同學介紹姓名、喜好與一項獨特之處','雙語「這就是我」立體名片'],
      ['情緒氣象站','身體如何告訴我現在的心情？','辨認情緒並說出需要與安定方法','班級雙語情緒氣象牆'],
      ['我們的安心教室','什麼行動能讓每個人安心學習？','說明班級需要並傾聽他人的感受','共同創作雙語安心公約'],
      ['友善任務隊','遇到同伴需要幫忙時，我能做什麼？','以角色扮演練習邀請、回應與求助','友善情境英語小劇場'],
      ['小小生活設計師','我能怎樣讓每天更有秩序？','介紹自己的日常流程與一項改善','My Smart Day 圖文書'],
      ['重新出發的我','新學期我想練成哪一項能力？','用簡單英文訂定目標並回報進度','雙語成長護照'],
      ['校園感官偵探','校園中有哪些值得被發現的線索？','描述所見所聞並提出一個問題','五感校園探索小誌'],
      ['種子到生命','生命成長需要哪些照顧？','依序說明植物變化與照顧方式','雙語種植觀察展'],
      ['讓校園更友善','哪個小改變能幫助校園裡的人？','向真實受眾介紹問題與友善提案','小小改善提案發表'],
      ['我長大了一點','今年我學會如何照顧自己與他人？','用作品與故事分享一項成長','My First REEDS Journey 展演']
    ]},
    2:{axis:'建立關係與關懷社區',promise:'從同伴合作走向社區關懷：學會看見需要、修復關係並主動服務。',rows:[
      ['我的關係星球','哪些人支持我，我如何回應？','介紹支持網絡並表達感謝','雙語關係星圖'],
      ['傾聽高手訓練營','真正的傾聽看起來與聽起來如何？','練習追問、重述與確認訊息','Listening Lab 任務紀錄'],
      ['換一雙眼睛看世界','同一件事為什麼會有不同感受？','比較角色觀點並說出同理回應','雙觀點故事翻頁書'],
      ['衝突修復工坊','意見不同時如何照顧人也解決事？','運用 I-message 協商可行方案','雙語和平桌角色劇'],
      ['我們的合作機器','團隊如何讓每個人都發揮作用？','說明角色、步驟與合作反思','合作機關挑戰展'],
      ['新目標好夥伴','夥伴如何幫助我堅持新目標？','分享目標並給予具體鼓勵','Peer Coach 成長卡'],
      ['社區英雄採訪隊','誰讓社區每天順利運作？','準備問題並訪談社區工作者','雙語社區英雄 Podcast'],
      ['友善空間觀察家','公共空間是否照顧了每一種人？','比較需求並說明觀察證據','兒童友善地圖'],
      ['一件小事的力量','我們能為社區完成什麼真實服務？','邀請他人參與並清楚說明行動','班級微服務行動'],
      ['我們一起變更好','我如何成為更可靠的夥伴？','以例證分享關係能力的成長','Community of Care 成果展']
    ]},
    3:{axis:'探索家鄉與合作共創',promise:'從好奇走向共同創作：以訪談、踏查和團隊專題重新發現家鄉。',rows:[
      ['我的家鄉座標','我與這個地方有什麼連結？','介紹個人地點記憶與意義','雙語記憶地圖'],
      ['好問題探險隊','什麼問題值得我們走出教室追查？','提出開放式問題並說明探究理由','Inquiry Question Pitch'],
      ['市場裡的百種人生','一座市場如何連結不同的人？','訪談攤商並摘要人物故事','雙語市場人物誌'],
      ['老故事，新聲音','誰的家鄉故事尚未被聽見？','重述口述歷史並尊重受訪者觀點','地方聲音 Audio Walk'],
      ['一條街的共同創作','團隊能如何說好一條街的故事？','協作編輯、導覽與回應觀眾','雙語街區行走導覽'],
      ['團隊再出發','上次合作的卡點能如何改善？','設定團隊規範並給予行動回饋','Team Reset 工作坊'],
      ['家鄉自然觀察所','自然環境如何影響居民生活？','解釋觀察資料與生活連結','雙語生態田野小誌'],
      ['地方問題設計室','哪個地方問題值得做出原型？','比較方案並解釋設計選擇','社區改善原型'],
      ['小小策展人','如何讓更多人看見家鄉的價值？','撰寫展品說明並接待真實觀眾','家鄉雙語快閃展'],
      ['共創者的成長','我為團隊帶來了什麼改變？','引用作品與回饋說明個人貢獻','Hometown Co-creator Portfolio']
    ]},
    4:{axis:'理解台灣與多元世界',promise:'從台灣出發理解差異：學會比較文化、查證資訊並與不同觀點對話。',rows:[
      ['我的多重身分','哪些文化經驗形塑了今天的我？','以文化物件介紹身分的多重面向','Identity Museum Box'],
      ['島嶼提問家','台灣的地理如何影響我們的生活？','依地圖與資料提出可研究問題','Taiwan Wonder Wall'],
      ['餐桌上的遷徙','一道料理如何說出人群移動的故事？','比較來源資料並敘述文化交流','雙語移動餐桌小誌'],
      ['節慶的多種答案','不同文化如何表達共同的人類需要？','比較節慶並避免刻板印象','跨文化節慶對話展'],
      ['台灣給世界的一封信','我們想讓世界看見怎樣的台灣？','選擇證據並完成受眾導向介紹','Taiwan Story 雙語展'],
      ['觀點健身房','遇到不同意見時如何保持好奇？','使用追問、同意與禮貌反駁句型','Perspective Talk Circle'],
      ['水與島嶼生活','水資源如何連結環境與公平？','閱讀圖表並解釋因果關係','Water Story 資料海報'],
      ['世界兒童生活比較','生活差異背後有哪些制度與選擇？','以可靠資料比較而不做價值排序','Global Childhood Data Story'],
      ['文化交流設計師','怎樣的交流能彼此尊重而非獵奇？','協商交流規則並設計互動體驗','跨文化交流日'],
      ['成為世界的好客人','今年我如何學會理解差異？','以多項作品證明觀點轉變','Open-minded Explorer 展演']
    ]},
    5:{axis:'公民思辨與團隊責任',promise:'從表達意見走向負責任的公民判斷：用證據對話、協商與承擔。',rows:[
      ['我的價值羅盤','哪些價值會引導我的選擇？','定義重要價值並以生活例證說明','雙語價值宣言'],
      ['資訊偵探社','看到一則訊息時，我該相信什麼？','辨識主張、證據與來源可信度','Fact-checking Case File'],
      ['公平不一定一樣','公平與平等何時不同？','比較案例並採取不同角色觀點','Equity Scenario Forum'],
      ['班級議會','共同生活的規則應由誰決定？','提出動議、回應質詢並協商修正','雙語班級議會實錄'],
      ['公共選擇實驗室','資源有限時如何做出負責任決策？','分析取捨並為團隊決策辯護','Participatory Budget 模擬'],
      ['韌性專案經理','專題受阻時如何帶領團隊調整？','回報風險、提出替代方案與求助','Project Recovery Brief'],
      ['媒體中的世界','媒體如何影響我們理解他人？','比較報導框架並摘要觀點差異','雙語媒體透視 Podcast'],
      ['校園公共議題調查','哪些校園決策需要學生聲音？','設計問卷、解讀數據並提出結論','Student Voice Data Report'],
      ['有證據的倡議','如何讓好主張被理解並採納？','以證據、反方回應與行動呼籲說服','校園倡議簡報'],
      ['負責任的公民','我的聲音如何為群體帶來正向影響？','反思參與歷程與決策責任','Civic Thinker Portfolio Defense']
    ]},
    6:{axis:'永續行動與自主領導',promise:'從認識永續走向可驗證的行動：管理專案、連結利害關係人並衡量影響。',rows:[
      ['我的影響力足跡','日常選擇如何影響更大的系統？','解釋個人行為與環境影響的連結','Personal Impact Dashboard'],
      ['永續目標實驗室','哪個永續問題與我們最接近？','比較議題並提出可行研究問題','SDG Local Challenge Pitch'],
      ['看見系統','一個問題背後有哪些相互影響的因素？','描述因果鏈、回饋與利害關係人','雙語系統圖'],
      ['與利害關係人對話','好的解方如何納入不同需求？','進行半結構訪談並綜合多方觀點','Stakeholder Insight Brief'],
      ['從資料到行動','哪些證據支持我們的第一版解方？','解讀數據並提出可測試假設','Sustainability Prototype Demo'],
      ['自主領導衝刺','我如何管理時間、品質與團隊承諾？','主持進度會議並回應風險','Student-led Sprint Review'],
      ['原型與失敗履歷','失敗資料如何幫助解方變好？','比較測試結果並解釋修正決策','Failure Resume + Prototype 2.0'],
      ['影響力如何衡量','我們怎麼知道行動真的有用？','建立指標並說明資料限制','Impact Measurement Plan'],
      ['永續行動上線','如何邀請社群共同採取行動？','向不同受眾調整倡議與參與方式','真實永續微行動'],
      ['領導者的交棒','如何讓影響在專題結束後持續？','提出成果、限制與延續建議','Sustainability Leadership Summit']
    ]},
    7:{axis:'自我定位與文明對話',promise:'從青春期自我探索進入文明對話：以原文閱讀、論證與倫理判斷建立立場。',rows:[
      ['成為誰的問題','我的選擇受到哪些故事與期待影響？','以個人敘事分析身分形成因素','Identity Narrative Talk'],
      ['學習者使用說明書','什麼策略能讓我在挑戰中有效學習？','分析學習數據並提出策略假設','Bilingual Learner Manual'],
      ['文明如何回答好生活','不同文明如何理解幸福與責任？','比較原文節錄並提出詮釋','Civilization Dialogue Seminar'],
      ['權力、規則與正義','制度如何保護人，也可能排除人？','以案例證據進行蘇格拉底對話','Justice Case Hearing'],
      ['文明策展人的選擇','策展如何影響觀眾理解歷史？','為選件、敘事與缺席觀點辯護','雙語文明策展展'],
      ['韌性不是硬撐','何時該堅持、調整或尋求協助？','分析困境並提出有依據的策略','Resilience Decision Memo'],
      ['科技與人的界線','技術進步一定代表生活更好嗎？','查證資料並區分利益、風險與價值','Tech Ethics Brief'],
      ['論證設計室','如何讓立場經得起反方檢驗？','建立主張、證據、推理與反駁','Oxford-style Mini Debate'],
      ['我的校園倫理提案','哪項校園制度值得重新思考？','向決策者提出兼顧多方的修正案','School Ethics Proposal'],
      ['我與文明的對話','今年哪些思想改變了我的選擇？','引用文本與經驗完成成長論述','Public Portfolio Colloquium']
    ]},
    8:{axis:'全球議題與創新解方',promise:'從理解全球議題走向跨文化協作：查證、談判、設計並公開捍衛解方。',rows:[
      ['全球身分與特權','我的位置如何影響我看世界的方式？','分析身分、資源與觀點限制','Global Positionality Map'],
      ['議題雷達','哪些全球變化將影響我們的未來？','掃描多源資料並提出優先議題','Global Trend Intelligence Brief'],
      ['新聞之外的真相','同一場危機為何有不同敘事？','跨來源查證並比較框架與缺漏','Comparative News Analysis'],
      ['談判桌上的世界','國家利益與共同利益如何協商？','代表立場、提出讓步並形成決議','Model UN Resolution'],
      ['沒有簡單答案的解方','好解方如何面對複雜性與副作用？','評估方案及非預期後果','Global Challenge Solution Pitch'],
      ['跨文化團隊作業系統','團隊如何跨越語言與文化差異？','建立協作規範並進行衝突回饋','Global Team Working Agreement'],
      ['AI 與資訊正義','誰從智慧科技受益，誰承擔風險？','閱讀原始資料並進行倫理分析','AI Ethics Policy Brief'],
      ['創新原型實驗場','如何低成本測試全球解方的關鍵假設？','向專家說明假設、數據與迭代','Innovation Demo Day'],
      ['國際倡議計畫','如何讓跨文化受眾願意採取行動？','調整訊息框架並回應批判提問','Youth Global Forum'],
      ['世界公民的責任','全球視野如何改變我的日常選擇？','整合研究、行動與反思形成主張','Global Citizen Portfolio Defense']
    ]},
    9:{axis:'未來選擇與社會影響',promise:'從升學選擇走向人生方向：以獨立研究、社會創新與公開答辯完成畢業證明。',rows:[
      ['未來不是單選題','我想解決什麼問題，而不只想成為什麼？','連結優勢、價值與社會需要進行自我定位','Future Purpose Statement'],
      ['可信的獨立研究','什麼問題值得投入一整年的時間？','界定研究問題、方法與倫理界線','Capstone Research Proposal'],
      ['與專業世界對話','專業人士如何定義問題與品質？','進行專家訪談並綜合專業意見','Expert Interview Synthesis'],
      ['證據與不確定性','資料不足時如何提出誠實的結論？','評估證據強度、偏誤與限制','Evidence Review Paper'],
      ['畢業專題中期答辯','我的研究目前支持什麼，又不能支持什麼？','回應評審質詢並提出修正計畫','Capstone Midyear Defense'],
      ['高壓下的自我領導','如何管理重要目標、情緒與不確定性？','說明風險、支持系統與復原策略','Personal Resilience Protocol'],
      ['從研究到社會創新','知識如何轉化成對真實使用者有用的解方？','以使用者證據定義價值主張','Social Innovation Prototype'],
      ['影響、倫理與責任','解方成功後可能帶來哪些新問題？','完成倫理檢核與影響評估','Ethical Impact Assessment'],
      ['公開行動與交付','如何對真實受眾負責並完成承諾？','發表成果、回應反方並交付行動','Community Impact Launch'],
      ['我的畢業論證','我如何證明自己已準備好走向下一階段？','整合九年證據進行公開論證與答辯','REEDS Graduation Defense']
    ]}
  };

  function tierOutputs(grade, task){
    if(grade<=2) return {
      Foundation:`使用圖片、詞庫與句框，以 2–4 句或 30 秒口說完成「${task}」。`,
      Developing:`使用連接詞完成 5–7 句或 1 分鐘口說，並回答一個追問。`,
      Extending:`完成有開頭、細節與結尾的短篇或 2 分鐘發表，主動回應觀眾。`
    };
    if(grade<=4) return {
      Foundation:`使用分級文本與段落框架，完成 6–8 句或 1 分鐘「${task}」。`,
      Developing:`整理兩項資料，完成一段短文或 2 分鐘展示並回答追問。`,
      Extending:`綜合多項資料，完成多段作品或 3 分鐘無稿展示並回應觀點。`
    };
    if(grade<=6) return {
      Foundation:`以詞彙表與圖像組織器摘要資料，完成一段或 2 分鐘「${task}」。`,
      Developing:`整合兩份文本，以證據完成多段寫作或 3 分鐘簡報。`,
      Extending:`比較多文本、回應不同觀點，完成完整報告或 5 分鐘問答。`
    };
    return {
      Foundation:`使用分級原文、註釋與論證框架，完成 150–250 字或 3 分鐘「${task}」。`,
      Developing:`整合至少三個來源，完成 300–500 字論述或 5 分鐘發表與問答。`,
      Extending:`查證原始資料、處理反方與限制，完成 600 字以上論述或公開答辯。`
    };
  }

  const map = {months, grades:{}};
  Object.entries(grades).forEach(([g,meta])=>{
    const grade = Number(g);
    map.grades[g] = {
      axis:meta.axis,
      promise:meta.promise,
      months:meta.rows.map((r,i)=>({
        month:months[i], theme:r[0], question:r[1],
        sel:selCycle[i][0], reeds:selCycle[i][1],
        esl:{goal:r[2], function:languageFunctions[i], input:inputs[i], output:r[3], canDo:`我能以英文${r[2]}，並用適合自己程度的證據讓真實受眾理解。`, tiers:tierOutputs(grade,r[2])},
        product:r[3], signature:i===4 || i===9
      }))
    };
  });
  window.REEDS_SEL_ESL_MAP = map;

  const style = document.createElement('style');
  style.textContent = `
    .map-hero{background:linear-gradient(135deg,#173b70,#0f766e);color:#fff;border-radius:18px;padding:24px 28px;margin:18px 0;box-shadow:0 12px 30px rgba(23,59,112,.16)}
    .map-hero .eyebrow{font-size:12px;letter-spacing:.15em;text-transform:uppercase;opacity:.82;font-weight:800}#content .map-hero h2{margin:6px 0 8px;color:#fff}.map-hero p{margin:0;line-height:1.75;max-width:900px}
    .map-legend{display:flex;flex-wrap:wrap;gap:8px;margin:0 0 16px}.map-pill{border-radius:999px;padding:6px 10px;background:#e8f2ff;color:#173b70;font-size:12px;font-weight:700}.map-pill.sel{background:#e7f7f2;color:#0f6b5e}.map-pill.signature{background:#fff2cc;color:#825b00}
    .curriculum-map{font-size:13px;line-height:1.55;table-layout:fixed}.curriculum-map th{background:#173b70;color:#fff;position:sticky;top:0;z-index:1}.curriculum-map td{vertical-align:top;padding:12px 10px}.curriculum-map tr:nth-child(even) td{background:#f8fafc}.curriculum-map tr.signature-row td{background:#fffaf0}.map-month{font-weight:800;color:#173b70;font-size:15px}.map-theme{font-weight:800;font-size:14px;margin-bottom:5px}.map-question{color:#475569}.map-sel{font-weight:700;color:#0f766e}.map-reeds{font-size:12px;color:#64748b}.map-product{font-weight:700}.signature-mark{display:inline-block;margin-top:6px;color:#8a6200;background:#fff1be;border-radius:999px;padding:3px 7px;font-size:11px;font-weight:800}
    .esl-detail summary{cursor:pointer;color:#173b70;font-weight:800}.esl-detail[open]{background:#f0f7ff;border-radius:10px;padding:8px}.esl-meta{margin-top:7px;color:#334155}.esl-meta b{color:#173b70}.tier-list{display:grid;gap:5px;margin-top:8px}.tier{border-left:3px solid #8eb7df;padding-left:7px}.tier b{display:block;font-size:11px;text-transform:uppercase;color:#0f766e}.can-do{margin-top:8px;padding:7px;background:#eaf8f4;border-radius:7px;color:#0c6559}
    @media(max-width:900px){.curriculum-map{display:block;overflow-x:auto;white-space:normal;min-width:1050px}.map-table-wrap{overflow-x:auto}.map-hero{padding:20px}.curriculum-map th{position:static}}
    @media print{.esl-detail{display:block}.esl-detail summary{list-style:none}.esl-detail:not([open])>*:not(summary){display:block}.curriculum-map{font-size:10px}.map-hero{box-shadow:none}.map-table-wrap{overflow:visible}}
  `;
  document.head.appendChild(style);
})();

function renderSelEslMap(el){
  const esc = v => String(v ?? '').replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const gradeNo = String(state.grade || '1');
  const grade = REEDS_SEL_ESL_MAP.grades[gradeNo];
  el.innerHTML = `
    <section class="map-hero">
      <div class="eyebrow">REEDS PREMIUM CURRICULUM · SEL × ESL</div>
      <h2>${esc(data.grades[gradeNo].name)}｜${esc(grade.axis)}</h2>
      <p>${esc(grade.promise)} ESL 採共同主題與程度分流，讓不同英文起點的學生參與同等深度的真實探究。</p>
    </section>
    <div class="map-legend">
      <span class="map-pill">9月－翌年6月</span><span class="map-pill sel">CASEL SEL × REEDS 五力</span>
      <span class="map-pill">Foundation / Developing / Extending</span><span class="map-pill signature">★ 每學期 Signature Project</span>
    </div>
    <div class="map-table-wrap"><table class="curriculum-map"><thead><tr>
      <th style="width:6%">月份</th><th style="width:15%">跨域學習主題</th><th style="width:17%">核心提問</th><th style="width:12%">SEL／REEDS 五力</th><th style="width:27%">ESL 溝通任務與分級輸出</th><th style="width:13%">代表性成果</th>
    </tr></thead><tbody>${grade.months.map(m=>`<tr class="${m.signature?'signature-row':''}">
      <td><div class="map-month">${esc(m.month)}</div></td>
      <td><div class="map-theme">${esc(m.theme)}</div>${m.signature?'<span class="signature-mark">★ Signature Project</span>':''}</td>
      <td><div class="map-question">${esc(m.question)}</div></td>
      <td><div class="map-sel">${esc(m.sel)}</div><div class="map-reeds">${esc(m.reeds)}</div></td>
      <td><details class="esl-detail"><summary>${esc(m.esl.goal)}</summary><div class="esl-meta"><b>Language Function：</b>${esc(m.esl.function)}<br><b>Input：</b>${esc(m.esl.input)}<br><b>Output：</b>${esc(m.esl.output)}</div><div class="tier-list">${Object.entries(m.esl.tiers).map(([k,v])=>`<div class="tier"><b>${k}</b>${esc(v)}</div>`).join('')}</div><div class="can-do"><b>Can-Do：</b>${esc(m.esl.canDo)}</div></details></td>
      <td><div class="map-product">${esc(m.product)}</div><div class="map-reeds">收錄 Portfolio＋導師敘事評量</div></td>
    </tr>`).join('')}</tbody></table></div>`;
}

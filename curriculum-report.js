/* Curriculum policy transcribed from the committee's 15-slide discussion deck, 2026-09-10. */
(function(){
  const source='REEDS_總體課程計畫_課發委員15頁報告簡報.pptx';
  const esc=value=>String(value??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const stages=[
    ['G1–G3','Foundations','學習者／探索者','Explorer Portfolio','基礎：安全、照護、地面技能。原則不上馬，學習馬場界線、馬匹訊號、刷拭、工具與牽行模擬，以及木馬上下馬與核心控制。'],
    ['G4–G6','Connections','探究者／系統思考者','Systems Exhibition','騎士養成：G4通過能力門檻後授裝，練習慢步、停步與簡單轉向；G5新秀賽採多元計分；G6深化穩定性與基礎競技。'],
    ['G7–G9','Agency','研究者／行動者','Research & Impact','專項與領導：馬場馬術／障礙基礎、照護、賽務與影像分析，發展校隊或非騎乘專項；G9完成公共服務與總整答辯。'],
  ];
  const systems=[
    ['認知課程','108課綱與審定教科書知識節點決定學習內容。國語、數學、自然以中文建立概念、推理與正式評量。'],
    ['ESL','系統性學習語音、字彙、句型與溝通，提供參與任務的語言基礎。'],
    ['Language Arts','透過跨文本閱讀、寫作與觀點比較，提升文本深度及表達品質。'],
    ['CLIL','同時設計內容與語言目標，把部分學科轉成雙語探究。中文可澄清概念，再用分級英語探究與發表；內容與語言分開評量。'],
    ['Adventure Education','每週五固定整合與遷移，透過合作、風險判斷與田野任務驗證學習。'],
    ['馬術校本課程（G1–G9）','長期發展生命教育、身體技能、責任與馬匹福祉。只有自然相關時才連結學科，其他時段依技能模組獨立進行。']
  ];
  const abilities=[['基礎能力精熟','閱讀、書寫、計算、測量與工具'],['身體實踐智能','感官、身體、材料與場域'],['雙語意義建構','中英理解、轉譯與表達'],['證據與系統思考','關係、資料、論證與長期影響'],['人類與AI協作','提問、查證、隱私與創造'],['勇於行動的自主力','風險、合作、修正與公共行動']];
  const process=[['認知定錨','確定知識節點、先備概念與學科評量'],['語言分析','ESL拆解字彙句型，Language Arts配置文本與寫作'],['CLIL轉化','共同設計內容、語言、認知與文化目標'],['場域遷移','觀察、測量、導航、合作與問題解決'],['證據回流','日誌、數據、口語、作品及現場表現回到課堂']];
  const friday=[['第1節','Mission Briefing','連結知識、風險評估、角色分工'],['第2節','Field Challenge','觀察、移動、測量、訪談、合作'],['第3節','Evidence Lab','整理資料、測試、修正、原型'],['第4節','Debrief & Assessment','中英說明、質詢、自評及Portfolio選證']];
  const rounds=[['第1輪','9–11月','安全與基準；G1延至11月，避免開學初出隊'],['第2輪','12–3月','技能發展與修正；寒假前後保留雨備'],['第3輪','4–6月','正式評量與成果；G4典禮、G5首賽、G9總整']];
  const examples=[
    ['G1｜安全與關係','身體、感官、校園、自我照護','I am / I can / 求助語言','陽明山基礎觀察、合作與安全','規則、裝備、先備評量；原則不上馬'],
    ['G5｜新秀與資料應用','測量、比例、力、生命與資料','描述、比較、因果與反思','任務設計與數據採證','指定路線、安全、福祉與雙語任務'],
    ['G9｜研究與領導','研究方法、證據品質與公共溝通','research abstract / public defense','服務、影響力與總整','專項、福祉調查、服務與答辯']
  ];

  const table=(heads,rows)=>`<div class="report-table-wrap"><table class="report-table"><thead><tr>${heads.map(x=>`<th scope="col">${esc(x)}</th>`).join('')}</tr></thead><tbody>${rows.map(row=>`<tr>${row.map((x,i)=>`<${i?'td':'th scope="row"'}>${esc(x)}</${i?'td':'th'}>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  const cards=rows=>`<div class="report-grid">${rows.map(([title,text])=>`<article><h3>${esc(title)}</h3><p>${esc(text)}</p></article>`).join('')}</div>`;
  const section=(title,pages,body)=>`<section class="report-section"><h3>${esc(title)} <small>簡報第${esc(pages)}頁</small></h3>${body}</section>`;
  const note=text=>`<p class="report-note">${esc(text)}</p>`;
  const hero=(title,subtitle)=>`<header class="report-hero"><p>REEDS EDUCATION · 2026.09.10</p><h2>${esc(title)}</h2><p>${esc(subtitle)}</p></header>`;
  const footer=()=>`<p class="report-source">資料來源：${esc(source)}。本頁依15頁討論版整理；簡報中的建議決議與待補項目仍屬課發委員會審議事項。</p>`;
  const wrap=(el,html)=>{el.innerHTML=`<div class="curriculum-report">${html}${footer()}</div>`;};
  const stageFor=g=>stages[Math.min(2,Math.floor((g-1)/3))];
  const stageTable=()=>table(['年段','成長階段','學習者角色','代表成果'],stages.map(s=>s.slice(0,4)));
  const fieldSection=()=>section('雙場域分工','7、9',cards([
    ['星期五｜陽明山戶外教室','G1–G9每週全日，上午冒險教育，下午維持原領域學習。進行生態、地景、田野、風險判斷與公共任務；天候不適時改採同目標校內替代課。'],
    ['星期三下午｜合作馬場','G1–G9每年級3次，全年共27梯，與週五陽明山分開安排。每年另有6次校內／模擬馬術模組，分散嵌入既有課程，保留原科目目標與授課語言。']
  ])+table(['週五上午','學習流程','任務'],friday));
  const horseSection=()=>section('馬術能力進程與年度安排','8–9',cards(stages.slice(0,3).map(s=>[s[0],s[4]]))+table(['輪次','月份','重點'],rounds)+note('騎士精神：尊重生命、誠實回報、守護同伴、自律練習與承擔責任。說停、求助與改採替代任務也是勇敢。')+note('國小每年級30人分15／15兩組；國中23人分11／12兩組。同時上馬原則不超過6人，輪站至少包含上馬／模擬、馬匹照護、CLIL觀察／資料與反思。G4起依能力門檻晉級，不以年級自動升級。'));
  const assessment=()=>section('馬術評量、晉級與學習證據','10',table(['評量向度','權重'],[['安全判斷','25%'],['馬匹福祉','20%'],['地面技能','15%'],['騎乘控制','20%'],['雙語／學科','10%'],['自主／品格','10%']])+cards([
    ['一般晉級','加權總分至少75%；安全判斷與馬匹福祉不得低於第3級，其餘向度至少第2級。'],
    ['G9總整','加權總分至少80%；安全與福祉達第4級，並完成公共服務成果。'],
    ['等值成果與重新評量','未上馬仍可完成等值專業成果。停止危險行動、求助或改採替代任務，不扣「勇敢」分。']
  ])+note('每生每年至少10筆核心證據：安全檢核、福祉觀察、地面技能、身體／騎乘表現、雙語日誌、教練評語、影片前後比較、賽務／服務、學生反思與年度審查。'));
  const safety=()=>section('安全與馬匹福祉','11',table(['角色','責任'],[['馬術教練','馬匹配對、上馬與否、難度與停止權'],['馬匹管理','備馬、牽引、疲勞與壓力觀察'],['學校教師','學生管理、CLIL引導、評量與家長溝通'],['健康安全','健康資料、急救與醫療聯繫']])+cards([
    ['停止條件','雷雨、強風、極端高溫、場地濕滑、交通不安全、馬匹健康或工作量異常，以及學生身心狀態不安全。'],
    ['替代與事件處理','裝備不合格改地面課；替代可採馬房科學、規程、影像分析或模擬器。事件立即照護、通知與紀錄，嚴重事件暫停並重新評估風險。']
  ])+note('不因拍照、典禮、競賽、家長期待或課程進度延長馬匹工作；發現跛行、疼痛、過度疲勞或壓力，任何人都有義務立即通報。'));

  const governance=()=>section('課程治理與分階段導入','13、15',table(['頻率','工作'],[['每週','中外師與場域共備：概念、語言、任務、安全與證據'],['每月','縱向課程對齊：知識節點、先備概念與技能螺旋'],['每學期','Portfolio與量尺校準：跨班共同評分樣本'],['每學年','合作馬場與外部審查：資格、保險、福祉、事故、達標率及回饋']])+table(['階段','導入內容'],[['開學前','契約、風險清冊、資格、課表、量尺與家長說明'],['第1學期','G1–G4小規模原型、首輪馬場及證據樣本'],['第2–3學期','G1–G6小學展開、G4典禮及G5新秀賽'],['第4–6學期','G7–G9專項、校隊／非騎乘路徑及G9答辯']])+note('建議審查：理念與一致性、時間與負荷、安全與福祉、公平與評量、版本與可追溯性。決議可採原則通過、條件通過限期補正，或退回修正後再審；本頁不表示已通過。')+note('實施前建議補件：風險清冊與雨備流程、合作馬場契約／資格／保險、逐月矩陣節點ID對照表、評量量尺與匿名作品樣本，以及行政、交通與安全協同人力表。')+note('建議流程：書面預審、團隊簡報、觀課／場域訪視、抽樣學生證據、必要／建議修訂、課委會回覆與次學年追蹤。重大安全、福祉或制度不一致事項列為必要修訂。'));

  function languageSection(){
    const langs=['中文','英語','中英雙語','選修語別'];
    const rows=Object.entries(REEDS_FIRST_YEAR_TIMETABLES.classes).map(([id,grid])=>[id,...langs.map(lang=>grid.flat().filter(x=>x.includes(`【${lang}】`)).length)]);
    const totals=langs.map((_,i)=>rows.reduce((sum,r)=>sum+r[i+1],0));
    const total=totals.reduce((a,b)=>a+b,0);
    return section('授課語言配置','6',table(['班級',...langs,'合計'],[...rows.map(r=>[...r,35]),['四班合計',...totals,total],['占比',...totals.map(n=>(n/total*100).toFixed(1)+'%'),'100%']])+note(`四班共${total}班級節次；英語授課${(totals[1]/total*100).toFixed(1)}%，英語＋雙語課程接觸比例${((totals[1]+totals[2])/total*100).toFixed(1)}%。接觸比例按課程節次計算，不代表全部時段皆使用英語。`)+note('國語、數學、自然以中文建立概念、推理與正式評量。CLIL內容錯誤與語言錯誤分開回饋，避免英語表現遮蔽學科理解。'));
  }
  window.renderReportFramework=el=>wrap(el,hero('G1–G9總體課程架構','以扎實母語、數學與學科認知為根，以雙語建構意義，以冒險教育與馬術在真實場域驗證知識與責任。')+
    section('六項實踐能力','1–3',cards(abilities))+section('G1–G9三階段成長','3',stageTable())+section('六大課程系統','4',cards(systems))+section('從知識節點到真實表現','5',table(['共備步驟','重點'],process)+note('認知課程決定學習內容，活動不能取代概念學習。相同核心概念在各系統中被預習、理解、表達、應用與驗證，保留各科獨立評量。'))+languageSection()+fieldSection()+horseSection()+assessment()+safety()+governance());
  window.renderReportMap=el=>{
    const grade=Number(state.grade), stage=stageFor(grade);
    wrap(el,hero('知識・語言・場域課程地圖',`G${grade}｜${stage[1]}｜${stage[2]}`)+section('每月共備的五個對齊欄位','12',table(['欄位','對齊內容'],[['月主題','本月核心情境'],['認知節點','課綱與教科書知識，實施前依版本校準'],['ESL／Language Arts／CLIL','任務需要的語言、文本與內容目標'],['Adventure場域','陽明山、校園與社區任務'],['馬術銜接','只有自然相關時才連結']]))+section('簡報的三個年段示例','12',table(['年級／情境','認知節點','語言與文本','場域任務','馬術銜接'],examples))+section('課程生成流程','5',table(['步驟','共備內容'],process))+note('簡報提供矩陣欄位與G1、G5、G9示例，未提供各年級逐月定稿。實施前須依教科書版本與校曆校準，節點ID與課綱代碼對照表仍為建議補件。')+section('本年段的馬術銜接','8',note(stage[4])));
  };
  window.renderReportPlan=el=>{
    const grade=Number(state.grade), stage=stageFor(grade);
    wrap(el,hero(`G${grade}課程計畫`,`${stage[0]} ${stage[1]}｜${stage[2]}｜代表成果：${stage[3]}`)+section('年段定位與共同能力','3',cards(abilities))+(section('六系統在本年段的分工','4–5',cards(systems))+section('本年段馬術路徑','8',note(stage[4]))+horseSection()+assessment())+section('逐月規劃與校準狀態','12、15',note('每月對齊月主題、認知節點、ESL／LA／CLIL、Adventure場域及馬術銜接。簡報未附完整逐月細目，正式版本需依教科書與校曆補齊節點ID及課綱代碼。'))+governance());
  };
  window.renderReportSchedule=el=>{
    const grade=Number(state.grade);
    wrap(el,hero(`G${grade}週課表與場域安排`,grade<=3?'第一年四班固定節數版，每班35節。':'依簡報呈現已列明的場域安排與排課原則。')+(fieldSection()+section('年度馬場與既有節數','9',table(['輪次','月份','重點'],rounds))+note('每年6次校內／模擬模組與3次馬場課嵌入既有生活、綜合、STEAM、藝術、英語或閱讀，保留原學科目標與授課語言。行政、交通、午休與額外安全協同人力須另行核定。')));
    if(grade<=3){
      const target=el.querySelector('.curriculum-report');
      const ids=grade===1?['101','102']:grade===2?['201']:['301'];
      const controls=document.createElement('div');controls.className='teacher-picker';
      const label=document.createElement('label');label.htmlFor='reportClassSelect';label.textContent='班級';
      const select=document.createElement('select');select.id='reportClassSelect';ids.forEach(id=>{const o=document.createElement('option');o.value=id;o.textContent=id+'班';select.appendChild(o);});
      const area=document.createElement('div');
      const show=()=>{area.innerHTML='';renderFixedTimetable(area,'class',select.value);};
      controls.append(label,select);target.insertBefore(controls,target.querySelector('.report-source'));target.insertBefore(area,target.querySelector('.report-source'));select.onchange=show;show();
      const explanation=document.createElement('p');explanation.className='report-note';explanation.textContent='上方週五四步驟為簡報的教學流程，下方課表保留固定節數版的科目、語言與教師主責；流程須在共備時對齊，不另增加節數。';area.prepend(explanation);
    }else if(grade<=9){
      el.querySelector('.curriculum-report').insertAdjacentHTML('beforeend',note('簡報未列G4–G9完整逐節週課表；班級與教師配置仍須另行排定，本頁不沿用舊版示例作為定案課表。'));
    }
  };
  const style=document.createElement('style');
  style.textContent=`.curriculum-report{max-width:1240px;margin:auto;color:#243b53}.report-hero{padding:26px;border-radius:16px;background:#233e57;color:#fff;margin-bottom:24px}#content .report-hero h2{color:white;font-size:28px}.report-hero p{line-height:1.8;margin:8px 0}.report-section{margin:28px 0}.report-section>h3{font-size:20px;color:#233e57}.report-section small{font-size:12px;color:#64748b;font-weight:400;margin-left:8px}.report-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px}.report-grid article{background:white;border:1px solid #d8e2e9;border-radius:12px;padding:16px}.report-grid h3{margin:0 0 8px;font-size:16px}.report-grid p{margin:0;line-height:1.85}.report-table-wrap{overflow:auto;margin:14px 0}.report-table{width:100%;min-width:650px;background:white;font-size:14px}.report-table thead th{background:#29495b;color:white}.report-table td,.report-table th{padding:12px;line-height:1.8;text-align:left;vertical-align:top}.report-table tbody th{color:#29495b;min-width:95px;background:#f1f6f8}.report-note{padding:14px 16px;background:#f0f5f7;border-left:3px solid #528494;line-height:1.85}.report-source{font-size:12px;color:#64748b;line-height:1.8;margin-top:30px}@media(max-width:800px){.report-grid{grid-template-columns:1fr}.report-hero{padding:18px}#content .report-hero h2{font-size:23px}}@media print{.report-grid{grid-template-columns:repeat(2,1fr)}.report-table{min-width:0}.report-table-wrap{overflow:visible}.report-section{break-inside:auto}.report-grid article{break-inside:avoid}.report-hero{background:white;color:#243b53}#content .report-hero h2{color:#243b53}}`;
  document.head.appendChild(style);
})();

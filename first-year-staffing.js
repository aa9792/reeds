/* REEDS first-year staffing and teaching assignment plan. */
(function(){
  const plan = {
    title:'第一年教師配課表',
    subtitle:'兩班一年級、一班二年級、一班三年級｜四班中外師雙導師制',
    classes:[
      {id:'1A',name:'一年級 A 班',chinese:'CT-G1 教學組長',english:'ET-1 外師導師一'},
      {id:'1B',name:'一年級 B 班',chinese:'CT-D1 主任一',english:'ET-2 外師導師二'},
      {id:'2A',name:'二年級 A 班',chinese:'CT-G2 課程組長',english:'ET-3 外師導師三'},
      {id:'3A',name:'三年級 A 班',chinese:'CT-D2 主任二',english:'ET-4 外師導師四'}
    ],
    teachers:[
      {code:'CT-D1',name:'主任一',role:'主任／中師導師',employment:'全職中師',homeroom:'1B',periods:4,courses:[['SEL／品德','1A、1B、2A、3A','各1節，共4節']],duties:'行政領導、1B班級經營、親師溝通、SEL學生觀察'},
      {code:'CT-D2',name:'主任二',role:'主任／中師導師',employment:'全職中師',homeroom:'3A',periods:4,courses:[['閱讀策略與閱讀討論','1A、1B、2A、3A','各1節，共4節']],duties:'行政領導、3A班級經營、閱讀推動與學生支持'},
      {code:'CT-G1',name:'教學組長',role:'組長／中師導師',employment:'全職中師',homeroom:'1A',periods:9,courses:[['語文','1A','5節'],['語文','1B','4節']],duties:'1A班級經營、低年級語文課程統整、中外師共備'},
      {code:'CT-G2',name:'課程組長',role:'組長／中師導師',employment:'全職中師',homeroom:'2A',periods:9,courses:[['語文','2A','5節'],['語文','3A','4節']],duties:'2A班級經營、二三年級課程統整、Signature Project協調'},
      {code:'CT-IT',name:'資訊組長',role:'資訊組長／跨班教師',employment:'全職中師',homeroom:'跨班',periods:9,courses:[['資訊科技 IT','1A、1B、2A、3A','各1節，共4節'],['STEAM Education','1A、1B、2A、3A','各1節，共4節'],['數位Portfolio協同','四班輪替','1節']],duties:'校務資訊、教學科技、設備管理、數位作品集與STEAM專案'},
      {code:'ET-1',name:'外師導師一',role:'外師導師',employment:'全職外師',homeroom:'1A',periods:16,courses:[['Language Arts','1A','8節'],['English Social Studies','1A','3節'],['English Science','1A','2節'],['主題探索／Project','1A','3節']],duties:'1A英文班級經營、ESL分流、Portfolio與親師溝通'},
      {code:'ET-2',name:'外師導師二',role:'外師導師',employment:'全職外師',homeroom:'1B',periods:16,courses:[['Language Arts','1B','8節'],['English Social Studies','1B','3節'],['English Science','1B','2節'],['主題探索／Project','1B','3節']],duties:'1B英文班級經營、ESL分流、Portfolio與親師溝通'},
      {code:'ET-3',name:'外師導師三',role:'外師導師',employment:'全職外師',homeroom:'2A',periods:16,courses:[['Language Arts','2A','8節'],['English Social Studies','2A','3節'],['English Science','2A','2節'],['主題探索／Project','2A','3節']],duties:'2A英文班級經營、ESL分流、Portfolio與親師溝通'},
      {code:'ET-4',name:'外師導師四',role:'外師導師',employment:'全職外師',homeroom:'3A',periods:16,courses:[['Language Arts','3A','8節'],['English Social Studies','3A','3節'],['English Science','3A','2節'],['主題探索／Project','3A','3節']],duties:'3A英文班級經營、ESL分流、Portfolio與親師溝通'},
      {code:'PT-MA',name:'數學兼任教師',role:'數學專業教師',employment:'專業兼任',homeroom:'—',periods:16,courses:[['數學','1A、1B、2A、3A','各4節，共16節']],duties:'數學課程、學習診斷與分層任務設計'},
      {code:'PT-HU',name:'人文社會兼任教師',role:'語文／社會專業教師',employment:'專業兼任',homeroom:'—',periods:6,courses:[['語文','1B、3A','各1節，共2節'],['中文社會','1A、1B、2A、3A','各1節，共4節']],duties:'補足語文節數、在地文化與中文社會探究'},
      {code:'PT-AR',name:'藝術兼任教師',role:'藝術專業教師',employment:'專業兼任',homeroom:'—',periods:8,courses:[['藝術 Arts','1A、1B、2A、3A','各2節，共8節']],duties:'視覺藝術、表演、策展及成果展美學指導'},
      {code:'PT-PE',name:'體育／戶外教育兼任教師',role:'體育與冒險教育教師',employment:'專業兼任',homeroom:'—',periods:12,courses:[['體育 PE','1A、1B、2A、3A','各2節，共8節'],['Adventure／主題探索','1A、1B、2A、3A','各1節，共4節']],duties:'體適能、戶外安全、冒險挑戰與團隊任務'}
    ]
  };
  window.REEDS_FIRST_YEAR_STAFFING = plan;

  const style=document.createElement('style');
  style.textContent=`
    .staff-hero{background:linear-gradient(135deg,#253b70,#435aa0);color:#fff;border-radius:18px;padding:24px 28px;margin:8px 0 18px}.staff-hero .kicker{font-size:12px;letter-spacing:.14em;font-weight:800;opacity:.8}#content .staff-hero h2{color:#fff;margin:5px 0}.staff-hero p{margin:0;opacity:.9}
    .staff-stats{display:grid;grid-template-columns:repeat(5,minmax(120px,1fr));gap:12px;margin-bottom:20px}.staff-stat{background:#fff;border:1px solid #dbe3ef;border-radius:14px;padding:14px;box-shadow:0 7px 18px rgba(30,55,90,.06)}.staff-stat strong{display:block;font-size:25px;color:#243b70}.staff-stat span{font-size:12px;color:#64748b}
    .staff-section-title{font-size:17px;font-weight:850;color:#243b70;margin:24px 0 10px}.dual-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.dual-card{background:#f8fafc;border:1px solid #dbe3ef;border-radius:14px;padding:14px}.dual-card h4{margin:0 0 9px;color:#1e3565}.mentor-line{display:flex;gap:7px;align-items:flex-start;margin-top:7px}.mentor-tag{flex:0 0 auto;padding:3px 7px;border-radius:99px;background:#e5eefc;color:#25447d;font-size:11px;font-weight:800}.mentor-tag.en{background:#e2f6ef;color:#0e6c5c}
    .staff-table-wrap{overflow:auto;border:1px solid #dbe3ef;border-radius:14px}.staff-table{margin:0;font-size:13px;line-height:1.5;min-width:1120px}.staff-table th{background:#243b70;color:#fff}.staff-table td{vertical-align:top;padding:11px}.staff-table tr:nth-child(even) td{background:#f8fafc}.teacher-name{font-weight:850;color:#1e3565}.teacher-code{font-size:11px;color:#718096}.employment{display:inline-block;border-radius:99px;padding:3px 7px;background:#e5eefc;color:#25447d;font-size:11px;font-weight:800}.employment.pt{background:#fff0d5;color:#8a5a00}.period-num{font-size:20px;font-weight:900;color:#0f766e}.course-line{margin-bottom:5px}.course-line b{color:#243b70}.staff-checks{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px}.staff-check{padding:13px;border-radius:12px;background:#eaf8f4;color:#0e6255;font-weight:700}.staff-note{margin-top:14px;background:#fff8e8;border-left:4px solid #e6ad35;padding:12px 14px;color:#714f10}
    @media(max-width:950px){.staff-stats{grid-template-columns:repeat(2,1fr)}.dual-grid,.staff-checks{grid-template-columns:1fr 1fr}}@media(max-width:600px){.dual-grid,.staff-checks{grid-template-columns:1fr}}
    @media print{.staff-table-wrap{overflow:visible}.staff-table{font-size:10px}.staff-hero{box-shadow:none}}
  `;
  document.head.appendChild(style);
})();

function renderFirstYearStaffing(el){
  const p=REEDS_FIRST_YEAR_STAFFING;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const ftCt=p.teachers.filter(t=>t.employment==='全職中師').length;
  const ftEt=p.teachers.filter(t=>t.employment==='全職外師').length;
  const pt=p.teachers.filter(t=>t.employment==='專業兼任').length;
  const periodTotal=p.teachers.reduce((a,t)=>a+t.periods,0);
  el.innerHTML=`
    <section class="staff-hero"><div class="kicker">YEAR 1 · TEACHING ASSIGNMENT</div><h2>${esc(p.title)}</h2><p>${esc(p.subtitle)}；外師導師每週16節，主任每週4節，組長每週9節。</p></section>
    <div class="staff-stats"><div class="staff-stat"><strong>4</strong><span>招生班級</span></div><div class="staff-stat"><strong>8</strong><span>中外師導師席次</span></div><div class="staff-stat"><strong>${ftCt}</strong><span>全職中師</span></div><div class="staff-stat"><strong>${ftEt}</strong><span>全職外師</span></div><div class="staff-stat"><strong>${pt}</strong><span>專業兼任教師</span></div></div>
    <div class="staff-section-title">四班雙導師配置</div><div class="dual-grid">${p.classes.map(c=>`<article class="dual-card"><h4>${esc(c.name)}</h4><div class="mentor-line"><span class="mentor-tag">中師</span><span>${esc(c.chinese)}</span></div><div class="mentor-line"><span class="mentor-tag en">外師</span><span>${esc(c.english)}</span></div></article>`).join('')}</div>
    <div class="staff-section-title">每位教師授課與職務</div><div class="staff-table-wrap"><table class="staff-table"><thead><tr><th style="width:12%">教師</th><th style="width:13%">職務／聘任</th><th style="width:7%">導師班</th><th style="width:7%">週節數</th><th style="width:34%">課別、班級與節數</th><th>非授課責任</th></tr></thead><tbody>${p.teachers.map(t=>`<tr><td><div class="teacher-name">${esc(t.name)}</div><div class="teacher-code">${esc(t.code)}</div></td><td>${esc(t.role)}<br><span class="employment ${t.employment==='專業兼任'?'pt':''}">${esc(t.employment)}</span></td><td>${esc(t.homeroom)}</td><td><span class="period-num">${t.periods}</span> 節</td><td>${t.courses.map(c=>`<div class="course-line"><b>${esc(c[0])}</b>｜${esc(c[1])}｜${esc(c[2])}</div>`).join('')}</td><td>${esc(t.duties)}</td></tr>`).join('')}</tbody></table></div>
    <div class="staff-checks"><div class="staff-check">✓ 兩位主任：每人4節</div><div class="staff-check">✓ 三位組長：每人9節</div><div class="staff-check">✓ 四位外師導師：每人16節</div></div>
    <div class="staff-note"><b>節數說明：</b>全體教師每週共 ${periodTotal} 個教師授課節次；四班基礎課表共140班級節次，另含資訊組長1節數位Portfolio協同教學，因此教師節次為141。兼任教師以專業課別排課，不擔任班級導師。</div>`;
}

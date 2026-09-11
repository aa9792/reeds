/* REEDS first-year staffing and teaching assignment plan. */
(function(){
  const plan = {
  "title": "第一年教師配課表",
  "subtitle": "固定節數版｜101、102、201、301四班中外師雙導師制",
  "classes": [
    {
      "id": "101",
      "name": "101班（1年級）",
      "chinese": "教師 A",
      "english": "教師 G"
    },
    {
      "id": "102",
      "name": "102班（1年級）",
      "chinese": "教師 B",
      "english": "教師 H"
    },
    {
      "id": "201",
      "name": "201班（2年級）",
      "chinese": "教師 C",
      "english": "教師 I"
    },
    {
      "id": "301",
      "name": "301班（3年級）",
      "chinese": "教師 D",
      "english": "教師 J"
    }
  ],
  "teachers": [
    {
      "code": "A",
      "name": "教師 A",
      "role": "101中文導師",
      "homeroom": "101",
      "periods": 7,
      "courses": [
        [
          "彈性 中文閱讀 【中文】",
          "101",
          "1節"
        ],
        [
          "彈性 生命教育與照護 【中英雙語】",
          "101",
          "1節"
        ],
        [
          "體育 戶外合作挑戰 【中英雙語】",
          "101",
          "1節"
        ],
        [
          "彈性 數學應用 【中文】",
          "101",
          "1節"
        ],
        [
          "生活 自然觀察與證據 【中文】",
          "101",
          "1節"
        ],
        [
          "本土語文／臺灣手語 【選修語別】",
          "101",
          "1節"
        ],
        [
          "生活 感官與自然 【中文】",
          "101",
          "1節"
        ]
      ],
      "note": "依附件固定節數"
    },
    {
      "code": "B",
      "name": "教師 B",
      "role": "102中文導師",
      "homeroom": "102",
      "periods": 5,
      "courses": [
        [
          "本土語文／臺灣手語 【選修語別】",
          "102",
          "1節"
        ],
        [
          "國語文 【中文】",
          "102",
          "3節"
        ],
        [
          "彈性 數學應用 【中文】",
          "102",
          "1節"
        ]
      ],
      "note": "依附件固定節數"
    },
    {
      "code": "C",
      "name": "教師 C",
      "role": "201中文導師",
      "homeroom": "201",
      "periods": 7,
      "courses": [
        [
          "國語文 【中文】",
          "201",
          "3節"
        ],
        [
          "彈性 STEAM創作 【中英雙語】",
          "201",
          "1節"
        ],
        [
          "本土語文／臺灣手語 【選修語別】",
          "201",
          "1節"
        ],
        [
          "生活 自然觀察與證據 【中文】",
          "201",
          "1節"
        ],
        [
          "彈性 數學應用 【中文】",
          "201",
          "1節"
        ]
      ],
      "note": "依附件固定節數"
    },
    {
      "code": "D",
      "name": "教師 D",
      "role": "301中文導師",
      "homeroom": "301",
      "periods": 4,
      "courses": [
        [
          "自然科學 【中文】",
          "301",
          "1節"
        ],
        [
          "本土語文／臺灣手語 【選修語別】",
          "301",
          "1節"
        ],
        [
          "國語文 【中文】",
          "301",
          "2節"
        ]
      ],
      "note": "依附件固定節數"
    },
    {
      "code": "E",
      "name": "教師 E",
      "role": "跨班數學",
      "homeroom": "跨班",
      "periods": 16,
      "courses": [
        [
          "數學 【中文】",
          "101",
          "4節"
        ],
        [
          "數學 【中文】",
          "102",
          "4節"
        ],
        [
          "數學 【中文】",
          "201",
          "4節"
        ],
        [
          "數學 【中文】",
          "301",
          "4節"
        ]
      ],
      "note": "依附件固定節數"
    },
    {
      "code": "F",
      "name": "教師 F",
      "role": "STEAM／中文自然",
      "homeroom": "跨班",
      "periods": 8,
      "courses": [
        [
          "彈性 STEAM探索 【中英雙語】",
          "102",
          "1節"
        ],
        [
          "生活 自然觀察與證據 【中文】",
          "102",
          "1節"
        ],
        [
          "彈性 STEAM創作 【中英雙語】",
          "102",
          "1節"
        ],
        [
          "生活 感官與自然 【中文】",
          "102",
          "1節"
        ],
        [
          "生活 生命與環境 【中文】",
          "201",
          "1節"
        ],
        [
          "彈性 STEAM設計與作品集 【中英雙語】",
          "301",
          "1節"
        ],
        [
          "自然科學 【中文】",
          "301",
          "2節"
        ]
      ],
      "note": "依確認跨科自然"
    },
    {
      "code": "G",
      "name": "教師 G",
      "role": "101外籍導師",
      "homeroom": "101",
      "periods": 16,
      "courses": [
        [
          "生活 戶外任務與合作 【中英雙語】",
          "101",
          "1節"
        ],
        [
          "彈性 英語閱讀寫作 【英語】",
          "101",
          "3節"
        ],
        [
          "生活 圖像與律動 【英語】",
          "101",
          "2節"
        ],
        [
          "彈性 自主學習與分享 【中英雙語】",
          "101",
          "1節"
        ],
        [
          "彈性 STEAM探索 【中英雙語】",
          "101",
          "1節"
        ],
        [
          "彈性 ESL任務語言 【英語】",
          "101",
          "3節"
        ],
        [
          "彈性 冒險反思與發表 【中英雙語】",
          "101",
          "1節"
        ],
        [
          "生活 社群與照護 【中英雙語】",
          "101",
          "1節"
        ],
        [
          "彈性 英語繪本與表達 【英語】",
          "101",
          "1節"
        ],
        [
          "彈性 STEAM創作 【中英雙語】",
          "101",
          "1節"
        ],
        [
          "彈性 SEL與班級生活 【中英雙語】",
          "101",
          "1節"
        ]
      ],
      "note": "英語與雙語任務"
    },
    {
      "code": "H",
      "name": "教師 H",
      "role": "102外籍導師",
      "homeroom": "102",
      "periods": 16,
      "courses": [
        [
          "彈性 英語閱讀寫作 【英語】",
          "102",
          "3節"
        ],
        [
          "生活 戶外任務與合作 【中英雙語】",
          "102",
          "1節"
        ],
        [
          "彈性 ESL任務語言 【英語】",
          "102",
          "3節"
        ],
        [
          "彈性 生命教育與照護 【中英雙語】",
          "102",
          "1節"
        ],
        [
          "彈性 冒險反思與發表 【中英雙語】",
          "102",
          "1節"
        ],
        [
          "彈性 自主學習與分享 【中英雙語】",
          "102",
          "1節"
        ],
        [
          "生活 圖像與律動 【英語】",
          "102",
          "2節"
        ],
        [
          "體育 運動技能 【英語】",
          "102",
          "1節"
        ],
        [
          "生活 社群與照護 【中英雙語】",
          "102",
          "1節"
        ],
        [
          "彈性 英語繪本與表達 【英語】",
          "102",
          "1節"
        ],
        [
          "彈性 SEL與班級生活 【中英雙語】",
          "102",
          "1節"
        ]
      ],
      "note": "英語與雙語任務"
    },
    {
      "code": "I",
      "name": "教師 I",
      "role": "201外籍導師",
      "homeroom": "201",
      "periods": 16,
      "courses": [
        [
          "彈性 英語閱讀寫作 【英語】",
          "201",
          "3節"
        ],
        [
          "彈性 STEAM探索 【中英雙語】",
          "201",
          "1節"
        ],
        [
          "彈性 英語繪本與表達 【英語】",
          "201",
          "1節"
        ],
        [
          "體育 戶外合作挑戰 【中英雙語】",
          "201",
          "1節"
        ],
        [
          "生活 戶外任務與合作 【中英雙語】",
          "201",
          "1節"
        ],
        [
          "彈性 SEL與班級生活 【中英雙語】",
          "201",
          "1節"
        ],
        [
          "生活 音樂與創作 【英語】",
          "201",
          "2節"
        ],
        [
          "彈性 ESL任務語言 【英語】",
          "201",
          "3節"
        ],
        [
          "彈性 生命教育與照護 【中英雙語】",
          "201",
          "1節"
        ],
        [
          "彈性 自主學習與分享 【中英雙語】",
          "201",
          "1節"
        ],
        [
          "生活 社群與照護 【中英雙語】",
          "201",
          "1節"
        ]
      ],
      "note": "英語與雙語任務"
    },
    {
      "code": "J",
      "name": "教師 J",
      "role": "301外籍導師",
      "homeroom": "301",
      "periods": 16,
      "courses": [
        [
          "彈性 ESL任務語言 【英語】",
          "301",
          "2節"
        ],
        [
          "社會 CLIL探究 【中英雙語】",
          "301",
          "3節"
        ],
        [
          "綜合 SEL與生活實踐 【中英雙語】",
          "301",
          "1節"
        ],
        [
          "彈性 英語閱讀寫作 【英語】",
          "301",
          "4節"
        ],
        [
          "綜合 戶外任務與童軍 【中英雙語】",
          "301",
          "1節"
        ],
        [
          "彈性 冒險證據與試作 【中英雙語】",
          "301",
          "1節"
        ],
        [
          "彈性 冒險反思與發表 【中英雙語】",
          "301",
          "1節"
        ],
        [
          "藝術 表演藝術 【英語】",
          "301",
          "1節"
        ],
        [
          "藝術 視覺藝術 【英語】",
          "301",
          "1節"
        ],
        [
          "英語文 ESL 【英語】",
          "301",
          "1節"
        ]
      ],
      "note": "英語與雙語任務"
    },
    {
      "code": "K",
      "name": "教師 K",
      "role": "跨班人文社會",
      "homeroom": "跨班",
      "periods": 7,
      "courses": [
        [
          "國語文 【中文】",
          "101",
          "1節"
        ],
        [
          "國語文 【中文】",
          "102",
          "1節"
        ],
        [
          "國語文 【中文】",
          "201",
          "2節"
        ],
        [
          "彈性 中文閱讀 【中文】",
          "201",
          "1節"
        ],
        [
          "國語文 【中文】",
          "301",
          "2節"
        ]
      ],
      "note": "依附件固定節數"
    },
    {
      "code": "L",
      "name": "教師 L",
      "role": "藝術／國語閱讀",
      "homeroom": "跨班",
      "periods": 12,
      "courses": [
        [
          "國語文 【中文】",
          "101",
          "5節"
        ],
        [
          "國語文 【中文】",
          "102",
          "2節"
        ],
        [
          "彈性 中文閱讀 【中文】",
          "102",
          "1節"
        ],
        [
          "國語文 【中文】",
          "201",
          "1節"
        ],
        [
          "彈性 中文閱讀 【中文】",
          "301",
          "1節"
        ],
        [
          "國語文 【中文】",
          "301",
          "1節"
        ],
        [
          "藝術 音樂 【英語】",
          "301",
          "1節"
        ]
      ],
      "note": "依確認跨科國語與閱讀"
    },
    {
      "code": "M",
      "name": "教師 M",
      "role": "跨班體育／戶外",
      "homeroom": "跨班",
      "periods": 10,
      "courses": [
        [
          "體育 運動技能 【英語】",
          "101",
          "1節"
        ],
        [
          "健康教育 【中英雙語】",
          "101",
          "1節"
        ],
        [
          "體育 戶外合作挑戰 【中英雙語】",
          "102",
          "1節"
        ],
        [
          "健康教育 【中英雙語】",
          "102",
          "1節"
        ],
        [
          "體育 運動技能 【英語】",
          "201",
          "1節"
        ],
        [
          "彈性 冒險反思與發表 【中英雙語】",
          "201",
          "1節"
        ],
        [
          "健康教育 【中英雙語】",
          "201",
          "1節"
        ],
        [
          "體育 戶外合作挑戰 【中英雙語】",
          "301",
          "1節"
        ],
        [
          "體育 運動技能 【英語】",
          "301",
          "1節"
        ],
        [
          "健康教育 【中英雙語】",
          "301",
          "1節"
        ]
      ],
      "note": "依附件固定節數"
    }
  ]
};
  window.REEDS_FIRST_YEAR_STAFFING = plan;

  const style=document.createElement('style');
  style.textContent=`
    .staff-hero{background:linear-gradient(135deg,#253b70,#435aa0);color:#fff;border-radius:18px;padding:24px 28px;margin:8px 0 18px}.staff-hero .kicker{font-size:12px;letter-spacing:.14em;font-weight:800;opacity:.8}#content .staff-hero h2{color:#fff;margin:5px 0}.staff-hero p{margin:0;opacity:.9}
    .staff-overview{display:grid;grid-template-columns:1.45fr 1fr 1fr 1fr;gap:12px;margin-bottom:20px}.staff-stat{position:relative;overflow:hidden;background:#fff;border:1px solid #dbe3ef;border-radius:16px;padding:16px 18px;box-shadow:0 8px 22px rgba(30,55,90,.07)}.staff-stat::after{content:'';position:absolute;right:-20px;bottom:-28px;width:82px;height:82px;border-radius:50%;background:#edf3ff}.staff-stat strong{position:relative;z-index:1;display:block;font-size:30px;color:#243b70;line-height:1}.staff-stat span{position:relative;z-index:1;display:block;margin-top:7px;font-size:12px;color:#64748b}.staff-stat.primary{color:#fff;border:0;background:linear-gradient(135deg,#18376b,#4262ae)}.staff-stat.primary::after{background:rgba(255,255,255,.1);width:120px;height:120px}.staff-stat.primary strong{color:#fff;font-size:40px}.staff-stat.primary span{color:#dce8ff}.staff-stat .breakdown{position:relative;z-index:1;margin-top:9px;font-size:12px;font-weight:750;color:#e7efff}.staff-equation{display:flex;align-items:center;justify-content:space-between;gap:16px;background:#eef4ff;border:1px solid #d6e3fa;border-radius:14px;padding:12px 16px;margin:-6px 0 20px;color:#284472}.staff-equation b{font-size:15px}.staff-equation-note{font-size:12px;color:#66758d;text-align:right}
    .staff-section-title{font-size:17px;font-weight:850;color:#243b70;margin:24px 0 10px}.dual-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}.dual-card{background:#f8fafc;border:1px solid #dbe3ef;border-radius:14px;padding:14px}.dual-card h4{margin:0 0 9px;color:#1e3565}.mentor-line{display:flex;gap:7px;align-items:flex-start;margin-top:7px}.mentor-tag{flex:0 0 auto;padding:3px 7px;border-radius:99px;background:#e5eefc;color:#25447d;font-size:11px;font-weight:800}.mentor-tag.en{background:#e2f6ef;color:#0e6c5c}
    .staff-table-wrap{overflow:auto;border:1px solid #dbe3ef;border-radius:14px}.staff-table{margin:0;font-size:13px;line-height:1.5;min-width:1120px}.staff-table th{background:#243b70;color:#fff}.staff-table td{vertical-align:top;padding:11px}.staff-table tr:nth-child(even) td{background:#f8fafc}.teacher-name{font-weight:850;color:#1e3565}.teacher-code{font-size:11px;color:#718096}.employment{display:inline-block;border-radius:99px;padding:3px 7px;background:#e5eefc;color:#25447d;font-size:11px;font-weight:800}.employment.pt{background:#fff0d5;color:#8a5a00}.period-num{font-size:20px;font-weight:900;color:#0f766e}.course-line{margin-bottom:5px}.course-line b{color:#243b70}.staff-checks{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px}.staff-check{padding:13px;border-radius:12px;background:#eaf8f4;color:#0e6255;font-weight:700}.staff-note{margin-top:14px;background:#fff8e8;border-left:4px solid #e6ad35;padding:12px 14px;color:#714f10}
    @media(max-width:950px){.staff-overview{grid-template-columns:repeat(2,1fr)}.dual-grid,.staff-checks{grid-template-columns:1fr 1fr}.staff-equation{align-items:flex-start;flex-direction:column}.staff-equation-note{text-align:left}}@media(max-width:600px){.staff-overview,.dual-grid,.staff-checks{grid-template-columns:1fr}}
    @media print{.staff-table-wrap{overflow:visible}.staff-table{font-size:10px}.staff-hero{box-shadow:none}}
  `;
  document.head.appendChild(style);
})();

function renderFirstYearStaffing(el){
  const p=REEDS_FIRST_YEAR_STAFFING;
  const esc=v=>String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const total=p.teachers.reduce((sum,t)=>sum+t.periods,0);
  el.innerHTML=`
    <section class="staff-hero"><div class="kicker">YEAR 1 · TEACHING ASSIGNMENT</div><h2>${esc(p.title)}</h2><p>${esc(p.subtitle)}；每班每週35節，每日7節。</p></section>
    <div class="staff-overview"><div class="staff-stat primary"><strong>${p.teachers.length}</strong><span>第一年教師總人數</span><div class="breakdown">4位中文導師＋4位外籍導師＋5位跨班科任</div></div><div class="staff-stat"><strong>8</strong><span>雙導師席次<br>4位中文＋4位外籍</span></div><div class="staff-stat"><strong>5</strong><span>跨班科任教師<br>E、F、K、L、M</span></div><div class="staff-stat"><strong>${total}</strong><span>每週教師主責節次<br>4班 × 35節</span></div></div>
    <div class="staff-equation"><b>編制公式｜13位教師＝8位導師＋5位跨班科任</b><div class="staff-equation-note">依來源分工呈現；來源未列全兼任聘任別與行政職稱。</div></div>
    <div class="staff-section-title">四班雙導師配置</div><div class="dual-grid">${p.classes.map(c=>`<article class="dual-card"><h4>${esc(c.name)}</h4><div class="mentor-line"><span class="mentor-tag">中文導師</span><span>${esc(c.chinese)}</span></div><div class="mentor-line"><span class="mentor-tag en">外籍導師</span><span>${esc(c.english)}</span></div></article>`).join('')}</div>
    <div class="staff-section-title">每位教師分工與固定授課節數</div><div class="staff-table-wrap"><table class="staff-table"><thead><tr><th>教師</th><th>本次分工</th><th>導師班</th><th>週節數</th><th>課別、授課語言、班級與節數</th><th>來源說明</th></tr></thead><tbody>${p.teachers.map(t=>`<tr><td><div class="teacher-name">${esc(t.name)}</div></td><td>${esc(t.role)}</td><td>${esc(t.homeroom)}</td><td><span class="period-num">${t.periods}</span> 節</td><td>${t.courses.map(c=>`<div class="course-line"><b>${esc(c[0])}</b>｜${esc(c[1])}班｜${esc(c[2])}</div>`).join('')}</td><td>${esc(t.note)}</td></tr>`).join('')}</tbody></table></div>
    <div class="staff-checks"><div class="staff-check">✓ 四班各35節，共140節</div><div class="staff-check">✓ A–M均符合固定節數</div><div class="staff-check">✓ 逐教師、逐時段無衝堂</div></div>
    <div class="staff-note"><b>配課說明：</b>每節由一位主責教師獨立授課，教師主責合計 ${total} 節。F跨科自然，L跨科國語與閱讀。週五全天於陽明山，各班獨立授課；交通、集合、行政、備課、午休照護及戶外安全協同人力不計入授課節數。教師可到校時段與場地仍須確認。<br>本土語文／臺灣手語暫列中文導師代碼，須依選修語別與授課資格確認；師資未符合時須安排合格教師替代。<br><b>資料來源：</b>REEDS_四班課表與教師配課_固定節數版.xlsx（四班配課總覽、101／102／201／301班課表）。</div>`;
}

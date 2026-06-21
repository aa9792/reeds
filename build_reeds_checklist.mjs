import fs from "node:fs/promises";
import path from "node:path";
import { SpreadsheetFile, Workbook } from "@oai/artifact-tool";

const root = "C:/Users/aa979/OneDrive/桌面/COWORK/Reeds class";
const outputDir = path.join(root, "outputs", "reeds_checklist");
const outputPath = path.join(outputDir, "睿思實驗教育機構_115-116籌備工作檢核表.xlsx");

const statusValues = ["待開始", "進行中", "待確認", "已完成", "延後", "需修正"];
const priorityValues = ["高", "中", "低"];

const phases = [
  ["第一期", "115年6月-7月", "計畫修正與立案前置期", "完成審議會修正意見、取得計畫核准、啟動核心行政編組"],
  ["第二期", "115年8月-9月", "硬體發包、團隊招募與理念倡議期", "空間合法施工、啟動第一線教職員徵選、對外發聲、確立內部規章"],
  ["第三期", "115年10月-11月", "機構立案、硬體施工期與設備建置期", "硬體期中查驗、教學設備採購、教職員錄取與初步共識"],
  ["第四期", "115年12月-116年1月", "寒假試辦與培訓啟動期", "透過營隊測試課程、新進師資共識培訓、硬體完工"],
  ["第五期", "116年2月-3月", "機構立案與正式招生期", "遞交立案申請、全面啟動招生作業、設備進駐"],
  ["第六期", "116年4月-5月", "面談錄取與教案深化期", "確認首屆學生名單、深化親師生關係、課程完備"],
  ["第七期", "116年6月-7月", "暑期營隊與開學整備期", "暑假銜接、行政系統壓力測試、準備就緒"],
  ["第八期", "116年8月", "開學準備與正式啟航期", "萬事具備、激勵團隊士氣、順利開學"],
];

const tasks = [
  ["P1-01", "第一期", "計畫修正與核准", "彙整新北市非學審議會委員意見", "完成6月2日委員意見逐項回覆與修正對照表。", "修正對照表、會議紀錄", "高", "計畫主持人/行政籌備"],
  ["P1-02", "第一期", "計畫修正與核准", "完成計畫書表件1至表件8文字修正補充", "確認實驗教育理念、課程、行政與場地資料一致，並於期限內函報教育局。", "修正版計畫書、函文紀錄", "高", "計畫主持人/教務籌備"],
  ["P1-03", "第一期", "計畫修正與核准", "追蹤7月份正式核准進度", "建立追蹤表，記錄承辦窗口、補件項目與核准狀態。", "教育局往來紀錄、追蹤表", "高", "行政籌備"],
  ["P1-04", "第一期", "組織與資金", "建立核心籌備團隊", "由計畫主持人召集核心籌備團隊，明確分工與每週回報節奏。", "分工表、例會紀錄", "高", "計畫主持人"],
  ["P1-05", "第一期", "組織與資金", "確認表件5初期資金如期到位", "完成入帳確認，並開設機構籌備處專戶或指定管理帳戶。", "入帳證明、專戶資料", "高", "財務籌備"],
  ["P1-06", "第一期", "場地與法規", "啟動教學場地與室內裝修設計圖規劃", "依表件3、表件4場地內容，完成空間配置與裝修設計初稿。", "設計圖、需求清單", "高", "總務/建築設計窗口"],
  ["P1-07", "第一期", "制度文件", "草擬組織章程與聘任薪酬制度", "完成組織章程草案、教職員工聘任與敘薪辦法草案。", "章程草案、薪酬辦法草案", "中", "行政籌備/人事"],

  ["P2-01", "第二期", "人員招募", "發布第一階段教師與行政人員甄選簡章", "依表件2師資規劃發布學務、教務、總務與教師甄選簡章。", "甄選簡章、公告截圖", "高", "人事/教務"],
  ["P2-02", "第二期", "人員招募", "辦理履歷篩選、理念面談與試教審查", "建立評分規準，確認候選人時間投入、教育理念與機構理念契合。", "評分表、面談紀錄、試教紀錄", "高", "人事/教務"],
  ["P2-03", "第二期", "營隊籌備", "規劃116年1月寒假營隊與10月宣傳文宣", "共同構思寒假營隊主題，並於115年10月推出營隊活動文宣。", "營隊企劃、文宣稿", "中", "教務/招生行銷"],
  ["P2-04", "第二期", "場地與法規", "完成室內裝修設計圖送市府審查", "如需變更使用執照或室內裝修許可，確認送件與補件流程。", "送審收件證明、補件紀錄", "高", "總務/建築設計窗口"],
  ["P2-05", "第二期", "場地與法規", "取得裝修施工許可並正式發包動工", "許可取得後完成承包商遴選、合約簽訂與施工時程表。", "施工許可、合約、工期表", "高", "總務"],
  ["P2-06", "第二期", "理念倡議", "建立官方網站與社群平台", "施工期間先建立官方網站與社群平台，形成固定對外溝通管道。", "網站、社群頁面、內容排程", "中", "招生行銷/資訊"],
  ["P2-07", "第二期", "理念倡議", "舉辦首場教育理念分享會", "以非正式招生為定位，傳遞核心價值與課程特色，收集家長回饋。", "分享會簡報、簽到表、回饋表", "中", "招生行銷/教務"],
  ["P2-08", "第二期", "制度文件", "定案行政管理規章與財務報支流程", "召開籌備會議，完成行政管理規章、財務報支流程與學生學籍管理辦法。", "制度文件、會議決議", "高", "行政/財務/教務"],

  ["P3-01", "第三期", "人員招募", "完成第一線教職員面試與錄取通知", "完成第一線教職員錄取通知並簽訂聘約。", "錄取名冊、聘約", "高", "人事"],
  ["P3-02", "第三期", "人員培訓", "安排準教職員實體相見歡或線上交流", "寄送機構核心理念先修讀物，作為寒假培訓前置準備。", "交流紀錄、先修資料清單", "中", "教務/人事"],
  ["P3-03", "第三期", "場地與法規", "辦理裝潢工程期中驗收", "檢視消防管線、無障礙設施與緊急逃生動線是否確實按圖施工。", "期中驗收表、照片紀錄", "高", "總務/工務"],
  ["P3-04", "第三期", "設備採購", "盤點第一階段教學設備採購清單", "列出課桌椅、實驗器材、資訊軟硬體設備、圖書等採購項目。", "採購清單、預算表", "高", "總務/教務/資訊"],
  ["P3-05", "第三期", "設備採購", "完成教學設備廠商比價與採購", "依採購清單進行廠商比價、議價與下單。", "比價單、採購單", "中", "總務/財務"],
  ["P3-06", "第三期", "立案申請", "備妥機構立案與實地會勘文件", "備妥計畫核准函、建築物公安/消防合格證明、負責人及法人證明等表件6、7、8文件。", "立案文件包、檢核清單", "高", "行政籌備"],
  ["P3-07", "第三期", "立案申請", "向教育局申請機構立案與實地會勘", "最遲年底前完成立案申請，利於後續營隊與招生活動辦理。", "申請收件證明、會勘通知", "高", "行政籌備"],

  ["P4-01", "第四期", "營隊試辦", "辦理2-3梯次睿思特色冬令營", "依低/中/高年級分齡辦理，作為教案實戰測試與招生前哨站。", "營隊名冊、課表、成果紀錄", "高", "教務/招生行銷"],
  ["P4-02", "第四期", "招生宣傳", "將營隊小成果轉化為宣傳素材", "透過課程小成果展宣傳，讓家長與學生親身體驗教學模式。", "照片影片、社群貼文、成果展紀錄", "中", "招生行銷/教務"],
  ["P4-03", "第四期", "師資培訓", "辦理第一階段新進教職員寒假共識營", "聚焦實驗教育哲學、跨領域協同教學實作、班級經營與非暴力溝通。", "培訓課表、簽到表、回饋表", "高", "教務/人事"],
  ["P4-04", "第四期", "場地與法規", "完成裝潢內部總驗收", "向市府申請並取得建築物公安及消防合格證明，作為立案備妥要件。", "總驗收表、公安/消防證明", "高", "總務"],

  ["P5-01", "第五期", "立案申請", "遞交正式立案申請", "完成申請送件，追蹤教育局補件、會勘與審查進度。", "申請文件、收件證明、追蹤表", "高", "行政籌備"],
  ["P5-02", "第五期", "招生作業", "舉辦大型正式招生說明會", "詳細說明入學條件、課程架構與收費標準，開放家長學生預約入學面談。", "說明會簡報、簽到表、預約名單", "高", "招生行銷/教務"],
  ["P5-03", "第五期", "設備建置", "完成教學設備、辦公家具與伺服器進駐", "所有採購設備到位，完成安裝測試。", "設備驗收表、資產清冊", "高", "總務/資訊"],

  ["P6-01", "第六期", "面談錄取", "辦理新生入學家庭面談", "確認家長教養理念與機構契合，建立面談紀錄。", "面談紀錄、評估表", "高", "招生行銷/教務"],
  ["P6-02", "第六期", "面談錄取", "完成錄取通知、報到手續與學籍造冊", "發送錄取通知，完成新生報到與學籍資料建檔。", "錄取名冊、報到資料、學籍清冊", "高", "行政/招生"],
  ["P6-03", "第六期", "師資培訓", "辦理第二階段教師培訓與學生個案討論", "依已錄取學生特質進行個案討論，完成第一學期各領域教案細部編寫與審查。", "培訓紀錄、個案討論表、教案審查表", "高", "教務"],
  ["P6-04", "第六期", "制度文件", "桌上推演與試運轉各項校務流程", "針對請假通報、採購流程、意外災害SOP等流程進行演練與修正。", "演練紀錄、修正版SOP", "高", "行政/總務/教務"],

  ["P7-01", "第七期", "營隊銜接", "辦理暑期先修夏令營", "針對已報到新生辦理暑期先修夏令營，也可適度對外開放。", "營隊名冊、課表、活動紀錄", "中", "教務/招生"],
  ["P7-02", "第七期", "親師生關係", "建立同儕關係與親師默契", "透過營隊讓學生熟悉機構環境，建立親師溝通節奏。", "觀察紀錄、親師溝通紀錄", "中", "教務/導師群"],
  ["P7-03", "第七期", "系統建置", "校務行政系統與親師溝通APP上線", "完成帳號建置、權限設定與壓力測試。", "系統測試表、帳號清冊", "高", "資訊/行政"],
  ["P7-04", "第七期", "開學整備", "完成開學前最終安全校驗", "完成安全檢查、飲水機水質檢測、全面清潔消毒與教具歸位。", "安全檢查表、水質檢測、清消紀錄", "高", "總務"],

  ["P8-01", "第八期", "開學準備", "全體教職員回到崗位", "完成全校性模擬開學演練，包含上下學動線、午餐動線與防災演練。", "演練紀錄、修正清單", "高", "行政/全體教職員"],
  ["P8-02", "第八期", "家長活動", "發送正式開學通知與學用品清單", "舉辦開學前親師座談會，解答最後疑慮並推選家長代表。", "通知單、用品清單、座談會紀錄", "高", "行政/導師群"],
  ["P8-03", "第八期", "團隊凝聚", "舉辦教職員開學誓師大會", "確認每一位夥伴狀態皆已準備就緒。", "誓師大會紀錄、待辦清單", "中", "校長室/人事"],
  ["P8-04", "第八期", "正式開學", "正式啟動機構營運", "以迎新活動迎接第一屆睿思學生，正式啟動機構營運。", "開學活動紀錄、營運啟動紀錄", "高", "校長室/全體教職員"],
];

const phaseEndDates = {
  "第一期": new Date("2026-07-31"),
  "第二期": new Date("2026-09-30"),
  "第三期": new Date("2026-11-30"),
  "第四期": new Date("2027-01-31"),
  "第五期": new Date("2027-03-31"),
  "第六期": new Date("2027-05-31"),
  "第七期": new Date("2027-07-31"),
  "第八期": new Date("2027-08-31"),
};

await fs.mkdir(outputDir, { recursive: true });

const workbook = Workbook.create();
workbook.comments.setSelf({ displayName: "User" });

const cover = workbook.worksheets.add("使用說明");
const summary = workbook.worksheets.add("階段總覽");
const checklist = workbook.worksheets.add("工作檢核表");
const revisions = workbook.worksheets.add("修正紀錄");
const source = workbook.worksheets.add("原始計畫摘要");
const lists = workbook.worksheets.add("清單");

for (const sheet of [cover, summary, checklist, revisions, source, lists]) {
  sheet.showGridLines = false;
}

// Lists for validation
lists.getRange("A1").values = [["狀態"]];
lists.getRangeByIndexes(1, 0, statusValues.length, 1).values = statusValues.map(v => [v]);
lists.getRange("B1").values = [["優先"]];
lists.getRangeByIndexes(1, 1, priorityValues.length, 1).values = priorityValues.map(v => [v]);
lists.getRange("A1:B1").format = { fill: "#143451", font: { bold: true, color: "#FFFFFF" } };
lists.getRange("A:B").format.columnWidth = 14;

// Cover
cover.getRange("A1:H1").merge();
cover.getRange("A1").values = [["睿思實驗教育機構 115-116 籌備工作檢核表"]];
cover.getRange("A2:H2").merge();
cover.getRange("A2").values = [["來源：睿思實驗教育機構 115-116籌備計畫0617.pdf｜用途：籌備會議追蹤、風險檢核、修正紀錄"]];
cover.getRange("A4:H4").merge();
cover.getRange("A4").values = [["使用方式"]];
cover.getRange("A5:H10").values = [
  ["1", "每週或雙週召開籌備會議前，先更新「工作檢核表」的狀態、負責人、預定完成日與風險。", "", "", "", "", "", ""],
  ["2", "遇到法規、場地、招生、師資或預算變動時，在「修正紀錄」留下決策依據與後續追蹤。", "", "", "", "", "", ""],
  ["3", "「階段總覽」會依工作檢核表狀態自動統計完成率，便於掌握八期推進節奏。", "", "", "", "", "", ""],
  ["4", "建議把佐證資料連結、雲端資料夾或文件編號填入「佐證資料/產出」欄。", "", "", "", "", "", ""],
  ["5", "狀態建議：待開始、進行中、待確認、已完成、延後、需修正。", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
];
cover.getRange("A12:H12").merge();
cover.getRange("A12").values = [["會議快速檢核問題"]];
cover.getRange("A13:H18").values = [
  ["治理", "本期是否有明確決策者、負責人與回報節奏？", "", "", "", "", "", ""],
  ["法規", "立案、場地、公安、消防、室裝與會勘是否有明確文件與時程？", "", "", "", "", "", ""],
  ["招生", "家長溝通、說明會、面談、錄取與報到資料是否能銜接？", "", "", "", "", "", ""],
  ["課程", "營隊、教案、師培與正式課程是否形成可驗證成果？", "", "", "", "", "", ""],
  ["營運", "行政系統、財務流程、採購、SOP與開學動線是否已試運轉？", "", "", "", "", "", ""],
  ["風險", "有哪些項目需補件、延後、增預算或改負責人？", "", "", "", "", "", ""],
];
cover.getRange("A1").format = { fill: "#143451", font: { bold: true, color: "#FFFFFF", size: 18 } };
cover.getRange("A2").format = { fill: "#EAF2F0", font: { color: "#36515F" } };
cover.getRange("A4").format = { fill: "#EE5540", font: { bold: true, color: "#FFFFFF" } };
cover.getRange("A12").format = { fill: "#6F8F72", font: { bold: true, color: "#FFFFFF" } };
cover.getRange("A5:H18").format = { wrapText: true, borders: { preset: "inside", style: "thin", color: "#D9E1DF" } };
cover.getRange("A1:H1").format.rowHeight = 30;
cover.getRange("A2:H2").format.rowHeight = 24;
cover.getRange("A4:H4").format.rowHeight = 24;
cover.getRange("A12:H12").format.rowHeight = 24;
cover.getRange("A5:H18").format.rowHeight = 23;
cover.getRange("A:H").format.columnWidth = 18;
cover.getRange("B:B").format.columnWidth = 80;

// Summary
summary.getRange("A1:H1").merge();
summary.getRange("A1").values = [["階段總覽"]];
summary.getRange("A3:H3").values = [["階段", "期程", "階段名稱", "核心目標", "任務數", "已完成", "需關注", "完成率"]];
summary.getRangeByIndexes(3, 0, phases.length, 4).values = phases;
summary.getRange("E4").formulas = [["=COUNTIF('工作檢核表'!$B$2:$B$200,A4)"]];
summary.getRange("E4:E11").fillDown();
summary.getRange("F4").formulas = [["=COUNTIFS('工作檢核表'!$B$2:$B$200,A4,'工作檢核表'!$K$2:$K$200,\"已完成\")"]];
summary.getRange("F4:F11").fillDown();
summary.getRange("G4").formulas = [["=COUNTIFS('工作檢核表'!$B$2:$B$200,A4,'工作檢核表'!$K$2:$K$200,\"需修正\")+COUNTIFS('工作檢核表'!$B$2:$B$200,A4,'工作檢核表'!$K$2:$K$200,\"延後\")"]];
summary.getRange("G4:G11").fillDown();
summary.getRange("H4").formulas = [["=IF(E4=0,0,F4/E4)"]];
summary.getRange("H4:H11").fillDown();
summary.getRange("A1").format = { fill: "#143451", font: { bold: true, color: "#FFFFFF", size: 16 } };
summary.getRange("A3:H3").format = { fill: "#2F5D62", font: { bold: true, color: "#FFFFFF" } };
summary.getRange("A4:H11").format = { wrapText: true, borders: { preset: "inside", style: "thin", color: "#D9E1DF" } };
summary.getRange("A1:H1").format.rowHeight = 28;
summary.getRange("A3:H3").format.rowHeight = 24;
summary.getRange("A4:H11").format.rowHeight = 44;
summary.getRange("H4:H11").format.numberFormat = "0%";
summary.getRange("A:H").format.columnWidth = 15;
summary.getRange("C:C").format.columnWidth = 28;
summary.getRange("D:D").format.columnWidth = 46;
summary.freezePanes.freezeRows(3);

// Checklist
const headers = ["ID", "階段", "期程", "工作類別", "檢核項目", "具體檢核重點/完成標準", "佐證資料/產出", "優先", "負責單位/人", "預定完成日", "狀態", "完成日", "風險/需修正事項", "修正紀錄/下一步"];
checklist.getRangeByIndexes(0, 0, 1, headers.length).values = [headers];
const taskRows = tasks.map(t => {
  const phase = phases.find(p => p[0] === t[1]);
  return [
    t[0], t[1], phase[1], t[2], t[3], t[4], t[5], t[6], t[7],
    phaseEndDates[t[1]], "待開始", null, "", ""
  ];
});
checklist.getRangeByIndexes(1, 0, taskRows.length, headers.length).values = taskRows;
const checklistLastRow = taskRows.length + 1;
checklist.tables.add(`A1:N${checklistLastRow}`, true, "PrepChecklist");
checklist.getRange("A1:N1").format = { fill: "#143451", font: { bold: true, color: "#FFFFFF" } };
checklist.getRange(`A2:N${checklistLastRow}`).format = { wrapText: true, borders: { preset: "inside", style: "thin", color: "#E5E7EB" } };
checklist.getRange("A1:N1").format.rowHeight = 25;
checklist.getRange(`A2:N${checklistLastRow}`).format.rowHeight = 36;
checklist.getRange(`J2:J${checklistLastRow}`).format.numberFormat = "yyyy-mm-dd";
checklist.getRange(`L2:L${checklistLastRow}`).format.numberFormat = "yyyy-mm-dd";
checklist.getRange(`H2:H${checklistLastRow}`).dataValidation = { rule: { type: "list", values: priorityValues } };
checklist.getRange(`K2:K${checklistLastRow}`).dataValidation = { rule: { type: "list", values: statusValues } };
checklist.getRange("A:A").format.columnWidth = 10;
checklist.getRange("B:B").format.columnWidth = 10;
checklist.getRange("C:C").format.columnWidth = 17;
checklist.getRange("D:D").format.columnWidth = 14;
checklist.getRange("E:E").format.columnWidth = 30;
checklist.getRange("F:F").format.columnWidth = 52;
checklist.getRange("G:G").format.columnWidth = 28;
checklist.getRange("H:H").format.columnWidth = 9;
checklist.getRange("I:I").format.columnWidth = 18;
checklist.getRange("J:L").format.columnWidth = 14;
checklist.getRange("M:N").format.columnWidth = 34;
checklist.freezePanes.freezeRows(1);
checklist.freezePanes.freezeColumns(2);
checklist.getRange(`K2:K${checklistLastRow}`).conditionalFormats.add("containsText", { text: "已完成", format: { fill: "#DCFCE7", font: { color: "#166534" } } });
checklist.getRange(`K2:K${checklistLastRow}`).conditionalFormats.add("containsText", { text: "進行中", format: { fill: "#DBEAFE", font: { color: "#1D4ED8" } } });
checklist.getRange(`K2:K${checklistLastRow}`).conditionalFormats.add("containsText", { text: "需修正", format: { fill: "#FEE2E2", font: { color: "#B91C1C" } } });
checklist.getRange(`K2:K${checklistLastRow}`).conditionalFormats.add("containsText", { text: "延後", format: { fill: "#FEF3C7", font: { color: "#92400E" } } });
checklist.getRange(`H2:H${checklistLastRow}`).conditionalFormats.add("containsText", { text: "高", format: { fill: "#FEE2E2", font: { bold: true, color: "#B91C1C" } } });

// Revisions
revisions.getRange("A1:I1").values = [["日期", "階段", "關聯ID", "變更/問題描述", "影響面向", "決議", "負責人", "追蹤期限", "結案狀態"]];
revisions.getRange("A2:I21").values = Array.from({ length: 20 }, () => ["", "", "", "", "", "", "", "", ""]);
revisions.tables.add("A1:I21", true, "RevisionLog");
revisions.getRange("A1:I1").format = { fill: "#143451", font: { bold: true, color: "#FFFFFF" } };
revisions.getRange("A:I").format.columnWidth = 16;
revisions.getRange("D:D").format.columnWidth = 42;
revisions.getRange("F:F").format.columnWidth = 42;
revisions.getRange("A:A").format.numberFormat = "yyyy-mm-dd";
revisions.getRange("H:H").format.numberFormat = "yyyy-mm-dd";
revisions.getRange("I2:I21").dataValidation = { rule: { type: "list", values: ["追蹤中", "已結案", "延後", "需升級決策"] } };
revisions.freezePanes.freezeRows(1);

// Source summary
source.getRange("A1:D1").values = [["階段", "期程", "主題", "原始計畫重點摘要"]];
source.getRangeByIndexes(1, 0, phases.length, 4).values = phases;
source.tables.add("A1:D9", true, "SourceSummary");
source.getRange("A1:D1").format = { fill: "#143451", font: { bold: true, color: "#FFFFFF" } };
source.getRange("A2:D9").format = { wrapText: true, borders: { preset: "inside", style: "thin", color: "#E5E7EB" } };
source.getRange("A:A").format.columnWidth = 10;
source.getRange("B:B").format.columnWidth = 18;
source.getRange("C:C").format.columnWidth = 28;
source.getRange("D:D").format.columnWidth = 70;
source.freezePanes.freezeRows(1);

const rendered = await workbook.render({ sheetName: "工作檢核表", range: "A1:N18", scale: 1, format: "png" });
await fs.writeFile(path.join(outputDir, "工作檢核表_預覽.png"), new Uint8Array(await rendered.arrayBuffer()));

const inspect = await workbook.inspect({
  kind: "table",
  range: "階段總覽!A1:H11",
  tableMaxRows: 12,
  tableMaxCols: 8,
  maxChars: 5000
});
console.log(inspect.ndjson);
const errors = await workbook.inspect({
  kind: "match",
  searchTerm: "#REF!|#DIV/0!|#VALUE!|#NAME\\?|#N/A",
  options: { useRegex: true, maxResults: 100 },
  maxChars: 2000
});
console.log(errors.ndjson);

const xlsx = await SpreadsheetFile.exportXlsx(workbook);
await xlsx.save(outputPath);
console.log(outputPath);

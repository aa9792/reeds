const SPREADSHEET_ID = '10rzQQQj-BYZ1hJAilPTVlDyfUYfuJKj1RwUtIv9a2pA';
const SHEET_NAME = '工作檢核表';
const STATUS_DONE = '已完成';
const STATUS_TODO = '待開始';

const HEADER_NAMES = {
  id: 'ID',
  phase: '階段',
  period: '期程',
  category: '工作類別',
  item: '檢核項目',
  criteria: '具體檢核重點/完成標準',
  evidence: '佐證資料/產出',
  priority: '優先',
  owner: '負責單位/人',
  due: '預定完成日',
  status: '狀態',
  completedAt: '完成日',
  risk: '風險/需修正事項',
  note: '修正紀錄/下一步',
  updatedAt: '最後更新'
};

function doGet() {
  return jsonResponse({ ok: true, rows: readRows() });
}

function doPost(e) {
  try {
    const body = JSON.parse((e.postData && e.postData.contents) || '{}');
    if (body.action === 'reset') {
      return jsonResponse({ ok: true, rows: resetRows() });
    }
    if (body.action === 'update') {
      return jsonResponse({ ok: true, row: updateRow(body) });
    }
    return jsonResponse({ ok: false, error: 'Unsupported action' });
  } catch (err) {
    return jsonResponse({ ok: false, error: err.message || String(err) });
  }
}

function getSheet() {
  return SpreadsheetApp.openById(SPREADSHEET_ID).getSheetByName(SHEET_NAME);
}

function headerMap(sheet) {
  const headers = sheet.getRange(1, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
  const map = {};
  headers.forEach((header, index) => {
    if (header) map[header.trim()] = index + 1;
  });
  return map;
}

function readRows() {
  const sheet = getSheet();
  const map = headerMap(sheet);
  const lastRow = sheet.getLastRow();
  if (lastRow < 2) return [];
  const values = sheet.getRange(2, 1, lastRow - 1, sheet.getLastColumn()).getDisplayValues();
  return values
    .filter(row => cell(row, map, HEADER_NAMES.id))
    .map(row => rowObject(row, map));
}

function updateRow(body) {
  const sheet = getSheet();
  const map = headerMap(sheet);
  const idCol = requiredColumn(map, HEADER_NAMES.id);
  const ids = sheet.getRange(2, idCol, Math.max(sheet.getLastRow() - 1, 1), 1).getDisplayValues().flat();
  const offset = ids.findIndex(id => id === body.id);
  if (offset < 0) throw new Error('Cannot find checklist ID: ' + body.id);

  const rowNumber = offset + 2;
  const done = body.done === true || body.done === 'true';
  setIfColumn(sheet, map, HEADER_NAMES.status, rowNumber, done ? STATUS_DONE : STATUS_TODO);
  setIfColumn(sheet, map, HEADER_NAMES.completedAt, rowNumber, done ? (body.checkedAt || todayISO()) : '');
  setIfColumn(sheet, map, HEADER_NAMES.note, rowNumber, body.note || '');
  setIfColumn(sheet, map, HEADER_NAMES.updatedAt, rowNumber, new Date());

  const row = sheet.getRange(rowNumber, 1, 1, sheet.getLastColumn()).getDisplayValues()[0];
  return rowObject(row, headerMap(sheet));
}

function resetRows() {
  const sheet = getSheet();
  const map = headerMap(sheet);
  const lastRow = sheet.getLastRow();
  for (let rowNumber = 2; rowNumber <= lastRow; rowNumber++) {
    setIfColumn(sheet, map, HEADER_NAMES.status, rowNumber, STATUS_TODO);
    setIfColumn(sheet, map, HEADER_NAMES.completedAt, rowNumber, '');
    setIfColumn(sheet, map, HEADER_NAMES.note, rowNumber, '');
    setIfColumn(sheet, map, HEADER_NAMES.updatedAt, rowNumber, new Date());
  }
  return readRows();
}

function rowObject(row, map) {
  const status = cell(row, map, HEADER_NAMES.status);
  return {
    id: cell(row, map, HEADER_NAMES.id),
    phase: cell(row, map, HEADER_NAMES.phase),
    period: cell(row, map, HEADER_NAMES.period),
    category: cell(row, map, HEADER_NAMES.category),
    item: cell(row, map, HEADER_NAMES.item),
    criteria: cell(row, map, HEADER_NAMES.criteria),
    evidence: cell(row, map, HEADER_NAMES.evidence),
    priority: cell(row, map, HEADER_NAMES.priority),
    owner: cell(row, map, HEADER_NAMES.owner),
    due: cell(row, map, HEADER_NAMES.due),
    status,
    done: status === STATUS_DONE,
    checkedAt: cell(row, map, HEADER_NAMES.completedAt),
    note: cell(row, map, HEADER_NAMES.note) || cell(row, map, HEADER_NAMES.risk)
  };
}

function cell(row, map, header) {
  const index = map[header];
  return index ? row[index - 1] || '' : '';
}

function requiredColumn(map, header) {
  if (!map[header]) throw new Error('Missing column: ' + header);
  return map[header];
}

function setIfColumn(sheet, map, header, rowNumber, value) {
  if (map[header]) sheet.getRange(rowNumber, map[header]).setValue(value);
}

function todayISO() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), 'yyyy-MM-dd');
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}

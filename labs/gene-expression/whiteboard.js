import { createWhiteboardInk } from './whiteboard-ink.js';
import { createBoardStore, BOARD_SCHEMA, MODEL_REVISION } from './whiteboard-store.mjs';
import { setLanguage } from './locale.js';

const icons = {
  model:'<path d="m12 3 8 5v8l-8 5-8-5V8zM4 8l8 5 8-5M12 13v8"/>',
  pen:'<path d="m4 20 4-1L20 7l-3-3L5 16zM14 7l3 3"/>',
  highlighter:'<path d="m7 15 7-11 7 5-8 10zM7 15l-4 5h9l1-1M14 4l7 5"/>',
  eraser:'<path d="m4 13 9-10 8 8-9 10H9zM8 9l8 8M12 21h9"/>',
  text:'<path d="M4 5h16M12 5v15M8 20h8M4 5v3M20 5v3"/>',
  line:'<path d="m5 19 14-14"/><circle cx="5" cy="19" r="1"/><circle cx="19" cy="5" r="1"/>',
  arrow:'<path d="m4 20 16-16M9 4h11v11"/>',
  undo:'<path d="M8 5 3 10l5 5M3 10h11a6 6 0 0 1 0 12" transform="translate(0 -2)"/>',
  redo:'<path d="m16 5 5 5-5 5m5-5H10a6 6 0 0 0 0 12" transform="translate(0 -2)"/>',
};
const svg = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${icons[name]||''}</svg>`;
const tools = [['model','模型'],['pen','画笔'],['highlighter','荧光笔'],['eraser','橡皮擦'],['text','文字'],['line','直线'],['arrow','箭头']];
const colors = [['#253e38','墨绿'],['#bc4c45','朱红'],['#2d6dba','蓝色'],['#b78316','金黄'],['#8050a0','紫色'],['#49855c','草绿']];
const clone = value => structuredClone(value);
const timestamp = value => typeof value === 'number' ? value : Date.parse(value) || 0;
const boardLanguage = () => document.documentElement.lang === 'en' ? 'en' : 'zh';
const boardCopy = {
  zh: {
    title:'课堂白板',pages:'本地板书',pagesCompact:'板书',exit:'返回教学',exitCompact:'返回',language:'界面语言',canvas:'屏幕板书画布',view:'模型视角',zoomIn:'放大模型',zoomOut:'缩小模型',reset:'视角复位',qualityOn:'轻量：开',qualityOff:'轻量：关',closeLibrary:'收起板书列表',libraryDescription:'每页对应一个冻结时刻。打开时同步恢复模型。',export:'导出当前页备份 ↓',toolbar:'课堂板书工具',modes:'操作模式',palette:'笔迹颜色',width:'粗细',thin:'细',medium:'中',thick:'粗',undo:'撤销',redo:'重做',clear:'清空本页',localOnly:'仅保存在当前浏览器',localNote:'仅保存在当前浏览器，清理数据或更换设备可能丢失。',clearTitle:'清空这一页的板书？',clearDescription:'只清除当前页的笔迹和文字，其他教学步骤的板书会保留。清空后可以撤销。',keep:'保留板书',textTitle:'添加课堂文字',textLabel:'板书内容',textPlaceholder:'输入要讲解的关键词或一句话',cancel:'取消',placeText:'放到白板',frozen:'已冻结',returnPaused:'返回 {title}，保持暂停',modelHint:'模型模式 · 单指旋转，双指缩放与平移；鼠标滚轮缩放，右键平移',eraserHint:'橡皮擦 · 按整笔擦除，撤销可恢复',textHint:'文字模式 · 点击空白处添加，点击已有文字编辑',drawHint:'板书模式 · 单指或触控笔写画，模型已锁定',unnamed:'未命名板书',currentPage:'当前页',restoreMoment:'恢复此时刻',incompatiblePage:'版本不兼容 · 原数据已保留',pageUnavailable:'此页暂时不能恢复，原数据已保留。',modelIncompatible:'模型版本不兼容，未切换当前板书。',restored:'已恢复「{title}」的模型与板书',restoredView:'已恢复板书与白板视角',openFailed:'白板暂时无法打开，请重试',inkLimit:'当前页笔迹较多，请先导出或新建板书。',saved:'已保存到本机',saving:'正在保存…',saveFailed:'暂时无法保存',
    tools:['模型','画笔','荧光笔','橡皮擦','文字','直线','箭头'],colors:['墨绿','朱红','蓝色','金黄','紫色','草绿'],
  },
  en: {
    title:'Classroom whiteboard',pages:'Local boards',pagesCompact:'Boards',exit:'Return to lesson',exitCompact:'Back',language:'Interface language',canvas:'Whiteboard drawing canvas',view:'Model view',zoomIn:'Zoom in on model',zoomOut:'Zoom out from model',reset:'Reset view',qualityOn:'Lite mode: on',qualityOff:'Lite mode: off',closeLibrary:'Close board list',libraryDescription:'Each page captures a frozen moment. Opening one restores the model too.',export:'Export current page backup ↓',toolbar:'Whiteboard tools',modes:'Tool mode',palette:'Ink color',width:'Stroke width',thin:'Thin',medium:'Medium',thick:'Thick',undo:'Undo',redo:'Redo',clear:'Clear this page',localOnly:'Saved in this browser only',localNote:'Saved in this browser only. Clearing site data or changing devices may erase it.',clearTitle:'Clear this page?',clearDescription:'Only strokes and text on this page will be removed. Boards for other lesson steps remain. You can undo the clear.',keep:'Keep board',textTitle:'Add text to the board',textLabel:'Board text',textPlaceholder:'Enter a keyword or short explanation',cancel:'Cancel',placeText:'Add to board',frozen:'Frozen',returnPaused:'Return to {title}, still paused',modelHint:'Model mode · One finger rotates; two fingers zoom and pan. Mouse wheel zooms; right drag pans.',eraserHint:'Eraser · Removes whole strokes; undo can restore them',textHint:'Text mode · Tap empty space to add text or existing text to edit',drawHint:'Drawing mode · Draw with a finger or stylus; model rotation is locked',unnamed:'Untitled board',currentPage:'Current page',restoreMoment:'Restore this moment',incompatiblePage:'Incompatible version · Original data preserved',pageUnavailable:'This page cannot be restored right now. The original data is preserved.',modelIncompatible:'Model version is incompatible. The current board was not changed.',restored:'Restored model and board for “{title}”',restoredView:'Board and camera view restored',openFailed:'Whiteboard could not open. Please try again.',inkLimit:'This page has many strokes. Export it or start another board.',saved:'Saved locally',saving:'Saving…',saveFailed:'Unable to save right now',
    tools:['Model','Pen','Highlighter','Eraser','Text','Line','Arrow'],colors:['Dark green','Vermilion','Blue','Gold','Purple','Grass green'],
  },
};
const boardStepNames = {
  '认识 DNA':'Explore DNA','转录':'Transcription','出核':'RNA export','翻译':'Translation','序列对照':'Sequence comparison',
  '当前基因的一条链作为模板':'One strand of this gene serves as the template',
  '通过核孔，进入细胞质':'Through a nuclear pore into the cytoplasm',
  '五个残基，六个读取单位':'Five residues, six read units',
  '寻找指定起始位置':'Find the specified start site','起始 tRNA 进入 P 位':'Initiator tRNA enters the P site',
  '大小亚基组成起始复合体':'The subunits form an initiation complex','UAA 进入 A 位':'UAA enters the A site',
  '释放因子识别终止密码子':'A release factor recognizes the stop codon',
  '释放五个残基组成的多肽':'Release the five-residue polypeptide',
  '核糖体相关组分解离':'Ribosomal components dissociate',
  '示例多肽已经形成并释放':'The example polypeptide is formed and released',
  '形成肽键，肽链转移到 A 位':'A peptide bond forms; the chain transfers to the A site',
  '前进一个密码子，进入下一轮':'Advance one codon to the next cycle',
};
function displayBoardTitle(title) {
  let value = String(title || '');
  if (boardLanguage() === 'en') {
    for (const [zh,en] of Object.entries(boardStepNames)) value=value.replaceAll(zh,en);
    return value.replace(/第 (\d+) 个核苷酸/g,'Nucleotide $1')
      .replace(/(\w+) 的 tRNA 进入 A 位/g,'$1 tRNA enters the A site')
      .replace(/密码子 ([AUGC]+) 与反密码子配对/g,'Codon $1 pairs with its anticodon');
  }
  for (const [zh,en] of Object.entries(boardStepNames)) value=value.replaceAll(en,zh);
  return value.replace(/Nucleotide (\d+)/g,'第 $1 个核苷酸')
    .replace(/(\w+) tRNA enters the A site/g,'$1 的 tRNA 进入 A 位')
    .replace(/Codon ([AUGC]+) pairs with its anticodon/g,'密码子 $1 与反密码子配对');
}

export function createWhiteboard({ getScene, onFreeze, onRestore, onExit, trigger }) {
  const root=document.createElement('section');root.id='whiteboard';root.className='wb-shell';root.hidden=true;
  root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-labelledby','wb-title');
  root.innerHTML=`
    <header class="wb-header"><div class="wb-heading"><span class="wb-brand" aria-hidden="true">✎</span><div><h2 id="wb-title">课堂白板</h2><p id="wb-context"></p></div></div>
      <div class="wb-header-actions"><span id="wb-frozen" class="wb-frozen">已冻结</span><select id="wb-language" aria-label="界面语言" style="min-width:52px;max-width:54px;min-height:44px;padding:0 2px;border:1px solid #ccd4c7;background:#faf9f5;color:#273d36"><option value="zh-CN">中文</option><option value="en">EN</option></select><button id="wb-pages" type="button" aria-expanded="false" aria-controls="wb-library">本地板书 <span id="wb-page-count">0</span></button><button id="wb-exit" class="wb-exit" type="button">返回教学 <span aria-hidden="true">↗</span></button></div></header>
    <div class="wb-workspace"><div id="wb-frame" class="wb-frame"><canvas id="wb-ink" aria-label="屏幕板书画布"></canvas></div>
      <div class="wb-view-actions" aria-label="模型视角"><button id="wb-zoom-in" type="button" aria-label="放大模型">＋</button><button id="wb-zoom-out" type="button" aria-label="缩小模型">−</button><button id="wb-reset" type="button">视角复位</button><button id="wb-quality" type="button" aria-pressed="false">轻量：关</button></div>
      <aside id="wb-library" class="wb-library" aria-labelledby="wb-library-title" hidden><div class="wb-library-top"><h3 id="wb-library-title">本地板书</h3><button id="wb-library-close" type="button" aria-label="收起板书列表">×</button></div><p>每页对应一个冻结时刻。打开时同步恢复模型。</p><div id="wb-page-list"></div><button id="wb-export" type="button">导出当前页备份 ↓</button></aside>
    </div>
    <footer class="wb-footer"><div class="wb-toolbar" role="toolbar" aria-label="课堂板书工具"><div class="wb-tools" role="group" aria-label="操作模式">${tools.map(([name,label])=>`<button type="button" data-wb-tool="${name}" aria-pressed="${name==='model'}">${svg(name)}<span>${label}</span></button>`).join('')}</div>
      <div class="wb-palette" role="group" aria-label="笔迹颜色">${colors.map(([value,label],i)=>`<button type="button" data-wb-color="${value}" style="--swatch:${value}" aria-label="${label}" aria-pressed="${i===0}"><span></span></button>`).join('')}</div>
      <label class="wb-width">粗细<select id="wb-width" aria-label="笔迹粗细"><option value="3">细</option><option value="6" selected>中</option><option value="11">粗</option></select></label>
      <div class="wb-history"><button id="wb-undo" type="button" disabled>${svg('undo')}<span>撤销</span></button><button id="wb-redo" type="button" disabled>${svg('redo')}<span>重做</span></button><button id="wb-clear" type="button">清空本页</button></div></div>
      <div class="wb-footnotes"><span id="wb-gesture-hint">模型模式 · 单指旋转，双指缩放与平移</span><span id="wb-save-state" role="status" aria-live="polite">仅保存在当前浏览器</span></div>
      <p class="wb-local-note">仅保存在当前浏览器，清理数据或更换设备可能丢失。</p>
    </footer>
    <dialog id="wb-clear-dialog" class="wb-dialog"><h3>清空这一页的板书？</h3><p>只清除当前页的笔迹和文字，其他教学步骤的板书会保留。清空后可以撤销。</p><div><button type="button" data-wb-cancel>保留板书</button><button id="wb-clear-confirm" type="button" class="wb-danger">清空本页</button></div></dialog>
    <dialog id="wb-text-dialog" class="wb-dialog"><form method="dialog"><h3>添加课堂文字</h3><label for="wb-text-input">板书内容</label><textarea id="wb-text-input" maxlength="2000" rows="4" placeholder="输入要讲解的关键词或一句话"></textarea><div><button type="button" data-wb-cancel>取消</button><button id="wb-text-confirm" type="submit" class="wb-primary">放到白板</button></div></form></dialog>`;
  root.insertAdjacentHTML('afterbegin','<style>@media(max-width:480px){.wb-header{min-width:0;width:100%;box-sizing:border-box;overflow:hidden}.wb-heading{flex:1 1 0;min-width:0;overflow:hidden}.wb-heading>div{min-width:0;width:100%;overflow:hidden}.wb-heading p{max-width:100%}.wb-heading h2{font-size:14px;line-height:1.15;overflow-wrap:anywhere}.wb-header-actions{flex:none;gap:4px}#wb-page-count{display:none}}</style>');
  document.body.append(root);
  const $=id=>root.querySelector(`#${id}`),shell=document.querySelector('.lab-shell'),sceneElement=document.querySelector('#scene'),frame=$('wb-frame');
  let active=false,busy=false,current=null,placeholder=null,sceneStyle='',sceneClass='',initialInert=false,previousFocus=null;
  let tool='model',color=colors[0][0],width=6,quality='balanced',suppressChanges=false,textPosition=null,saveState=null;
  let librarySequence=0,disposed=false,records=[],observer,restoredView=false,failedOpen=false,currentNotice=null;
  const compactHeader=matchMedia('(max-width: 760px)');
  const copy=()=>boardCopy[boardLanguage()];
  function format(key, title='') { return copy()[key].replace('{title}',displayBoardTitle(title)); }
  function storageText(status) {
    if(boardLanguage()==='zh')return status.message||({saved:copy().saved,saving:copy().saving}[status.state]||copy().saveFailed);
    const messages={
      RECOVERY_CHECKPOINTED:'Board saved to a temporary recovery record; syncing to the local database.',
      RECOVERY_PENDING:'Unsynced board recovery records were found. They will be written to the local database at the next save.',
      LOCAL_STORAGE_UNAVAILABLE:'Synchronous recovery records are unavailable; normal saving will still try the local database.',
      INCOMPATIBLE_JOURNAL:'An unrecognized recovery record was found. The original data is preserved and will not be overwritten.',
      INVALID_JOURNAL:'An unrecognized recovery record was found. The original data is preserved and will not be overwritten.',
      INCOMPATIBLE_SCHEMA:'A recovery record from another version was found. The original data is preserved.',
      INCOMPATIBLE_MODEL:'A recovery record from another model was found. The original data is preserved.',
      JOURNAL_TOO_LARGE:'The recovery record exceeds the local limit. The current board remains in memory.',
      JOURNAL_NEWER:'A newer recovery record exists. It is preserved; the current board remains in memory.',
      JOURNAL_CLEANUP_FAILED:'The board was saved to the local database, but its temporary recovery record could not be removed.',
      ID_COLLISION:'A board from another page context uses this ID. The original data is preserved.',
      TOO_LARGE:'Board content exceeds the local save limit. It remains in memory; reduce it and retry.',
      TOO_MANY_OPERATIONS:'Board content exceeds the local save limit. It remains in memory; reduce it and retry.',
      TOO_MANY_POINTS:'Board content exceeds the local save limit. It remains in memory; reduce it and retry.',
      QUOTA_EXCEEDED:'Browser storage is full. The current board remains in memory; free space and retry.',
      UNAVAILABLE:'The local database is unavailable. The board remains in memory and may be lost on refresh.',
    };
    return messages[status.code]||({saving:'Saving board…',saved:'Board saved in this browser.',incompatible:'A board from another format or model was found. The original data is preserved.'}[status.state]||'Board could not be saved locally. It remains in memory.');
  }
  const store=createBoardStore({onStatus(status){saveState=status;showSaveStatus(status);}});
  function showSaveStatus(status) {
    currentNotice=null;
    $('wb-save-state').dataset.state=status.state;
    $('wb-save-state').textContent=storageText(status);
  }
  function showNotice(){
    if(!currentNotice)return;
    $('wb-save-state').textContent=format(currentNotice.key,currentNotice.title);
  }
  function notice(key,title=''){
    currentNotice={key:key==='当前页笔迹较多，请先导出或新建板书。'?'inkLimit':key,title};showNotice();
  }
  function staticText(selector,key){const node=root.querySelector(selector);if(node)node.textContent=copy()[key];}
  function updateGestureHint(){
    const key=tool==='model'?'modelHint':tool==='eraser'?'eraserHint':tool==='text'?'textHint':'drawHint';
    $('wb-gesture-hint').textContent=copy()[key];
  }
  function localizeStatic(){
    for(const [selector,key] of [
      ['#wb-title','title'],['#wb-frozen','frozen'],['#wb-reset','reset'],['#wb-library-title','pages'],['#wb-library > p','libraryDescription'],
      ['#wb-export','export'],['#wb-clear','clear'],['#wb-clear-confirm','clear'],['.wb-local-note','localNote'],
      ['#wb-clear-dialog h3','clearTitle'],['#wb-clear-dialog p','clearDescription'],['#wb-text-dialog h3','textTitle'],
      ['label[for="wb-text-input"]','textLabel'],['#wb-text-confirm','placeText'],
    ])staticText(selector,key);
    $('wb-pages').firstChild.nodeValue=`${copy()[compactHeader.matches?'pagesCompact':'pages']} `;
    $('wb-exit').firstChild.nodeValue=`${copy()[compactHeader.matches?'exitCompact':'exit']} `;
    $('wb-pages').setAttribute('aria-label',`${copy().pages}: ${$('wb-page-count').textContent}`);
    root.querySelector('.wb-width').firstChild.nodeValue=copy().width;
    for(const [selector,key] of [['#wb-language','language'],['#wb-ink','canvas'],['.wb-view-actions','view'],['#wb-zoom-in','zoomIn'],['#wb-zoom-out','zoomOut'],['#wb-library-close','closeLibrary'],['.wb-toolbar','toolbar'],['.wb-tools','modes'],['.wb-palette','palette'],['#wb-width','width']])root.querySelector(selector)?.setAttribute('aria-label',copy()[key]);
    $('wb-language').value=boardLanguage()==='en'?'en':'zh-CN';
    root.querySelectorAll('[data-wb-tool] span').forEach((span,i)=>{span.textContent=copy().tools[i];});
    root.querySelectorAll('[data-wb-color]').forEach((button,i)=>button.setAttribute('aria-label',copy().colors[i]));
    root.querySelectorAll('#wb-width option').forEach((option,i)=>{option.textContent=[copy().thin,copy().medium,copy().thick][i];});
    staticText('#wb-undo span','undo');staticText('#wb-redo span','redo');
    const cancels=root.querySelectorAll('[data-wb-cancel]');cancels[0].textContent=copy().keep;cancels[1].textContent=copy().cancel;
    $('wb-text-input').placeholder=copy().textPlaceholder;
    $('wb-quality').textContent=copy()[quality==='economy'?'qualityOn':'qualityOff'];
    updateGestureHint();
  }
  function onLanguageChange(){
    if(disposed)return;
    localizeStatic();
    if(current)updateHeading();
    if(!$('wb-library').hidden){
      const focusedId=$('wb-page-list').contains(document.activeElement)?document.activeElement.closest('[data-board-id]')?.dataset.boardId:null;
      renderPages(records);
      if(focusedId)root.querySelectorAll('[data-board-id]').forEach(button=>{if(button.dataset.boardId===focusedId)button.focus({preventScroll:true});});
    }
    if(currentNotice)showNotice();else if(saveState)$('wb-save-state').textContent=storageText(saveState);
    else $('wb-save-state').textContent=copy().localOnly;
    if(failedOpen)trigger.setAttribute('title',copy().openFailed);
  }
  const ink=createWhiteboardInk({canvas:$('wb-ink'),onChange(operations,history){
    $('wb-undo').disabled=!history.canUndo;$('wb-redo').disabled=!history.canRedo;$('wb-clear').disabled=!operations.length;
    if(current&&!suppressChanges){current.operations=operations;save();}
  },onTextRequest(position){textPosition=position;$('wb-text-input').value=position.existing?.text||'';ink.cancelGesture();$('wb-text-dialog').showModal();$('wb-text-input').focus();},onStatus:notice});
  function save(){if(!current||disposed)return;current.updatedAt=Date.now();store.schedule(clone(current));}
  function captureCamera(){if(active&&current&&!busy){current.camera=getScene().getWhiteboardCamera();save();}}
  function resize(){
    if(!active||!current)return;
    const area=root.querySelector('.wb-workspace'),w=area.clientWidth,h=area.clientHeight,ratio=current.viewport.width/current.viewport.height;
    const availableW=Math.max(1,w-32),availableH=Math.max(1,h-24);
    const fw=Math.min(availableW,availableH*ratio),fh=fw/ratio;
    frame.style.width=`${fw}px`;frame.style.height=`${fh}px`;
    ink.resize(fw,fh,Math.min(devicePixelRatio||1,quality==='economy'?1:1.5));
  }
  function updateHeading(){
    $('wb-context').textContent=`${displayBoardTitle(current.title)}${restoredView?` · ${copy().restoredView}`:''}`;
    $('wb-frozen').textContent=`${copy().frozen} · ${current.snapshot.time.toFixed(2)} s`;
    $('wb-exit').setAttribute('aria-label',format('returnPaused',current.title));
  }
  function setTool(next){
    tool=next;root.dataset.tool=tool;
    ink.setTool(tool,color,width);getScene()?.setWhiteboardMode(tool==='model'?'model':'draw');
    root.querySelectorAll('[data-wb-tool]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.wbTool===tool)));
    updateGestureHint();
  }
  function setDocument(record){
    current=clone(record);updateHeading();suppressChanges=true;
    ink.setDocument({...current.viewport,operations:current.operations});suppressChanges=false;resize();
  }
  async function listPages(){
    const seq=++librarySequence;
    const rows=await store.list();if(disposed||seq!==librarySequence)return;
    records=rows;renderPages(rows);
  }
  function renderPages(rows){
    $('wb-page-count').textContent=String(rows.length);
    $('wb-pages').setAttribute('aria-label',`${copy().pages}: ${rows.length}`);
    $('wb-page-list').replaceChildren();
    for(const row of [...rows].sort((a,b)=>timestamp(b.updatedAt)-timestamp(a.updatedAt))){
      const button=document.createElement('button');button.type='button';button.dataset.boardId=row.id;
      button.setAttribute('aria-current',row.id===current?.id?'page':'false');
      const name=document.createElement('strong');name.textContent=row.title?displayBoardTitle(row.title):copy().unnamed;
      const date=new Date(row.updatedAt),validDate=Number.isFinite(date.valueOf());
      const detail=document.createElement('span');detail.textContent=row.compatible?`${validDate?date.toLocaleString(boardLanguage()==='en'?'en-US':'zh-CN',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'}):'—'} · ${copy()[row.id===current?.id?'currentPage':'restoreMoment']}`:copy().incompatiblePage;
      button.append(name,detail);button.disabled=!row.compatible;button.addEventListener('click',()=>switchPage(row.id));$('wb-page-list').append(button);
    }
  }
  function library(open){$('wb-library').hidden=!open;$('wb-pages').setAttribute('aria-expanded',String(open));if(open)void listPages();}
  async function switchPage(id){
    if(busy||id===current?.id)return;busy=true;ink.cancelGesture();
    try{
      current.camera=getScene().getWhiteboardCamera();save();if(!await store.flush())store.checkpoint(current);
      const record=await store.get(id);if(!record||record.incompatible){notice('pageUnavailable');return;}
      if(!getScene().restoreFrozenState(record.snapshot)){notice('modelIncompatible');return;}
      restoredView=false;onRestore(record.snapshot);setDocument(record);getScene().setWhiteboardCamera(record.camera);setTool('model');
      library(false);notice('restored',record.title);
    }finally{busy=false;}
  }
  function mount(){
    placeholder=document.createComment('teaching-scene-whiteboard-position');sceneElement.before(placeholder);
    sceneStyle=sceneElement.getAttribute('style')||'';sceneClass=sceneElement.className;
    sceneElement.classList.add('wb-model');sceneElement.style.cssText='position:absolute;inset:0;width:100%;height:100%;min-height:0;margin:0;border-radius:0;';
    frame.prepend(sceneElement);root.hidden=false;document.body.dataset.whiteboard='true';
    observer=new ResizeObserver(resize);observer.observe(root.querySelector('.wb-workspace'));
  }
  function unmount(){
    observer?.disconnect();observer=null;
    ink.suspend();
    placeholder?.replaceWith(sceneElement);placeholder=null;
    sceneElement.className=sceneClass;sceneElement.setAttribute('style',sceneStyle);
    root.hidden=true;delete document.body.dataset.whiteboard;shell.inert=initialInert;
    library(false);const focus=previousFocus?.isConnected?previousFocus:trigger;focus?.focus({preventScroll:true});
  }
  async function open(){
    const scene=getScene();if(active||busy||!scene?.enterWhiteboard)return;
    busy=true;active=true;let info;
    previousFocus=document.activeElement;initialInert=shell.inert;shell.inert=true;
    try{
      info=onFreeze(); // Freeze before any asynchronous I/O or UI transition.
      // Reconcile recovered pages with any newer durable copy before the UI
      // opens one and gives it a new edited timestamp.
      await store.flush();
      const rows=await store.list(),match=rows.filter(r=>r.compatible&&r.contextKey===info.contextKey).sort((a,b)=>timestamp(b.updatedAt)-timestamp(a.updatedAt))[0];
      let record=match?await store.get(match.id):null;
      if(record?.incompatible)record=null;
      const now=Date.now();
      if(!record)record={schemaVersion:BOARD_SCHEMA,modelRevision:MODEL_REVISION,id:crypto.randomUUID(),contextKey:info.contextKey,title:info.title,createdAt:now,updatedAt:now,
        viewport:{width:1600,height:Math.round(1600/Math.max(.45,(innerWidth-32)/Math.max(260,innerHeight-245)))},snapshot:info.snapshot,camera:info.snapshot.camera,resetCamera:info.snapshot.camera,operations:[]};
      // The pose key matches, so retain the current dark-view/UI state for
      // returning to teaching; only restore the saved whiteboard orbit + ink.
      else {record.snapshot=info.snapshot;}
      restoredView=!!match;current=record;mount();setDocument(record);
      const views=await scene.enterWhiteboard({camera:match?record.camera:null,quality,onCameraChange:captureCamera});
      if(!match){current.camera=views.camera;current.resetCamera=views.resetCamera;}
      setTool('model');$('wb-exit').focus({preventScroll:true});busy=false;failedOpen=false;trigger.removeAttribute('title');save();void listPages();
    }catch(error){
      console.error('白板初始化失败',error);scene.exitWhiteboard?.();if(placeholder)unmount();else shell.inert=initialInert;active=false;busy=false;
      if(info){scene.restoreFrozenState?.(info.snapshot);onExit(info.snapshot);}
      failedOpen=true;trigger.setAttribute('title',copy().openFailed);
    }
  }
  async function close(){
    if(!active||busy)return;busy=true;ink.cancelGesture();
    for(const dialog of root.querySelectorAll('dialog[open]'))dialog.close();
    current.camera=getScene().getWhiteboardCamera();save();
    // The store retains a memory copy if this write fails; leaving never clears it.
    if(!await store.flush())store.checkpoint(current);getScene().exitWhiteboard();unmount();
    getScene().restoreFrozenState(current.snapshot);active=false;busy=false;onExit(current.snapshot);
  }
  root.querySelectorAll('[data-wb-tool]').forEach(button=>button.addEventListener('click',()=>{if(!busy)setTool(button.dataset.wbTool);}));
  root.querySelectorAll('[data-wb-color]').forEach(button=>button.addEventListener('click',()=>{
    color=button.dataset.wbColor;root.querySelectorAll('[data-wb-color]').forEach(other=>other.setAttribute('aria-pressed',String(other===button)));ink.setTool(tool,color,width);
  }));
  $('wb-width').addEventListener('change',()=>{width=Number($('wb-width').value);ink.setTool(tool,color,width);});
  $('wb-undo').addEventListener('click',()=>ink.undo());$('wb-redo').addEventListener('click',()=>ink.redo());
  $('wb-clear').addEventListener('click',()=>{ink.cancelGesture();$('wb-clear-dialog').showModal();});
  $('wb-clear-confirm').addEventListener('click',()=>{ink.clear();$('wb-clear-dialog').close();});
  root.querySelectorAll('[data-wb-cancel]').forEach(button=>button.addEventListener('click',()=>button.closest('dialog').close()));
  $('wb-text-dialog').querySelector('form').addEventListener('submit',()=>{
    ink.addText({x:textPosition.existing?.x??textPosition.x,y:textPosition.existing?.y??textPosition.y,text:$('wb-text-input').value,color:textPosition.existing?.color||color,fontSize:textPosition.existing?.fontSize||32+width,id:textPosition.existing?.id});
  });
  $('wb-exit').addEventListener('click',close);trigger.addEventListener('click',open);
  $('wb-language').addEventListener('change',()=>setLanguage($('wb-language').value));
  $('wb-pages').addEventListener('click',()=>library($('wb-library').hidden));$('wb-library-close').addEventListener('click',()=>library(false));
  $('wb-reset').addEventListener('click',()=>{if(!busy){getScene().setWhiteboardCamera(current.resetCamera);captureCamera();}});
  for(const [id,factor]of[['wb-zoom-in',.86],['wb-zoom-out',1/.86]])$(id).addEventListener('click',()=>{
    if(busy)return;const c=getScene().getWhiteboardCamera();c.position=c.position.map((p,i)=>c.target[i]+(p-c.target[i])*factor);c.zoom=Math.hypot(...c.position.map((p,i)=>p-c.target[i]));getScene().setWhiteboardCamera(c);captureCamera();
  });
  $('wb-quality').addEventListener('click',()=>{
    quality=quality==='balanced'?'economy':'balanced';getScene().setWhiteboardQuality(quality);resize();
    $('wb-quality').textContent=copy()[quality==='economy'?'qualityOn':'qualityOff'];$('wb-quality').setAttribute('aria-pressed',String(quality==='economy'));
  });
  $('wb-export').addEventListener('click',()=>{
    if(!current)return;const blob=new Blob([JSON.stringify(current,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`${boardLanguage()==='en'?'gene-expression-board':'基因表达-板书'}-${current.snapshot.time.toFixed(2)}s.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  });
  function keydown(event){
    if(!active)return;
    if(event.key==='Escape'&&!root.querySelector('dialog[open]')){event.preventDefault();void close();return;}
    if(event.key!=='Tab'||root.querySelector('dialog[open]'))return;
    const buttons=[...root.querySelectorAll('button:not(:disabled),select,textarea')].filter(el=>el.getClientRects().length),first=buttons[0],last=buttons.at(-1);
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last.focus();}
    else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first.focus();}
  }
  function flush(){if(active&&current){ink.cancelGesture();current.camera=getScene()?.getWhiteboardCamera()||current.camera;save();store.checkpoint(current);}return store.flush();}
  function visibility(){if(document.hidden)flush();}
  root.addEventListener('keydown',keydown);document.addEventListener('visibilitychange',visibility);window.addEventListener('pagehide',flush);window.addEventListener('gene-expression-languagechange',onLanguageChange);compactHeader.addEventListener('change',onLanguageChange);onLanguageChange();
  return {open,close,isActive:()=>active,isBusy:()=>busy,
    inspect:()=>({active,busy,tool,quality,record:current?clone(current):null,ink:ink.inspect(),storage:saveState,pages:records.length}),
    dispose(){const saving=flush();disposed=true;observer?.disconnect();ink.dispose();void saving.finally(()=>store.dispose());root.remove();trigger.removeEventListener('click',open);document.removeEventListener('visibilitychange',visibility);window.removeEventListener('pagehide',flush);window.removeEventListener('gene-expression-languagechange',onLanguageChange);compactHeader.removeEventListener('change',onLanguageChange);},
  };
}

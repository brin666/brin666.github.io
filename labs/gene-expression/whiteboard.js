import { createWhiteboardInk } from './whiteboard-ink.js';
import { createBoardStore, BOARD_SCHEMA, MODEL_REVISION } from './whiteboard-store.mjs';

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

export function createWhiteboard({ getScene, onFreeze, onRestore, onExit, trigger }) {
  const root=document.createElement('section');root.id='whiteboard';root.className='wb-shell';root.hidden=true;
  root.setAttribute('role','dialog');root.setAttribute('aria-modal','true');root.setAttribute('aria-labelledby','wb-title');
  root.innerHTML=`
    <header class="wb-header"><div class="wb-heading"><span class="wb-brand" aria-hidden="true">✎</span><div><h2 id="wb-title">课堂白板</h2><p id="wb-context"></p></div></div>
      <div class="wb-header-actions"><span id="wb-frozen" class="wb-frozen">已冻结</span><button id="wb-pages" type="button" aria-expanded="false" aria-controls="wb-library">本地板书 <span id="wb-page-count">0</span></button><button id="wb-exit" class="wb-exit" type="button">返回教学 <span aria-hidden="true">↗</span></button></div></header>
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
  document.body.append(root);
  const $=id=>root.querySelector(`#${id}`),shell=document.querySelector('.lab-shell'),sceneElement=document.querySelector('#scene'),frame=$('wb-frame');
  let active=false,busy=false,current=null,placeholder=null,sceneStyle='',sceneClass='',initialInert=false,previousFocus=null;
  let tool='model',color=colors[0][0],width=6,quality='balanced',suppressChanges=false,textPosition=null,saveState=null;
  let librarySequence=0,disposed=false,records=[],observer;
  const store=createBoardStore({onStatus(status){saveState=status;showSaveStatus(status);}});
  function showSaveStatus(status) {
    $('wb-save-state').dataset.state=status.state;
    $('wb-save-state').textContent=status.message||({saved:'已保存到本机',saving:'正在保存…'}[status.state]||'暂时无法保存');
  }
  function notice(message){$('wb-save-state').textContent=message;}
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
    $('wb-context').textContent=current.title;
    $('wb-frozen').textContent=`已冻结 · ${current.snapshot.time.toFixed(2)} s`;
    $('wb-exit').setAttribute('aria-label',`返回 ${current.title}，保持暂停`);
  }
  function setTool(next){
    tool=next;root.dataset.tool=tool;
    ink.setTool(tool,color,width);getScene()?.setWhiteboardMode(tool==='model'?'model':'draw');
    root.querySelectorAll('[data-wb-tool]').forEach(button=>button.setAttribute('aria-pressed',String(button.dataset.wbTool===tool)));
    $('wb-gesture-hint').textContent=tool==='model'?'模型模式 · 单指旋转，双指缩放与平移；鼠标滚轮缩放，右键平移':tool==='eraser'?'橡皮擦 · 按整笔擦除，撤销可恢复':tool==='text'?'文字模式 · 点击空白处添加，点击已有文字编辑':'板书模式 · 单指或触控笔写画，模型已锁定';
  }
  function setDocument(record){
    current=clone(record);updateHeading();suppressChanges=true;
    ink.setDocument({...current.viewport,operations:current.operations});suppressChanges=false;resize();
  }
  async function listPages(){
    const seq=++librarySequence;
    const rows=await store.list();if(disposed||seq!==librarySequence)return;
    records=rows;$('wb-page-count').textContent=String(rows.length);
    $('wb-page-list').replaceChildren();
    for(const row of rows.sort((a,b)=>timestamp(b.updatedAt)-timestamp(a.updatedAt))){
      const button=document.createElement('button');button.type='button';button.dataset.boardId=row.id;
      button.setAttribute('aria-current',row.id===current?.id?'page':'false');
      const name=document.createElement('strong');name.textContent=row.title||'未命名板书';
      const detail=document.createElement('span');detail.textContent=row.compatible?`${new Date(row.updatedAt).toLocaleString('zh-CN',{month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit'})} · ${row.id===current?.id?'当前页':'恢复此时刻'}`:'版本不兼容 · 原数据已保留';
      button.append(name,detail);button.disabled=!row.compatible;button.addEventListener('click',()=>switchPage(row.id));$('wb-page-list').append(button);
    }
  }
  function library(open){$('wb-library').hidden=!open;$('wb-pages').setAttribute('aria-expanded',String(open));if(open)void listPages();}
  async function switchPage(id){
    if(busy||id===current?.id)return;busy=true;ink.cancelGesture();
    try{
      current.camera=getScene().getWhiteboardCamera();save();if(!await store.flush())store.checkpoint(current);
      const record=await store.get(id);if(!record||record.incompatible){notice('此页暂时不能恢复，原数据已保留。');return;}
      if(!getScene().restoreFrozenState(record.snapshot)){notice('模型版本不兼容，未切换当前板书。');return;}
      onRestore(record.snapshot);setDocument(record);getScene().setWhiteboardCamera(record.camera);setTool('model');
      library(false);notice(`已恢复「${record.title}」的模型与板书`);
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
      current=record;mount();setDocument(record);
      const views=await scene.enterWhiteboard({camera:match?record.camera:null,quality,onCameraChange:captureCamera});
      if(!match){current.camera=views.camera;current.resetCamera=views.resetCamera;}
      setTool('model');$('wb-exit').focus({preventScroll:true});busy=false;save();void listPages();
      if(match)$('wb-context').textContent=`${current.title} · 已恢复板书与白板视角`;
    }catch(error){
      console.error('白板初始化失败',error);scene.exitWhiteboard?.();if(placeholder)unmount();else shell.inert=initialInert;active=false;busy=false;
      if(info){scene.restoreFrozenState?.(info.snapshot);onExit(info.snapshot);}
      trigger.setAttribute('title','白板暂时无法打开，请重试');
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
  $('wb-pages').addEventListener('click',()=>library($('wb-library').hidden));$('wb-library-close').addEventListener('click',()=>library(false));
  $('wb-reset').addEventListener('click',()=>{if(!busy){getScene().setWhiteboardCamera(current.resetCamera);captureCamera();}});
  for(const [id,factor]of[['wb-zoom-in',.86],['wb-zoom-out',1/.86]])$(id).addEventListener('click',()=>{
    if(busy)return;const c=getScene().getWhiteboardCamera();c.position=c.position.map((p,i)=>c.target[i]+(p-c.target[i])*factor);c.zoom=Math.hypot(...c.position.map((p,i)=>p-c.target[i]));getScene().setWhiteboardCamera(c);captureCamera();
  });
  $('wb-quality').addEventListener('click',()=>{
    quality=quality==='balanced'?'economy':'balanced';getScene().setWhiteboardQuality(quality);resize();
    $('wb-quality').textContent=quality==='economy'?'轻量：开':'轻量：关';$('wb-quality').setAttribute('aria-pressed',String(quality==='economy'));
  });
  $('wb-export').addEventListener('click',()=>{
    if(!current)return;const blob=new Blob([JSON.stringify(current,null,2)],{type:'application/json'}),url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`基因表达-板书-${current.snapshot.time.toFixed(2)}s.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
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
  root.addEventListener('keydown',keydown);document.addEventListener('visibilitychange',visibility);window.addEventListener('pagehide',flush);
  return {open,close,isActive:()=>active,isBusy:()=>busy,
    inspect:()=>({active,busy,tool,quality,record:current?clone(current):null,ink:ink.inspect(),storage:saveState,pages:records.length}),
    dispose(){const saving=flush();disposed=true;observer?.disconnect();ink.dispose();void saving.finally(()=>store.dispose());root.remove();trigger.removeEventListener('click',open);document.removeEventListener('visibilitychange',visibility);window.removeEventListener('pagehide',flush);},
  };
}

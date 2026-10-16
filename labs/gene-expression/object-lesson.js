import { OBJECT_LESSONS } from './object-lessons.js';

const $ = id => document.getElementById(id);
const SCANS = 'https://images.szxuexiao.com/uploadimages/keben2022/rjgzshengwubx2_2019/';
const TRANSLATION_BOOK = { page:68, label:'教材第68页 · 图4-7', url:`${SCANS}79.jpg` };
export function bookForObject(type, { chapter=0, step=null }={}) {
  if (type === 'rna' && (chapter >= 3 || step === 2)) return TRANSLATION_BOOK;
  if (type === 'trna' && (chapter === 3 || (step !== null && step > 0))) return TRANSLATION_BOOK;
  return OBJECT_LESSONS[type]?.book;
}

export function createKnowledgeHints({ getChapter, isHidden }) {
  const tip=$('knowledge-tip');
  let target=null, previousDescription=null;
  function hide() {
    tip.hidden=true;
    if (target) {
      if (previousDescription === null) target.removeAttribute('aria-describedby');
      else target.setAttribute('aria-describedby',previousDescription);
    }
    target=null;
  }
  function position(x,y) {
    const bounds=tip.getBoundingClientRect();
    tip.style.left=`${Math.max(8,Math.min(x+16,innerWidth-bounds.width-8))}px`;
    tip.style.top=`${Math.max(8,Math.min(y+17,innerHeight-bounds.height-8))}px`;
  }
  function show(type,x,y,element=null,indexed=false) {
    if (isHidden()) { hide(); return; }
    const lesson=OBJECT_LESSONS[type];
    if (!lesson && type !== 'site') { hide(); return; }
    if (target !== element) {
      hide(); target=element;
      if(element){
        previousDescription=element.getAttribute('aria-describedby');
        element.setAttribute('aria-describedby',[previousDescription,'knowledge-tip'].filter(Boolean).join(' '));
      }
    }
    $('knowledge-name').textContent=type==='site'?'A / P / E · 拓展位点':lesson.title;
    $('knowledge-page').textContent=type==='site'?'教材图4-7采用位点1 / 位点2':bookForObject(type,{chapter:getChapter()}).label;
    $('knowledge-action').textContent=type==='site'?'此处的英文位点名称属于拓展表示':indexed || element?.matches('.base-cell,[data-amino]')?'点击追踪序列 · 对象介绍可单独进入':'点击对象，进入分子特写';
    tip.hidden=false;position(x,y);
  }
  function elementType(element) {
    return element.dataset.kind==='site'?'site':element.dataset.selectType || element.dataset.structure || element.dataset.lesson || element.dataset.type || (element.hasAttribute('data-amino')?'peptide':null);
  }
  const selector='[data-select-type],[data-structure],[data-lesson],.base-cell,[data-amino],[data-kind="site"]';
  document.addEventListener('pointerover',event=>{
    if(event.pointerType==='touch')return;
    const element=event.target.closest(selector);
    if(element && !element.disabled)show(elementType(element),event.clientX,event.clientY,element);
  });
  document.addEventListener('pointerout',event=>{
    if(target && !target.contains(event.relatedTarget))hide();
  });
  document.addEventListener('focusin',event=>{
    const element=event.target.closest(selector);
    if(element && !element.disabled){const rect=element.getBoundingClientRect();show(elementType(element),rect.left,rect.bottom,element);}
  });
  document.addEventListener('focusout',hide);
  document.addEventListener('pointerdown',hide);
  addEventListener('resize',hide);
  document.addEventListener('scroll',hide,true);
  return {hide,onHover(value){
    if(value){const selection=value.selection,type=selection.type==='base'?'template':selection.type;show(type,value.x,value.y,null,!['trna','polymerase','ribosome','pore'].includes(type) && (selection.index!=null || !!selection.indices?.length));}
    else hide();
  }};
}

export function createObjectLesson({onEnter,onReturn,getReducedMotion}) {
  const root=$('object-lesson'),main=document.querySelector('.lab-shell');
  let activeType=null,step=0,scene=null,frame=0,epoch=0,entryTrigger=null,fromProcess=false,returnHash='',transition=null;
  const normalTitle=document.title;
  const supportsPerspective=type=>['polymerase','ribosome','pore'].includes(type);
  function requestFrame(){if(!frame && activeType && !document.hidden)frame=requestAnimationFrame(stamp=>{frame=0;if(scene?.render(stamp))requestFrame();});}
  function perspective(enabled){
    $('object-perspective').setAttribute('aria-pressed',String(enabled));
    $('object-perspective').textContent=`透视：${enabled?'开':'关'}`;
    scene?.setPerspective(enabled);requestFrame();
  }
  function setStep(index,{updateRoute=true}={}) {
    if(!activeType)return;
    step=Math.trunc(Math.max(0,Math.min(2,index)));
    const lesson=OBJECT_LESSONS[activeType],content=lesson.steps[step];
    root.dataset.step=String(step);
    $('object-steps').querySelectorAll('button').forEach((button,i)=>{if(i===step)button.setAttribute('aria-current','step');else button.removeAttribute('aria-current');});
    $('object-step-count').textContent=`0${step+1} / 03`;
    $('object-step-title').textContent=content.title;
    $('object-step-text').textContent=content.text;
    $('object-previous').disabled=step===0;
    $('object-next').innerHTML=step===2?'返回整体过程 <span aria-hidden="true">↗</span>':'下一步 <span aria-hidden="true">→</span>';
    const book=bookForObject(activeType,{step});
    $('object-book').textContent=book.label;
    $('object-book').href=book.url;
    $('object-book').dataset.bookLabel=book.label;
    $('object-book').setAttribute('aria-label',`2019版人教生物必修2，${book.label}，在窗口查看教材扫描页`);
    scene?.setStep(step);perspective(supportsPerspective(activeType) && step>0);
    if(updateRoute)history.replaceState(history.state,'',`#object=${activeType}&step=${step+1}`);
  }
  function close({focus=true}={}) {
    if(!activeType)return;
    epoch++;activeType=null;cancelAnimationFrame(frame);frame=0;transition?.cancel();transition=null;
    scene?.dispose();scene=null;$('object-scene').replaceChildren();
    root.hidden=true;main.inert=false;main.removeAttribute('aria-hidden');document.querySelector('.skip-link').inert=false;
    document.body.dataset.objectLesson='false';document.title=normalTitle;
    onReturn();
    if(focus)(entryTrigger?.isConnected?entryTrigger:$('objects-toggle')).focus({preventScroll:true});
  }
  function back() {
    if(fromProcess && history.state?.geneObjectEntry)history.back();
    else{history.replaceState(null,'',location.pathname+location.search+returnHash);close();}
  }
  async function display(type,index=0) {
    if(!OBJECT_LESSONS[type])return;
    const token=++epoch;
    scene?.dispose();scene=null;cancelAnimationFrame(frame);frame=0;transition?.cancel();
    const lesson=OBJECT_LESSONS[type];
    if(!activeType)onEnter();
    activeType=type;root.dataset.object=type;root.hidden=false;main.inert=true;main.setAttribute('aria-hidden','true');document.querySelector('.skip-link').inert=true;
    document.body.dataset.objectLesson='true';document.title=`${lesson.title} · 基因表达`;
    $('object-scene').replaceChildren();$('object-loading').hidden=false;$('object-loading').textContent='正在准备分子展台…';
    $('object-reset').disabled=true;$('object-perspective').disabled=true;
    $('object-title').textContent=lesson.title;$('object-title').focus({preventScroll:true});
    $('object-stage-name').textContent=lesson.title;$('object-subtitle').textContent=lesson.subtitle;$('object-summary').textContent=lesson.summary;
    $('object-extension').hidden=!lesson.extension;$('object-extension').textContent=lesson.extension || '';
    $('object-steps').innerHTML=lesson.steps.map((item,i)=>`<button type="button" data-object-step="${i}"><span>0${i+1}</span>${item.title}<i aria-hidden="true">↗</i></button>`).join('');
    $('object-perspective').hidden=!supportsPerspective(type);
    $('object-model-note').textContent=type==='polymerase'?'外形参考 PDB 1Y1W · 酵母 RNA 聚合酶 II；协同微动、工作区响应与光泽为教学设计，非实测分子动力学。':type==='peptide'?'人工示例：Met–Ala–Phe–Glu–Pro，共五个残基；微动为教学表现，不模拟真实蛋白质折叠。':'结构、颜色、相对大小与微动为教学示意，用于观察功能关系，非实测分子动力学。';
    setStep(index,{updateRoute:false});
    root.querySelector('.object-teaching').scrollTop=0;root.querySelector('.object-layout').scrollTop=0;
    if(!getReducedMotion())transition=root.querySelector('.object-stage').animate([{opacity:.35,transform:'scale(.976)'},{opacity:1,transform:'scale(1)'}],{duration:320,easing:'cubic-bezier(.2,.7,.3,1)'});
    try{
      const {createObjectLessonScene}=await import('./object-lesson-scene.js');
      if(token!==epoch)return;
      scene=createObjectLessonScene({container:$('object-scene'),type,reducedMotion:getReducedMotion(),onInvalidate:requestFrame});
      await scene.ready;
      if(token!==epoch)return;
      if(scene.getMetrics?.().error)throw new Error(scene.getMetrics().error);
      scene.setStep(step);perspective(supportsPerspective(type)&&step>0);
      $('object-loading').hidden=true;$('object-reset').disabled=false;$('object-perspective').disabled=false;requestFrame();
      if(!getReducedMotion())$('object-scene').animate([{opacity:0},{opacity:1}],{duration:260,easing:'ease-out'});
    }catch(error){
      if(token!==epoch)return;
      scene?.dispose();scene=null;$('object-loading').hidden=false;
      $('object-loading').textContent='三维展台暂时无法载入。文字教学与教材链接仍可使用，返回后可再次进入。';
      console.warn('对象教学展台：',error.message);
    }
  }
  function open(type,trigger=null) {
    if(!OBJECT_LESSONS[type])return;
    if(!activeType){entryTrigger=trigger || document.activeElement;returnHash=location.hash;fromProcess=true;history.pushState({geneObjectEntry:true},'',`#object=${type}&step=1`);}
    else history.replaceState(history.state,'',`#object=${type}&step=1`);
    display(type);
  }
  function route(){
    const hash=new URLSearchParams(location.hash.slice(1)),type=hash.get('object');
    if(OBJECT_LESSONS[type]){
      const index=Math.max(0,Math.min(2,(Number(hash.get('step')) || 1)-1));
      if(activeType===type)setStep(index,{updateRoute:false});else display(type,index);
    }else close();
  }
  $('object-back').addEventListener('click',back);
  $('object-next').addEventListener('click',()=>step===2?back():setStep(step+1));
  $('object-previous').addEventListener('click',()=>setStep(step-1));
  $('object-steps').addEventListener('click',event=>{const button=event.target.closest('[data-object-step]');if(button)setStep(Number(button.dataset.objectStep));});
  $('object-reset').addEventListener('click',()=>{scene?.resetView();requestFrame();});
  $('object-perspective').addEventListener('click',()=>perspective($('object-perspective').getAttribute('aria-pressed')!=='true'));
  addEventListener('popstate',route);addEventListener('hashchange',route);
  document.addEventListener('keydown',event=>{
    if(activeType && event.key==='Escape' && !$('textbook-dialog').open){event.preventDefault();back();}
  });
  document.addEventListener('visibilitychange',()=>{scene?.setMotionSuspended?.(document.hidden);if(document.hidden){cancelAnimationFrame(frame);frame=0;}else requestFrame();});
  addEventListener('pagehide',()=>close({focus:false}),{once:true});
  return {open,start:route,back,isActive:()=>!!activeType,setReducedMotion(value){scene?.setReducedMotion(value);if(value){transition?.cancel();transition=null;perspective($('object-perspective').getAttribute('aria-pressed')==='true');}},getState:()=>({type:activeType,step,ready:!!scene && $('object-loading').hidden,metrics:scene?.getMetrics?.() || null})};
}

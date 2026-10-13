// Screen-space vector ink. This module has no access to the teaching clock or 3D scene.
export function createWhiteboardInk({ canvas, onChange = () => {}, onTextRequest = () => {}, onStatus = () => {} }) {
  const ctx = canvas.getContext('2d');
  let operations = [], past = [], future = [], documentWidth = 1600, documentHeight = 900;
  let tool = 'model', color = '#253e38', width = 4, draft = null, startOperations = null;
  let primary = null, blocked = false, frame = 0, disposed = false;
  const pointers = new Set();
  canvas.style.touchAction = 'none';
  const copy = value => structuredClone(value);
  const id = () => crypto.randomUUID();
  const notify = () => onChange(copy(operations), { canUndo: past.length > 0, canRedo: future.length > 0 });
  function invalidate() { if (!frame && !disposed) frame = requestAnimationFrame(draw); }
  function path(points) {
    ctx.beginPath();
    points.forEach(([x, y], i) => i ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    if (points.length === 1) ctx.lineTo(points[0][0] + .01, points[0][1]);
  }
  function drawOperation(op) {
    ctx.save(); ctx.strokeStyle = ctx.fillStyle = op.color; ctx.lineWidth = op.width;
    ctx.lineCap = ctx.lineJoin = 'round';
    if (op.type === 'text') {
      ctx.font = `500 ${op.fontSize}px "Microsoft YaHei", sans-serif`; ctx.textBaseline = 'top';
      op.text.split('\n').forEach((line, i) => ctx.fillText(line, op.x, op.y + i * op.fontSize * 1.4));
    } else {
      ctx.globalAlpha = op.type === 'highlighter' ? .28 : 1;
      path(op.points); ctx.stroke();
      if (op.type === 'arrow' && op.points.length > 1) {
        const a = op.points[0], b = op.points.at(-1), angle = Math.atan2(b[1]-a[1], b[0]-a[0]), len = Math.max(15, op.width * 3);
        ctx.beginPath(); ctx.moveTo(b[0]-Math.cos(angle-.48)*len, b[1]-Math.sin(angle-.48)*len);
        ctx.lineTo(...b); ctx.lineTo(b[0]-Math.cos(angle+.48)*len, b[1]-Math.sin(angle+.48)*len); ctx.stroke();
      }
    }
    ctx.restore();
  }
  function draw() {
    frame = 0; if (disposed) return;
    ctx.setTransform(1,0,0,1,0,0);ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.setTransform(canvas.width/documentWidth,0,0,canvas.height/documentHeight,0,0);
    for (const op of operations) drawOperation(op);
    if (draft) drawOperation(draft);
  }
  function change(next, before = operations) {
    past.push(before); if (past.length > 60) past.shift(); future = []; operations = next;
    invalidate(); notify();
  }
  function point(event) {
    const rect = canvas.getBoundingClientRect();
    return [Math.max(0, Math.min(documentWidth, (event.clientX-rect.left)/rect.width*documentWidth)),
      Math.max(0, Math.min(documentHeight, (event.clientY-rect.top)/rect.height*documentHeight))];
  }
  function segmentDistance(p, a, b) {
    const dx=b[0]-a[0],dy=b[1]-a[1],f=Math.max(0,Math.min(1,((p[0]-a[0])*dx+(p[1]-a[1])*dy)/(dx*dx+dy*dy||1)));
    return Math.hypot(p[0]-a[0]-dx*f,p[1]-a[1]-dy*f);
  }
  function hit(op, p, radius = 12) {
    if (op.type === 'text') {
      ctx.font=`500 ${op.fontSize}px "Microsoft YaHei", sans-serif`;
      const lines=op.text.split('\n'), w=Math.max(...lines.map(line=>ctx.measureText(line).width));
      return p[0]>=op.x-radius && p[0]<=op.x+w+radius && p[1]>=op.y-radius && p[1]<=op.y+lines.length*op.fontSize*1.4+radius;
    }
    return op.points.some((a,i) => segmentDistance(p,a,op.points[i+1]||a) < radius+op.width/2);
  }
  function erase(p) { operations = operations.filter(op => !hit(op, p, Math.max(12,width*2))); invalidate(); }
  function cancelDraft() { if (startOperations) operations=startOperations; draft=null;startOperations=null;primary=null;invalidate(); }
  function cancelGesture() {
    cancelDraft(); blocked=false;
    const captured=[...pointers];pointers.clear();
    for(const pointer of captured)if(canvas.hasPointerCapture(pointer))canvas.releasePointerCapture(pointer);
  }
  function down(event) {
    if(tool==='model' || event.button>0)return;
    event.preventDefault(); pointers.add(event.pointerId);canvas.setPointerCapture(event.pointerId);
    if(pointers.size>1){blocked=true;cancelDraft();return;}
    if(blocked)return;
    primary=event.pointerId;const p=point(event);
    if(tool==='text') {
      const existing=[...operations].reverse().find(op=>op.type==='text'&&hit(op,p,4));
      onTextRequest({x:p[0],y:p[1],existing:existing?copy(existing):null});primary=null;return;
    }
    startOperations=operations;
    if(tool==='eraser'){erase(p);return;}
    if(operations.length>=2000){onStatus('当前页笔迹较多，请先导出或新建板书。');cancelDraft();return;}
    draft={id:id(),type:tool,color,width:tool==='highlighter'?width*5:width,points:[p]};invalidate();
  }
  function move(event) {
    if(tool==='model')return;
    event.preventDefault();if(blocked||primary!==event.pointerId)return;
    if(tool==='eraser'){erase(point(event));return;}
    if(!draft)return;
    const events=event.getCoalescedEvents?.()||[];
    for(const e of events.length?events:[event]) {
      const p=point(e);
      if(['line','arrow'].includes(tool)){draft.points=[draft.points[0],p];continue;}
      const prev=draft.points.at(-1);
      if(Math.hypot(p[0]-prev[0],p[1]-prev[1])>.9)draft.points.push(p);
      // Commit long handwriting as a single action, without unbounded point growth.
      if(draft.points.length>6000){draft.points=draft.points.filter((_,i)=>i%2===0||i===draft.points.length-1);}
    }
    invalidate();
  }
  function up(event) {
    if(tool!=='model')event.preventDefault();
    if(primary===event.pointerId && !blocked) {
      if(draft){move(event);const next=[...operations,draft];draft=null;change(next,startOperations);}
      else if(startOperations && operations.length!==startOperations.length)change(operations,startOperations);
      startOperations=null;primary=null;
    }
    pointers.delete(event.pointerId);if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);
    if(!pointers.size)blocked=false;
  }
  function cancel(event) {
    if(primary===event.pointerId)cancelDraft();
    pointers.delete(event.pointerId);blocked=pointers.size>0;
    if(canvas.hasPointerCapture(event.pointerId))canvas.releasePointerCapture(event.pointerId);
  }
  canvas.addEventListener('pointerdown',down);canvas.addEventListener('pointermove',move);
  canvas.addEventListener('pointerup',up);canvas.addEventListener('pointercancel',cancel);
  canvas.addEventListener('lostpointercapture',cancel);
  return {
    setDocument({width: w,height: h,operations: ops=[]}){cancelGesture();documentWidth=w;documentHeight=h;operations=copy(ops);past=[];future=[];invalidate();notify();},
    getOperations:()=>copy(operations),
    setTool(next,nextColor=color,nextWidth=width){cancelGesture();tool=next;color=nextColor;width=nextWidth;canvas.style.pointerEvents=tool==='model'?'none':'auto';canvas.style.cursor=tool==='model'?'default':tool==='text'?'text':'crosshair';},
    resize(w,h,dpr){canvas.width=Math.max(1,Math.round(w*Math.min(2,dpr)));canvas.height=Math.max(1,Math.round(h*Math.min(2,dpr)));invalidate();},
    undo(){cancelGesture();if(!past.length)return;future.push(operations);operations=past.pop();invalidate();notify();},
    redo(){cancelGesture();if(!future.length)return;past.push(operations);operations=future.pop();invalidate();notify();},
    clear(){cancelGesture();if(operations.length)change([]);},
    addText({x,y,text,color: inkColor=color,fontSize=30,id: textId}){
      const cleaned=String(text).trim().slice(0,2000),next=operations.filter(op=>op.id!==textId);
      if(cleaned)next.push({id:textId||id(),type:'text',color:inkColor,width:1,x,y,text:cleaned,fontSize,points:[]});
      if(cleaned||next.length!==operations.length)change(next);
    },
    cancelGesture,
    suspend(){cancelGesture();cancelAnimationFrame(frame);frame=0;canvas.width=canvas.height=1;},
    inspect:()=>({tool,operations:operations.length,pointers:pointers.size,drawing:!!draft,blocked,canUndo:!!past.length,canRedo:!!future.length,renderPending:!!frame}),
    dispose(){disposed=true;cancelGesture();cancelAnimationFrame(frame);for(const [name,fn]of[['pointerdown',down],['pointermove',move],['pointerup',up],['pointercancel',cancel],['lostpointercapture',cancel]])canvas.removeEventListener(name,fn);},
  };
}

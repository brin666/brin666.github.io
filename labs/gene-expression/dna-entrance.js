import * as THREE from './vendor/three.module.js';

// A presentation assembly, not a simulation of DNA synthesis. It uses the same
// sixty bases as the teaching scene and never changes their sequence or count.
export const ENTRANCE_DURATION = 9;
export const ENTRANCE_HANDOFF = 7.25;
const clamp = t => Math.max(0, Math.min(1, t));
export const entranceEase = t => { t = clamp(t); return t*t*t*(t*(t*6-15)+10); };
const fract = value => value-Math.floor(value);
const omega = 2*Math.PI/18;
export function entranceSpin(time) {
  const t = Math.max(0, time-3.8), ramp=1.6;
  if(t>=ramp)return omega*(t-ramp*.5);
  const u=t/ramp;
  return omega*ramp*(u*u*u-.5*u*u*u*u);
}

export function createDnaEntrance({scene,group,plates,sugars,codingPoints,templatePoints,codingRail,templateRail,attachments,pairingDashes,pairBetween}) {
  const stage=new THREE.Group();stage.name='dna-entrance-ground';stage.visible=false;scene.add(stage);
  const groundGeometry=new THREE.PlaneGeometry(34,22);
  const groundMaterial=new THREE.ShaderMaterial({
    transparent:true,depthWrite:false,uniforms:{fade:{value:1}},
    vertexShader:'varying vec2 vUv; void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}',
    fragmentShader:'varying vec2 vUv; uniform float fade; void main(){ vec2 p=(vUv-.5)*2.; float pool=exp(-dot(p*vec2(1.5,2.),p*vec2(1.5,2.))); gl_FragColor=vec4(.065,.13,.12,pool*.64*fade); }',
    toneMapped:false,
  });
  const ground=new THREE.Mesh(groundGeometry,groundMaterial);ground.rotation.x=-Math.PI/2;stage.add(ground);
  const shadowGeometry=new THREE.PlaneGeometry(1,1);
  const shadowStrength=new THREE.InstancedBufferAttribute(new Float32Array(60),1).setUsage(THREE.DynamicDrawUsage);
  shadowGeometry.setAttribute('strength',shadowStrength);
  const shadowMaterial=new THREE.ShaderMaterial({
    transparent:true,depthWrite:false,uniforms:{fade:{value:1}},
    vertexShader:'attribute float strength; varying float vStrength; varying vec2 vUv; void main(){vStrength=strength;vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*instanceMatrix*vec4(position,1.);}',
    fragmentShader:'varying vec2 vUv; varying float vStrength; uniform float fade; void main(){float r=length((vUv-.5)*2.); float a=(1.-smoothstep(.08,1.,r))*.24*vStrength*fade;gl_FragColor=vec4(.005,.012,.012,a);}',
    toneMapped:false,
  });
  const shadows=new THREE.InstancedMesh(shadowGeometry,shadowMaterial,60);shadows.frustumCulled=false;
  shadows.instanceMatrix.setUsage(THREE.DynamicDrawUsage);stage.add(shadows);
  const pieces=Array.from({length:60},(_,n)=>{
    const i=Math.floor(n/2),side=n%2;
    const seed=fract(Math.sin(n*78.233+19.19)*43758.5453);
    const seed2=fract(Math.sin(n*39.425+7.13)*9631.517);
    return {
      i,side,seed,seed2,start:1.65+i/29*1.5+side*.12+seed*.06,duration:2.65+seed2*.22,
      from:new THREE.Vector3(),q:new THREE.Quaternion().setFromEuler(new THREE.Euler((seed-.5)*.36,seed2*Math.PI*2,(seed2-.5)*.28)),
      arrived:0,
    };
  });
  const destination=new THREE.Vector3(),worldPosition=new THREE.Vector3(),controlA=new THREE.Vector3(),controlB=new THREE.Vector3();
  const targetQ=new THREE.Quaternion(),parentQ=new THREE.Quaternion(),inverseQ=new THREE.Quaternion(),q=new THREE.Quaternion();
  const scale=new THREE.Vector3(),attachment=new THREE.Matrix4(),attachmentPosition=new THREE.Vector3(),attachmentQ=new THREE.Quaternion();
  const shadowPose=new THREE.Object3D();shadowPose.rotation.x=-Math.PI/2;
  let metrics={active:false,time:0,settled:0,total:60,phase:'scatter',spin:0};
  function update(time,{mobile=false}={}) {
    const t=Math.max(0,Math.min(ENTRANCE_DURATION,time));
    const floorY=mobile?-3.55:-2.3;
    stage.visible=true;ground.position.y=floorY-.035;
    const groundFade=1-entranceEase((t-6.1)/1.15);
    groundMaterial.uniforms.fade.value=shadowMaterial.uniforms.fade.value=groundFade;
    group.updateMatrixWorld(true);group.getWorldQuaternion(parentQ);inverseQ.copy(parentQ).invert();
    const railA=entranceEase((t-.65)/1.7),railB=entranceEase((t-.87)/1.7);
    codingRail.set(codingPoints,railA);templateRail.set(templatePoints,railB);
    pairingDashes?.reset();
    let settled=0;
    for(let n=0;n<60;n++) {
      const piece=pieces[n],{i,side,seed,seed2}=piece,plate=plates[i][side];
      const linear=clamp((t-piece.start)/piece.duration),f=entranceEase(linear),remaining=1-f;
      piece.arrived=entranceEase((linear-.88)/.12);
      if(linear===1)settled++;
      // A low-discrepancy bed reads as individual pieces rather than a clump.
      // All pieces have overlapping flights; no molecule pops into existence.
      const column=fract(n*.61803398875+.17),row=fract(n*.754877666+.31);
      piece.from.set((column-.5)*(mobile?4.5:12.1),floorY+.065+seed*.06,(row-.5)*5.1+.35);
      plate.getWorldPosition(destination);plate.getWorldQuaternion(targetQ);
      controlA.set(piece.from.x+(seed-.5)*1.4,piece.from.y+1.75+seed2*.8,piece.from.z-.55+seed*.8);
      controlB.set(destination.x+(side?1:-1)*(.45+seed*.55),destination.y-.7+seed*.25,destination.z+1.15+seed2*.55);
      worldPosition.copy(piece.from).multiplyScalar(remaining*remaining*remaining)
        .addScaledVector(controlA,3*remaining*remaining*f)
        .addScaledVector(controlB,3*remaining*f*f).addScaledVector(destination,f*f*f);
      // Quaternion interpolation resolves orientation before the final contact.
      // Endpoint velocity/acceleration comes from the rotating destination.
      q.copy(piece.q).slerp(targetQ,entranceEase(clamp(linear*1.14)));
      plate.position.copy(worldPosition);group.worldToLocal(plate.position);
      plate.quaternion.copy(inverseQ).multiply(q);
      plate.scale.multiplyScalar(1+.62*remaining);
      const sugar=sugars[i][side],reveal=entranceEase(((side?railB:railA)*30-i)*1.4);
      sugar.visible=reveal>.001;sugar.scale.setScalar(.78+.22*reveal);
      if(attachments){
        attachments.getMatrixAt(n,attachment);attachment.decompose(attachmentPosition,attachmentQ,scale);
        scale.multiplyScalar(piece.arrived);attachment.compose(attachmentPosition,attachmentQ,scale);attachments.setMatrixAt(n,attachment);
      }
      const lift=Math.max(0,worldPosition.y-floorY),radius=.52+Math.min(1.3,lift*.18);
      shadowPose.position.set(worldPosition.x,floorY,worldPosition.z);shadowPose.scale.set(radius,radius*.75,1);shadowPose.updateMatrix();
      shadows.setMatrixAt(n,shadowPose.matrix);shadowStrength.setX(n,Math.max(0,1-lift/3.4));
    }
    group.updateMatrixWorld(true);
    for(let i=0;i<30;i++){
      const contact=Math.min(pieces[i*2].arrived,pieces[i*2+1].arrived);
      if(contact>.01)pairBetween(plates[i][0],plates[i][1],contact);
    }
    if(attachments)attachments.instanceMatrix.needsUpdate=true;
    shadows.instanceMatrix.needsUpdate=true;shadowStrength.needsUpdate=true;
    metrics={active:true,time:t,settled,total:60,rails:[railA,railB],spin:entranceSpin(t),phase:t<.65?'scatter':t<1.65?'strands':settled<60?'gather':t<ENTRANCE_HANDOFF?'helix':'handoff'};
    return metrics;
  }
  function hide(){stage.visible=false;for(const pair of sugars)for(const sugar of pair){sugar.visible=true;sugar.scale.setScalar(1);}metrics={...metrics,active:false};}
  return {
    update,hide,inspect:()=>({...metrics}),
    dispose(){stage.removeFromParent();groundGeometry.dispose();groundMaterial.dispose();shadowGeometry.dispose();shadowMaterial.dispose();shadows.dispose();},
  };
}

import * as THREE from './vendor/three.module.js';
import { TRANSLATION_SITES } from './translation-layout.js';

// Original schematic domains. These are not PDB subunits or atomic surfaces.
// Smooth implicit unions give the exhibit a coherent, lobed silhouette instead
// of stacking separate spheres or adding fine noise to a single oval.
const LARGE = [
  [0, .85, -.60, .88, .57, .49],
  [-.72, 1.16, -.46, .66, .61, .52],
  [.67, 1.02, -.55, .73, .64, .49],
  [-1.00, .48, -.43, .44, .33, .37],
  [.96, .45, -.47, .46, .33, .38],
  [-.20, 1.56, -.64, .40, .38, .35],
];
const SMALL = [
  [-.25, -.80, -.57, 1.10, .34, .43],
  [.77, -.66, -.53, .66, .40, .43],
  [-.78, -.63, -.49, .52, .30, .41],
  [.02, -.48, -.51, 1.16, .17, .33],
];
const clamp = x => Math.max(0, Math.min(1, x));
const softMin = (a,b,k) => { const h=clamp(.5+.5*(b-a)/k); return b*(1-h)+a*h-k*h*(1-h); };
const corners=[[0,0,0],[1,0,0],[1,1,0],[0,1,0],[0,0,1],[1,0,1],[1,1,1],[0,1,1]];
const tetrahedra=[[0,5,1,6],[0,1,2,6],[0,2,3,6],[0,3,7,6],[0,7,4,6],[0,4,5,6]];
const edges=[[0,1],[0,2],[0,3],[1,2],[1,3],[2,3]];

export function createRibosomeShell(small, baseColor) {
  const domains=small?SMALL:LARGE;
  function field(x,y,z) {
    let distance=10;
    for(const [cx,cy,cz,rx,ry,rz] of domains) {
      const q=Math.hypot((x-cx)/rx,(y-cy)/ry,(z-cz)/rz);
      distance=softMin(distance,(q-1)*Math.min(rx,ry,rz),.12);
    }
    // Gentle recessed domain seams, with no micro-scale surface displacement.
    const front=clamp((z+.4)/.4);
    const seamX=small ? .38 : -.27;
    distance+=.045*front*Math.exp(-(((x-seamX-.13*y)/.13)**2+((y-(small?-.71:.98))/.56)**2));
    if(!small) {
      distance+=.10*Math.exp(-((x/.62)**2+((y-.27)/.18)**2+((z+.02)/.30)**2));
      // Recessed front channels share their lateral positions with the lesson's
      // tRNA sites. Surface complexity is organized around the visible task.
      for (const site of TRANSLATION_SITES) {
        const hollow=(Math.hypot((x-site.x)/.31,(y-.70)/.65,(z-.12)/.40)-1)*.31;
        distance=-softMin(-distance,hollow,.06);
      }
      // Broader shoulders / shallow domain boundaries, no fine displacement.
      distance+=.025*front*Math.exp(-(((y-1.25)/.10)**2))*Math.exp(-((x/.95)**2));
    } else {
      // Concave reading terrace follows the continuous mRNA path behind it.
      distance+=.065*front*Math.exp(-(((y+.48)/.11)**2))*Math.exp(-((x/1.24)**4));
    }
    return distance;
  }
  function normal(p) {
    const e=.002;
    return new THREE.Vector3(field(p.x+e,p.y,p.z)-field(p.x-e,p.y,p.z),field(p.x,p.y+e,p.z)-field(p.x,p.y-e,p.z),field(p.x,p.y,p.z+e)-field(p.x,p.y,p.z-e)).normalize();
  }
  const min=[-1.62,small?-1.24:.07,-1.25],max=[1.62,small?-.18:2.04,.22],step=.085;
  const counts=min.map((v,i)=>Math.ceil((max[i]-v)/step));
  const positions=[],normals=[],colors=[];
  const light=new THREE.Color(small?'#c4caba':'#dfcc9f'),dark=new THREE.Color(small?'#587368':'#877655');
  const colorAt=p=>{
    const seam=Math.exp(-(((p.x-(small ? .38 : -.27)-.13*p.y)/.16)**2+((p.y-(small?-.71:.98))/.56)**2))*clamp((p.z+.42)/.45);
    const domain=.5+.5*Math.sin(p.x*2.6+p.y*1.4);
    const channel=small ? Math.exp(-(((p.y+.48)/.13)**2)) : Math.max(...TRANSLATION_SITES.map(site=>Math.exp(-(((p.x-site.x)/.31)**2+((p.y-.68)/.65)**2))));
    return baseColor.clone().lerp(light,.15*domain).lerp(dark,Math.min(.44,.27*seam+.24*channel*clamp((p.z+.30)/.4)));
  };
  const append=p=>{const n=normal(p),c=colorAt(p);positions.push(p.x,p.y,p.z);normals.push(n.x,n.y,n.z);colors.push(c.r,c.g,c.b);};
  // Cache scalar values: cell corners are shared, all six tetrahedra use the
  // same diagonal, so adjacent cells meet without cracks.
  const nx=counts[0]+1,ny=counts[1]+1,nz=counts[2]+1,values=new Float32Array(nx*ny*nz);
  const index=(x,y,z)=>(x*ny+y)*nz+z;
  for(let x=0;x<nx;x++)for(let y=0;y<ny;y++)for(let z=0;z<nz;z++)values[index(x,y,z)]=field(min[0]+x*step,min[1]+y*step,min[2]+z*step);
  for(let x=0;x<counts[0];x++)for(let y=0;y<counts[1];y++)for(let z=0;z<counts[2];z++){
    const points=corners.map(([a,b,c])=>new THREE.Vector3(min[0]+(x+a)*step,min[1]+(y+b)*step,min[2]+(z+c)*step));
    const scalar=corners.map(([a,b,c])=>values[index(x+a,y+b,z+c)]);
    if(scalar.every(v=>v>=0)||scalar.every(v=>v<0))continue;
    for(const tet of tetrahedra){
      const polygon=[];
      for(const [i,j] of edges){const a=tet[i],b=tet[j];if((scalar[a]<0)===(scalar[b]<0))continue;polygon.push(points[a].clone().lerp(points[b],scalar[a]/(scalar[a]-scalar[b])));}
      if(polygon.length<3)continue;
      const center=polygon.reduce((sum,p)=>sum.add(p),new THREE.Vector3()).multiplyScalar(1/polygon.length),n=normal(center);
      const tangent=polygon[0].clone().sub(center).normalize(),bitangent=new THREE.Vector3().crossVectors(n,tangent).normalize();
      polygon.sort((a,b)=>{const pa=a.clone().sub(center),pb=b.clone().sub(center);return Math.atan2(pa.dot(bitangent),pa.dot(tangent))-Math.atan2(pb.dot(bitangent),pb.dot(tangent));});
      for(let i=1;i<polygon.length-1;i++){
        const a=polygon[0],b=polygon[i],c=polygon[i+1];
        const cross=b.clone().sub(a).cross(c.clone().sub(a));
        if(cross.lengthSq()<1e-14)continue;
        append(a);append(cross.dot(n)>0?b:c);append(cross.dot(n)>0?c:b);
      }
    }
  }
  const geometry=new THREE.BufferGeometry();
  geometry.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));
  geometry.setAttribute('normal',new THREE.Float32BufferAttribute(normals,3));
  geometry.setAttribute('color',new THREE.Float32BufferAttribute(colors,3));
  geometry.computeBoundingBox();geometry.computeBoundingSphere();
  geometry.userData.authoring='original implicit domain teaching shell';
  return geometry;
}

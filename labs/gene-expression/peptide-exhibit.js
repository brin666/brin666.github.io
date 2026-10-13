import * as THREE from './vendor/three.module.js';

// Five distinguishable, gently asymmetric teaching residues, not side-chain
// structures. No folding or extra residues are implied by these silhouettes.
export function createPeptideResidue(index) {
  const geometry=new THREE.SphereGeometry(1,48,32);
  const position=geometry.attributes.position;
  const axes=[[.96,.88,1],[1,.92,.89],[.94,.90,1],[.90,1,.93],[1,.86,.96]][index];
  const axis=new THREE.Vector3(Math.cos(index*1.3),.4,Math.sin(index*1.3)).normalize();
  const p=new THREE.Vector3();
  for(let i=0;i<position.count;i++){
    p.fromBufferAttribute(position,i);
    const dot=p.dot(axis);
    const radius=1+.052*Math.exp(-(((dot-.58)/.42)**2))-.022*Math.exp(-(((dot+.2)/.32)**2));
    position.setXYZ(i,p.x*axes[0]*radius,p.y*axes[1]*radius,p.z*axes[2]*radius);
  }
  geometry.computeVertexNormals();geometry.computeBoundingBox();geometry.computeBoundingSphere();
  geometry.userData.authoring='original smooth teaching residue';
  return geometry;
}

define(["./arrayFill-4513d7ad","./arrayRemoveDuplicates-d2f048c5","./buildModuleUrl-9085faaa","./Cartographic-3309dd0d","./Check-7b2a090c","./ComponentDatatype-c140a87d","./PolylineVolumeGeometryLibrary-b276ee2b","./CorridorGeometryLibrary-d8dfc13a","./when-b60132fc","./Rectangle-dee65d21","./GeometryAttribute-c65394ac","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./IndexDatatype-8a5eead4","./Math-119be1a3","./PolygonPipeline-d83979ed","./FeatureDetection-806b12f0","./Event-16a2dfbf","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./Cartesian2-db21342c","./Cartesian4-3ca25aab","./EllipsoidTangentPlane-1dfa0a87","./IntersectionTests-0d6905a3","./Plane-a3d8b3d2","./PolylinePipeline-a5200218","./EllipsoidGeodesic-139a7db9","./EllipsoidRhumbLine-30b5229b","./earcut-2.2.1-20c8012f"],(function(e,t,i,r,a,o,n,s,l,d,u,p,f,h,y,c,g,b,v,m,A,_,E,C,G,P,T,w,L){"use strict";var D=new r.Cartesian3,k=new r.Cartesian3,N=new r.Cartesian3;function O(e,t){var i,a,d,f=[],y=e.positions,c=e.corners,g=e.endPositions,b=new p.GeometryAttributes,v=0,m=0,A=0;for(a=0;a<y.length;a+=2)v+=d=y[a].length-3,A+=d/3*4,m+=y[a+1].length-3;for(v+=3,m+=3,a=0;a<c.length;a++){i=c[a];var _=c[a].leftPositions;l.defined(_)?(v+=d=_.length,A+=d/3*2):(m+=d=c[a].rightPositions.length,A+=d/3*2)}var E,C=l.defined(g);C&&(v+=E=g[0].length-3,m+=E,A+=4*(E/=3));var G,P,T,w,L,O,V=v+m,x=new Float64Array(V),H=0,I=V-1,M=E/2,R=h.IndexDatatype.createTypedArray(V/3,A+4),S=0;if(R[S++]=H/3,R[S++]=(I-2)/3,C){f.push(H/3),O=D,L=k;var F=g[0];for(a=0;a<M;a++)O=r.Cartesian3.fromArray(F,3*(M-1-a),O),L=r.Cartesian3.fromArray(F,3*(M+a),L),s.CorridorGeometryLibrary.addAttribute(x,L,H),s.CorridorGeometryLibrary.addAttribute(x,O,void 0,I),w=(P=H/3)+1,T=(G=(I-2)/3)-1,R[S++]=G,R[S++]=T,R[S++]=P,R[S++]=w,H+=3,I-=3}var U=0,B=y[U++],Y=y[U++];for(x.set(B,H),x.set(Y,I-Y.length+1),d=Y.length-3,f.push(H/3,(I-2)/3),a=0;a<d;a+=3)w=(P=H/3)+1,T=(G=(I-2)/3)-1,R[S++]=G,R[S++]=T,R[S++]=P,R[S++]=w,H+=3,I-=3;for(a=0;a<c.length;a++){var q,W,J=(i=c[a]).leftPositions,j=i.rightPositions,z=N;if(l.defined(J)){for(I-=3,W=T,f.push(w),q=0;q<J.length/3;q++)z=r.Cartesian3.fromArray(J,3*q,z),R[S++]=W-q-1,R[S++]=W-q,s.CorridorGeometryLibrary.addAttribute(x,z,void 0,I),I-=3;f.push(W-Math.floor(J.length/6)),t===n.CornerType.BEVELED&&f.push((I-2)/3+1),H+=3}else{for(H+=3,W=w,f.push(T),q=0;q<j.length/3;q++)z=r.Cartesian3.fromArray(j,3*q,z),R[S++]=W+q,R[S++]=W+q+1,s.CorridorGeometryLibrary.addAttribute(x,z,H),H+=3;f.push(W+Math.floor(j.length/6)),t===n.CornerType.BEVELED&&f.push(H/3-1),I-=3}for(B=y[U++],Y=y[U++],B.splice(0,3),Y.splice(Y.length-3,3),x.set(B,H),x.set(Y,I-Y.length+1),d=Y.length-3,q=0;q<Y.length;q+=3)P=(w=H/3)-1,G=(T=(I-2)/3)+1,R[S++]=G,R[S++]=T,R[S++]=P,R[S++]=w,H+=3,I-=3;H-=3,I+=3,f.push(H/3,(I-2)/3)}if(C){H+=3,I-=3,O=D,L=k;var K=g[1];for(a=0;a<M;a++)O=r.Cartesian3.fromArray(K,3*(E-a-1),O),L=r.Cartesian3.fromArray(K,3*a,L),s.CorridorGeometryLibrary.addAttribute(x,O,void 0,I),s.CorridorGeometryLibrary.addAttribute(x,L,H),P=(w=H/3)-1,G=(T=(I-2)/3)+1,R[S++]=G,R[S++]=T,R[S++]=P,R[S++]=w,H+=3,I-=3;f.push(H/3)}else f.push(H/3,(I-2)/3);return R[S++]=H/3,R[S++]=(I-2)/3,b.position=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.DOUBLE,componentsPerAttribute:3,values:x}),{attributes:b,indices:R,wallIndices:f}}function V(e){var t=(e=l.defaultValue(e,l.defaultValue.EMPTY_OBJECT)).positions,i=e.width,a=l.defaultValue(e.height,0),o=l.defaultValue(e.extrudedHeight,a);this._positions=t,this._ellipsoid=d.Ellipsoid.clone(l.defaultValue(e.ellipsoid,d.Ellipsoid.WGS84)),this._width=i,this._height=Math.max(a,o),this._extrudedHeight=Math.min(a,o),this._cornerType=l.defaultValue(e.cornerType,n.CornerType.ROUNDED),this._granularity=l.defaultValue(e.granularity,y.CesiumMath.RADIANS_PER_DEGREE),this._offsetAttribute=e.offsetAttribute,this._workerName="createCorridorOutlineGeometry",this.packedLength=1+t.length*r.Cartesian3.packedLength+d.Ellipsoid.packedLength+6}V.pack=function(e,t,i){i=l.defaultValue(i,0);var a=e._positions,o=a.length;t[i++]=o;for(var n=0;n<o;++n,i+=r.Cartesian3.packedLength)r.Cartesian3.pack(a[n],t,i);return d.Ellipsoid.pack(e._ellipsoid,t,i),i+=d.Ellipsoid.packedLength,t[i++]=e._width,t[i++]=e._height,t[i++]=e._extrudedHeight,t[i++]=e._cornerType,t[i++]=e._granularity,t[i]=l.defaultValue(e._offsetAttribute,-1),t};var x=d.Ellipsoid.clone(d.Ellipsoid.UNIT_SPHERE),H={positions:void 0,ellipsoid:x,width:void 0,height:void 0,extrudedHeight:void 0,cornerType:void 0,granularity:void 0,offsetAttribute:void 0};return V.unpack=function(e,t,i){t=l.defaultValue(t,0);for(var a=e[t++],o=new Array(a),n=0;n<a;++n,t+=r.Cartesian3.packedLength)o[n]=r.Cartesian3.unpack(e,t);var s=d.Ellipsoid.unpack(e,t,x);t+=d.Ellipsoid.packedLength;var u=e[t++],p=e[t++],f=e[t++],h=e[t++],y=e[t++],c=e[t];return l.defined(i)?(i._positions=o,i._ellipsoid=d.Ellipsoid.clone(s,i._ellipsoid),i._width=u,i._height=p,i._extrudedHeight=f,i._cornerType=h,i._granularity=y,i._offsetAttribute=-1===c?void 0:c,i):(H.positions=o,H.width=u,H.height=p,H.extrudedHeight=f,H.cornerType=h,H.granularity=y,H.offsetAttribute=-1===c?void 0:c,new V(H))},V.createGeometry=function(a){var n=a._positions,d=a._width,p=a._ellipsoid;n=function(e,t){for(var i=0;i<e.length;i++)e[i]=t.scaleToGeodeticSurface(e[i],e[i]);return e}(n,p);var b=t.arrayRemoveDuplicates(n,r.Cartesian3.equalsEpsilon);if(!(b.length<2||d<=0)){var v,m=a._height,A=a._extrudedHeight,_=!y.CesiumMath.equalsEpsilon(m,A,0,y.CesiumMath.EPSILON2),E={ellipsoid:p,positions:b,width:d,cornerType:a._cornerType,granularity:a._granularity,saveAttributes:!1};if(_)E.height=m,E.extrudedHeight=A,E.offsetAttribute=a._offsetAttribute,v=function(t){var i=t.ellipsoid,r=O(s.CorridorGeometryLibrary.computePositions(t),t.cornerType),a=r.wallIndices,n=t.height,d=t.extrudedHeight,p=r.attributes,y=r.indices,g=p.position.values,b=g.length,v=new Float64Array(b);v.set(g);var m,A=new Float64Array(2*b);if(g=c.PolygonPipeline.scaleToGeodeticHeight(g,n,i),v=c.PolygonPipeline.scaleToGeodeticHeight(v,d,i),A.set(g),A.set(v,b),p.position.values=A,b/=3,l.defined(t.offsetAttribute)){var _=new Uint8Array(2*b);if(t.offsetAttribute===f.GeometryOffsetAttribute.TOP)_=e.arrayFill(_,1,0,b);else{var E=t.offsetAttribute===f.GeometryOffsetAttribute.NONE?0:1;_=e.arrayFill(_,E)}p.applyOffset=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:_})}var C=y.length,G=h.IndexDatatype.createTypedArray(A.length/3,2*(C+a.length));G.set(y);var P,T,w=C;for(m=0;m<C;m+=2){var L=y[m],D=y[m+1];G[w++]=L+b,G[w++]=D+b}for(m=0;m<a.length;m++)T=(P=a[m])+b,G[w++]=P,G[w++]=T;return{attributes:p,indices:G}}(E);else if((v=O(s.CorridorGeometryLibrary.computePositions(E),E.cornerType)).attributes.position.values=c.PolygonPipeline.scaleToGeodeticHeight(v.attributes.position.values,m,p),l.defined(a._offsetAttribute)){var C=v.attributes.position.values.length,G=new Uint8Array(C/3),P=a._offsetAttribute===f.GeometryOffsetAttribute.NONE?0:1;e.arrayFill(G,P),v.attributes.applyOffset=new u.GeometryAttribute({componentDatatype:o.ComponentDatatype.UNSIGNED_BYTE,componentsPerAttribute:1,values:G})}var T=v.attributes,w=i.BoundingSphere.fromVertices(T.position.values,void 0,3);return new u.Geometry({attributes:T,indices:v.indices,primitiveType:g.PrimitiveType.LINES,boundingSphere:w,offsetAttribute:a._offsetAttribute})}},function(e,t){return l.defined(t)&&(e=V.unpack(e,t)),e._ellipsoid=d.Ellipsoid.clone(e._ellipsoid),V.createGeometry(e)}}));

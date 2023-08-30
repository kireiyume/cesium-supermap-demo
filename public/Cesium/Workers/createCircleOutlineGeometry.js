define(["./Cartographic-3309dd0d","./Check-7b2a090c","./when-b60132fc","./EllipseOutlineGeometry-877eb997","./Rectangle-dee65d21","./Math-119be1a3","./arrayFill-4513d7ad","./buildModuleUrl-9085faaa","./FeatureDetection-806b12f0","./Cartesian4-3ca25aab","./RuntimeError-4a5c8994","./WebGLConstants-4ae0db90","./Event-16a2dfbf","./ComponentDatatype-c140a87d","./EllipseGeometryLibrary-a39b75ad","./GeometryAttribute-c65394ac","./Cartesian2-db21342c","./GeometryAttributes-252e9929","./GeometryOffsetAttribute-fbeb6f1a","./IndexDatatype-8a5eead4"],(function(e,i,t,r,l,n,a,o,s,d,u,c,m,p,y,f,G,_,b,h){"use strict";function g(e){var i=(e=t.defaultValue(e,t.defaultValue.EMPTY_OBJECT)).radius,l={center:e.center,semiMajorAxis:i,semiMinorAxis:i,ellipsoid:e.ellipsoid,height:e.height,extrudedHeight:e.extrudedHeight,granularity:e.granularity,numberOfVerticalLines:e.numberOfVerticalLines};this._ellipseGeometry=new r.EllipseOutlineGeometry(l),this._workerName="createCircleOutlineGeometry"}g.packedLength=r.EllipseOutlineGeometry.packedLength,g.pack=function(e,i,t){return r.EllipseOutlineGeometry.pack(e._ellipseGeometry,i,t)};var E=new r.EllipseOutlineGeometry({center:new e.Cartesian3,semiMajorAxis:1,semiMinorAxis:1}),x={center:new e.Cartesian3,radius:void 0,ellipsoid:l.Ellipsoid.clone(l.Ellipsoid.UNIT_SPHERE),height:void 0,extrudedHeight:void 0,granularity:void 0,numberOfVerticalLines:void 0,semiMajorAxis:void 0,semiMinorAxis:void 0};return g.unpack=function(i,n,a){var o=r.EllipseOutlineGeometry.unpack(i,n,E);return x.center=e.Cartesian3.clone(o._center,x.center),x.ellipsoid=l.Ellipsoid.clone(o._ellipsoid,x.ellipsoid),x.height=o._height,x.extrudedHeight=o._extrudedHeight,x.granularity=o._granularity,x.numberOfVerticalLines=o._numberOfVerticalLines,t.defined(a)?(x.semiMajorAxis=o._semiMajorAxis,x.semiMinorAxis=o._semiMinorAxis,a._ellipseGeometry=new r.EllipseOutlineGeometry(x),a):(x.radius=o._semiMajorAxis,new g(x))},g.createGeometry=function(e){return r.EllipseOutlineGeometry.createGeometry(e._ellipseGeometry)},function(i,r){return t.defined(r)&&(i=g.unpack(i,r)),i._ellipseGeometry._center=e.Cartesian3.clone(i._ellipseGeometry._center),i._ellipseGeometry._ellipsoid=l.Ellipsoid.clone(i._ellipseGeometry._ellipsoid),g.createGeometry(i)}}));

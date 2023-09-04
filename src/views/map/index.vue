<template>
  <div class="map-row">
    <vc-viewer :showCredit="false" :infoBox="false" @ready="onViewerReady">
      <vc-layer-imagery>
        <vc-imagery-provider-arcgis ref="provider"></vc-imagery-provider-arcgis>
      </vc-layer-imagery>
      <VcDrawings
        @draw-evt="drawEvt"
        @ready="ready"
        :clampToGround="false"
        :polygonDrawingOpts="polygonDrawingOpts"
        :drawings="['polygon']"
      />
    </vc-viewer>
  </div>
</template>

<script>
import { dealPositions } from "./fn.js";
import { makeCartesian3Array } from "vue-cesium/es/utils/cesium-helpers";
import { DrawStatus } from "vue-cesium";
export default {
  data() {
    return {
      polygonDrawingOpts: {
        //功能配置
        preRenderDatas: [],
        labelOpts: [],
        pointOpts: {
          show: false, //隐藏顶点
        },
        onClick: null,
      },
      clPositions:
        "116.44064518780078,39.90919802648961,0;116.44237857163425,39.90026795955231,0;116.44896840573483,39.90021914422168,0;116.45133464146696,39.902119921251675,0;116.45296384495234,39.904804713916505,101.33967267273162;116.45392833331611,39.90948648605181,134.8753488361037;116.45635415551942,39.920266359089965,34.55450669503249;116.46160508917934,39.9227550829174,1.018653075599549;116.45515037693237,39.93409878164007,0",
    };
  },
  created() {
    let clPositions = dealPositions(this.clPositions);
    // clPositions.push(clPositions[0])
    // this.polygonDrawingOpts.preRenderDatas.push(clPositions);
  },
  methods: {
    async onViewerReady({ Cesium, viewer }) {
      const promise = viewer.scene.open(
        "https://www.supermapol.com/realspace/services/3D-CBD/rest/realspace"
      );
    },
    async ready({ Cesium, viewer, cesiumObject }) {
      let clPositions = dealPositions(this.clPositions);
      const polylineDrawing = {
        show: true,
        positions: makeCartesian3Array(clPositions),
        drawStatus: DrawStatus.AfterDraw,
        loop: true,
        distance: 0,
        area: 0,
        distances: [],
        labels: [],
        angles: [],

        polylineOpts: {
          arcType: 0,
          width: 4,
        },
        pointOpts: {},
        labelOpts: {},
        labelsOpts: {},
        primitiveOpts: {
          appearance: {
            type: "MaterialAppearance",
            options: {
              material: {
                fabric: {
                  type: "Color",
                  uniforms: {
                    color: "rgba(0,0,255,1)",
                    width: 3,
                  },
                },
              },
            },
          },
          depthFailAppearance: {
            type: "PolylineMaterialAppearance",
            options: {
              material: {
                fabric: {
                  type: "Color",
                  uniforms: {
                    color: "rgba(0,0,255,1)",
                    width: 3,
                  },
                },
              },
            },
          },
        },
        polygonOpts: {
          appearance: {
            type: "MaterialAppearance",
            options: {
              faceForward: true,
              material: {
                fabric: {
                  type: "Color",
                  uniforms: {
                    color: "rgba(255, 0, 0, 0.5)",
                  },
                },
              },
            },
          },
          // depthFailAppearance: {
          //   type: "MaterialAppearance",
          //   options: {
          //     faceForward: true,
          //     material: {
          //       fabric: {
          //         type: "Color",
          //         uniforms: {
          //           color: "rgba(255, 0, 0, 0.5)",
          //         },
          //       },
          //     },
          //   },
          // },
        },
      };
      cesiumObject[0].cmpRef.value.renderDatas.value.push(polylineDrawing);
      // 如果是绘制完成之后再改 就按下面的形式改
      // // 1.设置区域颜色
      // cesiumObject[0].cmpRef.value.renderDatas.value[0].polygonOpts.appearance =
      //   {
      //     type: "MaterialAppearance",
      //     options: {
      //       faceForward: true,
      //       material: {
      //         fabric: {
      //           type: "Color",
      //           uniforms: {
      //             color: "rgba(255, 0, 0, 0.5)",
      //           },
      //         },
      //       },
      //     },
      //   };

      // 2.设置区域边框
      // cesiumObject[0].cmpRef.value.renderDatas.value[0].primitiveOpts.appearance =
      //   {
      //     type: "MaterialAppearance",
      //     options: {
      //       material: {
      //         fabric: {
      //           type: "Color",
      //           uniforms: {
      //             color: "rgba(0,0,255,1)",
      //             width: 3,
      //           },
      //         },
      //       },
      //     },
      //   };

      // cesiumObject[0].cmpRef.value.renderDatas.value[0].primitiveOpts.depthFailAppearance =
      //   {
      //     type: "PolylineMaterialAppearance",
      //     options: {
      //       material: {
      //         fabric: {
      //           type: "Color",
      //           uniforms: {
      //             color: "rgba(0,0,255,1)",
      //             width: 3,
      //           },
      //         },
      //       },
      //     },
      //   };

      // 3.设置区域边框宽度
      // cesiumObject[0].cmpRef.value.renderDatas.value[0].polylineOpts = {
      //   arcType: 0,
      //   width: 4,
      // };
    },
    drawEvt(e) {
      const { positions, position, finished, index } = e;
      if (finished) {
        // 坐标转换
        const Cartesian3_to_WGS84 = function (point) {
          const cartesian33 = new Cesium.Cartesian3(point.x, point.y, point.z);
          const cartographic = Cesium.Cartographic.fromCartesian(cartesian33);
          const lat = Cesium.Math.toDegrees(cartographic.latitude);
          const lng = Cesium.Math.toDegrees(cartographic.longitude);
          const alt = cartographic.height < 0 ? 0 : cartographic.height;
          return String([lng, lat, alt]);
        };
        // 获取坐标集合
        let clPositions = null;
        let clCenter = null;
        if (Array.isArray(positions)) {
          // 面
          clPositions = "";
          positions.map((i) => {
            let result = Cartesian3_to_WGS84(i);
            clPositions += result + ";";
          });
          clPositions = clPositions.slice(0, clPositions.length - 1);
          // 获取中心点
          const center = Cesium.BoundingSphere.fromPoints(positions).center;
          clCenter = Cartesian3_to_WGS84(center);
        } else {
          // 点
          clCenter = Cartesian3_to_WGS84(position);
        }
      }
    },
  },
};
</script>

<style scoped>
.map-row {
  width: 100vw;
  height: 100vh;
}
/* :deep(.vc-drawings-container) {
  display: none;
} */
</style>

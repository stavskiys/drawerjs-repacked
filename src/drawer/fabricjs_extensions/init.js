import initErasableMixin from './ErasableMixin'
import initErasableObject from './ErasableObject'
import initSegmentablePolygon from './SegmentablePolygon'
import initPText from './PText'
import initErasableText from './ErasableText'
import initErasableArrow from './ErasableArrow'
import initArrow from './Arrow'
import initClipping from './Clipping'
import initErasableImage from './ErasableImage'
import initErasableLine from './ErasableLine'
import initErasablePath from './ErasablePath'
import initErasablePencilBrush from './ErasablePencilBrush'
import initFloatingControl from './FloatingControl'
import initFabricJsExtensionsLine from './Line'
import initPCircle from './PCircle'
import initPRect from './PRect'
import initPTriangle from './PTriangle'

export default (function (DrawerJs) {
  initErasableMixin(DrawerJs.global)
  initErasableObject(DrawerJs.global)
  initSegmentablePolygon(DrawerJs.global)
  initPText(DrawerJs.global)
  initErasableText(DrawerJs.global)
  initArrow(DrawerJs.global)
  initClipping(DrawerJs.clipping)
  initErasableArrow(DrawerJs.global)
  initErasableImage(DrawerJs.global)
  initErasableLine(DrawerJs.global)
  initErasablePath(DrawerJs.global)
  initErasablePencilBrush(DrawerJs.global)
  initFloatingControl(DrawerJs.global, DrawerJs.util)
  initFabricJsExtensionsLine(DrawerJs.global)
  initPCircle(DrawerJs.global)
  initPRect(DrawerJs.global)
  initPTriangle(DrawerJs.global)
})

import initBaseTool from './BaseTool'
import initBaseOptionTool from './BaseOptionTool'
import initBaseTextOptionTool from './BaseTextOptionTool'
import initBaseShape from './BaseShape'
import initBaseBrush from './BaseBrush'
import initApiSetInactiveDrawerImage from './api-set-inactive-drawer-image/ApiSetInactiveDrawerImage'
import initEraser from './brush-eraser/Eraser'
import initEraserBrush from './brush-eraser/EraserBrush'
import initEraserPath from './brush-eraser/EraserPath'
import initSimpleWhiteEraser from './brush-eraser-simplewhite/SimpleWhiteEraser'
import initPencil from './brush-pencil/Pencil'
import initCanvasProperties from './feature-canvas-properties/CanvasProperties'
import initCloseButton from './feature-close-button/CloseButton'
import initImageCropPlugin from './feature-image-crop/ImageCropPlugin'
import initImageCrop from './feature-image-crop/ImageCrop'
import initMovableFloatingMode from './feature-movable-floating-mode/MovableFloatingMode'
import initMinimizeButton from './feature-minimize-button/MinimizeButton'
import initOvercanvasPopup from './feature-overcanvas-popup/OvercanvasPopup'
import initOpenPopupButton from './feature-overcanvas-popup/OpenPopupButton'
import initResize from './feature-resize/Resize'
import initContextMenu from './feature-shape-contextmenu/ContextMenu.Api'
import initShapeContextMenu from './feature-shape-contextmenu/ShapeContextMenu'
import initToggleVisibilityButton from './feature-toggle-visiblity-button/ToggleVisibilityButton'
import initZoomViewport from './feature-zoom/ZoomViewport'
import initZoomPlugin from './feature-zoom/Zoom'
import initBrushSize from './option-brushSize/BrushSize'
import initLineWidth from './option-line-width/LineWidth'
import initOpacity from './option-opacity/Opacity'
import initStrokeWidth from './option-stroke-width/StrokeWidth'
import initTextAlign from './option-text-styles/TextAlign'
import initTextBackgroundColor from './option-text-styles/TextBackgroundColor'
import initTextColor from './option-text-styles/TextColor'
import initTextDecoration from './option-text-styles/TextDecoration'
import initTextFontFamily from './option-text-styles/TextFontFamily'
import initTextFontSize from './option-text-styles/TextFontSize'
import initTextFontStyle from './option-text-styles/TextFontStyle'
import initTextFontWeight from './option-text-styles/TextFontWeight'
import initTextLineHeight from './option-text-styles/TextLineHeight'
import initShapeBorder from './options-shape-border/ShapeBorder'
import initArrowShape from './shape-arrow/ArrowShape'
import initArrowTwoSideShape from './shape-arrow/ArrowTwoSideShape'
import initCircle from './shape-circle/Circle'
import initImageShape from './shape-image/ImageShape'
import initImageToolApi from './shape-image/ImageToolApi'
import initLine from './shape-line/Line'
import initRectangle from './shape-rectangle/Rectangle'
import initText from './shape-text/Text'
import initFullscreen from './feature-fullscreen/Fullscreen'
import initFullscreenModeButton from './feature-fullscreen/FullscreenModeButton'
import initBackgroundImage from './background-image/BackgroundImage'
import initBackgroundImageApi from './background-image/BackgroundImageApi'
import initColorpickerControl from './option-color/ColorpickerControl'
import initOpacityControl from './option-color/OpacityControl'
import initColor from './option-color/Color'
import initColorpickerHtml5 from './option-colorpicker-html5/ColorpickerHtml5'

export default (function ($, DrawerJs) {
  initBaseTool($, DrawerJs.plugins)
  initBaseOptionTool($, DrawerJs.plugins)
  initBaseTextOptionTool($, DrawerJs.plugins, DrawerJs.plugins.BaseToolOptions, DrawerJs.util)
  initBaseShape($, DrawerJs.plugins, DrawerJs.plugins.BaseTool, DrawerJs.util)
  initBaseBrush($, DrawerJs.plugins, DrawerJs.plugins.BaseTool, DrawerJs.util)
  initApiSetInactiveDrawerImage($, DrawerJs.DrawerApi, DrawerJs.util)
  initEraser($, DrawerJs.brushes, DrawerJs.plugins.BaseBrush, DrawerJs.plugins, DrawerJs.util)
  initEraserBrush(DrawerJs.brushes)
  initEraserPath(DrawerJs.global)
  initSimpleWhiteEraser($, DrawerJs.plugins.BaseBrush, DrawerJs.plugins, DrawerJs.util)
  initPencil($, DrawerJs.plugins.BaseBrush, DrawerJs.plugins, DrawerJs.util)
  initCanvasProperties($, DrawerJs.plugins)
  initCloseButton($, DrawerJs.plugins, DrawerJs.util)
  initImageCropPlugin($, DrawerJs.plugins, DrawerJs.util)
  initImageCrop($, DrawerJs.plugins, DrawerJs.util)
  initMovableFloatingMode($, DrawerJs.plugins, DrawerJs.util)
  initMinimizeButton($, DrawerJs.plugins, DrawerJs.util, DrawerJs.DrawerApi)
  initOvercanvasPopup($, DrawerJs.plugins, DrawerJs.util)
  initOpenPopupButton($, DrawerJs.plugins, DrawerJs.util)
  initResize($, DrawerJs.plugins, DrawerJs.util)
  initContextMenu(DrawerJs.DrawerApi)
  initShapeContextMenu($, DrawerJs.plugins, DrawerJs.util)
  initToggleVisibilityButton($, DrawerJs.plugins, DrawerJs.util)
  initZoomViewport(DrawerJs.global, $, DrawerJs.plugins)
  initZoomPlugin(DrawerJs.global, $, DrawerJs.plugins, DrawerJs.DrawerApi, DrawerJs.util)
  initBrushSize($, DrawerJs.plugins, DrawerJs.plugins.BaseToolOptions)
  initLineWidth($, DrawerJs.plugins, DrawerJs.plugins.BaseToolOptions, DrawerJs.util)
  initOpacity($, DrawerJs.plugins, DrawerJs.plugins.BaseToolOptions, DrawerJs.util)
  initStrokeWidth($, DrawerJs.plugins, DrawerJs.plugins.BaseToolOptions, DrawerJs.util)
  initTextAlign($, DrawerJs.plugins, DrawerJs.util, DrawerJs.plugins.BaseTextOptionTool)
  initTextBackgroundColor($, DrawerJs.plugins, DrawerJs.util, DrawerJs.plugins.BaseTextOptionTool)
  initTextColor($, DrawerJs.plugins, DrawerJs.util, DrawerJs.plugins.BaseTextOptionTool)
  initTextDecoration($, DrawerJs.plugins, DrawerJs.util, DrawerJs.plugins.BaseTextOptionTool)
  initTextFontFamily($, DrawerJs.plugins, DrawerJs.util, DrawerJs.plugins.BaseTextOptionTool)
  initTextFontSize($, DrawerJs.plugins, DrawerJs.util, DrawerJs.plugins.BaseTextOptionTool)
  initTextFontStyle($, DrawerJs.plugins, DrawerJs.util, DrawerJs.plugins.BaseTextOptionTool)
  initTextFontWeight($, DrawerJs.plugins, DrawerJs.util, DrawerJs.plugins.BaseTextOptionTool)
  initTextLineHeight($, DrawerJs.plugins, DrawerJs.util, DrawerJs.plugins.BaseTextOptionTool)
  initShapeBorder($, DrawerJs.plugins, DrawerJs.plugins.BaseToolOptions, DrawerJs.util)
  initArrowShape($, DrawerJs.plugins.BaseShape, DrawerJs.plugins)
  initArrowTwoSideShape($, DrawerJs.plugins.BaseShape, DrawerJs.plugins)
  initCircle($, DrawerJs.plugins.BaseShape, DrawerJs.plugins)
  initImageShape($, DrawerJs.plugins.BaseTool, DrawerJs.plugins, DrawerJs.util)
  initImageToolApi(DrawerJs.DrawerApi)
  initLine($, DrawerJs.plugins.BaseShape, DrawerJs.plugins)
  initRectangle($, DrawerJs.plugins.BaseShape, DrawerJs.plugins)
  initText($, DrawerJs.plugins.BaseShape, DrawerJs.plugins, DrawerJs.util)
  initFullscreen($, DrawerJs.plugins, DrawerJs.util)
  initFullscreenModeButton($, DrawerJs.plugins, DrawerJs.util, DrawerJs.DrawerApi)
  initBackgroundImage($, DrawerJs.plugins.BaseTool, DrawerJs.plugins, DrawerJs.util)
  initBackgroundImageApi(DrawerJs.DrawerApi)
  initColorpickerControl($, DrawerJs.plugins, DrawerJs.util)
  initOpacityControl($, DrawerJs.plugins, DrawerJs.util)
  initColor($, DrawerJs.plugins, DrawerJs.plugins.BaseToolOptions, DrawerJs.util)
  initColorpickerHtml5($, DrawerJs.plugins)
})

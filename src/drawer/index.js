import { fabric }  from 'fabric'
import DrawerJs from './core/Globals'
import Texts from './core/Localization_en'

import AssetsProvider from './utils/AssetsProvider'

// import toolbars
import initToolbars from './toolbars/init'
// core imports
import initCanvas from './core/Canvas'
import initUtil from './core/Util'
import initApi from './core/Drawer.Api'
import initObjectApi from './core/Drawer.ObjectApi'
import initDrawer from './core/Drawer'
import initDefaultOptions from './core/Drawer.DefaultOptions'
import initEvents from './core/Drawer.Events.js'
import initStorage from './core/Drawer.Storage.js'
// init fabric extensions
import initFabricJsExtensions from './fabricjs_extensions/init'
// import plugins init
import initPlugins from './plugins/init'

export default (function ($, $editor) {
  if (!window.$) { window.$ = $ }

  DrawerJs.$editor = $editor
  DrawerJs.texts = Texts
  DrawerJs.global = { fabric: fabric }
  DrawerJs.clipping = {}

  if ($editor.data('assets')) {
    DrawerJs.util.assets = AssetsProvider.init($editor.data('assets'))
  }

  // init toolbars
  initToolbars(window, $, DrawerJs)
  // core init
  initCanvas(DrawerJs, DrawerJs.util);
  initUtil($, DrawerJs.util)
  initApi(DrawerJs)
  initObjectApi(DrawerJs.DrawerApi)
  initDrawer($, DrawerJs, DrawerJs.plugins, DrawerJs.util, DrawerJs.texts)
  initDefaultOptions(DrawerJs.Drawer, DrawerJs.util, DrawerJs.texts)
  initEvents(DrawerJs.Drawer)
  initStorage(DrawerJs.Drawer, DrawerJs.util)
  // init fabric extensions
  initFabricJsExtensions(DrawerJs)
  // init plugins
  initPlugins($, DrawerJs)

  return DrawerJs
})

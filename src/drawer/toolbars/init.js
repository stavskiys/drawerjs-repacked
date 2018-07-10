import initToolbarTooltip from './ui-plugins/ToolbarTooltip'
import initToolbarTooltipManager from './ui-plugins/ToolbarTooltipManager'
import initToolbarComboBox from './ui-plugins/ToolbarComboBox'

export default (function (window, $, DrawerJs) {
  initToolbarTooltip(window, $, DrawerJs.util, DrawerJs.utilPlugins);
  initToolbarTooltipManager(window, $, DrawerJs.util, DrawerJs.utilPlugins)
  initToolbarComboBox(window, $, DrawerJs.util, DrawerJs.utilPlugins)
})

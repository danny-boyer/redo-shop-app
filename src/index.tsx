import {MiniAppConfig} from '@shopify/shop-minis-platform-sdk'

import {App} from './App'
import {Render as OrderManagementVisitShopRenderAfter} from './targets/shop.order-management.visit-shop.render-after/render'

const config: MiniAppConfig = {
  ViewerRoot: App,

  Targets: {
    'shop.order-management.visit-shop.render-after':
      OrderManagementVisitShopRenderAfter,
  },
}

export default config

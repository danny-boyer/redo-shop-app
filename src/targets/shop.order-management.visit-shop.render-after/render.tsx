import {useShopActions} from '@shopify/shop-minis-platform-sdk'
import {Button} from '@shopify/shop-minis-ui-extensions'
import {OrderManagementVisitShopRenderAfterQueryData} from './input.graphql'

export function Render({
  extensionData,
}: {
  extensionData: OrderManagementVisitShopRenderAfterQueryData
}) {
  const {openMiniViewer} = useShopActions()
  console.log('value from extension', extensionData.order?.returns?.value)

  const returns = extensionData.order?.returns?.value.split(',')

  return (
    <>
      <Button
        onPress={() => openMiniViewer({fromButton: true})}
        text={
          returns && returns?.length > 0
            ? 'Start another return'
            : 'Start return'
        }
      />
      {returns?.map((returnId, i) => (
        <Button
          key={i}
          onPress={() => openMiniViewer({returnId: returnId, fromButton: true})}
          text={returns.length > 1 ? `View return ${i + 1}` : 'View return'}
        />
      ))}
    </>
  )
}

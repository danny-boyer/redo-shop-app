import {Box, WebView} from '@shopify/shop-minis-platform-sdk'

export function App() {
  return (
    <Box height="100%" width="100%">
      <WebView
        originAllowlist={['*']}
        source={{uri: 'localhost:3011'}}
        onError={error => console.log(error)}
      />
    </Box>
  )
}

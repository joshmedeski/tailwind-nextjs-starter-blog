import * as Fathom from 'fathom-client'

import Script from 'next/script'
import siteMetadata from '@/data/siteMetadata'

const FathomAnalyticsScript = () => {
  return (
    <>
      <Script strategy="lazyOnload" id="sa-script">
        {`
          Fathom.load(${siteMetadata.analytics.fathomAnalyticsSiteId}, {
            includedDomains: [${siteMetadata.siteUrl}],
          });
        `}
      </Script>
      <Script strategy="lazyOnload" src="https://scripts.simpleanalyticscdn.com/latest.js" />
    </>
  )
}

// https://usefathom.com/docs/integrations/next
export const logEvent = (eventName, callback) => {
  if (callback) {
    return window.fathom?.trackPageview()
  } else {
    return window.fathom?.trackPageview()
  }
}

export default FathomAnalyticsScript

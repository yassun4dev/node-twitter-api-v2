1.7.2
-----
- Fix: Paginator can return multiple times the same results in some conditions
- Feat: .done properties for paginators, to know when a next page is fetchable

1.7.1
-----
- Fix: wrong type for optional parameter images in TweetEntityUrlV2

1.7.0
-----
- Feat: Create tweet v2 endpoint (thanks to @sudo-kaizen) #110
- Feat: Delete tweet v2 endpoint (thanks to @sudo-kaizen) #111
- Feat: Tweet thread and reply to a tweet v2
- Fix: BREAKING: Explicitly specify userId on userMutingUsers (thanks to @mika-f) #114

1.6.5
-----
- Fix: Increase retry timeout on stream reconnection

1.6.4
-----
- Fix: Reject stream reconnection if a reconnect process is already started

1.6.3
-----
- Fix: Streams will know correctly reject `.connect` `Promise` on connection error if `autoReconnect` is `false`

1.6.2
-----
- Feat: Streams do now support auto-reconnection for the initial connection attempt

1.6.1
-----
- Feat: New option for creating streams, `autoConnect` that is `true` by default ; Setting the value to `false` will cause the `TweetStream` object to be returned immediately (not in a `Promise`), because connection isn't awaited #92
- Fix: `autoReconnectRetries`: Setting this params to `Infinity` no longer causes the stream reconnection attempts to be delayed to next event loop turn #92
- Fix: Use `https.request(options)` instead of `https.request(url, options)`, because some people has outdated dependencies that overwrite native Node's exported function and break its signature #94 #96
- Feat: Next retry timeout computation can be customized by using `.nextRetryTimeout` property of `TweetStream` instance, that is function taking a `tryOccurence` and returning the number of milliseconds to wait before trying to reconnect

1.6.0
-----
- Feat: List v2 muted users endpoint #89
- Feat: Manage v2 lists endpoints
- Feat: Support user-flow with OAuth2 (beta - not documented yet)
- Fix: Incorrect typing for createMediaMetadata #93

1.5.2
-----
- Feat: Tweet thread helper #76 #79
- Fix: Explicit max_results parameters should now work properly in paginators #74 #84
- Fix: Endpoints with parameterized URLs now registers properly rate-limit data in cache store

1.5.1
-----
- Fix: Fix return type for v1.1 'tweets' wrapper #72

1.5.0
-----
- Feat: v1.1 List endpoints, GET and POST, with doc, paginators and typings #70
- Feat: Save rate limit information for last request of each endpoint #70
- Doc: Documentation improvements for uploading media #68 #70
- Doc: Fixed parameter name #67

1.4.1
-----
- Fix: Incorrect type union in MessageCreateAttachmentV1 & MessageCreateLocationV1
- Doc: Added real-life examples
- Doc: Add Twitter doc link to .tweet/.reply

1.4.0
-----
- Feat: Add every oauth/authenticate parameters #54 - thanks to @tbhmens
- Fix: Set allowSyntheticDefaultImport to false to improve compat #57 - thanks to @PLHery
- Feat: Add missing tweet.field items in type enumeration #60 - thanks to @filippkowalski
- Doc: Add info about error handling #61
- Feat: Endpoint wrappers for v2 Spaces endpoints #62
- Feat: Endpoint wrappers for v2 Batch Compliance endpoints #62
- Feat: Types & wrappers for account, friendships, users and tweets v1.1 endpoints #64
- Fix: Incorrect encoding of '*' character in query strings #63 #64

1.3.0
-----
- Doc: Improve rate-limit documentation #47 #32
- Feat: Public Direct Messages (DMs) 1.1 endpoints support: wrappers, typings, docs and tests #48
- Feat: New 05/06/07-2021 v2 endpoints wrappers #50
- Feat: Paginator mode for .following/.followers for v2 #50
- Fix: Many fixes for tweet streams auto-reconnect, handle connection errors more smoothly #50
- Feat: New events for tweet streams, that includes lost connection and reconnections #50
- Feat: Handle stream errors deliveries in a dedicated .DataError event (for v2 tweet streams) #50
- Fix: Corrections for body-mode auto-detection (mainly for manual API requests) #53

1.2.0
-----
- Fix: fetchLast was throwing an error with timelines #43
- Feat: Add .meta and .includes in v2 paginators #35 #46
- Feat: Add some missing attributes to tweetEntity typings #42

1.1.1
-----
- Fix: in streams, the KeepAlive was not emitted #33

1.1.0
-----
- Add the new v2 likes endpoint
- Fix: add some missing media types

1.0.0
-----
First Stable Version
- More tests, way more documentation
- Add every missing v2 endpoints
- Remove the two dependencies (form-data and oauth)
- Improve error management
- Fix issues with node12
- Fix issues with the auth API

0.4.0
-----
- Add V1 and V2 streaming V2 endpoints
- Add V2 followers and following endpoints
- Refactor / various fixes

0.3.0
-----
- Add the four API v2 user endpoints
- Improve type definitions
- Minor v2 search refactor

0.2.3
-----
- Fix npm package (was not built)

0.2.1
-----
- Export typescript definitions

0.2.0
-----
- Link and Oauth auth
- PUT/PATCH/DELETE
- improve get/post methods (build query strings, v1/v2 urls, ...)
- read/write/DMs segmentation
- native media chunked upload, with simultaneous send of file parts

0.1.0
-----
- First foundations
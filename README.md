[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

# strapi-provider-upload-ts-minio

This upload provider for [Strapi](https://github.com/strapi/strapi) uses the [JavaScript Minio.Client](https://docs.min.io/docs/javascript-client-api-reference.html) to upload files to a (self hosted) instance of [Minio](https://min.io/).

It's compatible with the the strapi 3.1.1.

## Installation and basic usage

```npm i strapi-provider-upload-ts-minio```

Add in `config/plugins.js` something like this:

Minimal config
```js
// File: ./config/plugins.js

module.exports = ({ env }) => ({
  upload: {
    provider: 'ts-minio',
    providerOptions: {
      accessKey: env('MINIO_ACCESS_KEY'),
      secretKey: env('MINIO_SECRET_KEY'),
      bucket: env('MINIO_BUCKET'),
      endPoint: env('MINIO_ENDPOINT'),
    },
  },
});
```

Advanced config
```js
// File: ./config/plugins.js

module.exports = ({ env }) => ({
  upload: {
    provider: 'ts-minio',
    providerOptions: {
      accessKey: env('MINIO_ACCESS_KEY'),
      secretKey: env('MINIO_SECRET_KEY'),
      bucket: env('MINIO_BUCKET'),
      internalEndpoint: env('MINIO_INTERNAL_ENDPOINT'), 
      externalEndpoint: env('MINIO_EXTERNAL_ENDPOINT'), 
      port: parseInt(env('MINIO_PORT'), 10) || 9000,
    },
  },
});
```


Run Strapi with env:
  - access key (ex: username)
  - secret key (ex: Q.ixuW@JGV!*ENWH9Ut62B!3)
  - internalEndpoint (ex: https://play.minio.io:1234)
  - externalEndpoint (ex: https://cdn.minio.io)
  - bucket (*must exist on your minio server* ex: bucketname)


Run Strapi with env:
```bash
MINIO_INTERNAL_ENDPOINT=https://play.minio.io:1234 \
MINIO_EXTERNAL_ENDPOINT=https://cdn.minio.io \
MINIO_ACCESS_KEY=username \
MINIO_SECRET_KEY=Q.ixuW@JGV!*ENWH9Ut62B!3 \
MINIO_BUCKET=bucketname \
  npm run start
```


From the providers list select **Minio Server**

NOTE: bucket policy must be set to allow your file to be readable. (just set it to: prefix \*, readonly)

## Config

There is only a couple of settings need to be provided to make it work. The following config settings are available:

| Config Label        | Internal Name | Value                                         |
| ------------------- | ------------- | --------------------------------------------- |
| Access API Token    | accessKey     | string                                        |
| Secret Access Token | secretKey     | string                                        |
| Bucket              | bucket        | string                                        |
| Endpoint            | endPoint/endpoint      | string                                        |
| Internal Endpoint            | internalEndpoint      | string                                        |
| External Endpoint            | externalEndpoint      | string                                        |
| Port                | port          | string                                        |
| SSL                 | useSSL        | string(true for ssl, anything else for false) |
| Folder              | folder        | string                                        |

## Thanks for examples
- [strapi-provider-upload-tp-minio](https://github.com/talentplatforms/strapi-provider-upload-tp-minio)
- [itechops/strapi-provider-upload-minio](https://github.com/itechops/strapi-provider-upload-minio)
- [kyuumeitai/strapi-provider-upload-minio](https://github.com/kyuumeitai/strapi-provider-upload-minio)

## Links
- [Strapi website](http://strapi.io/)
- [Strapi community on Slack](http://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)

## Write me and I help you if you have any problems
- [Email](mailto:hi@isuvorov.com)
- [Telegram chat](https://t.me/lskjs)

## Sponsorship
- Thanks [TrafficStars](https://github.com/trafficstars)

## Contributors ✨

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="https://isuvorov.com.com"><img src="https://avatars2.githubusercontent.com/u/1056977?v=4" width="100px;" alt=""/><br /><sub><b>Igor Suvorov</b></sub></a><br /><a href="#question-isuvorov" title="Answering Questions">💬</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/commits?author=isuvorov" title="Code">💻</a> <a href="#design-isuvorov" title="Design">🎨</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/commits?author=isuvorov" title="Documentation">📖</a> <a href="#example-isuvorov" title="Examples">💡</a> <a href="#ideas-isuvorov" title="Ideas, Planning, & Feedback">🤔</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/pulls?q=is%3Apr+reviewed-by%3Aisuvorov" title="Reviewed Pull Requests">👀</a> <a href="isuvorov/lib-starter-kit/isuvorov/lib-starter-kit/commits?author=isuvorov" title="Tests">⚠️</a> <a href="#a11y-isuvorov" title="Accessibility">️️️️♿️</a></td>
  </tr>
</table>

<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->
Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):


## License

This project is licensed under the MIT License - see the [MIT License](LICENSE) file for details


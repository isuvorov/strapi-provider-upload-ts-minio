# strapi-provider-upload-minio

> Minio Server upload file provider for Strapi.


## Installation and basic usage

```npm i strapi-provider-upload-iminio```

Add in `config/plugins.js` something like this:
```js
...
  upload: {
    provider: 'iminio',
    providerOptions: {
      internalEndpoint: env('MINIO_INTERNAL_ENDPOINT'),
      externalEndpoint: env('MINIO_EXTERNAL_ENDPOINT'),
      endpoint: env('MINIO_ENDPOINT'),
      accessKey: env('MINIO_ACCESS_KEY'),
      secretKey: env('MINIO_SECRET_KEY'),
      bucket: env('MINIO_BUCKET'),
    },
  },
...
```

from the providers list select **Minio Server**

Fill in env:
  - access key (ex: username)
  - secret key (ex: Q.ixuW@JGV!*ENWH9Ut62B!3)
  - internalEndpoint (ex: https://play.minio.io:1234)
  - externalEndpoint (ex: https://cdn.minio.io)
  - bucket (*must exist on your minio server* ex: bucketname)

NOTE: bucket policy must be set to allow your file to be readable. (just set it to: prefix \*, readonly)


Run 
```
MINIO_INTERNAL_ENDPOINT=https://play.minio.io:1234 \
MINIO_EXTERNAL_ENDPOINT=https://cdn.minio.io \
MINIO_ACCESS_KEY=username \
MINIO_SECRET_KEY=Q.ixuW@JGV!*ENWH9Ut62B!3 \
MINIO_BUCKET=bucketname \
  npm run start
```

## Resources

## Links

- [Strapi website](http://strapi.io/)
- [Strapi community on Slack](http://slack.strapi.io)
- [Strapi news on Twitter](https://twitter.com/strapijs)



## White to me and I help you
- [Email](mailto:hi@isuvorov.com)
- [Telegram chat](https://t.me/lskjs)

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


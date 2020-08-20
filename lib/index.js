'use strict';

/**
 * Module dependencies
 */

/* eslint-disable import/no-unresolved */
/* eslint-disable no-unused-vars */
// Public node modules.
const Minio = require('minio');
const { URL } = require('url');

module.exports = {
  provider: 'minio',
  name: 'Minio Server upload file provider',
  auth: {
    accessKey: {
      label: 'Access API Token',
      type: 'text',
    },
    secretKey: {
      label: 'Secret Access Token',
      type: 'text',
    },
    bucket: {
      label: 'Bucket',
      type: 'text',
    },
    internalEndpoint: {
      label: 'Internal Endpoint',
      type: 'text',
    },
    externalEndpoint: {
      label: 'External Endpoint',
      type: 'text',
    },
  },
  init: (config) => {
    const internalEndpoint = new URL(config.internalEndpoint || config.endpoint);
    const externalEndpoint = new URL(config.externalEndpoint || config.endpoint);
    const useSSL = internalEndpoint.protocol && internalEndpoint.protocol === 'https:';

    const externalEndpointPort = parseInt(externalEndpoint.port, 10) || (useSSL ? 443 : 80);
    const externalEndpointProtocol = externalEndpoint.protocol;

    const minio = new Minio.Client({
      endPoint: internalEndpoint.hostname,
      port: parseInt(internalEndpoint.port, 10) || (useSSL ? 443 : 80),
      useSSL: internalEndpoint.protocol && internalEndpoint.protocol === 'https:',
      accessKey: config.accessKey || config.public,
      secretKey: config.secretKey || config.private,
    });
    const getFilename = (file) => {
      return `${file.path ? `${file.path}.` : ''}${file.hash}${file.ext}`;
    };
    const getUrl = (file) => {
      const port = externalEndpointPort === 80 || externalEndpointPort === 443 ? '' : `:${externalEndpointPort}`;
      return `${externalEndpointProtocol}//${externalEndpoint.hostname}${port}/${config.bucket}/${getFilename(file)}`;
    };
    return {
      upload: async (file) => {
        const metaData = {
          'Content-Type': file.mime,
        };
        await minio.putObject(config.bucket, getFilename(file), Buffer.from(file.buffer, 'binary'), metaData);
        // eslint-disable-next-line no-param-reassign
        file.url = getUrl(file);
      },
      delete: (file) => {
        minio.removeObject(config.bucket, getFilename(file));
      },
    };
  },
};

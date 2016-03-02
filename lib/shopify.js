import Config from './config';
import ShopClient from './shop-client';
import CoreObject from 'buy-button-sdk/metal/core-object';

/**
 * @module js-buy-sdk
 * @submodule shopify
 */

/**
 * @class ShopifyBuy
 * @static
 */
const Shopify = new CoreObject({
  ShopClient,
  Config,

  /**
   * Create a ShopClient. This is the main entry point to the SDK.
   *
   * ```javascript
   * const client = ShopifyBuy.buildClient({
   *   apiKey: 'abc123',
   *   channelId: 123456,
   *   myShopifyDomain: 'myshop'
   * });
   * ```
   *
   * @method buildClient
   * @for ShopifyBuy
   * @static
   * @public
   * @param {Object} configAttrs A hash of required config data.
   * @param {String} configAttrs.apiKey Your api client's public token.
   * @param {String} configAttrs.channelId The channel from which to read
   * publications. Visit `<your-shops-domain>/admin/channels.json` while
   * authenticated to see a list of available channels.
   * @param {String} configAttrs.myShopifyDomain You shop's `myshopify.com`
   * domain.
   * @return {ShopClient} a client for the shop using your api credentials.
   */
  buildClient(configAttrs = {}) {
    const config = new Config(configAttrs);

    return new ShopClient(config);
  }
});

export default Shopify;
import '@babel/polyfill';

import Vue from 'vue';

import '../lib/vizr.css';
import Vizr from './components/Vizr';
import createDataService from './services/data-service';

/**
 * Main method that will create all the charts and populate them with data.
 *
 * @param {Number} pid - project id; used to construct the data queries.
 * @param {Boolean} canEdit - boolean indicating whether or not the links should display to
 *   create or edit charts.
 * @param {String} jsonAssetUrls - JSON-encoded string containing key/value pairs where
 *   the key is a relative file path like `lib/data.php`, and the value is the corresponding
 *   external module URL like `http://localhost/redcap/api/?type=module&prefix=vizr&page=lib%2Fdata&pid=14`
 */
export function run(pid, canEdit, jsonAssetUrls) {
  const assetUrls = JSON.parse(jsonAssetUrls);
  const dataService = createDataService(assetUrls);

  /**
   * Instantiate the Vue component tree.
   */
  new Vue({
    el: '.vizr-container',
    components: { Vizr },
    render(createElement) {
      return createElement(Vizr, {
        props: {
          pid: this.pid,
          canEdit: this.canEdit
        }
      });
    },
    data: {
      pid,
      canEdit
    },
    provide() {
      return {
        assetUrls,
        dataService
      };
    }
  });
}

"use strict";

/*

    https://github.com/yuriy77k/Officiality-checker-web3.js-/blob/master/CEW_tab/app/scripts/controllers/officialityCheckerCtrl.js#L41


 */
function mapToURL(_url) {
  try {
    const url = new URL(_url);

    return (
      url.protocol +
      "//" +
      url.host.match(/\w+\.\w+$/)[0] +
      url.pathname.match(/^\/\w*\/?/)[0]
    );
  } catch (e) {
    return null;
  }
}

class OfficialityContract extends InitContract {
  constructor() {
    //const oc = require('../../scripts/abiDefinitions/clo').find(i => i.address === "0xf6f29e5ba51171c4ef4997bd0208c7e9bc5d5eda");

    var json = {
      abi: [
        {
          constant: false,
          inputs: [{ name: "_name", type: "string" }],
          name: "remove_entry",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [{ name: "_who", type: "address" }],
          name: "fire",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [],
          name: "owner",
          outputs: [{ name: "", type: "address" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [
            { name: "_name", type: "string" },
            { name: "_link", type: "string" },
            {
              name: "_metadata",
              type: "string"
            }
          ],
          name: "add_entry",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: false,
          inputs: [{ name: "_who", type: "address" }],
          name: "hire",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          constant: true,
          inputs: [{ name: "_name", type: "string" }],
          name: "get_entry",
          outputs: [
            { name: "", type: "string" },
            { name: "", type: "string" },
            {
              name: "",
              type: "string"
            }
          ],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: true,
          inputs: [{ name: "_link", type: "string" }],
          name: "is_official",
          outputs: [{ name: "", type: "bool" }],
          payable: false,
          stateMutability: "view",
          type: "function"
        },
        {
          constant: false,
          inputs: [{ name: "_who", type: "address" }],
          name: "transfer_ownership",
          outputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "function"
        },
        {
          inputs: [],
          payable: false,
          stateMutability: "nonpayable",
          type: "constructor"
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "_name", type: "string" }],
          name: "Registered",
          type: "event"
        },
        {
          anonymous: false,
          inputs: [{ indexed: false, name: "_name", type: "string" }],
          name: "Removed",
          type: "event"
        }
      ],
      address: "0xf6f29e5ba51171c4ef4997bd0208c7e9bc5d5eda",
      name: "Officiality Checker"
    };

    super(json.abi, json.address, "CLO");
  }

  /*

        @param path string
        @returns Promise<bool>
     */

  handle_is_official(path) {
    const URLS = [
      path,
      "http://" + path,
      "http://" + path + "/",
      "https://" + path,
      "https://" + path + "/"
    ]
      .map(mapToURL)
      .filter(i => i);

    // console.log('URLS', URLS);

    return Promise.all(
      URLS.map(_url => this.call("is_official", { inputs: [_url] }))
    ).then(result => {
      this.is_official = result.some(item => item[0].value);
      return this.is_official;
    });
  }

  _test() {
    // should parse urls and return true for possible user inputs
    const paths = [
      "callisto.network",
      "https://callisto.network/",
      "https://callisto.network"
    ];

    Promise.all(paths.map(path => this.handle_is_official(path))).then(
      result => {
        const allOfficial = result.every(i => i);

        if (!allOfficial) {
          console.error(result, paths);
        } else {
          console.log("success", result, allOfficial);
        }
      }
    );
  }
}

const officialityChecker = function() {
  // https://github.com/EthereumCommonwealth/Proposals/issues/10

  return {
    template: require("./officiality-checker.html"),
    link: function(scope) {
      scope.input = {
        link: "",
        show: 0
      };

      scope.contract = new OfficialityContract();

      scope.handleSubmit = function() {
        scope.input.show = 1;
        scope.contract
          .handle_is_official(scope.input.link)
          .then(is_official => {
            scope.$apply(function() {
              scope.input.show = is_official ? 2 : 3;
              // console.log('is_official', is_official, scope.input.show);
            });
          });
      };
    }
  };
};

module.exports = officialityChecker;

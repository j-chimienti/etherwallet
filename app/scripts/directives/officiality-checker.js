'use strict';

class OfficialityContract extends InitContract {


    tester() {


        const paths = [
            'callisto.network',
            'https://callisto.network/',
            'https://callisto.network',
        ];

        Promise.all(
            paths.map(path => this.handle_is_official(path))
        ).then(result => {

            const allOfficial = result.every(i => i);

            if (!allOfficial) {

                console.error(result, paths);
            } else {

                console.log('success', result, allOfficial);
            }
        })
    }


    constructor() {

        //const oc = require('../../scripts/abiDefinitions/clo').find(i => i.address === "0xf6f29e5ba51171c4ef4997bd0208c7e9bc5d5eda");


        var json = {
            "abi": [{
                "constant": false,
                "inputs": [{"name": "_name", "type": "string"}],
                "name": "remove_entry",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "constant": false,
                "inputs": [{"name": "_who", "type": "address"}],
                "name": "fire",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "constant": true,
                "inputs": [],
                "name": "owner",
                "outputs": [{"name": "", "type": "address"}],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }, {
                "constant": false,
                "inputs": [{"name": "_name", "type": "string"}, {"name": "_link", "type": "string"}, {
                    "name": "_metadata",
                    "type": "string"
                }],
                "name": "add_entry",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "constant": false,
                "inputs": [{"name": "_who", "type": "address"}],
                "name": "hire",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "constant": true,
                "inputs": [{"name": "_name", "type": "string"}],
                "name": "get_entry",
                "outputs": [{"name": "", "type": "string"}, {"name": "", "type": "string"}, {
                    "name": "",
                    "type": "string"
                }],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }, {
                "constant": true,
                "inputs": [{"name": "_link", "type": "string"}],
                "name": "is_official",
                "outputs": [{"name": "", "type": "bool"}],
                "payable": false,
                "stateMutability": "view",
                "type": "function"
            }, {
                "constant": false,
                "inputs": [{"name": "_who", "type": "address"}],
                "name": "transfer_ownership",
                "outputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "function"
            }, {
                "inputs": [],
                "payable": false,
                "stateMutability": "nonpayable",
                "type": "constructor"
            }, {
                "anonymous": false,
                "inputs": [{"indexed": false, "name": "_name", "type": "string"}],
                "name": "Registered",
                "type": "event"
            }, {
                "anonymous": false,
                "inputs": [{"indexed": false, "name": "_name", "type": "string"}],
                "name": "Removed",
                "type": "event"
            }],
            "address": "0xf6f29e5ba51171c4ef4997bd0208c7e9bc5d5eda",
            "name": "Officiality Checker",
        };

        super(json.abi, json.address, 'CLO');

    }


    /*

        @param path string
        @returns Promise<bool>
     */

    handle_is_official(path) {


        function mapToURL(_path) {

            try {

                const url = new URL(_path);

                return url.protocol + "//" + url.host.match(/\w+\.\w+$/)[0] + url.pathname.match(/^\/\w*\/?/)[0];

            } catch (e) {

                return null;
            }
        }

        const URLS = [
            path,
            "http://" + path,
            "http://" + path + '/',
            "https://" + path,
            "https://" + path + '/'
        ].map(mapToURL).filter(i => i);

        console.log('URLS', URLS);


        return Promise.all(URLS.map(_url => this.call('is_official', {inputs: [_url]}))).then(result => {


            this.is_official = result.some(item => item[0].value);

            return this.is_official;

        });
    }
}


var officialityChecker = function () {

    // https://github.com/EthereumCommonwealth/Proposals/issues/10


    return {

        template: require('./officiality-checker.html'),
        link: function (scope) {

            scope.input = {
                link: '',
                show: 0,
            };

            scope.contract = new OfficialityContract();

            scope.handleSubmit = function () {

                scope.input.show = 1;
                scope.contract.handle_is_official(scope.input.link).then(result => {

                    scope.$apply(function () {

                        scope.input.show = result ? 2 : 3;
                        console.log('result', result, scope.input.show);
                    });
                })
            }
        }

    }
};

module.exports = officialityChecker;

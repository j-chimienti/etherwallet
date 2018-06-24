const _uniqueBy = require('lodash/uniqBy');

const messageSet = messages => _uniqueBy(messages, message => message.to + message.index);


class Message {

    // from;
    // to;
    // text;
    // time;
    // index;

    constructor(_from, _to, _text, _time, _index) {

        this.from = _from;
        this.to = _to;
        this.text = _text;
        this.time = _time;
        this.index = _index;
    }
}


// localStorage key
const KEY = '@messages@';

const DATE = new Date();


var newMessageService = function () {

    this.Message = Message;

    this.msgCheckTime = 0;

    this.CONTRACT_ADDRESS = '0x6A77417FFeef35ae6fe2E9d6562992bABA47a676';

    this.MESSAGE_STALING_PERIOD = 2160000; // 25 days
    this.message_staling_period = new Date(DATE.getTime() - (this.MESSAGE_STALING_PERIOD * 1000)).getTime();

    this.loadingMessages = false;

    this.NUMBER_OF_MESSAGES = 0;
    this.NUMBER_OF_NEW_MESSAGES = 0;


    this.messages = [];


    this.CONTRACT = nodes.nodeList.etc_ethereumcommonwealth_geth.abiList.find(contract =>
        contract.address.toLowerCase() === this.CONTRACT_ADDRESS.toLowerCase());

    if (!this.CONTRACT) {

        throw new Error('ERROR FINDING CONTRACT: ' + this.CONTRACT_ADDRESS);
    }

    try {

        Object.assign(this.CONTRACT, {
            abi: JSON.parse(this.CONTRACT.abi)
        });
    } catch (e) {

        console.error(e);


    }


    this.openedModals = [];


    this.initMessages = function initMessages(addr) {





        // filter messages by address in wallet
        const messages = this.messages.slice().filter(message => message.to === addr);

        this.loadingMessages = true;

        this.msgCheckTime = new Date().toLocaleTimeString();


        // fixme: network

        ethFuncs.handleContractCall('last_msg_index', this.CONTRACT, {inputs: [addr]}, (result) => {

            if (result && result.hasOwnProperty('data') && Array.isArray(result.data)) {

                const lastMsgIndex = parseInt(ethFuncs.hexToDecimal(result.data[0]));


                if (lastMsgIndex > 0) {

                    const queue = [];
                    let curIndex = lastMsgIndex;

                    while (curIndex) {

                        if (!messages.find(message => message.index === curIndex)) {
                            queue.push(curIndex);

                        }

                        curIndex--;

                    }

                    if (queue.length === 0) {

                        this.loadingMessages = false;

                    }

                    queue.forEach(index_ => ethFuncs.handleContractCall('getMessageByIndex', this.CONTRACT, {inputs: [addr, index_]}, (result) => {


                        if (!result.error && result.hasOwnProperty('data')) {


                            const [from, text, time] = result.data;

                            const MESSAGE = new Message(from, addr, text, Number(time.toString()) * 1000, index_);


                            this.messages.push(MESSAGE);

                            this.saveMessages();

                        }

                        this.loadingMessages = false;

                    }));


                } else {

                    this.loadingMessages = false;

                }


            } else {

                this.loadingMessages = false;

                //$scope.notifier.danger('Error locating lastMsgIndex');
                console.error('Error locating lastMsgIndex');
            }


        });


    };

    this.getMessageStalingPeriod = function getMessageStalingPeriod() {

        ethFuncs.handleContractCall('message_staling_period', this.CONTRACT, {}, (result) => {


            if (result && 'data' in result) {

                this.MESSAGE_STALING_PERIOD = parseInt(result.data[0]);
            }
            this.message_staling_period = new Date(DATE.getTime() - (newMessageService.MESSAGE_STALING_PERIOD * 1000)).getTime()
        });


    }


    this.saveMessages = function saveMessages() {


        let messages = this.messages.slice().filter(this.validMessage);


        let messageSet_ = messageSet(messages);

        globalFuncs.localStorage.setItem(KEY, JSON.stringify(messageSet_));

    };


    this.handleGetLocalMessages = function handleGetLocalMessages() {


        let messages = [];

        try {

            const messages_ = JSON.parse(globalFuncs.localStorage.getItem(KEY))
                .map(({from, to, text, time, index}) =>
                    new this.Message(from, to, text, time, index));

            messages = messageSet(messages_);

        } catch (e) {

            messages = [];

        } finally {

            if (!(messages && Array.isArray(messages) && messages.every(this.validMessage))) {

                messages = messages.filter(this.validMessage);
            }


        }

        this.messages = messages;

        return messages;
    };


    this.MESSAGE = new Message(
        '0x1234',
        '', // adding param locally so can switch b/w accounts easier
        'TEST',
        DATE.getTime(),
        0,
    );

    this.validMessage = function (obj_) {

        return obj_ instanceof Message;
    };

    this.numberOfNewMessages = function (address, from = null) {


        if (from) {

            return this.messages.filter(message =>

                this.validMessage(message) &&
                message.to === address &&
                message.from === from &&
                this.message_staling_period < message.time
            ).length
        }

        //console.log('new messages', new Date($scope.message_staling_period));

        return this.messages.filter(message =>

            this.validMessage(message) &&
            message.to === address &&
            this.message_staling_period < message.time
        ).length

    }


    return this;


}

module.exports = newMessageService;

'use strict';


var messagesCtrl = function ($scope,
                             $rootScope,
                             $interval,
                             globalService,
                             newMessageService,
                             walletService) {

    const sendMessageModal = new Modal(document.getElementById('sendMessageModal'));
    const newMessagesModal = new Modal(document.getElementById('newMessagesModal'));


    const config = {
        fetchMessageInterval: 30 // seconds
    };
    const VISIBILITY = {
        LIST: 'list',
        NEW: 'new',
        CONVERSATION: 'conversation',

    };


    Object.assign($scope, {
        ajaxReq: ajaxReq,
        Validator: Validator,
        wallet: walletService.wallet,
        rawTx: null,
        signedTx: null,
        msgCheckTime: null,
        messagesConversation: null,
        unlockWallet: false,
        newMessage: {
            to: '',
            text: '',
        },
        visibility: 'list',
        VISIBILITY,
        tx: {
            data: '',
            to: '',
            gasLimit: '',
            from: '',
        },
        interval: null,
    });



    newMessageService.handleGetLocalMessages();
    newMessageService.getMessageStalingPeriod();

    $scope.viewMessagesConversation = function (addr) {

        $scope.visibility = $scope.VISIBILITY.CONVERSATION;
        $scope.messagesConversation = $scope.messagesList[addr];


    };

    /*

        messages are grouped by addr and sorted
     */


    $scope.mapMessagesToMessageList = function mapMessagesToMessageList() {


        // console.log($scope.messages);


        const addr = $scope.wallet.getAddressString();

        const sorted = newMessageService.messages.filter(message =>
            message.to === addr).sort((a, b) => b.time - a.time);


        const messagesList = sorted.reduce((accum_, message) => {

            if (!accum_[message.from]) {

                accum_[message.from] = [message];
            }

            else accum_[message.from].push(message);

            return accum_;

        }, {});


        $scope.NUMBER_OF_NEW_MESSAGES = newMessageService.numberOfNewMessages(addr);

        $scope.messagesList = messagesList;
        return messagesList;


    }

    function messageInterval() {


        if ($scope.unlockWallet && $scope.wallet) {

            newMessageService.initMessages($scope.wallet.getAddressString());
        }


    }


    $scope.$watch(function () {

        if (!walletService.wallet) {
            return null;
        }
        return walletService.wallet.getAddressString();

    }, function (address) {
        if (!address) {

            $scope.unlockWallet = false;
            $interval.cancel($scope.interval);
            return;
        }
        $scope.unlockWallet = true;

        $scope.wallet = walletService.wallet;

        $interval.cancel($scope.interval);
        $scope.interval = null;

        $scope.messagesList = {};

        newMessageService.initMessages(address);


        $scope.interval = $interval(messageInterval, 1000 * config.fetchMessageInterval);


    });


    $scope.$watch('NUMBER_OF_NEW_MESSAGES', (val) => {

        const {tabs: {sendTransaction: {id}}} = globalService;

        if (0 < val &&
            !newMessageService.openedModals.includes($scope.wallet.getAddressString()) &&
            globalService.currentTab === id) {


            newMessagesModal.open();

            newMessageService.openedModals.push($scope.wallet.getAddressString());

        }
    });


    $scope.handleSubmitNewMessage = function ($event) {

        $event.preventDefault();

        const [TO, TEXT] = $event.target;

        const to = TO.value;
        const text = TEXT.value;

        if (nodes.nodeList[globalFuncs.getCurNode()].type.toUpperCase() !== 'ETC') {

            $scope.notifier.danger('Wrong chain! You need to switch to $ETC network to send messages');


        } else if (!Validator.isValidAddress(to)) {

            $scope.notifier.danger(globalFuncs.errorMsgs[5]);

        } else sendMessage(to, text);

    };


    $scope.setVisibility = function setVisibility(str) {


        $scope.visibility = str;

        $scope.newMessage = Object.assign({}, {text: '', to: ''});

        $scope.tx = {};

    };


    $scope.validateAddress = function validateAddress() {

        return Validator.isValidENSorEtherAddress($scope.newMessage.to);
    };


    function sendMessage(to, text) {


        const sendMsgAbi = newMessageService.CONTRACT.abi.find(a => a.name === 'sendMessage');


        var fullFuncName = ethUtil.solidityUtils.transformToFullName(sendMsgAbi);
        var funcSig = ethFuncs.getFunctionSignature(fullFuncName);

        $scope.tx.data = ethFuncs.sanitizeHex(funcSig + ethUtil.solidityCoder.encodeParams(
            sendMsgAbi.inputs.map(i => i.type),
            [to, text],
        ));


        const estObj = {
            from: $scope.wallet.getAddressString(),
            to: newMessageService.CONTRACT.address,
            data: $scope.tx.data,
            value: "0x00"
        };


        ethFuncs.estimateGas(estObj, function (data) {

            if (data.error || parseInt(data.data) === -1) {

                $scope.tx.gasLimit = '';

                $scope.notifier.danger('Gas estimation error');


            } else {

                Object.assign($scope.tx, estObj, {gasLimit: data.data});

                const txData = uiFuncs.getTxData($scope);

                uiFuncs.generateTx(txData, function (rawTx) {


                    const {signedTx, isError} = rawTx;

                    if (isError) {


                        $scope.notifier.danger(rawTx.error);

                    } else {


                        $scope.rawTx = rawTx;
                        $scope.signedTx = signedTx;


                        sendMessageModal.open();
                    }


                })

            }

        });

    }


    $scope.confirmSendMessage = function () {
        sendMessageModal.close();

        uiFuncs.sendTx($scope.signedTx, function (resp) {
            if (!resp.isError) {


                var bExStr = $scope.ajaxReq.type !== nodes.nodeTypes.Custom ? "<a href='" + $scope.ajaxReq.blockExplorerTX.replace("[[txHash]]", resp.data) + "' target='_blank' rel='noopener'> View your transaction </a>" : '';
                var contractAddr = $scope.tx.contractAddr ? " & Contract Address <a href='" + ajaxReq.blockExplorerAddr.replace('[[address]]', $scope.tx.contractAddr) + "' target='_blank' rel='noopener'>" + $scope.tx.contractAddr + "</a>" : '';
                $scope.notifier.success(globalFuncs.successMsgs[2] + "<br />" + resp.data + "<br />" + bExStr + contractAddr);
            } else {

                let response = resp.error;

                if (resp.error.includes('Insufficient funds')) {


                    response = globalFuncs.errorMsgs[17].replace('{}', ajaxReq.type);


                }

                $scope.notifier.danger(response);


            }
        });
    }





}
module.exports = messagesCtrl;

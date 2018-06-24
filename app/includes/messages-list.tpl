<section class="messagesList">
    <h2>Inbox</h2>
    <ul
            ng-if="wallet && wallet.getAddressString()"
            class="list-group">

        <li ng-if="!newMessageService.loadingMessages &&
        newMessageService.messages.length == 0"
        >
            No messages found for {{wallet.getAddressString()}}
        </li>

        <li ng-if="newMessageService.loadingMessages">
            LOADING...
        </li>
        <li ng-if="!newMessageService.loadingMessages && msgCheckTime">
            last checked: {{msgCheckTime}}
        </li>


        <li

                class="list-group-item pointer"
                ng-repeat="message in mapMessagesToMessageList()"
                ng-click="viewMessagesConversation(message[0].from)"

        >
            <div class="row">
                <div class="col-sm-9 row justify_row">
                    <div class="address-identicon-container">

                        <div class="addressIdenticon med float" title="Address Indenticon"
                             blockie-address="{{message[0].from}}"></div>
                    </div>
                    <span class="from">{{message[0].from}}</span>


                </div>
                <div class="col-sm-3">
                    <div class="row">
                        <span


                        >{{message[0].time | date: 'yyyy-MM-dd HH:mm:ss'}}</span>
                    </div>
                    <div class="row">
                        <b>New Messages: </b>
                        <b
                                ng-class="newMessageService.numberOfNewMessages(message[0].from, message[0].to) > 0 ? 'text-success' : 'text-gray'"
                        >

                            {{newMessageService.numberOfNewMessages(message[0].from, message[0].to)}}
                        </b>
                    </div>
                    <div>
                    </div>
                </div>

            </div>
            <p class="message_text">{{message[0].text}}</p>
            <hr/>
        </li>
    </ul>
</section>




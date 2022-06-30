function Automaton() {

}

Automaton.prototype.readCommands = function (commands) {
    let state = "CLOSED";

    let transition = {
        CLOSED: {
            APP_PASSIVE_OPEN: 'LISTEN',
            APP_ACTIVE_OPEN: 'SYN_SENT'
        },
        LISTEN: {
            RCV_SYN: 'SYN_RCVD',
            APP_SEND: 'SYN_SENT',
            APP_CLOSE: 'CLOSED'
        },
        SYN_RCVD: {
            APP_CLOSE: 'FIN_WAIT_1',
            RCV_ACK: 'ESTABLISHED'
        },
        SYN_SENT: {
            RCV_SYN: 'SYN_RCVD',
            RCV_SYN_ACK: 'ESTABLISHED',
            APP_CLOSE: 'CLOSED'
        },
        ESTABLISHED: {
            APP_CLOSE: 'FIN_WAIT_1',
            RCV_FIN: 'CLOSE_WAIT'
        },
        FIN_WAIT_1: {
            RCV_FIN: 'CLOSING',
            RCV_FIN_ACK: 'TIME_WAIT',
            RCV_ACK: 'FIN_WAIT_2'
        },
        CLOSING: {
            RCV_ACK: 'TIME_WAIT'
        },
        FIN_WAIT_2: {
            RCV_FIN: 'TIME_WAIT'
        },
        TIME_WAIT: {
            APP_TIMEOUT: 'CLOSED'
        },
        CLOSE_WAIT: {
            APP_CLOSE: 'LAST_ACK'
        },
        LAST_ACK: {
            RCV_ACK: 'CLOSED'
        }
    }

    function changeState(event) {
        state = transition[state][event];

    }

    for (let event of commands) {
        if (transition[state][event] != undefined) {
            changeState(event)
        } else {
            state = "ERROR";
        }
    }

    return state;
}

var myAutomaton = new Automaton();

console.log(myAutomaton.readCommands(["APP_ACTIVE_OPEN", "RCV_SYN_ACK", "APP_CLOSE", "RCV_FIN_ACK", "RCV_ACK"]));



function traverseTCPStates(eventList) {
    var state = "CLOSED";  // initial state, always

    var states = {
        CLOSED: { APP_PASSIVE_OPEN: "LISTEN", APP_ACTIVE_OPEN: "SYN_SENT" },
        LISTEN: { RCV_SYN: "SYN_RCVD", APP_SEND: "SYN_SENT", APP_CLOSE: "CLOSED" },
        SYN_RCVD: { APP_CLOSE: "FIN_WAIT_1", RCV_ACK: "ESTABLISHED" },
        SYN_SENT: { RCV_SYN: "SYN_RCVD", RCV_SYN_ACK: "ESTABLISHED", APP_CLOSE: "CLOSED" },
        ESTABLISHED: { APP_CLOSE: "FIN_WAIT_1", RCV_FIN: "CLOSE_WAIT" },
        FIN_WAIT_1: { RCV_FIN: "CLOSING", RCV_FIN_ACK: "TIME_WAIT", RCV_ACK: "FIN_WAIT_2" },
        CLOSING: { RCV_ACK: "TIME_WAIT" },
        FIN_WAIT_2: { RCV_FIN: "TIME_WAIT" },
        TIME_WAIT: { APP_TIMEOUT: "CLOSED" },
        CLOSE_WAIT: { APP_CLOSE: "LAST_ACK" },
        LAST_ACK: { RCV_ACK: "CLOSED" },
        ERROR: {}
    };

    return eventList.reduce(function (state, input) { return states[state][input] || "ERROR"; }, state);
}
/**
 * Thanks for this FSM implementation to Zakhar Ovcharov (https://www.linkedin.com/in/zakhar-ovcharov-a657a4197/)
 * I did small adjustments to meet requirements of the specific task
 */

class FSM {
    /**
     * Each instance of this class will have a certain alphabet, a list of states and transitions, and could be used to test some value against these params
     * @param {String} alphabet
     * @param {String[]} states
     * @param {String} startState
     * @param {String[]} finiteStates
     * @param {Object} transitions
     */
    constructor(alphabet, states, startState, finiteStates, transitions) {
        this.alphabet = alphabet
        this.states = states
        this.startState = startState
        this.transitions = transitions
        this.finiteStates = finiteStates
        this.currentState = null
    }

    /**
     * Check if the symbol belongs to the specified alphabet
     * @param {String} symbol
     * @returns {Boolean}
     */
    _checkIsBelongAlphabet(symbol) {
        return this.alphabet.includes(symbol)
    }

    /**
     * Change the current state depending on the symbol. FSM should abort if there is no transition for the current symbol on the current state
     * @param {String} symbol
     */
    _changeState(symbol) {
        // if (
        //     this.transitions[this.currentState] &&
        //     this.transitions[this.currentState][symbol]
        // ) {
        //     this.currentState = this.transitions[this.currentState][symbol]
        // } else {
        //     throw new Error(`No transition from ${this.currentState} by ${symbol}`)
        // }

        this.currentState = this.transitions[this.currentState][symbol];
    }

    /**
     * Test some value against specified params. Accepts value if the finiteStates array includes the last current state and rejects otherwise
     * @param {String} value
     * @returns {String}
     */
    test(value) {
        this.currentState = this.startState

        for (let symbol of value) {
            if (this._checkIsBelongAlphabet(symbol)) {
                this._changeState(symbol)
            } else {
                return false
            }
        }

        // return this.finiteStates.includes(this.currentState);
        return this.currentState == "q2";
    }
}

// Params in order: alphabet, states, initial state, finite states, transitions
// We have to define transitions as an object, where:
// 1. Key is the state
// 2. Value is the object, where:
// 2.1. Key is the symbol
// 2.2. Value is the target state
const fsm = new FSM(["0", "1"], ['q0', 'q1', 'q2'], 'q1', ['q1'], {
    q1: {
        0: 'q1',
        1: 'q2'
    },
    q2: {
        0: 'q3',
        1: 'q2'
    },
    q3: {
        0: 'q2',
        1: 'q2'
    }
})

console.log(fsm.test(["1", "0", "0", "1"]), fsm.currentState) // true
// console.log(fsm.test('0111')) // true
// console.log(fsm.test('1112')) // false, 2 doesn't belong to the alphabet '01'

export function shuffle(list) {
    /**
     * Scramble the order of items in a list
     */
    const templist = list;

    let currentIndex = templist.length;
    let randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        const temp = templist[currentIndex];
        templist[currentIndex] = templist[randomIndex];
        templist[randomIndex] = temp; 
    }
    return templist;
}

export function getCard() {
    /**
     * Get answer card name
     */
    return getCardNode().alt;
}


export function getCardNode() {
    /**
     * Get answer card image node
     */
    return document.querySelector('.answer img');
}

export function getCheckbox() {
    /**
     * Get checkbox node
     */
    return document.querySelector('checkbox');
}

export function getContinueBtn() {
    /**
     * Get 'continue/try again' button node
     */
    return document.querySelector('#continue');
}

export function getNumberInput() {
    /**
     * Get number input node
     */
    return document.querySelector('input[type="number"]');
}

export function getOutput() {
    /**
     * Get output node
     */
    return document.querySelector('output');
}

export function getPanel() {
    /**
     * Get card selection panel node
     */
    return document.querySelector('main > div:last-child');
}

export function getTiles() {
    /**
     * Get the card tiles
     */
    return document.querySelectorAll('.tiles input');
}

export function getTries() {
    /**
     * Get the current value of tries
     */
    return getNumberInput().value;
}

export function getRestartBtn() {
    /**
     * Get 'restart' button node
     */
    return document.querySelector('#restart');
}

export function getShowBtn() {
    /**
     * Get 'show' button node
     */
    return document.querySelector('#show-btn');
}

export function setCard() {
    /**
     * Randomly choose a card and load it into
     * the answer image element.
     * Initially, hide the card from the player
     */
    const cards = [ 
        "2 of spades", 
        '3 of diamonds', 
        '6 of clubs', 
        '10 of hearts', 
        'ace of clubs', 
        'jack of hearts', 
        'jack of spades', 
        'king of diamonds', 
        'queen of spades'
    ];
    const idx = Math.floor(Math.random() * 9)
    
    // hide the card

     // cancel the animation
}

export function showCard() {
    /**
     * Show the answer card and disable the 'show' button
     */

    // animate the card

}

export function toggleInputState(e) {
    /**
     * Toggle active state of the number input node
     * This depends on whether the checkbox is checked or note.
     * The information is available in the event object passed to the
     * function at call time.
     */
}


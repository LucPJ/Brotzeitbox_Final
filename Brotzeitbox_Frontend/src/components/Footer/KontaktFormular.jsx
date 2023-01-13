import React from 'react';

export default function KontaktFormular(){

        return(
            <div>
            <form id="kontakt-formular">
                <input type="text" id="vorname" name="vorname" placeholder="Dein Name" />
                <input type="text" id="email" name="email" placeholder="Deine Email"/>
                <input type="text" id="nachricht" name="nachricht" placeholder="Deine Nachricht"/>
                <button id="btn" /* onClick={onSubmit} */ >Send</button>
            </form>
            </div>
        )

}
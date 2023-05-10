// Powered by l.digital in 2023.05.10 
// Author: R. S.

"use strict";

// Skapa och lägg till script-taggar för jQuery och jQuery UI
let script1 = document.createElement('script');
script1.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
document.head.appendChild(script1);

let script2 = document.createElement('script');
script2.src = 'https://code.jquery.com/ui/1.13.0/jquery-ui.min.js';
document.head.appendChild(script2);

script2.onload = function() {
    $(document).ready(function() {
        // Skapa en fixerad header och lägg till den i dokumentet
        const header = document.createElement('header');
        header.style.position = 'fixed';
        header.style.top = '0';
        header.style.left = '0';
        header.style.right = '0';
        header.style.height = '50px';
        header.style.background = '#333';
        header.style.color = '#fff';
        header.style.zIndex = '10000'; // Sätt ett högt z-index för att se till att headern alltid är ovanpå andra element
        document.body.appendChild(header);

        // Skapa knappar för att aktivera olika funktioner och lägg till dem i headern
        const button1 = document.createElement('button');
        button1.innerText = 'Enable Draggable';
        header.appendChild(button1);

        const button2 = document.createElement('button');
        button2.innerText = 'Enable Resizable';
        header.appendChild(button2);

        const button3 = document.createElement('button');
        button3.innerText = 'Enable Selectable';
        header.appendChild(button3);

        // Sätt event handlers för knapparna
        button1.addEventListener('click', () => {
            // Gör alla element draggable och droppable
            $("*").draggable().droppable({
                drop: function(event, ui) {
                    console.log("Dropped on me!");
                    event.preventDefault(); // Förhindra länkhändelse
                }
            });
        });

        button2.addEventListener('click', () => {
            // Gör alla element resizable
            $("*").resizable();
        });

        button3.addEventListener('click', () => {
            // Gör alla element selectable
            $("*").selectable();
        });

        // Gör länkarna oklickbara
        $("a").click(function(event) {
            event.preventDefault();
        });

        // Lägg till en ram runt elementet när muspekaren är över det
        $("*").hover(function() {
            $(this).css("outline", "3px solid " + getRandomColor());
        }, function() {
            $(this).css("outline", "none");
        });

        // Funktion för att skapa en slumpmässig RGB-färg
        function getRandomColor() {
            let r = Math.floor(Math.random() * 256);
            let g = Math.floor(Math.random() * 256);
            let b = Math.floor(Math.random() * 256);
            return `rgb(${r}, ${g}, ${b})`;
        }

        // Gör alla element med klassen "draggable" draggable utan jQuery UI
        const draggables = document.querySelectorAll('.draggable');
        let activeDraggable = null;
        let initialX = null;
        let initialY = null;
        let currentX = null;
        let currentY = null;
        let xOffset = 0;
        let yOffset = 0;

        draggables.forEach(draggable => {
            draggable.addEventListener('mousedown', dragStart);
            draggable.addEventListener('mouseup', dragEnd);
            draggable.addEventListener('mousemove', drag);
        });

        function dragStart(e) {
            activeDraggable = this.parentElement;
            initialX = e.clientX - xOffset;
            initialY = e.clientY - yOffset;
            e.preventDefault();
        }

        function dragEnd(e) {
            initialX = currentX;
            initialY = currentY;
        }

        function drag(e) {
            if (activeDraggable) {
                e.preventDefault();
                currentX = e.clientX - initialX;
                currentY = e.clientY - initialY;
                xOffset = currentX;
                yOffset = currentY;
                setTranslate(currentX, currentY, activeDraggable);
            }
        }

        function setTranslate(xPos, yPos, el) {
            el.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
        }

        // Hantera klick på element och logga en avancerad selektor för det klickade elementet
        $("*").click(function(event) {
            event.stopPropagation();
            const selector = generateSelector(this);
            console.log(`Clicked: ${selector}`);
        });

        function generateSelector(element) {
            const parts = [];
            let currentElement = element;

            while (currentElement) {
                let part = currentElement.tagName.toLowerCase();
                if (currentElement.id) {
                    part += `#${currentElement.id}`;
                    parts.unshift(part);
                    break;
                } else {
                    let siblingIndex = 1;
                    let sibling = currentElement.previousElementSibling;
                    while (sibling) {
                        if (sibling.tagName.toLowerCase() === part) {
                            siblingIndex++;
                        }
                        sibling = sibling.previousElementSibling;
                    }

                    if (siblingIndex === 1) {
                        parts.unshift(part);
                    } else {
                        part += `:nth-child(${siblingIndex})`;
                        parts.unshift(part);
                    }
                }
                currentElement = currentElement.parentElement;
            }

            return parts.join(' > ');
        }
    });
};

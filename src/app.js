/*
File: app.js
Author: Ragány Dávid Gergő
Copyright: 2023, Ragány Dávid Gergő
Group: Szoft I-2-E
Date: 2023-02-04
Github: https://github.com/raganydavid/elipkup
Licenc: GNU GPL 
*/

const radius1Elem = document.querySelector("#radius1");
const radius2Elem = document.querySelector("#radius2");
const heightElem = document.querySelector("#height");
const calcButtonElem = document.querySelector("#calcButton");
const volumetricElem = document.querySelector("#volumetric");

calcButtonElem.addEventListener('click', function() {
    
    let radius1 = Number(radius1Elem.value);
    let radius2 = Number(radius2Elem.value);
    let height = Number(heightElem.value);
    let volumetric = calcVolumetric(radius1, radius2, height);
    volumetricElem.value = volumetric;
    
});

function calcVolumetric(r_1, r_2, h) {
    let volume =  ( (1/3) * Math.PI * r_1 * r_2 * h);
    return volume.toFixed(3);
}
checklist = document.querySelector('.buy__body').querySelectorAll('input');
illustrationLine = document.querySelector('#illustration').querySelector('span');
designLine = document.querySelector('#design').querySelector('span');
developmentLine = document.querySelector('#development').querySelector('span');
illustrationIndicator = document.querySelector('#illustrationIndicator');
designIndicator = document.querySelector('#designIndicator');
developmentIndicator = document.querySelector('#developmentIndicator');



console.log(typeof checklist[0].dataset);
console.log();


checklist.forEach(element => {
    element.addEventListener('click', () => {
        calckCheckLine();
    });
});

calckCheckLine = () => {
    // В эти массивы будет попадать значение из daraset
    checkListIllustrationLine = [];
    checklistDesignLine = [];
    checklistDevelopmentLine = [];
    checklist.forEach(element => {
        if (element.checked) {
            checkListIllustrationLine.push(Number(element.dataset.illustration));
            checklistDesignLine.push(Number(element.dataset.design));
            checklistDevelopmentLine.push(Number(element.dataset.development));
        }
    });

    // вычисленые значение
    illustrationLineValue = calcArray(checkListIllustrationLine);
    designLineValue = calcArray(checklistDesignLine);
    developmentLineValue = calcArray(checklistDevelopmentLine);
    updateLayout(illustrationLineValue, designLineValue, developmentLineValue);

};
// функция которая принимает массив -> если длинна массива не равна 0, то считаем сумму его элементов
calcArray = (arr) => {
    if (arr.length != 0) {
        result = arr.reduce((a, b) => (a + b));
    } else {
        result = 0;
    }
    return result;
};

const updateLayout = (illustration, design, development) => {
    illustrationLine.style = `width: ${illustration}%`;
    designLine.style = `width: ${design}%`;
    developmentLine.style = `width: ${development}%`;
    illustrationIndicator.innerText = `${illustration}%`;
    designIndicator.innerText = `${design}%`;
    developmentIndicator.innerText = `${development}%`;
};
'use strict'

document.addEventListener("DOMContentLoaded", function() {

    //выподающий список
    let selects = document.querySelectorAll('.select');
    selects.forEach(function(select){
        let selectBtn = select.querySelector('.select_item_top_button_img');

        selectBtn.addEventListener('click', function(e){
            e.stopPropagation();
            select.classList.toggle('active');

            let listItem = select.querySelectorAll('.select_item_list_item');
            listItem.forEach(function(item){
                item.addEventListener('click', function(){
                    let itemInfo = item.querySelector('.select_item_list_item_info');
                    let itemImg = select.querySelector('.select_item_top_button_img');
                    itemImg.innerHTML = itemInfo.innerHTML;

                    const currentValue = select.querySelector('.select_item_top_button_img h6').getAttribute('data-parth');
                    const currentInput = select.querySelector('.select_item_top_button input');
                    currentInput.oninput = currentInput.value = currentValue;
                })
            })

            let number = select.querySelector('.select_item_top_button input');
            number.addEventListener('click', function(e){
                e.stopPropagation();
            })
            let search = select.querySelector('.select_item_top_search');
            search.addEventListener('click', function(e){
                e.stopPropagation();
            })

            //поиск по совпадениям в инпуте со спиком
            select.querySelector('.search').oninput = function(){
                //преобразовываем строку в нижний регистр
                let value = this.value.toLowerCase();
                if(value != ''){
                    listItem.forEach(function(elem){
                        if(elem.innerText.toLowerCase().search(value) == -1){
                            elem.classList.add('hidde');
                        }
                    })
                }else{
                    listItem.forEach(function(elem){
                        elem.classList.remove('hidde');
                    })
                }
            }
            
        })   

        // скрываем список при клике вне списка
        document.addEventListener('click', function(e){
            if(e.target !== select.querySelector('.select_item_list')){
                select.classList.remove('active');
            }
        })
    })

    // при нажатии на кнопку значения полей изменяются
    let convertBtn = document.querySelector('.exchange_convert_button');
    convertBtn.addEventListener('click', function(e){
        e.preventDefault();

        let output = document.querySelector('[data-parth="output"]').innerHTML;
        document.querySelector('[data-parth="output"]').innerHTML = document.querySelector('[data-parth="entrance"]').innerHTML;
        document.querySelector('[data-parth="entrance"]').innerHTML = output;
        
        let numEnt = document.querySelector('[data-parth="entrance"] h6').getAttribute('data-parth');
        let numOut = document.querySelector('[data-parth="output"] h6').getAttribute('data-parth');
        let inputEntrance = document.querySelector('#inputEntrance');
        let inputOutput = document.querySelector('#inputOutput');
        
        inputEntrance.value = numEnt;
        inputOutput.value = numOut;

    });

    //получение API 
    
});
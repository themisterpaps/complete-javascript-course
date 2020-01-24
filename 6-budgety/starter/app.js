var budgetControlller = (function () {
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    Expense.prototype.calcPercentage= function(totalIncome){
        if (totalIncome> 0) {
        this.percentage=(this.value/totalIncome)*100
        }else{
            this.percentage=-1;
        }
    };
    Expense.prototype.getPercentange=function(){
        return this.percentage;
    }
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    }
    var calculateTotal = function (type) {
        var sum = 0;
        data.allItens[type].forEach(function (current) {
            sum += current.value;
        });
        data.total[type] = sum;
    };
    var data = {
        allItens: {
            exp: [],
            inc: []
        }, total: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }
    return {
        addItem: function (type, des, val) {
            var newItem, id;
            if (data.allItens[type].length > 0) {
                id = data.allItens[type][data.allItens[type].length - 1].id + 1;
            }
            else {
                id = 0
            }
            newItem = type === 'exp' ? new Expense(id, des, val) : new Income(id, des, val);
            data.allItens[type].push(newItem);
            return newItem;
        },
        teting: function () {
            console.log(data);
        },
        calculateBudget: function () {
            // calculate the total icome and expenses
            calculateTotal('inc');
            calculateTotal('exp');
            //calculate the budget: income - expenses

            data.budget = data.total['inc'] - data.total['exp'];
            //calculate the percentage of income that we spent
            if (data.total.inc > 0) {
                data.percentage =data.total.exp / data.total.inc * 100; 
            }else{
                data.percentage=-1;
            }
           
        },
        deleteItem: function(type,id){
            var ids,index; 
            console.log('is '+ type,id);
            ids = data.allItens[type].map(function(current) {
               return current.id; 
            });
            index = ids.indexOf(id);
            if(index!== -1){
                data.allItens[type].splice(index,1);
            }
        },
        calculatePercentage: function(){
            data.allItens['exp'].forEach(function(current){
                current.calcPercentage(data.total.inc);
            });
        },
        getPercentages: function(){
            var allperc=data.allItens.exp.map(function(current){
            return current.getPercentange();
            });
            return allperc;
        },
        getBudget: function(){
            return{
                budget:data.budget,
                percentage:data.percentage,
                totalInc: data.total.inc,
                totalExp:data.total.exp
            }
        }
    }
})();

var UIController = (function () {
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn',
        incomeConteiner: '.income__list',
        expenseConteiner: '.expenses__list',
        budgetLabel:'.budget__value',
        incomeLabel:'.budget__income--value',
        expensesLabel:'.budget__expenses--value',
        percentagelabel:'.budget__expenses--percentage',
        container:'.container',
        expPercentages: '.item__percentage'
    };
    var formatNumeber= function(num, type){
            num = Math.abs(num);
            num = num.toFixed(2);
            numSplit = num.split('.');

            int = numSplit[0];
            if(int.length>3){
                int= int.substr(0,int.length-3)+','+int.substr(int.length-3,3);
            }
            dec=numSplit[1];
            return (type==='exp'? '-':'+')+' '+int+'.'+dec;
        }
          var nodeListForEach = function(list,calback){
                for (var i = 0; i < list.length; i++) {
                    calback(list[i],i);
                }
             }
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value,
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        addlistItem: function (object, type) {
            var html, newHtml, element;
            if (type === 'inc') {
                element = DOMstrings.incomeConteiner;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"> <div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            else if (type === 'exp') {
                element = DOMstrings.expenseConteiner;
                html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'
            }
            //replace with current values 
            newHtml = html.replace('%id%', object.id);
            newHtml = newHtml.replace('%description%', object.description);
            newHtml = newHtml.replace('%value%',formatNumeber(object.value,type));

            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
        },
        getDOMStrings: function () {
            return DOMstrings;
        },
        deleteListItem:function (selectorID){
            var el=document.getElementById(selectorID);
            el.parentNode.removeChild(el );

        },
        clearFields: function () {
            var field;
            field = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
            fieldArry = Array.prototype.slice.call(field);
            fieldArry.forEach(function (current, index, array) {
                current.value = "";
            });
            fieldArry[0].focus();
        },
        displayPercentages: function(percentages){
             var field;
             var field=document.querySelectorAll(DOMstrings.expPercentages);
             nodeListForEach(field,function(current,index){
                if (percentages[index]>0) {
                    current.textContent=percentages[index]+'%';
                }else{
                    current.textContentp=''
                }
             });
        }
        ,
        displayBudget: function(obj){
            var type=obj.budget>0?'inc':'exp';
            document.querySelector(DOMstrings.budgetLabel).textContent=formatNumeber(obj.budget,type);
            document.querySelector(DOMstrings.expensesLabel).textContent=formatNumeber(obj.totalExp,'exp');
            document.querySelector(DOMstrings.incomeLabel).textContent=formatNumeber(obj.totalInc,'inc');
            
            if (obj.percentage >= 0) {
                document.querySelector(DOMstrings.percentagelabel).textContent=obj.percentage+'%';
            } else {
                document.querySelector(DOMstrings.percentagelabel).textContent='---';
            }
        },
        changedType: function(){
            var field= document.querySelectorAll(
                DOMstrings.inputType+','+
                DOMstrings.inputDescription+','+
                DOMstrings.inputValue);
            nodeListForEach(field, function(cur){
                cur.classList.toggle('red-focus');
            });
            document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
        }
    }
})();


//Global App Controller
var controller = (function (budgetCtrl, UICtrl) {
    var setupEventListeners = function () {
        var DOM = UICtrl.getDOMStrings();

        document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);
        document.addEventListener('keypress', function (event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();
            }
            
        });
        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem);
        document.querySelector(DOM.inputType).addEventListener('change',UICtrl.changedType);
    }

    var updateBadget = function () {
        // calulate the budget
        budgetCtrl.calculateBudget();
        // return the budget
        var budget=budgetCtrl.getBudget();
        // display the budget on the UI
        UICtrl.displayBudget(budget);
    }
    var updatePercentage= function(){
        //1. calculate the percentages
        budgetCtrl.calculatePercentage();
        //2. read percentages from the budget controller
        var percentages=budgetCtrl.getPercentages();
        //3. Update  the UI with the new percentages
        UICtrl.displayPercentages(percentages);
    }; 
    var ctrlDeleteItem= function (event) {
        var itemId, splitId,ID,type;
        itemId= event.target.parentNode.parentNode.parentNode.parentNode.id;
        if(itemId){

            splitId=itemId.split('-');
            type=splitId[0];
            ID= parseInt(splitId[1]);
           console.log(type,ID);
        //delete item from the UI
            UICtrl.deleteListItem(itemId);
        //delete the item from the data Stractute
            budgetCtrl.deleteItem(type,ID);
        //update and show the budget
            updateBadget();
        //update percentage
            updatePercentage();
        }

    };
    var ctrlAddItem = function () {
        var input = UICtrl.getInput();
        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);
            console.log(newItem);
            UICtrl.addlistItem(newItem, input.type);
            //clear the fields
            UICtrl.clearFields();
            //update budget 
            updateBadget();
            //update percentage
            updatePercentage();
        }
    };
    return {
        init: function () {
            setupEventListeners();
            UICtrl.displayBudget({
                budget:0,
                percentage:0,
                totalInc: 0,
                totalExp:0
            });
        }
    }

})(budgetControlller, UIController);
controller.init();
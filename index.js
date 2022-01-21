class Calaculator{
    constructor(previousOperandTextElement,currentOperandTextElement)
    {
        this.previousOperandTextElement=previousOperandTextElement
        this.currentOperandTextElement=currentOperandTextElement
    }
  //what all operation you want your calculatort to do 
  clear(){
    this.currentOperand=''
    this.previousOperand=''
    this.operation=undefined
                                   

  }
  delete()
  {

  }
  appendNumber(number)
  {
    this.currentOperand=number 
  }
  chooseOperation(operation)
  {

  }
  compute()
  {

  }
  updateDisplay()
  {
    this.currentOperandTextElement=this.currentOperand
  }

}


const numberButtons=document.querySelectorAll('[data-number]')
const operationButtons=document.querySelectorAll('[data-operation]')
const deleteButton=document.querySelector('[data-delete]')
const allClearButton=document.querySelector('[data-all-clear]')
const EqualButton=document.querySelector('[data-equals]')
const previousOperandTextElement=document.querySelector('[data-previous-operand]')
const currentOperandTextElement=document.querySelector('[data-current-operand]')

const calaculator=new Calaculator(previousOperandTextElement,currentOperandTextElement) //this is new object
numberButtons.forEach(button =>{
  button.addEventListener('click',()=>{
    calaculator.appendNumber(button.innerText)
    calaculator.updateDisplay()
  })
})

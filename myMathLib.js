module.exports={
    version:function(){
        return "v1.0";
    },
    lowerNumber:function(Num1,Num2){
        if(Num1<=Num2)
        return Num1;    
    else    
        return Num2;
    },
    maxNumber:function(Num1,Num2){
        if(Num1>=Num2)
        return Num1;
        else
        return Num2;
    },
    lowestInArray:function(array){
        var lowest=array[0];

        for(var i=0;i<array.length;i++){
            if(array[i]<=lowest)
                lowest=array[i];            
        }

        return lowest;
        //return lowest number in array

    },
    isItEven(num){
        if (num % 2 == 0){
            return true;
        }
        else
        return false;

    },
    printsomeEvens(Number){
        var EvenNumbers="";
        var EvenNumbersFound=0;
        
        for(var i=0;EvenNumbersFound<Number;i++){
            if(this.isItEven(i)){
                EvenNumbers=EvenNumbers+" "+i;
                EvenNumbersFound++;
            }
        }
        return EvenNumbers;


    },
    sum:function(Num1,Num2){
        return Num1+Num2;
    },
    divide:function(Num1,Num2){
        if(Num1==0 || Num2==0)
    return 0;

    return Num1/Num2;

    }

}
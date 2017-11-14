var rounds = 0; //round
var curly = 0; //curly
var squares = 0; //square
var lastOpen = [];
for(var i = 0; i < string.length; i++){
    a = string.charAt(i);
    if(a == '('){
        rounds++
        lastOpen.push('r')
    }
    if(a == '{'){
        curly++
        lastOpen.push('c')
    }
    if(a == '['){
        squares++
        lastOpen.push('s')
    }
    if(a == ')'){
        if(rounds <= 0){
            return false
        }
        if(lastOpen.pop() != 'r'){
            return false
        }
        rounds--
    }
    if(a == '}'){
        if(curly <= 0){
            return false
        }
        if(lastOpen.pop() != 'c'){
            return false
        }
        curly--
    }
    if(a == ']'){
        if(squares <= 0){
            return false
        }
        if(lastOpen.pop() != 's'){
            return false
        }
        squares--
    }
}
if(rounds==0 && curly==0 && squares==0){
    return true
}
else{
    return false
}
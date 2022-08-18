function Greet(name){
    if (typeof name !== typeof[]){
        if(name == null){
            return "Hello there!"
        } else if(name != null && !isUpperCase(name)){
            return "Hello, " + name;
        } else if(name != null && isUpperCase(name)){
            return "HELLO " + name + "!";
        } 
    }
    if(typeof name === typeof[]){
        if(name.length == 2){
            return "Hello, " + name[0] + " and " + name[1];
        } else if(name.length > 2){
            for(let i = 0; i < name.length; i++){
                console.log("Hello, " + name[i]);
            }
        }  
    }
}

function isUpperCase(name){
    return name === name.toUpperCase();
}
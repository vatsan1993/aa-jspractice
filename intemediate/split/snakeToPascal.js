let title = function(word){
    return word[0].toUpperCase()+ word.slice(1);
}
let snakeToCamel = function(snakeCaseVar){
    let varParts = snakeCaseVar.split("_")
    for(let i=0; i < varParts.length; i++){
        varParts[i] = title(varParts[i]);
    }
    return varParts.join("")
}
console.log(snakeToCamel('snakes_go_hiss')); // 'SnakesGoHiss'
console.log(snakeToCamel('say_hello_world')); // 'SayHelloWorld'
console.log(snakeToCamel('app_academy_is_cool')); // 'AppAcademyIsCool'
console.log(snakeToCamel('APp_ACADEMY_iS_cOol')); // 'AppAcademyIsCool'

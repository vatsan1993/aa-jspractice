let initials = function(name){
    let splitName = name.split(' ');
    let initials = '';
    for( let i = 0; i < splitName.length; i++){
        let part = splitName[i];
        initials += part[0];
    }
    return initials.toUpperCase();
}
console.log(initials('anna paschall')); // 'AP'
console.log(initials('Mary La Grange')); // 'MLG'
console.log(initials('brian crawford scott')); // 'BCS'
console.log(initials('Benicio Monserrate Rafael del Toro Sánchez')); // 'BMRDTS'

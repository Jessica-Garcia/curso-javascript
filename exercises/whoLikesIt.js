const names = ['Alex', 'Jacob', 'Mark', 'Max'];

function likes(names) {
    const msg1 = 'likes this';
    const msg2 = 'like this';

    if(names.length == 1) return `${names[0]} ${msg1}`; 
    if(names.length == 2) return `${names[0]} and ${names[1]} ${msg2}`;
    if(names.length == 3) return `${names[0]}, ${names[1]} and ${names[2]} ${msg2}`; 
    if(names.length >= 4) return `${names[0]}, ${names[1]} and ${names.length - 2} others ${msg2}`;

    return `no one ${msg1}`
}

console.log(likes(names));


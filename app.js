var string=prompt("Enter a word here");
var len = string.length;
var msg="It is a Palindrome"
for(var i = 0 ; i < len/2 ; i++){
    if(string[i] != string[len - 1 - i]){
        msg='It is not a palindrome'
    }
}
document.write(
    `${string}: ${msg}`
)
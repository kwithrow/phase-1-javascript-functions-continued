// Your code here
let saturdayFun = function saturdayFun(thing = "roller-skate") {
    return `This Saturday, I want to ${thing}!`;
};
function mondayWork(task = "go to the office") {
    return `This Monday, I will ${task}.`;
}

function wrapAdjective(wrap = "*") {
   return function(adjective="a hard worker") {
    return `You are ${wrap}${adjective}${wrap}!`;
   }
}
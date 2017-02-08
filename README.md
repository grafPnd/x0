# tic tac toe game
//i use jq instead of native js or angular/react just to minify code. if it's required to use angular, react, native js or reactNative- plese let me know, i should provide another implementation
//if it's required to use some particular technologies such as webpack, less, es6, bootstrap, etc- plese let me know, i should provide another implementation
//as i know- opening, that i'm a candidate to enter is to mobile's team, so i've passed maximal accent to best performance and economy of resources

//all local variableas are declared with one var chapter to have not extra calls of call-object of current scope.
//there are no selectors used in runtime. all  DOM references are cached on ititialisation stage. 
//i dont work with DOM, but only with 'cells'- array, extended with jq array methods- collection of DOM references
//when i create new html element using JQ- i define all static properties in string instead of chain addings for better performance
//i use one common click handler on playground and check e.target in cycle instead of each cell click handling for better performance
//application consists of two closures that prevents any names conflict
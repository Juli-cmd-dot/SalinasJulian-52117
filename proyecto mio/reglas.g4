grammar reglas;
juli: formula EOF;

formula: implication;

implication: disjunction (RIGHT implication)?;

disjunction: conjunction (OR conjunction)*;

conjunction: negation (AND negation)*;

negation: NOT negation | primary;

primary: 
    variable
    | LPAREN implication RPAREN
    | LPAREN disjunction RPAREN
    | LPAREN conjunction RPAREN
    | LPAREN negation RPAREN;

variable: LETTER (LETTER|DIGIT)*;

RIGHT: '->';
OR: [vV];
AND: [∧^];
NOT: [-¬];
LPAREN: '(';
RPAREN: ')';
LETTER: [a-zA-Z];
DIGIT: [0-9];
WS: [ \t\r\n]+ -> skip;
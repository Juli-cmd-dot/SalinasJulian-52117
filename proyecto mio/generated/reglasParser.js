// Generated from c:/Users/Conectar Igualdad SF20GM7/Desktop/proyecto mio/reglas.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import reglasListener from './reglasListener.js';
import reglasVisitor from './reglasVisitor.js';

const serializedATN = [4,1,9,74,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,2,7,7,7,1,0,1,0,1,0,1,1,1,1,1,2,1,2,1,2,3,2,25,8,2,1,3,1,
3,1,3,5,3,30,8,3,10,3,12,3,33,9,3,1,4,1,4,1,4,5,4,38,8,4,10,4,12,4,41,9,
4,1,5,1,5,1,5,3,5,46,8,5,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,1,6,
1,6,1,6,1,6,1,6,1,6,3,6,65,8,6,1,7,1,7,5,7,69,8,7,10,7,12,7,72,9,7,1,7,0,
0,8,0,2,4,6,8,10,12,14,0,1,1,0,7,8,74,0,16,1,0,0,0,2,19,1,0,0,0,4,21,1,0,
0,0,6,26,1,0,0,0,8,34,1,0,0,0,10,45,1,0,0,0,12,64,1,0,0,0,14,66,1,0,0,0,
16,17,3,2,1,0,17,18,5,0,0,1,18,1,1,0,0,0,19,20,3,4,2,0,20,3,1,0,0,0,21,24,
3,6,3,0,22,23,5,1,0,0,23,25,3,4,2,0,24,22,1,0,0,0,24,25,1,0,0,0,25,5,1,0,
0,0,26,31,3,8,4,0,27,28,5,2,0,0,28,30,3,8,4,0,29,27,1,0,0,0,30,33,1,0,0,
0,31,29,1,0,0,0,31,32,1,0,0,0,32,7,1,0,0,0,33,31,1,0,0,0,34,39,3,10,5,0,
35,36,5,3,0,0,36,38,3,10,5,0,37,35,1,0,0,0,38,41,1,0,0,0,39,37,1,0,0,0,39,
40,1,0,0,0,40,9,1,0,0,0,41,39,1,0,0,0,42,43,5,4,0,0,43,46,3,10,5,0,44,46,
3,12,6,0,45,42,1,0,0,0,45,44,1,0,0,0,46,11,1,0,0,0,47,65,3,14,7,0,48,49,
5,5,0,0,49,50,3,4,2,0,50,51,5,6,0,0,51,65,1,0,0,0,52,53,5,5,0,0,53,54,3,
6,3,0,54,55,5,6,0,0,55,65,1,0,0,0,56,57,5,5,0,0,57,58,3,8,4,0,58,59,5,6,
0,0,59,65,1,0,0,0,60,61,5,5,0,0,61,62,3,10,5,0,62,63,5,6,0,0,63,65,1,0,0,
0,64,47,1,0,0,0,64,48,1,0,0,0,64,52,1,0,0,0,64,56,1,0,0,0,64,60,1,0,0,0,
65,13,1,0,0,0,66,70,5,7,0,0,67,69,7,0,0,0,68,67,1,0,0,0,69,72,1,0,0,0,70,
68,1,0,0,0,70,71,1,0,0,0,71,15,1,0,0,0,72,70,1,0,0,0,6,24,31,39,45,64,70];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class reglasParser extends antlr4.Parser {

    static grammarFileName = "reglas.g4";
    static literalNames = [ null, "'->'", null, null, null, "'('", "')'" ];
    static symbolicNames = [ null, "RIGHT", "OR", "AND", "NOT", "LPAREN", 
                             "RPAREN", "LETTER", "DIGIT", "WS" ];
    static ruleNames = [ "juli", "formula", "implication", "disjunction", 
                         "conjunction", "negation", "primary", "variable" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = reglasParser.ruleNames;
        this.literalNames = reglasParser.literalNames;
        this.symbolicNames = reglasParser.symbolicNames;
    }



	juli() {
	    let localctx = new JuliContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, reglasParser.RULE_juli);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 16;
	        this.formula();
	        this.state = 17;
	        this.match(reglasParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	formula() {
	    let localctx = new FormulaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, reglasParser.RULE_formula);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.implication();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	implication() {
	    let localctx = new ImplicationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, reglasParser.RULE_implication);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 21;
	        this.disjunction();
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===1) {
	            this.state = 22;
	            this.match(reglasParser.RIGHT);
	            this.state = 23;
	            this.implication();
	        }

	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	disjunction() {
	    let localctx = new DisjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, reglasParser.RULE_disjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 26;
	        this.conjunction();
	        this.state = 31;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 27;
	            this.match(reglasParser.OR);
	            this.state = 28;
	            this.conjunction();
	            this.state = 33;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	conjunction() {
	    let localctx = new ConjunctionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, reglasParser.RULE_conjunction);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 34;
	        this.negation();
	        this.state = 39;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===3) {
	            this.state = 35;
	            this.match(reglasParser.AND);
	            this.state = 36;
	            this.negation();
	            this.state = 41;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	negation() {
	    let localctx = new NegationContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, reglasParser.RULE_negation);
	    try {
	        this.state = 45;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 42;
	            this.match(reglasParser.NOT);
	            this.state = 43;
	            this.negation();
	            break;
	        case 5:
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 44;
	            this.primary();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, reglasParser.RULE_primary);
	    try {
	        this.state = 64;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 47;
	            this.variable();
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 48;
	            this.match(reglasParser.LPAREN);
	            this.state = 49;
	            this.implication();
	            this.state = 50;
	            this.match(reglasParser.RPAREN);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 52;
	            this.match(reglasParser.LPAREN);
	            this.state = 53;
	            this.disjunction();
	            this.state = 54;
	            this.match(reglasParser.RPAREN);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 56;
	            this.match(reglasParser.LPAREN);
	            this.state = 57;
	            this.conjunction();
	            this.state = 58;
	            this.match(reglasParser.RPAREN);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 60;
	            this.match(reglasParser.LPAREN);
	            this.state = 61;
	            this.negation();
	            this.state = 62;
	            this.match(reglasParser.RPAREN);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	variable() {
	    let localctx = new VariableContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, reglasParser.RULE_variable);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 66;
	        this.match(reglasParser.LETTER);
	        this.state = 70;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===7 || _la===8) {
	            this.state = 67;
	            _la = this._input.LA(1);
	            if(!(_la===7 || _la===8)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 72;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

reglasParser.EOF = antlr4.Token.EOF;
reglasParser.RIGHT = 1;
reglasParser.OR = 2;
reglasParser.AND = 3;
reglasParser.NOT = 4;
reglasParser.LPAREN = 5;
reglasParser.RPAREN = 6;
reglasParser.LETTER = 7;
reglasParser.DIGIT = 8;
reglasParser.WS = 9;

reglasParser.RULE_juli = 0;
reglasParser.RULE_formula = 1;
reglasParser.RULE_implication = 2;
reglasParser.RULE_disjunction = 3;
reglasParser.RULE_conjunction = 4;
reglasParser.RULE_negation = 5;
reglasParser.RULE_primary = 6;
reglasParser.RULE_variable = 7;

class JuliContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = reglasParser.RULE_juli;
    }

	formula() {
	    return this.getTypedRuleContext(FormulaContext,0);
	};

	EOF() {
	    return this.getToken(reglasParser.EOF, 0);
	};

	enterRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.enterJuli(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.exitJuli(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof reglasVisitor ) {
	        return visitor.visitJuli(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FormulaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = reglasParser.RULE_formula;
    }

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.enterFormula(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.exitFormula(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof reglasVisitor ) {
	        return visitor.visitFormula(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImplicationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = reglasParser.RULE_implication;
    }

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	RIGHT() {
	    return this.getToken(reglasParser.RIGHT, 0);
	};

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.enterImplication(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.exitImplication(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof reglasVisitor ) {
	        return visitor.visitImplication(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class DisjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = reglasParser.RULE_disjunction;
    }

	conjunction = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ConjunctionContext);
	    } else {
	        return this.getTypedRuleContext(ConjunctionContext,i);
	    }
	};

	OR = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(reglasParser.OR);
	    } else {
	        return this.getToken(reglasParser.OR, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.enterDisjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.exitDisjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof reglasVisitor ) {
	        return visitor.visitDisjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConjunctionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = reglasParser.RULE_conjunction;
    }

	negation = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(NegationContext);
	    } else {
	        return this.getTypedRuleContext(NegationContext,i);
	    }
	};

	AND = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(reglasParser.AND);
	    } else {
	        return this.getToken(reglasParser.AND, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.enterConjunction(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.exitConjunction(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof reglasVisitor ) {
	        return visitor.visitConjunction(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class NegationContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = reglasParser.RULE_negation;
    }

	NOT() {
	    return this.getToken(reglasParser.NOT, 0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.enterNegation(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.exitNegation(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof reglasVisitor ) {
	        return visitor.visitNegation(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = reglasParser.RULE_primary;
    }

	variable() {
	    return this.getTypedRuleContext(VariableContext,0);
	};

	LPAREN() {
	    return this.getToken(reglasParser.LPAREN, 0);
	};

	implication() {
	    return this.getTypedRuleContext(ImplicationContext,0);
	};

	RPAREN() {
	    return this.getToken(reglasParser.RPAREN, 0);
	};

	disjunction() {
	    return this.getTypedRuleContext(DisjunctionContext,0);
	};

	conjunction() {
	    return this.getTypedRuleContext(ConjunctionContext,0);
	};

	negation() {
	    return this.getTypedRuleContext(NegationContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof reglasVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class VariableContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = reglasParser.RULE_variable;
    }

	LETTER = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(reglasParser.LETTER);
	    } else {
	        return this.getToken(reglasParser.LETTER, i);
	    }
	};


	DIGIT = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(reglasParser.DIGIT);
	    } else {
	        return this.getToken(reglasParser.DIGIT, i);
	    }
	};


	enterRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.enterVariable(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof reglasListener ) {
	        listener.exitVariable(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof reglasVisitor ) {
	        return visitor.visitVariable(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




reglasParser.JuliContext = JuliContext; 
reglasParser.FormulaContext = FormulaContext; 
reglasParser.ImplicationContext = ImplicationContext; 
reglasParser.DisjunctionContext = DisjunctionContext; 
reglasParser.ConjunctionContext = ConjunctionContext; 
reglasParser.NegationContext = NegationContext; 
reglasParser.PrimaryContext = PrimaryContext; 
reglasParser.VariableContext = VariableContext; 

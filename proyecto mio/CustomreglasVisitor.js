import reglasVisitor from './generated/reglasVisitor.js';

export default class CustomreglasVisitor extends reglasVisitor {
    constructor() {
        super();
        this.variables = new Set();
    }

    visitJuli(ctx) {
        return this.visit(ctx.formula());
    }

    visitFormula(ctx) {
        return this.visit(ctx.implication());
    }
    visitImplication(ctx) {
    const left = this.visit(ctx.disjunction());
    if (ctx.implication()) {
        const right = this.visit(ctx.implication());
        // Asegurarse de retornar solo el string, no un array
        return `(!${left} || ${right})`;
        }
    return left;
    }

    visitDisjunction(ctx) {
        const parts = [];
        for (let i = 0; i < ctx.conjunction().length; i++) {
            parts.push(this.visit(ctx.conjunction(i)));
        }
        return parts.length > 1 ? `(${parts.join(' || ')})` : parts[0];
    }

    visitConjunction(ctx) {
        const parts = [];
        for (let i = 0; i < ctx.negation().length; i++) {
            parts.push(this.visit(ctx.negation(i)));
        }
        return parts.length > 1 ? `(${parts.join(' && ')})` : parts[0];
    }

    visitNegation(ctx) {
        if (ctx.NOT()) {
            return `!${this.visit(ctx.negation())}`;
        }
        return this.visit(ctx.primary());
    }

    visitPrimary(ctx) {
        if (ctx.variable()) {
            return this.visit(ctx.variable());
        } else if (ctx.LPAREN()) {
            if (ctx.implication()) {
                return `(${this.visit(ctx.implication())})`;
            }
            if (ctx.disjunction()) {
                return `(${this.visit(ctx.disjunction())})`;
            }
            if (ctx.conjunction()) {
                return `(${this.visit(ctx.conjunction())})`;
            }
            if (ctx.negation()) {
                return `(${this.visit(ctx.negation())})`;
            }
        }
        return '';
    }

    visitVariable(ctx) {
        const varName = ctx.getText();
        this.variables.add(varName);
        return `context.${varName}`;
    }

    getVariables() {
        return Array.from(this.variables);
    }

    generateJSCode(expression) {
    const vars = this.getVariables();
    let jsCode = 'const context = {\n';
    
    // Asignar valores aleatorios
    const assignedValues = {};
    vars.forEach(varName => {
        assignedValues[varName] = Math.random() < 0.5;
        jsCode += `    ${varName}: ${assignedValues[varName]},\n`;
    });
      
    jsCode += '};\n\n';
    jsCode += `const result = ${expression};\n`;
    jsCode += "console.log(result);";
    jsCode += 'console.log("Valores que fueron asignados:", context);';

    
    
    return jsCode;
}
}
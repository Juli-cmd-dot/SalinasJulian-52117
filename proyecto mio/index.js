import reglasLexer from "./generated/reglasLexer.js";
import reglasParser from "./generated/reglasParser.js";
import CustomreglasVisitor from "./CustomreglasVisitor.js";
import antlr4, { CharStreams, CommonTokenStream } from "antlr4";
import readline from 'readline';
import fs from 'fs';

async function main() {
    let input;

    try {
        input = fs.readFileSync('input.txt', 'utf8');
    } catch (err) {
        input = await leerCadena();
        console.log(input);
    }


    let inputStream = CharStreams.fromString(input);
    let lexer = new reglasLexer(inputStream);
    console.log("Verificando tokens generados por el lexer...");
const tokens = lexer.getAllTokens();
    if (tokens.length === 0) {
        console.error("No se generaron tokens. Verifica la entrada y la gramática.");
        return;
    }
    
    console.log("\nTABLA DE LEXEMAS Y TOKENS:");
    console.log("--------------------------------------------------");
    console.log("|        Lexema         |         Token          |");
    console.log("--------------------------------------------------");
    
    for (let token of tokens) {
        const tokenType = reglasLexer.symbolicNames[token.type] || `UNKNOWN (${token.type})`;
        const lexema = token.text;
        console.log(`|  ${lexema.padEnd(17)}    | ${tokenType.padEnd(23)}|`);
    }
    console.log("--------------------------------------------------");

    inputStream = CharStreams.fromString(input);
    lexer = new reglasLexer(inputStream);
    let tokenStream = new CommonTokenStream(lexer);
    let parser = new reglasParser(tokenStream);
    let tree = parser.juli();

    if (parser.syntaxErrorsCount > 0) {
        console.error("\nSe encontraron errores de sintaxis en la entrada, no se generará árbol de derivación ni traducción a lenguaje JavaScript.");
    } else {
        console.log("\nEntrada válida.");
        const cadena_tree = tree.toStringTree(parser.ruleNames);
        console.log(`\nÁrbol de derivación: ${cadena_tree}`);

        const visitor = new CustomreglasVisitor();
        const jsExpression = visitor.visit(tree);
        
      
        
        if (jsExpression && typeof jsExpression === 'string') {
         console.log("\nTRADUCCIÓN A JAVASCRIPT:");
        console.log("------------------------------------------------------------------------------------------------");
        console.log('const result = ' + jsExpression + ';');
        console.log('console.log(result);');
        console.log("------------------------------------------------------------------------------------------------");
    try {
        const jsCode = visitor.generateJSCode(jsExpression);
        console.log("\nRESULTADO:");
        eval(jsCode); 
    } catch (e) {
        console.error("Error:", e.message);
            }
}
            }
}

function leerCadena() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise(resolve => {
        rl.question("Ingrese una cadena: ", (answer) => {
            rl.close();
            resolve(answer)
        });
    });
}

main();
import chalk from "chalk";
import pegaArquivo from "./index.js" ;
import validaURL from './http-validacao.js';

const caminho = process.argv;

async function processaTexto(caminhoDoArquivo){
    const resultado = await pegaArquivo(caminhoDoArquivo[2]);

    if (caminho[3] === 'validar'){
        console.log(chalk.yellow('LINKS VALIDADOS'), await validaURL(resultado));
    } else {
        console.log (chalk.yellow('LISTA DE LINKS'), resultado);
    }
}

//console.log(pegaArquivo(caminho[2]));

processaTexto(caminho);
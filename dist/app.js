"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Curso_1 = require("./agrecacao-composicao/Curso");
const Disciplina_1 = require("./agrecacao-composicao/Disciplina");
const Professor_1 = require("./agrecacao-composicao/Professor");
//Exemplo agregação-composição
console.log("============ agregação-composição  ============");
let curso = new Curso_1.Curso("Historia");
let disciplina1 = new Disciplina_1.Disciplina("Ditadura cubana", 80);
let disciplina2 = new Disciplina_1.Disciplina("historia do Brasil", 200);
let professor = new Professor_1.Professor("Carlos");
disciplina1.adicionaProfessor(professor);
disciplina2.adicionaProfessor(professor);
curso.adicionaDisciplina(disciplina1);
curso.adicionaDisciplina(disciplina2);
console.log("Curso: ", curso);
//fim
//Exemplo herança
console.log("============ herança ============");
const Empresa_1 = require("./heranca/Empresa");
const PF_1 = require("./heranca/PF");
const PJ_1 = require("./heranca/PJ");
//Criação funcionarios
const lady = new PJ_1.PJ("Carla", 10000, "8383820203483028372");
const lord = new PF_1.PF("Pedro", 5000, "06776087635");
//Criação Empresa
const panasonic = new Empresa_1.Empresa("panasonic");
//Adição de funcionario
panasonic.adicionaFuncionario(lady);
panasonic.adicionaFuncionario(lord);
//Mostrando
console.log(panasonic);

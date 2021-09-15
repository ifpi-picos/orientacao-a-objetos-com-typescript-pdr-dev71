import { Curso } from "./agrecacao-composicao/Curso";
import { Disciplina } from "./agrecacao-composicao/Disciplina";
import { Professor } from "./agrecacao-composicao/Professor";

//Exemplo agregação-composição
console.log("============ agregação-composição  ============")
let curso = new Curso("Historia");
let disciplina1 = new Disciplina("Ditadura cubana", 80);
let disciplina2 = new Disciplina("historia do Brasil", 200);

let professor = new Professor("Carlos");
disciplina1.adicionaProfessor(professor);
disciplina2.adicionaProfessor(professor);

curso.adicionaDisciplina(disciplina1);
curso.adicionaDisciplina(disciplina2);

console.log("Curso: ", curso);

//fim

//Exemplo herança
console.log("============ herança ============")
import { Empresa } from "./heranca/Empresa";
import { PF } from "./heranca/PF";
import { PJ } from "./heranca/PJ";

//Criação funcionarios
const lady = new PJ("Carla", 10000, "8383820203483028372")

const lord = new PF("Pedro", 5000, "06776087635")

//Criação Empresa
const panasonic = new Empresa("panasonic")

//Adição de funcionario
panasonic.adicionaFuncionario(lady)
panasonic.adicionaFuncionario(lord)

//Mostrando
console.log(panasonic)





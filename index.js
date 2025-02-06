const firstStudentName = "Raimon";
const firstStudentFirstLastName = "Solà";
const firstStudentSecondLastName = "Claver";
let firstStudentAge = 34;
const firstStudentFullName = `${firstStudentName} ${firstStudentFirstLastName} ${firstStudentSecondLastName}`;

const secondStudentName = "Núria";
const secondStudentFirstLastName = "Artola";
const secondStudentSecondLastName = "Sanmartín";
let secondStudentAge = 43;
const secondStudentFullName = `${secondStudentName} ${secondStudentFirstLastName} ${secondStudentSecondLastName}`;

const studentsAgeAverage = (firstStudentAge + secondStudentAge) / 2;

const basicDifficultyLevel = "básico";
const intermediateDifficultyLevel = "intermedio";
const advancedDifficultyLevel = "avanzado";

const introductionCourseName = "Introducción a la programación";
const introductionCourseDifficulty = basicDifficultyLevel;
const introductionCourseHours = 20;

const typescriptAdvancedCourseName = "Typescript Avanzado";
const typescriptAdvancedCourseDifficulty = advancedDifficultyLevel;
const typescriptAdvancedCourseHours = 12;

const reactManagementCourseName = "Gestión del estado en React";
const reactManagementCourseDifficulty = intermediateDifficultyLevel;
const reactManagementCourseHours = 15;

console.log(`INFORME DE LA ESCUELA
  
    Cursos:
    - ${introductionCourseName} (nivel ${introductionCourseDifficulty}, ${introductionCourseHours} horas)
    - ${typescriptAdvancedCourseName} (nivel ${typescriptAdvancedCourseDifficulty}, ${typescriptAdvancedCourseHours} horas)
    - ${reactManagementCourseName} (nivel ${reactManagementCourseDifficulty}, ${reactManagementCourseHours} horas)
    
    Alumnos:
    - ${firstStudentFullName}, ${firstStudentAge} años
    - ${secondStudentFullName}, ${secondStudentAge} años
    
    Edad media de los alumnos: ${studentsAgeAverage} años`);

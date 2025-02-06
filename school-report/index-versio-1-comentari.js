// Això és per veure què passa amb aquesta versió i les anteriors

const space = " ";
const lineFeed = "\n";
const doubleLineFeed = "\n" + "\n";
const indent = space + space;
const indentListElement = indent + "-" + space;
const commaAndSpace = ", ";
const title = "INFORME DE LA ESCUELA";
const firstSubtitle = "Cursos:";
const secondSubtitle = "Alumnos:";
const courseLevelPartPhrase = " (nivel ";
const courseHoursPartDetail = " horas)";
const studentYearsDetail = " años";

const firstStudentName = "Raimon";
const firstStudentFirstLastName = "Solà";
const firstStudentSecondLastName = "Claver";
let firstStudentAge = 34;
const firstStudentFullName =
  firstStudentName +
  space +
  firstStudentFirstLastName +
  space +
  firstStudentSecondLastName;
const firstStudentFullNameAndAge =
  firstStudentFullName + commaAndSpace + firstStudentAge + studentYearsDetail;

const secondStudentName = "Núria";
const secondStudentFirstLastName = "Artola";
const secondStudentSecondLastName = "Sanmartín";
let secondStudentAge = 43;
const secondStudentFullName =
  secondStudentName +
  space +
  secondStudentFirstLastName +
  space +
  secondStudentSecondLastName;
const secondStudentFullNameAndAge =
  secondStudentFullName + commaAndSpace + secondStudentAge + studentYearsDetail;

const studentsAgeAverage = (firstStudentAge + secondStudentAge) / 2;
const studentsAverageDetail = "Edad media de los alumnos: ";
const studentsAveragePhrase =
  studentsAverageDetail + studentsAgeAverage + studentYearsDetail;

const basicDifficultyLevel = "básico";
const intermediateDifficultyLevel = "intermedio";
const advancedDifficultyLevel = "avanzado";

const introducitonCourseName = "Introducción a la programación";
const introductionCourseDifficulty = basicDifficultyLevel;
const introductionCourseHours = 20;
const introductionCourseFullName =
  introducitonCourseName +
  courseLevelPartPhrase +
  introductionCourseDifficulty +
  commaAndSpace +
  introductionCourseHours +
  courseHoursPartDetail;

const typescriptAdvancedCourseName = "Typescript Avanzado";
const typescriptAdvancedCourseDifficulty = advancedDifficultyLevel;
const typescriptAdvancedCourseHours = 12;
const typescriptAdvancedCourseFullName =
  typescriptAdvancedCourseName +
  courseLevelPartPhrase +
  typescriptAdvancedCourseDifficulty +
  commaAndSpace +
  typescriptAdvancedCourseHours +
  courseHoursPartDetail;

const reactManagementCourseName = "Gestión del estado en React";
const reactManagementCourseDifficulty = intermediateDifficultyLevel;
const reactManagementCourseHours = 15;
const reactManagementCourseFullName =
  reactManagementCourseName +
  courseLevelPartPhrase +
  reactManagementCourseDifficulty +
  commaAndSpace +
  reactManagementCourseHours +
  courseHoursPartDetail;

console.log(
  title +
    doubleLineFeed +
    indent +
    firstSubtitle +
    lineFeed +
    indentListElement +
    introductionCourseFullName +
    lineFeed +
    indentListElement +
    typescriptAdvancedCourseFullName +
    lineFeed +
    indentListElement +
    reactManagementCourseFullName +
    doubleLineFeed +
    indent +
    secondSubtitle +
    lineFeed +
    indentListElement +
    firstStudentFullNameAndAge +
    lineFeed +
    indentListElement +
    secondStudentFullNameAndAge +
    doubleLineFeed +
    studentsAveragePhrase
);

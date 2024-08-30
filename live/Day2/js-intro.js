const studentName = "Lars";

const lars = {
  name: studentName,
  birthYear: 1992,
  isNew: false,
  role: "student",
}

const students = [
  lars,
  {
    name: "Mikkel",
    birthYear: 1993,
    isNew: true,
    role: "superadmin",
  },
  {
    name: "Mads",
    birthYear: 1991,
    isNew: false,
    role: "admin"
  }
]

const getStudentAboveBirthYear = (students, birthYear) => {
  return students.filter(student => student.birthYear > birthYear);
}

const studentsAbove1992 = getStudentAboveBirthYear(students, 1992);

const transformStudents = students => students.map(student => ({
  ...student,
  age: new Date().getFullYear() - student.birthYear
}));

const studentsWithAge = transformStudents(students);

const findStudent = (students, name) => {
  return students.find(student.name.toLowerCase() === name?.toLowerCase())
}

const studentFound = findStudent(students, "Lars");

const hasAccess = (roles, students) => {
  return students.filter(student => {
    return roles.includes(student.role);
  });
};

const adminRoles = hasAccess(["admin"], students)
const studentRoles = hasAccess(["student"], students);
const adminOrSuperAdminRoles = hasAccess(["admin", "superadmin"], students);

const omitName = (students) => {
  return students.map(student => {
    const { name, ...rest } = student;
    return rest;
  });
}

const omitNameSimple = students => students.map(({ name, ...rest }) => rest);

const studentNameOmitted = omitName(students);



function test() {
  console.log(students);
  console.log(studentsAbove1992);
  console.log(studentsWithAge);
}

test();
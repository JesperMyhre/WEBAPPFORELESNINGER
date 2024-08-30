type ID = string;

const id: ID = "2";

type HabitObject = {
  id: ID;
  title: string;
  createdAt?: string | Date;
}

const object: HabitObject = {
  id: "1",
  title: "Title here",
  createdAt: new Date()
}

type HabitObject = HabitObject[];

const habitObject: HabitObject = [object, {id: 1}];

type HabitTitle = Pick<HabitObject, "title">;

type CreateHabitDTO = Omit<HabitObject, "id">;

const createHabit = (data: CreateHabitDTO) => {
  return data;
}

createHabit({id: "test", title: "Test"})

type FancyID = `${string}-${string}-${string}`;

const fancyID: FancyID = "1-2-3";

type StudentMeta = {name: string, birthYear: number};
type StudentRecord= Record<FancyID, StudentMeta>;
type Student = string | StudentRecord;

const getStudent = async (
  students: Student[],
  id: FancyID
): Promise<StudentRecord | undefined | never> => {
  if (students.every((s) => typeof s === "string"))
    throw new Error("Can not locate user when all are strings");
  return students
    .filter((student) => typeof student !== "string")
    .find((student) => student[id]);
};
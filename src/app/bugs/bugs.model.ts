export class Bugs{
    constructor(
        public id: number,
        public description: string,
        public priority: string,
        public area: string,
        public filedby: string,
        public filedat: string,
        public solution: string,
        public fixedby: string,
        public fixedat: string,
        active: boolean
    ){}
}
export class AddBugs{
  constructor(
    public description: string,
    public priority: string,
    public area: string,
    public filedby: string
  ){}
}
// id,description,priority,area,filed_by,filed_at,solution,fixed_by,fixed_on,active
// new Bugs(
//   1,
//   'Test 1',
//   'Low',
//   'client',
//   'Hetul',
//   '2022-02-25 10:00:00',
//   'Fixed',
//   'hetul',
//   '2022-02-25 10:00:00',
//   true

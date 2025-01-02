// class Person {
//   public _id: number;
//   private _name: string;

//   constructor(id: number, name: string) {
//     this._id = id;
//     this._name = name;
//   }

//   getName(): string {
//     console.log(this._name);
//     return this._name;
//   }
// }

// class Employee extends Person {
//   private _role: string;

//   constructor(role: string, id: number, name: string) {
//     super(id, name);
//     this._role = role;
//   }

//   getRole(): string {
//     console.log(this._role);
//     return this._role;
//   }
// }

// class Manager extends Employee {
//   private _department: string;
//   constructor(department: string, role: string, id: number, name: string) {
//     super(role, id, name);
//     this._department = department;
//   }
//   getDepartment(): string {
//     console.log(this._department);
//     return this._department;
//   }
// }

// class Task {
//   public _id: number;
//   private _title: string;
//   private _deadline: Date;
//   private _isCompleted: boolean;

//   constructor(
//     id: number,
//     title: string,
//     deadline: Date,
//     isCompleted: boolean = false
//   ) {
//     this._id = id;
//     this._title = title;
//     this._deadline = deadline;
//     this._isCompleted = isCompleted;
//   }

//   Complete(): void {
//     this._isCompleted = true;
//   }

//   getDetails(): void {
//     console.log(
//       `Task ${this._id} - Title: ${this._title} - Deadline: ${this._deadline} -  Completed: ${this._isCompleted}`
//     );
//   }
// }

// class Assignment {
//   private _employee: Employee;
//   private _task: Task;

//   constructor(employee: Employee, task: Task) {
//     this._employee = employee;
//     this._task = task;
//   }
//   getAssignmentDetails(): void {
//     console.log(
//       `Task ${this._task.getDetails} 
//       --------
//       Employee: ${this._employee.getName()}, ${this._employee.getRole()}`
//     );
//   }
// }

// class TaskManager {
//   private _employees: Employee[];
//   private _manager: Manager[];
//   private _tasks: Task[];
//   private _assignment: Assignment[];

//   constructor() {
//     this._employees = [];
//     this._manager = [];
//     this._tasks = [];
//     this._assignment = [];
//   }

//   addEmployee(name: string, role: string): void {
//     this._employees.push(new Employee(role, this._employees.length + 1, name));
//   }

//   addManager(name: string, role: string, department: string): void {
//     this._manager.push(
//       new Manager(department, role, this._manager.length + 1, name)
//     );
//   }

//   addTask(title: string, deadline: string): void {
//     this._tasks.push(
//       new Task(this._tasks.length + 1, title, new Date(deadline))
//     );
//   }

//   assignTask(employeeId: number, taskId: number): void {
//     const employee: Employee | undefined = this._employees.find(
//       (emp) => emp._id === employeeId
//     );
//     const task: Task | undefined = this._tasks.find(
//       (tsk) => tsk._id === taskId
//     );
//     if (employee && task) {
//       this._assignment.push(new Assignment(employee, task));
//     } else {
//       console.error("Invalid employeeId or taskId");
//     }
//   }

//   completeTask(taskId: number): void {
//     const task: Task | undefined = this._tasks.find(
//       (tsk) => tsk._id === taskId
//     );
//     if (task) {
//       task.Complete();
//     } else {
//       console.error("Invalid taskId");
//     }
//   }

//   listAssignments(): void {
//     console.log(`danh sách công việc đã phân công`);
//     this._assignment.forEach((assignment) => {
//       assignment.getAssignmentDetails();
//     });
//   }
// }

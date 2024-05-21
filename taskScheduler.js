class Task {
  constructor(name, duration, reserve) {
    this.name = name;
    this.duration = duration;
    this.reserve = reserve;
  }
}

class TaskScheduler {
  static calculateTotalDuration(tasks) {
    let totalDuration = 0;
    tasks.forEach((task) => {
      totalDuration += task.duration + task.reserve;
    });
    return totalDuration;
  }
}

// Приклад використання
const tasks = [
  new Task("Task 1", 10, 2),
  new Task("Task 2", 8, 1),
  new Task("Task 3", 12, 3),
];

const totalDuration = TaskScheduler.calculateTotalDuration(tasks);
console.log("Total duration:", totalDuration);

// Функція для тестування
function testTaskScheduler() {
  const tasks = [
    new Task("Task 1", 10, 2),
    new Task("Task 2", 8, 1),
    new Task("Task 3", 12, 3),
    // Додаткові завдання...
  ];

  const totalDuration = TaskScheduler.calculateTotalDuration(tasks);
  console.log("Total duration:", totalDuration);
}

testTaskScheduler();

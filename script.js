const stages = [
  {
    title: "Этап 1: Семейная память",
    question: "В каком году ты стал папой?",
    options: ["2004", "2010", "Я всегда был папой, просто не всегда знал об этом"],
    image: "papa2.jpg",
  },
  {
    title: "Этап 2: Умения и навыки",
    question: "Что ты умеешь лучше всего?",
    options: ["Чинить всё, что не сломано", "Готовить шашлык при любой погоде", "Давать советы, которые вспоминаешь через 5 лет"],
    image: "papa3.img",
  },
  {
    title: "Этап 3: Папин девиз",
    question: "Выбери свой девиз:",
    options: ["Надо решать проблемы по мере их поступления", "Дело-то житейское", "От работы дохнут кони, ну а я − бессмертный пони"],
    image: "papa4.img",
  },
  {
    title: "🎉 Диагностика завершена",
    question: "Папа 5.0 — уникальный экземпляр. Пробег: 50 лет. Состояние: Отличное. Поддержка: Безграничная.",
    options: [],
    image: "papa5.img",
  }
];

let current = 0;

function nextStage() {
  const app = document.getElementById("app");
  const stage = stages[current];

  let html = `<h2>${stage.title}</h2><p>${stage.question}</p>`;
  stage.options.forEach(opt => {
    html += `<button onclick="nextStage()">${opt}</button><br>`;
  });

  if (stage.options.length === 0) {
    html += `<h3>С юбилеем! Мы тебя любим ❤️</h3>`;
  }

  app.innerHTML = html;
  current++;

}


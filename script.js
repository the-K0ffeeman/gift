const stages = [
  {
    title: "Этап 1: Семейная память",
    question: "В каком году ты впервые стал папой?",
    options: ["199X", "200X", "Я всегда был папой"],
  },
  {
    title: "Этап 2: Умения и навыки",
    question: "Что ты умеешь лучше всего?",
    options: ["Чинить всё", "Готовить шашлык", "Давать советы"],
  },
  {
    title: "Этап 3: Папин девиз",
    question: "Выбери свой девиз:",
    options: ["Я же говорил", "Ничего, прорвёмся", "Главное — здоровье"],
  },
  {
    title: "🎉 Диагностика завершена",
    question: "Папа 5.0 — уникальный экземпляр. Пробег: 50 лет. Состояние: Отличное. Поддержка: Безграничная.",
    options: [],
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
    html += `<h3>С юбилеем! Ты — наш герой ❤️</h3>`;
  }

  app.innerHTML = html;
  current++;
}
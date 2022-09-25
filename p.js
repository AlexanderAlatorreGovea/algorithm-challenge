const questions = [
  {
    id: "sign-up-form",
    name: "Sign-Up Form",
    category: "HTML",
  },
  {
    id: "item-cart",
    name: "Item Cart",
    category: "HTML",
  },
  {
    id: "spaghetti-recipe",
    name: "Spaghetti Recipe",
    category: "HTML",
  },
];

const submissions = [
  {
    questionId: "blog-post",
    status: "CORRECT",
  },
  {
    questionId: "throttle",
    status: "INCORRECT",
  },
  {
    questionId: "stopwatch",
    status: "PARTIALLY_CORRECT",
  },
  {
    questionId: "pig-emoji",
    status: "CORRECT",
  },
];

const formatQuestions = (questions) => {
  const questionsByCategory = {};

  questions.forEach(({ category, ...props }) => {
    if (!questionsByCategory[category]) {
      questionsByCategory[category] = [];
    }

    questionsByCategory[category].push(props);
  });

  return questionsById;
};

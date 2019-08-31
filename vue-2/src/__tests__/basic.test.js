const assert = require('assert');

/**
 * Load page recursive.
 */
const load = async () => {
  try {
    await page.goto('http://localhost:8080');
  } catch (e) {
    await load();
  }
};

describe('Quiz', () => {
  beforeEach(load);

  it('should have at least one question with options', async () => {
    const questions = await page.$$('[data-test="pergunta"]');

    assert(questions.length > 0, 'Quiz should have questions.');

    const options = await Promise.all(questions.map(question => question.$$('[data-test="opcao"]')));

    options.forEach((option, index) => assert(option.length > 1, `Question number "${index + 1}" should have more than one option.`));
  });
});

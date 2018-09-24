let interviewQuestion = require('./task2');

describe('Function InterviewQuestion', () => {
  it('interview for designer', () => {
    let interviewDesigner = interviewQuestion('designer')('John');
  expect(interviewDesigner).toBe('John can you please explain what UX design is?');
  });
  it('interview for teacher', () => {
    let interviewTeacher = interviewQuestion('teacher')('John');
  expect(interviewTeacher).toBe('What subject do you teach John ?');
  });
  it('interview for other prof', () => {
    let interviewOther = interviewQuestion('other')('John');
  expect(interviewOther).toBe('Hello John, what do you do?');
  });
});
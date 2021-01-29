'use-strict';

module.exports = {
  skipQuestions: ['body', 'scope', 'footer', 'breaking'],
  subjectLimit: 100,
  types: [
    {
      value: ':house:(build)',
      name: '➕ (build):\tFix CI Build.',
    },
    {
      value: ':gear:(chore)',
      name: '⚙️  (chore):\t Dependencies configs (add, remove or update).',
    },
    {
      value: ':construction_worker:(ci)',
      name: '⚠️  (ci):\t Add or update CI build system.',
    },
    {
      value: ':memo:(docs)',
      name: '✏️  (docs):\t Add or update documentation.',
    },
    {
      value: ':sparkles:(feat)',
      name: '✨ (feat):\tIntroduce new features.',
    },
    {
      value: ':bug:(fix)',
      name: '✔️  (fix):\t Fix a bug.',
    },
    {
      value: ':zap:(perf)',
      name: '⚡️ (perf):\t Improve performance.',
    },
    {
      value: ':recycle:(refactor)',
      name: '♻️  (refact):\t Refactor code.',
    },
    {
      value: ':rewind:(revert)',
      name: '⏪ (revert):\tRevert changes.',
    },
    {
      value: ':art:(style)',
      name: '⭐️ (style):\t Add or update the UI and style files.',
    },
    {
      value: ':white_check_mark:(test)',
      name: '✅ (test):\tAdd or update tests',
    },
  ],
};

module.exports = {
  extends: 'standard',
  root: true,
  rules: {
    'semi': [ 2, 'always' ],
    'indent': [ 1, 2, { 'MemberExpression': 0, 'SwitchCase': 1 }]
  }
};

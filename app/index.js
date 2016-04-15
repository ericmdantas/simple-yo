'use strict';

const yeoman = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class MainGenerator extends yeoman.Base {
  constructor(args, options, config) {
    super(args, options, config);
  }

  log() {
    this.log(yosay('Welcome to the kickass ' + chalk.red('generator-simple-yo') + ' generator!'));
  }

  prompting() {
    let done = this.async();

    let prompts = [{
      name: 'myName',
      message: 'Whats your name?',
      default: 'your name goes here :D'
    }];

    this.prompt(prompts, (props) => {
      this.myName = props.myName;
      done();
    });
  }

  writing() {
    this.template('dummyfile.txt', 'new_dummyfile.txt', {name: this.myName});
  }

  install() {
    this.installDependencies();
  }
}

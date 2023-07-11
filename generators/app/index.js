
const generator = require('yeoman-generator')

module.exports = class extends generator {
	prompting() {
		return this.prompt([
			{
				type: 'input',
				name: 'name',
				message: 'your project name~',
				default: this.appname
			}
		])
		.then(answers => {
			this.answers = answers
		})
	}

	writing() {
		const templates = [
			'README.md',
		]
		templates.forEach(item => {
			this.fs.copyTpl(
				this.templatePath(item),
				this.destinationPath(item),
				this.answers
			)
		})
	}

}


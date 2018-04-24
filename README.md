# doraemon-cli
A light tool to generate projects in an easy way.

# Installation
```
npm install doraemon-cli -g
```
or
```
git clone https://github.com/MuYunyun/doraemon-cli.git

cd doraemon-cli && npm install

npm link
```

# Usage
Open your terminal and type `doraemon-cli` or `doraemon-cli -h` , you'll see the help infomation below:
```
  Usage: doraemon-cli <command>

  Commands:

    add|a      Add a new template
    list|l     List all the templates
    init|i     Generate a new project
    delete|d   Delete a template

  Options:

    -h, --help     output usage information
    -V, --version  output the version number
```

# Commands
### add | a
This command would help you to add a new template to the `templates.json`, which will be used by `Scion` to generate projects.
```
$ doraemon-cli add

? Set the custom name of the template: my-first-template
? Branch of the template: new
┌───────────────────┬────────┐
│ Template Name     │ Branch │
├───────────────────┼────────┤
│ my-first-template │ new    │
└───────────────────┴────────┘
✔ New template has been added successfully!
```
`Scion` use [download-git-repo](https://github.com/flipxfx/download-git-repo) to download git repos. After answering 3 questions, you'll add a new template to `Scion`.

### list | l
It shows you the templates list.
```
$ doraemon-cli list

┌────────────────────┬────────┐
│ Template Name      │ Branch │
├────────────────────┼────────┤
│ my-first-template  │ new    │
├────────────────────┼────────┤
│ my-second-template │ master │
└────────────────────┴────────┘
```

### init | i
After adding new templates, you could use this command to generate your own project by choosing template.
```
$ doraemon-cli init

? Template name: my-first-template
? Project name: my-project
? Where to init the project? ../
⠹ Downloading template...

New project has been initialized successfully!
```

It's easy, right?

### delete | d
To delete a template, you could use this command:
```
$ doraemon-cli delete

? Which template you want to delete? my-second-template
┌───────────────────┬────────┐
│ Template Name     │ Branch │
├───────────────────┼────────┤
│ my-first-template │ new    │
└───────────────────┴────────┘
✔ Template has been deleted successfully
```

# Template
The most important part of Scion is `template`. All templates' infomation were list in the `templates.json`.
A template means a project sample, which has a simple or complex file structure.

You can create your own templates repository, and push your templates in different branches. All you need to do then is to add the templates into Scion's `templates.json`.

# License
MIT.









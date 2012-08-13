Things Source
============

Things is a module that exports commonly used utilities. Avoids having several lines of boilerplate imports in every file.
Designed to be used with the destructruing syntax from CoffeScript or JavaScript ES5.

Install
-------
```
npm install things
```

Usage
-----

```coffee-script

{path, fs, util, crypto, _, moment} = require 'things'

```

or import only what you need

```coffee-script

{fs, _} = require 'things'

```

Features
--------

* Underscore
* Underscore.date
* Moment

Developer instructions
----------------------

* Ensure git, node and npm are installed
* git clone git@github.com:quillu/things.git
* run npm install
* run npm link ( this installs dev dependencies and symlinks the project to your global npm registry)
* Install the following globally via npm install -g
** vows

CakeFile
--------
A Cakefile is used to manage the app
type cake at the root directory to see a list of commands

Test
----
run
```
cake test
```

Developer flow
--------------
Follow github best practices

* Update to latest from master (should be fast forward)
* Create a new feature branch off master
* Push branch to origin
* Write a test
* Make test pass
* Refactor
* Commit
* Repeat till feature is finished
* Then update master to latest from origin (should be fast forward)
* Rebase your branch to be ontop of master
* Squash your commits into a atomic feature commit (should have a big log message auto created from the little commits)
* Merge onto master, and push (should be fast-forward)
* Once ready for release, tag master.
* Make branch bugfixes on a version branch off master

// This is where we'll import our model to perform db logic
const Skill = require('../models/skill');
// model by convention is always singular and capitalized (Not just JS, like every language)

module.exports = {
	index,
    show,
	new: newSkill,
	create,
	delete: deleteSkill
}

function deleteSkill(req, res){
	Skill.deleteOne(req.params.id)
	res.redirect('/skills');
}

function create(req, res){


	
	Skill.create(req.body)
	
	res.redirect('/skills');

}

function index(req, res){

	res.render('skills/index', {
		skills: Skill.getAll()
	});
}


function show(req, res){
	res.render('skills/show', {
		skillNum: req.params.id,
		skill: Skill.getOne(req.params.id)
	});
}

function newSkill (req, res){
	res.render('skills/new')
}
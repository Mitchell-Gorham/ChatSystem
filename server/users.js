class UserClass {
    constructor (id, pass, mail, valid, group){
        this.id=id;
        this.pass=pass;
        this.mail=mail;
        this.valid=valid;
        this.group=group;
    };
}

class GroupAdmin extends UserClass {
    constructor (){

    };
}

class SuperAdmin extends UserClass {
    constructor (){

    };
}

man = new UserClass ("bbb", "22Z", "aa@aa.com", false, ["steve","stove","store"]);

king = new SuperAdmin ("ebe", "33f", "uru@lbo.com", true, ["stew", "stow", "stop"]);

console.log(JSON.stringify(man));

console.log(JSON.stringify(king));

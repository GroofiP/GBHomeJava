'use strict';

/* 1.2
Сделайте в стиле es5, а затем в стиле es6 (по аналогии из урока),
а) конструктор Post, который принимает параметры author, text, date и сохраняет их как свойства объекта. Объекты
типа Post должны иметь метод edit, который будет принимать текст и записывать его в свойство text объекта.
б) конструктор AttachedPost, который принимает параметры author, text, date. Проинициализируйте эти свойства с
помощью конструктора Post, чтобы не дублировать код. Также в конструкторе AttachedPost должно создаваться
свойство highlighted со значением false. Унаследуйте в объектах типа AttachedPost методы из Post.
Объекты типа AttachedPost должны иметь метод makeTextHighlighted, который будет назначать свойству
highlighted значение true. */

//es5

/* function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text
}

let obj_1 = new Post("red", "sweet", "02-07-1996")
obj_1.edit("Hello world")
alert(obj_1.text)

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date)
    this.highlighted = false

}

AttachedPost.prototype = Object.create(Post.prototype)

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true
}

let obj_2 = new AttachedPost("blue", "sweet", "03-07-1996")
obj_2.makeTextHighlighted()
alert(obj_2.highlighted) */

//es6

class Post {
    constructor(author, text, date) {
        this.author = author
        this.text = text
        this.date = date
    }

    edit(text) {
        this.text = text
    }
}

let obj_1 = new Post("red", "sweet", "02-07-1996")
obj_1.edit("Hello world")
alert(obj_1.text)

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date)
        this.highlighted = false
    }

    makeTextHighlighted() {
        this.highlighted = true
    }
}

let obj_2 = new AttachedPost("blue", "sweet", "03-07-1996")
obj_2.edit("Hello world")
obj_2.makeTextHighlighted()
alert(obj_2.text)
alert(obj_2.highlighted)
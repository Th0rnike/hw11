import React from "react";
import Card from "./Cards";
import img1984 from '../assets/1984.jpg';
import imgLotr from '../assets/lotr.gif';
import imgGot from '../assets/got.jpg';
import imgNarnia from '../assets/narnia.jpg';
import imgHp from '../assets/hp.jpg'


const data = [
    {id: 1, image: img1984, title: "1984", description:"Big brother watches you", characters: ["Big Brother", "Winston Smith"]},
    {id: 2, image: imgLotr, title: "Lord of the rings", description:"You shall not pass", characters: ["Aragorn", "Legolas", "Gimli"]},
    {id: 3, image: imgGot, title: "Game of thrones", description:"Winter is Coming", characters: ["Jon Snow", "Tyrion Lannister"]},
    {id: 4, image: imgNarnia, title: "Narnia", description: "Remember that all worlds...", characters: ["Lion", "Peter"]},
    {id: 5, image: imgHp, title: "Harry Potter", description:"Gandalf but weaker", characters: ["Harry", "Snape", "Gandalf but Weaker"]}
]


export const BookComponent = () => {

    function action(title, characters){
        alert(`Characters: ${characters} are from book: ${title}`)
    }

    return (
        <div className='container'>
            {data.map((book) => <Card key={book.id} image={book.image} title={book.title} description={book.description} characters={book.characters} action={action}/>)}
        </div>
    )
}



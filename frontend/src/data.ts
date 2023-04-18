import { Subject } from "rxjs";
import { Book } from "./app/shared/models/book";
import { Tag } from "./app/shared/models/tag";

export const sample_foods: Book[] = [

  {
    id:'1',
    title: 'Psychology of Money',

    price: 10,
    author:'Morgan Housel ',
    subject:' In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.',
    publish_date:"1-09-2020",
    imageUrl: 'assets/psychology_of_money.jpg',
    tags: ['psychology', 'money'],
  },
  {
    id:'2',
    title: 'Commit To Yourself',

    price: 10,
    author:'Nancy Katyal',
    subject:' The various self-reflective exercises in the book help you to accept yourself, love yourself and improve yourself, not just your self-image.',
    publish_date:"30-11-2022",
    imageUrl: 'assets/commit_to_yourself.jpg',
    tags: ['self love', 'self value'],
  },
  {
    id:'3',
    title: 'The Happiness Hypothesis',

    price: 10,
    author:'Jonathan Haidt',
    subject:'The Happiness Hypothesis as an accessible vessel for his research into moral foundations theory.',
    publish_date:"1-09-2020",
    imageUrl: 'assets/the_happiness_hypothesis.jpg',
    tags: ['psychology',],
  },
  {
    id:'4',
    title: 'Influence : The Psychology of Persuasion',

    price: 10,
    author:'PhD Robert B. Cialdini',
    subject:'Each of the seven principles has a dedicated chapter to describe how it functions, where it’s most applicable, and — most importantly — how you apply it in your own life. ',
    publish_date:"1-09-2020",
    imageUrl: 'assets/influence.jpg',
    tags: ['psychology'],
  },
  {
    id:'5',
    title: ' Mistakes Were Made (but Not by Me)',

    price: 10,
    author:'Carol Tavri',
    subject: 'The next entry on this list might clarify some of these seemingly illogical decisions:  in Mistakes Were Made, Carol Tavris and Elliot Aronsondiscuss the systematic mental patterns which feed into development and radicalization of human beliefs.',
    publish_date:"1-09-2020",
    imageUrl: 'assets/psychology_of_money.jpg',
    tags: ['psychology', 'money'],
  },
  {
    id:'6',
    title: 'Psychology of Money',

    price: 10,
    author:'Morgan Housel ',
    subject:' In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.',
    publish_date:"1-09-2020",
    imageUrl: 'assets/psychology_of_money.jpg',
    tags: ['psychology', 'money'],
  },
  {
    id:'7',
    title: 'Psychology of Money',

    price: 10,
    author:'Morgan Housel ',
    subject:' In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.',
    publish_date:"1-09-2020",
    imageUrl: 'assets/psychology_of_money.jpg',
    tags: ['psychology', 'money'],
  },
  {
    id:'8',
    title: 'Psychology of Money',

    price: 10,
    author:'Morgan Housel ',
    subject:' In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.',
    publish_date:"1-09-2020",
    imageUrl: 'assets/psychology_of_money.jpg',
    tags: ['psychology', 'money'],
  },
  {
    id:'9',
    title: 'gundu gundu',

    price: 10,
    author:'Morgan Housel ',
    subject:' In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.',
    publish_date:"1-09-2020",
    imageUrl: 'assets/psychology_of_money.jpg',
    tags: ['psychology', 'money'],
  },
  {
    id:'10',
    title: 'Psychology of Money',

    price: 10,
    author:'Morgan Housel ',
    subject:' In the psychology of money, the author shares 19 short stories exploring the strange ways people think about money and teaches you how to make better sense of one of life?s most important matters.',
    publish_date:"1-09-2020",
    imageUrl: 'assets/psychology_of_money.jpg',
    tags: ['psychology', 'money'],
  },
]

export const sample_tags:Tag[] = [
  { name: 'All', count: 6 },
  { name: 'psychology', count: 4 },
  { name: 'self love', count: 2 },
  { name: 'Lunch', count: 3 },
  { name: 'SlowFood', count: 2 },
  { name: 'Hamburger', count: 1 },
  { name: 'Fry', count: 1 },
  { name: 'Soup', count: 1 },
]

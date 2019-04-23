// Get your shorts on - this is an array workout!
// ## Array Cardio Day 1

// Run the file in a node.js environment
// Install npm modules 'request' and 'cheerio' for web site parsing

// Some data we can work with

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    {
        first: 'Nicolaus',
        last: 'Copernicus',
        year: 1473,
        passed: 1543,
    },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    {
        first: 'Katherine',
        last: 'Blodgett',
        year: 1898,
        passed: 1979,
    },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    {
        first: 'Hanna',
        last: 'Hammarström',
        year: 1829,
        passed: 1909,
    },
];

const people = [
    'Beck, Glenn',
    'Becker, Carl',
    'Beckett, Samuel',
    'Beddoes, Mick',
    'Beecher, Henry',
    'Beethoven, Ludwig',
    'Begin, Menachem',
    'Belloc, Hilaire',
    'Bellow, Saul',
    'Benchley, Robert',
    'Benenson, Peter',
    'Ben-Gurion, David',
    'Benjamin, Walter',
    'Benn, Tony',
    'Bennington, Chester',
    'Benson, Leana',
    'Bent, Silas',
    'Bentsen, Lloyd',
    'Berger, Ric',
    'Bergman, Ingmar',
    'Berio, Luciano',
    'Berle, Milton',
    'Berlin, Irving',
    'Berne, Eric',
    'Bernhard, Sandra',
    'Berra, Yogi',
    'Berry, Halle',
    'Berry, Wendell',
    'Bethea, Erin',
    'Bevan, Aneurin',
    'Bevel, Ken',
    'Biden, Joseph',
    'Bierce, Ambrose',
    'Biko, Steve',
    'Billings, Josh',
    'Biondo, Frank',
    'Birrell, Augustine',
    'Black, Elk',
    'Blair, Robert',
    'Blair, Tony',
    'Blake, William',
];

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.table(
    inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600)
);

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.table(inventors.map(inventor => inventor.first + ' ' + inventor.last));

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.table(inventors.sort((a, b) => (a.year > b.year ? -1 : 1)));

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
console.log(
    'Total years all inventors lived: ' +
        inventors.reduce(
            (total, inventor) => (total += inventor.passed - inventor.year),
            0
        )
);

// 5. Sort the inventors by years lived
console.table(
    inventors
        .map(inventor => ({
            name: inventor.first + ' ' + inventor.last,
            age: inventor.passed - inventor.year,
        }))
        .sort((a, b) => (a.age > b.age ? 1 : -1))
);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const request = require('request');
const cheerio = require('cheerio');
request(
    'https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris',
    (error, response, body) => {
        if (!error && response.statusCode === 200) {
            const $ = cheerio.load(body);
            Array.from($('.mw-category-group ul li a'))
                .filter(element => element.attribs.title.indexOf('de') !== -1)
                .map(element => console.log(element.attribs.title));
        }
    }
);

// 7. sort Exercise
// Sort the people alphabetically by last name
console.log(
    people.sort((a, b) => (a.match(/^[^,]+,/) > b.match(/^[^,]+,/) ? 1 : -1))
);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = [
    'car',
    'car',
    'truck',
    'truck',
    'bike',
    'walk',
    'car',
    'van',
    'bike',
    'walk',
    'car',
    'van',
    'car',
    'truck',
];
console.log(
    data.reduce((resArr, element) => {
        let elementIndex = resArr.indexOf(element);
        if (elementIndex === -1) {
            resArr.push(element);
            resArr.push(1);
        } else {
            resArr[elementIndex + 1] += 1;
        }
        return resArr;
    }, [])
);

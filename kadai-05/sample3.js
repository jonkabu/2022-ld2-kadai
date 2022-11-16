// 配列とループ
const animals =  ['dog', 'cat', 'rabbit']

for (let index = 0; index < animals.length; index++) {
    const animal = animals[index];
    console.log(index,animal);
}

for (const animal of animals) {
    console.log(animal)
}

var movies = [
    {
        title: 'In Bruges',
        hasWatched: true,
        stars: 5
    },
    {
        title: 'Frozen',
        hasWatched: false,
        stars: 4.5
    },
    {
        title: 'Mad Max Fury Road',
        hasWatched: true,
        stars: 5
    },
    {
        title: 'Les Miserables',
        hasWatched: false,
        stars: 3.5
    }
];

movies.forEach(movie => {
    if(movie.hasWatched){
        console.log('You have watched "' + movie.title + '"  -  ' + movie.stars + ' stars');
    }else{
        console.log('You have not seen "' + movie.title + '"  -  ' + movie.stars + ' stars');
    }
});
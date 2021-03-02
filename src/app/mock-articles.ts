import { Article } from "./article";


export const ARTICLES: Article[] = [
    {
        id: 1,
        title: 'My first article',
        content: "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pellentesque mollis ipsum ac semper. Suspendisse non pharetra nunc. Quisque commodo lectus ac urna dictum, vel sodales augue tristique. Duis euismod leo odio, ac tristique felis dictum ut. Phasellus vitae posuere nulla, eget gravida leo. Nulla luctus faucibus massa eu pretium. Integer vitae quam id urna pulvinar eleifend. Phasellus quis libero nec elit convallis laoreet ac id massa. Duis in vestibulum mi. Nulla a mollis dolor. Sed pulvinar scelerisque lacus at tincidunt. Ut risus massa, ultrices sit amet risus ut, gravida venenatis metus. Sed malesuada ac justo nec pellentesque.</p>",
        description: 'This is my first article!',
        key: 'my-first-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular.png'
    },
    {
        id: 2,
        title: 'The second article',
        content: "<p>Sed consectetur purus lorem, ac convallis mauris scelerisque id. Vestibulum dignissim diam et blandit euismod. Donec id tortor venenatis, gravida lectus in, tincidunt leo. Etiam metus lorem, pulvinar vitae ex at, pharetra volutpat mauris. Nullam sagittis erat sed imperdiet viverra. Maecenas quis felis at sem suscipit bibendum. Nunc suscipit aliquet odio feugiat finibus. Suspendisse ultrices nec orci et laoreet. Morbi at elit at nunc malesuada faucibus nec vitae elit. Etiam a tortor nec augue porttitor accumsan nec tristique odio. Etiam ligula nisi, maximus ut turpis varius, sollicitudin dapibus turpis.</p>",
        description: 'Also a great article!',
        key: 'my-second-article',
        date: new Date(),
        imageUrl: 'http://angular.io/assets/images/logos/angular/angular_solidBlack.png'
    }

]





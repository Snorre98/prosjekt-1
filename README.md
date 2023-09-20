# Functional documentation

Our application is a randomized Pokedex! It generates 10 random Pokemon and lets you favorite and filter them. You favorites are stored forever in the browser and the filter persists when the page reloads. Clicking on 'details', presents you with a single resource (Pokemon), with additional information such as height and weight. The page has a responsive design that works with both laptops and mobile devices.

## Our web app

Our web app is available at http://it2810-23.idi.ntnu.no/project1/

# Technical documentation

## Formater and linter

We are using the Prettier formatter and the ESLint linter. These are much-used code-checking tools, which can be configured to customize linting and formatting. One advantage of using these tools, as supposed to other formaters and linters  is the availability of documentation and ready-made linting and formatting configuration provided by industry leaders.

For the most part, we are using the default configuration generated when building a regular Vite project, but we have added formatting and linting on commit by adding [Husky](https://github.com/typicode/husky) to the project, which uses Git hooks to execute formatting and linting pre-commit. This makes it more likly that all code in the master branch is uniform and nice.

## Frontend code testing

For frontend testing we use Vitest with Testing Library for React and Jest. Vitest in a frontend testing framework made by the same group as Vite and is therefor well integrated with Vite. To create user eventes like clicking a button, Testing Library for React is used. This makes it possible to test if a the user interface works as expected. Jest is a frontend testing framwork which historicaly has been much used. In a Vite project Jest can extend Vitest to add functionality to testing. Among other things, Jest makes it simple to check if values in a frontend component matches expected values.

## React Routes

We use React Routes to navigate around the page. Specifically to navigate to a details page about each Pokemon. The URLs are dynamic and generated from the names of the Pokemon you click on.

## TanStack Query

We tried to add TanStack Query as part of our fetching from the API, but in the end, we decided to not use it. That is because of the way our application functions. We fetch from the API 10 times to retrieve all of the different Pokemon and present some of the info right away. This is so that we can filter by Pokemon type. TanStack Query is not meant to be used in such a way, e.g. in a loop or another hook.

It would however make sense if we didn't fetch from the API when presenting the 10 Pokemon and instead made a single API call when looking at a single Pokemon. This would perhaps be a better solution, but then we would have to hardcode the Pokemon names and types to ensure filtering. PokeAPI has an endpoint where you can fetch all Pokemon with just their names, but still, we would need to make 10 additional calls to get their types.

## PokeAPI

We are using PokeAPI for our application. This API lets us get information about one specific Pokemon, which we utilize. One issue we had is that we don't need all the information about each Pokemon, but the API doesn't have an endpoint that is tailored to our needs. We therefore overfetch and receive a lot of data we don't need. This is not sustainable. A solution to this is using GraphQL instead of a REST API, which lets you specify exactly what data you want to fetch. However, for this project, using a REST API was one of the requirements.

### Testing
In our project we are testing if props are working as expected in PokemonCard. We also tried to test the state of the Heart component, but where not succesfull in changing the state by simuating a click with Testing Library. There might be multiple reasons for this. Among others, that the test are wrong or does something unexpected or that the code of the component is doing something unexpected. When testing the UI manually it works as expected, so it is probably the tests that are wrong in this case. 
We commented out the part of the Heart component test to make the code run.

### Local storage

We use local storage to store the names of the Pokemon that are marked as favorites. In our current solution, we are only saving the name of the Pokemon which means we have to make additional API requests when showing your favorite Pokemon. In the future, we should consider storing all the info about the favorite Pokemon in local storage, such that we minimize the API requests we have to make.

### SessionStorage

We use session storage to store the 10 random Pokemon so that when you click on details for each Pokemon, we can fetch that information from the session storage instead of making an additional API call. We also use it to store the state of the filter, so that when you reload the filter persists. It should be noted that the Pokemon will change, but that is an intentional feature because we want to generate 10 random Pokemon each time. However, when refreshed if some of the Pokemon fit the filter it will show.

## React state and props

We are using props to make it possible to reuse code. Most notably in the PokemonCard component and the pokemonCardTemplate page.

State is handled through various useStates. For example for handling what Pokemon should be shown when the filter is active and what Pokemon are favorited.
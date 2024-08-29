/* This file was automatically generated. DO NOT UPDATE MANUALLY. */
    import type   { Resolvers } from './types.generated.js';
    import    { athletes as Query_athletes } from './../schema/athletes/resolvers/Query/athletes.js';
import    { countries as Query_countries } from './../schema/countries/resolvers/Query/countries.js';
import    { sports as Query_sports } from './../schema/sports/resolvers/Query/sports.js';
import    { Athlete } from './../schema/athletes/resolvers/Athlete.js';
import    { Country } from './../schema/countries/resolvers/Country.js';
import    { Sport } from './../schema/sports/resolvers/Sport.js';
    export const resolvers: Resolvers = {
      Query: { athletes: Query_athletes,countries: Query_countries,sports: Query_sports },
      
      
      Athlete: Athlete,
Country: Country,
Sport: Sport
    }
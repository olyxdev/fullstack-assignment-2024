-- Create tables
CREATE TABLE "Country" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid (),
    "name" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    CONSTRAINT "Country_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Athlete" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid (),
    "name" TEXT NOT NULL,
    "countryId" TEXT NOT NULL,
    CONSTRAINT "Athlete_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Athlete_countryId_fkey" FOREIGN KEY ("countryId") REFERENCES "Country"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

CREATE TABLE "Sport" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "name" TEXT NOT NULL,
    CONSTRAINT "Sport_pkey" PRIMARY KEY ("id")
);

CREATE TABLE "Athlete_Sport" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid (),
    "athleteId" TEXT NOT NULL,
    "sportId" TEXT NOT NULL,
    CONSTRAINT "Athlete_Sport_pkey" PRIMARY KEY ("id"),
    CONSTRAINT "Athlete_Sport_athleteId_fkey" FOREIGN KEY ("athleteId") REFERENCES "Athlete"("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Athlete_Sport_sportId_fkey" FOREIGN KEY ("sportId") REFERENCES "Sport"("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
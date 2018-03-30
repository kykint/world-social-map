export class VisitedCountryDto {
  countryName: string;
  visitedCities: string;
  descripion: string;
  assessment: number;

  constructor(countryName: string, visitedCities: string, description: string, assessment: number) {
    this.countryName = countryName;
    this.visitedCities = visitedCities;
    this.descripion = description;
    this.assessment = assessment;
  }
}

import { Pipe, PipeTransform } from "@angular/core";

// creates a new Date object with the utc values of the given Date

@Pipe({name: "utc"})
export class UtcPipe implements PipeTransform {
  transform(value: Date): Date {
    return new Date(value.getUTCFullYear(),
                    value.getUTCMonth(),
                    value.getUTCDate(),
                    value.getUTCHours(),
                    value.getUTCMinutes(),
                    value.getUTCSeconds(),
                    value.getUTCMilliseconds());
  }
}
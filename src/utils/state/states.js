export const CONVERTER_TYPES = {
    LENGTH: "length",
    TEMPERATURE: "temperature",
    AREA: "area",
    WEIGHT: "weight",
    VOLUME: "volume",
  },
  getTypeOptions = (type) => {
    switch (type) {
      case CONVERTER_TYPES.LENGTH:
        return [
          "meters",
          "kilometers",
          "centimeters",
          "millimeters",
          "micrometers",
          "nanometers",
          "mile",
          "yard",
          "foot",
          "inch",
          //   "light year",
        ];
      case CONVERTER_TYPES.TEMPERATURE:
        return ["celsius", "kelvin", "fahrenheit"];
      case CONVERTER_TYPES.AREA:
        return [
          "square meter",
          "square kilometer",
          "square centimeter",
          "square millimeter",
          "square micrometer",
          "hectare",
          "square mile",
          "square yard",
          "square foot",
          "square inch",
          "acre",
        ];
      case CONVERTER_TYPES.WEIGHT:
        return [
          "kilogram",
          "gram",
          "milligram",
          "metric ton",
          "long ton",
          "short ton",
          "pound",
          "ounce",
        ];
      case CONVERTER_TYPES.VOLUME:
        return [
          "cubic meter",
          "cubic kilometer",
          "cubic centimeter",
          "cubic millimeter",
          "liter",
          "milliliter",
          "gallon",
          "quart",
          "pint",
          "cup",
          "fluid ounce",
          "table spoon",
          "tea spoon",
          "cubic mile",
          "cubic yard",
          "cubic foot",
          "cubic inch",
        ];
      default:
        return [];
    }
  };

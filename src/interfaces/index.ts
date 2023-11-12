import { Suggestion } from "use-places-autocomplete";

export interface ModelObj {
    title: string;
    subtitle: string;
    detail: string;
    footer:string;
  }


  export type InputSearchProps = {
    value :  string,
    setValue: (value: string) => void,
  }


  export type InputSuggestion = {
    suggetion: Suggestion;
  }

  export interface Prediction {
    description: string
    place_id: string
    reference: string
    structured_formatting: StructuredFormatting
    types: string[]
  }
 
  
  export interface StructuredFormatting {
    main_text: string
    secondary_text: string
  }
  

  export interface AddressComponent {
    long_name: string;
    short_name: string;
    types: string[];
  }

  export interface ResultZip {
    address_components: AddressComponent[];
    formatted_address: string;
    geometry: {
      location: {
        lat: number;
        lng: number;
      };
    };
    place_id: string;
  }
  


  
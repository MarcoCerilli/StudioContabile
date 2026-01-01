export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  role: string;
  image: {
    id: string;
    url: string;
    hint: string;
  };
}

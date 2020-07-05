const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;

export const googlemapsAPI = async () => {
  return{
    key: process.env.GOOGLE_API_KEY,
    lat: 35.487099,
    lng: 139.625780,
    defaultZoom: 15,
  };
}

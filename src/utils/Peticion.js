const API = "https://api.themoviedb.org/3";
export function get(path){
       return fetch(API + path, {
          headers: {
            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0MDJjOGI3MWVhZDcyNmE1Zjg1Y2QwOTcwMWM3Y2RmYSIsInN1YiI6IjY2MzJlMDNjZmU2YzE4MDEyNjJmMThkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nAHjEtcc-s72PFUGGqcBwlCOk4Gn1ftR4_DjWABAPXE",
            "Content-Type": "aplication/json;charset=utf-8",
          },
        }).then(result => result.json());
}
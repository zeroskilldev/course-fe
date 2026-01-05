import axios from 'axios'





export async function generateCourse(courseName: string, duration: string) {
  const response = await axios.post("http://localhost:3000/generate-course", {
    courseName: courseName,
    duration
  }, {
    headers: {
      Authorization: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2OTEwY2Y0NzQxNTVkMTkzOTkzN2ZhZjciLCJpYXQiOjE3Njc0NDg3NzF9.h6l9Ei7Kwm2N92ggOmGtSfa9V-Okgcw6MyISRVIHLZ8"
    }
  })
  return response.data
}

